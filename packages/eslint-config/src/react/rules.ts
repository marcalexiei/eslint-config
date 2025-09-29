import type { Linter } from 'eslint';

import type { PluginRuleNamesRemapper } from '../_utils/plugin-rules-mapper.js';

/** @see GET_RULES_NAME.md */
type ReactXRules =
  | 'jsx-key-before-spread'
  | 'jsx-no-comment-textnodes'
  | 'jsx-no-duplicate-props'
  | 'jsx-no-iife'
  | 'jsx-no-undef'
  | 'jsx-shorthand-boolean'
  | 'jsx-shorthand-fragment'
  | 'jsx-uses-react'
  | 'jsx-uses-vars'
  | 'no-access-state-in-setstate'
  | 'no-array-index-key'
  | 'no-children-count'
  | 'no-children-for-each'
  | 'no-children-map'
  | 'no-children-only'
  | 'no-children-prop'
  | 'no-children-to-array'
  | 'no-class-component'
  | 'no-clone-element'
  | 'no-component-will-mount'
  | 'no-component-will-receive-props'
  | 'no-component-will-update'
  | 'no-context-provider'
  | 'no-create-ref'
  | 'no-default-props'
  | 'no-direct-mutation-state'
  | 'no-duplicate-key'
  | 'no-forbidden-props'
  | 'no-forward-ref'
  | 'no-implicit-key'
  | 'no-leaked-conditional-rendering'
  | 'no-missing-component-display-name'
  | 'no-missing-context-display-name'
  | 'no-missing-key'
  | 'no-misused-capture-owner-stack'
  | 'no-nested-component-definitions'
  | 'no-nested-lazy-component-declarations'
  | 'no-prop-types'
  | 'no-redundant-should-component-update'
  | 'no-set-state-in-component-did-mount'
  | 'no-set-state-in-component-did-update'
  | 'no-set-state-in-component-will-update'
  | 'no-string-refs'
  | 'no-unnecessary-key'
  | 'no-unnecessary-use-callback'
  | 'no-unnecessary-use-memo'
  | 'no-unnecessary-use-prefix'
  | 'no-unsafe-component-will-mount'
  | 'no-unsafe-component-will-receive-props'
  | 'no-unsafe-component-will-update'
  | 'no-unstable-context-value'
  | 'no-unstable-default-props'
  | 'no-unused-class-component-members'
  | 'no-unused-props'
  | 'no-unused-state'
  | 'no-use-context'
  | 'no-useless-forward-ref'
  | 'no-useless-fragment'
  | 'prefer-destructuring-assignment'
  | 'prefer-namespace-import'
  | 'prefer-read-only-props'
  | 'prefer-use-state-lazy-initialization';

type ConfigRulesName = Exclude<
  ReactXRules,
  // legacy api
  // https://eslint-react.xyz/docs/rules/no-useless-forward-ref
  | 'no-useless-forward-ref'

  // typescript handles this
  // https://eslint-react.xyz/docs/rules/jsx-no-duplicate-props
  | 'jsx-no-duplicate-props'

  // typescript handles this
  // https://eslint-react.xyz/docs/rules/jsx-no-undef
  | 'jsx-no-undef'

  // using new jsx transform
  // https://eslint-react.xyz/docs/rules/jsx-uses-react
  | 'jsx-uses-react'

  // typescript handles this
  // https://eslint-react.xyz/docs/rules/jsx-uses-vars
  | 'jsx-uses-vars'

  // class related rule
  // https://eslint-react.xyz/docs/rules/no-access-state-in-setstate
  | 'no-access-state-in-setstate'

  // class related rule
  // https://eslint-react.xyz/docs/rules/no-component-will-mount
  | 'no-component-will-mount'

  // class related rule
  // https://eslint-react.xyz/docs/rules/no-component-will-receive-props
  | 'no-component-will-receive-props'

  // class related rule
  // https://eslint-react.xyz/docs/rules/no-component-will-update
  | 'no-component-will-update'

  // legacy API rule
  // https://eslint-react.xyz/docs/rules/no-create-ref
  | 'no-create-ref'

  // legacy API rule
  // https://eslint-react.xyz/docs/rules/no-default-props
  | 'no-default-props'

  // class related rule
  // https://eslint-react.xyz/docs/rules/no-direct-mutation-state
  | 'no-direct-mutation-state'

  // user should customize this
  // https://eslint-react.xyz/docs/rules/no-forbidden-props
  | 'no-forbidden-props'

  // legacy API rule
  // https://eslint-react.xyz/docs/rules/no-forward-ref
  | 'no-forward-ref'

  // legacy API rule
  // https://eslint-react.xyz/docs/rules/no-prop-types
  | 'no-prop-types'

  // class related rule
  // https://eslint-react.xyz/docs/rules/no-redundant-should-component-update
  | 'no-redundant-should-component-update'

  // class related rule
  // https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount
  | 'no-set-state-in-component-did-mount'

  // class related rule
  // https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update
  | 'no-set-state-in-component-did-update'

  // class related rule
  // https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update
  | 'no-set-state-in-component-will-update'

  // class related rule
  // https://eslint-react.xyz/docs/rules/no-string-refs
  | 'no-string-refs'

  // class related rule
  // https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount
  | 'no-unsafe-component-will-mount'

  // class related rule
  // https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props
  | 'no-unsafe-component-will-receive-props'

  // class related rule
  // https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update
  | 'no-unsafe-component-will-update'

  // class related rule
  // https://eslint-react.xyz/docs/rules/no-unused-class-component-members
  | 'no-unused-class-component-members'

  // class related rule
  // https://eslint-react.xyz/docs/rules/no-unused-state
  | 'no-unused-state'

  // not needed
  // https://eslint-react.xyz/docs/rules/prefer-read-only-props
  | 'prefer-read-only-props'
