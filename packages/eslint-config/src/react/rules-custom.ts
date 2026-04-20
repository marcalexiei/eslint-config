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

export const CUSTOM_RULES: Linter.Config = build()
  .use(jsxShorthandBoolean)
  .use(jsxShorthandFragment)
  .getConfig();
