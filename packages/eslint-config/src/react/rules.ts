import type { Linter } from 'eslint';

import type { PluginRuleNamesRemapper } from '../_utils/plugin-rules-mapper.js';

/** @see GET_RULES_NAME.md */
type ReactXRules =
  | 'avoid-shorthand-boolean'
  | 'avoid-shorthand-fragment'
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
  | 'no-comment-textnodes'
  | 'no-complex-conditional-rendering'
  | 'no-component-will-mount'
  | 'no-component-will-receive-props'
  | 'no-component-will-update'
  | 'no-context-provider'
  | 'no-create-ref'
  | 'no-default-props'
  | 'no-direct-mutation-state'
  | 'no-duplicate-key'
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
  | 'no-unsafe-component-will-mount'
  | 'no-unsafe-component-will-receive-props'
  | 'no-unsafe-component-will-update'
  | 'no-unstable-context-value'
  | 'no-unstable-default-props'
  | 'no-unused-class-component-members'
  | 'no-unused-state'
  | 'no-use-context'
  | 'no-useless-forward-ref'
  | 'no-useless-fragment'
  | 'prefer-destructuring-assignment'
  | 'prefer-react-namespace-import'
  | 'prefer-read-only-props'
  | 'prefer-shorthand-boolean'
  | 'prefer-shorthand-fragment'
  | 'jsx-key-before-spread'
  | 'jsx-no-duplicate-props'
  | 'jsx-no-iife'
  | 'jsx-no-undef'
  | 'jsx-uses-react'
  | 'jsx-uses-vars'
  | 'ensure-forward-ref-using-ref'
  | 'no-complicated-conditional-rendering'
  | 'no-duplicate-jsx-props'
  | 'no-nested-components'
  | 'use-jsx-vars';

type ConfigRulesName = Exclude<
  ReactXRules,
  // opposite of prefer-shorthand-boolean rule
  // https://eslint-react.xyz/docs/rules/avoid-shorthand-boolean
  | 'avoid-shorthand-boolean'

  // opposite of prefer-shorthand-fragment rule
  // https://eslint-react.xyz/docs/rules/avoid-shorthand-fragment
  | 'avoid-shorthand-fragment'

  // legacy api
  // https://eslint-react.xyz/docs/rules/ensure-forward-ref-using-ref
  | 'ensure-forward-ref-using-ref'

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

  // experimental
  // https://eslint-react.xyz/docs/rules/no-complex-conditional-rendering
  | 'no-complex-conditional-rendering'

  // experimental
  // https://eslint-react.xyz/docs/rules/no-complicated-conditional-rendering
  | 'no-complicated-conditional-rendering'

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

  // typescript handles this
  // https://eslint-react.xyz/docs/rules/no-duplicate-jsx-props
  | 'no-duplicate-jsx-props'

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

  // legacy api rule
  // https://eslint-react.xyz/docs/rules/no-useless-forward-ref
  | 'no-useless-forward-ref'

  // not needed
  // https://eslint-react.xyz/docs/rules/prefer-read-only-props
  | 'prefer-read-only-props'

  // typescript handles this
  // https://eslint-react.xyz/docs/rules/use-jsx-vars
  | 'use-jsx-vars'
>;

type PluginRulesConfig = Required<
  PluginRuleNamesRemapper<'react-x', ConfigRulesName>
>;

export const REACT_RULES: Linter.RulesRecord = {
  // https://eslint-react.xyz/docs/rules/jsx-key-before-spread
  'react-x/jsx-key-before-spread': 'error',

  // https://eslint-react.xyz/docs/rules/jsx-no-iife
  'react-x/jsx-no-iife': 'error',

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

  // https://eslint-react.xyz/docs/rules/no-comment-textnodes
  'react-x/no-comment-textnodes': 'error',

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

  // https://eslint-react.xyz/docs/rules/no-nested-components
  'react-x/no-nested-components': 'error',

  // https://eslint-react.xyz/docs/rules/no-nested-lazy-component-declarations
  'react-x/no-nested-lazy-component-declarations': 'error',

  // https://eslint-react.xyz/docs/rules/no-unstable-context-value
  'react-x/no-unstable-context-value': 'error',

  // https://eslint-react.xyz/docs/rules/no-unstable-default-props
  'react-x/no-unstable-default-props': 'error',

  // https://eslint-react.xyz/docs/rules/no-use-context
  'react-x/no-use-context': 'error',

  // https://eslint-react.xyz/docs/rules/no-useless-fragment
  'react-x/no-useless-fragment': 'error',

  // https://eslint-react.xyz/docs/rules/prefer-destructuring-assignment
  'react-x/prefer-destructuring-assignment': 'error',

  // https://eslint-react.xyz/docs/rules/prefer-react-namespace-import
  'react-x/prefer-react-namespace-import': 'error',

  // https://eslint-react.xyz/docs/rules/prefer-shorthand-boolean
  'react-x/prefer-shorthand-boolean': 'error',

  // https://eslint-react.xyz/docs/rules/prefer-shorthand-fragment
  'react-x/prefer-shorthand-fragment': 'error',
} satisfies PluginRulesConfig;