>;

type PluginRulesConfig = Required<
  PluginRuleNamesRemapper<'react-x', ConfigRulesName>
>;

export const REACT_RULES: Linter.RulesRecord = {
  // https://eslint-react.xyz/docs/rules/jsx-key-before-spread
  'react-x/jsx-key-before-spread': 'error',

  // https://eslint-react.xyz/docs/rules/jsx-no-iife
  'react-x/jsx-no-iife': 'error',

  // https://eslint-react.xyz/docs/rules/jsx-no-comment-textnodes
  'react-x/jsx-no-comment-textnodes': 'error',

  // https://eslint-react.xyz/docs/rules/jsx-shorthand-boolean
  'react-x/jsx-shorthand-boolean': 'error',

  // https://eslint-react.xyz/docs/rules/jsx-shorthand-fragment
  'react-x/jsx-shorthand-fragment': 'error',

  // https://eslint-react.xyz/docs/rules/no-array-index-key
  'react-x/no-array-index-key': 'error',

  // https://eslint-react.xyz/docs/rules/no-children-count
  'react-x/no-children-count': 'error',

  // https://eslint-react.xyz/docs/rules/no-children-for-each
  'react-x/no-children-for-each': 'error',

  // https://eslint-react.xyz/docs/rules/no-children-map
  'react-x/no-children-map': 'error',

  // https://eslint-react.xyz/docs/rules/no-children-only
  'react-x/no-children-only': 'error',

  // https://eslint-react.xyz/docs/rules/no-children-prop
  'react-x/no-children-prop': 'error',

  // https://eslint-react.xyz/docs/rules/no-children-to-array
  'react-x/no-children-to-array': 'error',

  // https://eslint-react.xyz/docs/rules/no-class-component
  'react-x/no-class-component': 'error',

  // https://eslint-react.xyz/docs/rules/no-clone-element
  'react-x/no-clone-element': 'error',

  // https://eslint-react.xyz/docs/rules/no-context-provider
  'react-x/no-context-provider': 'error',

  // https://eslint-react.xyz/docs/rules/no-duplicate-key
  'react-x/no-duplicate-key': 'error',

  // https://eslint-react.xyz/docs/rules/no-implicit-key
  'react-x/no-implicit-key': 'error',

  // https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering
  'react-x/no-leaked-conditional-rendering': 'error',

  // https://eslint-react.xyz/docs/rules/no-misused-capture-owner-stack
  'react-x/no-misused-capture-owner-stack': 'error',

  // https://eslint-react.xyz/docs/rules/no-missing-component-display-name
  'react-x/no-missing-component-display-name': 'error',

  // https://eslint-react.xyz/docs/rules/no-missing-context-display-name
  'react-x/no-missing-context-display-name': 'error',

  // https://eslint-react.xyz/docs/rules/no-missing-key
  'react-x/no-missing-key': 'error',

  // https://eslint-react.xyz/docs/rules/no-nested-component-definitions
  'react-x/no-nested-component-definitions': 'error',

  // https://eslint-react.xyz/docs/rules/no-nested-lazy-component-declarations
  'react-x/no-nested-lazy-component-declarations': 'error',

  // // https://eslint-react.xyz/docs/rules/no-unnecessary-key
  'react-x/no-unnecessary-key': 'error',

  // // https://eslint-react.xyz/docs/rules/no-unnecessary-use-callback
  'react-x/no-unnecessary-use-callback': 'error',

  // // https://eslint-react.xyz/docs/rules/no-unnecessary-use-memo
  'react-x/no-unnecessary-use-memo': 'error',

  // // https://eslint-react.xyz/docs/rules/no-unnecessary-use-prefix
  'react-x/no-unnecessary-use-prefix': 'error',

  // https://eslint-react.xyz/docs/rules/no-unstable-context-value
  'react-x/no-unstable-context-value': 'error',

  // https://eslint-react.xyz/docs/rules/no-unstable-default-props
  'react-x/no-unstable-default-props': 'error',

  // https://eslint-react.xyz/docs/rules/no-unused-props
  'react-x/no-unused-props': 'error',

  // https://eslint-react.xyz/docs/rules/no-use-context
  'react-x/no-use-context': 'error',

  // https://eslint-react.xyz/docs/rules/no-useless-fragment
  'react-x/no-useless-fragment': 'error',

  // https://eslint-react.xyz/docs/rules/prefer-destructuring-assignment
  'react-x/prefer-destructuring-assignment': 'error',

  // https://eslint-react.xyz/docs/rules/prefer-react-namespace-import
  'react-x/prefer-namespace-import': 'error',

  // https://eslint-react.xyz/docs/rules/prefer-use-state-lazy-initialization
  'react-x/prefer-use-state-lazy-initialization': 'error',
} satisfies PluginRulesConfig;
