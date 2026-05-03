import build from '@eslint-react/kit';
import type { RuleFunction } from '@eslint-react/kit';
import { AST_NODE_TYPES } from '@typescript-eslint/utils';
import type { TSESTree } from '@typescript-eslint/utils';
import type { Linter } from 'eslint';

function jsxShorthandBoolean(): RuleFunction {
  return (context) => ({
    JSXAttribute(node: TSESTree.JSXAttribute) {
      if (
        node.value?.type === AST_NODE_TYPES.JSXExpressionContainer &&
        node.value.expression.type === AST_NODE_TYPES.Literal &&
        node.value.expression.value === true
      ) {
        context.report({
          node,
          message: 'Use shorthand syntax for boolean JSX props.',
          fix: (fixer) =>
            fixer.removeRange([node.name.range[1], node.range[1]]),
        });
      }
    },
  });
}

function jsxShorthandFragment(): RuleFunction {
  return (context) => ({
    JSXElement(node: TSESTree.JSXElement) {
      const { openingElement, closingElement } = node;
      const { name } = openingElement;

      const isFragment =
        (name.type === AST_NODE_TYPES.JSXIdentifier &&
          name.name === 'Fragment') ||
        (name.type === AST_NODE_TYPES.JSXMemberExpression &&
          name.object.type === AST_NODE_TYPES.JSXIdentifier &&
          name.object.name === 'React' &&
          name.property.type === AST_NODE_TYPES.JSXIdentifier &&
          name.property.name === 'Fragment');

      if (!isFragment || openingElement.attributes.length > 0) return;

      context.report({
        node,
        message: 'Use shorthand syntax for JSX fragments.',
        fix: (fixer) => {
          if (closingElement === null) {
            return fixer.replaceText(node, '<></>');
          }
          return [
            fixer.replaceText(openingElement, '<>'),
            fixer.replaceText(closingElement, '</>'),
          ];
        },
      });
    },
  });
}

/**
 * Enforce importing React via a namespace import.
 * @see https://www.eslint-react.xyz/docs/recipes/prefer-namespace-import
 */
export function preferNamespaceImport(): RuleFunction {
  return (context, { settings }) => {
    const { importSource } = settings;
    return {
      [`ImportDeclaration[source.value="${importSource}"] ImportDefaultSpecifier`](
        node: TSESTree.ImportDefaultSpecifier,
      ) {
        const hasOtherSpecifiers = node.parent.specifiers.length > 1;
        context.report({
          data: { importSource },
          fix(fixer) {
            const importDeclarationText = context.sourceCode.getText(
              node.parent,
            );
            const semi = importDeclarationText.endsWith(';') ? ';' : '';
            const quote = node.parent.source.raw?.[0] ?? "'";
            const isTypeImport = node.parent.importKind === 'type';
            const importStringPrefix = `import${isTypeImport ? ' type' : ''}`;
            const importSourceQuoted = `${quote}${importSource}${quote}`;
            if (!hasOtherSpecifiers) {
              return fixer.replaceText(
                node.parent,
                `${importStringPrefix} * as ${node.local.name} from ${importSourceQuoted}${semi}`,
              );
            }
            // remove the default specifier and prepend the namespace import specifier
            const specifiers = importDeclarationText.slice(
              importDeclarationText.indexOf('{'),
              importDeclarationText.indexOf('}') + 1,
            );
            return fixer.replaceText(
              node.parent,
              [
                `${importStringPrefix} * as ${node.local.name} from ${importSourceQuoted}${semi}`,
                `${importStringPrefix} ${specifiers} from ${importSourceQuoted}${semi}`,
              ].join('\n'),
            );
          },
          message: `Prefer importing React as 'import * as React from "${importSource}"'`,
          node: hasOtherSpecifiers ? node : node.parent,
        });
      },
    };
  };
}

export const CUSTOM_RULES: Linter.Config = build()
  .use(jsxShorthandBoolean)
  .use(jsxShorthandFragment)
  .use(preferNamespaceImport)
  .getConfig();
