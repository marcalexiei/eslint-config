import type { Linter } from 'eslint';

import type { PluginRuleNamesRemapper } from '../_utils/plugin-rules-mapper.js';

/** @see GET_RULES_NAME.md */
type PluginRuleNames =
  | 'component-hook-factories'
  | 'error-boundaries'
  | 'exhaustive-deps'
  | 'immutability'
  | 'no-access-state-in-setstate'
  | 'no-array-index-key'
  | 'no-children-count'
  | 'no-children-for-each'
  | 'no-children-map'
  | 'no-children-only'
  | 'no-children-to-array'
  | 'no-class-component'
  | 'no-clone-element'
  | 'no-component-will-mount'
  | 'no-component-will-receive-props'
  | 'no-component-will-update'
  | 'no-context-provider'
  | 'no-create-ref'
  | 'no-direct-mutation-state'
  | 'no-duplicate-key'
  | 'no-forward-ref'
  | 'no-implicit-children'
  | 'no-implicit-key'
  | 'no-implicit-ref'
  | 'no-leaked-conditional-rendering'
  | 'no-missing-component-display-name'
  | 'no-missing-context-display-name'
  | 'no-missing-key'
  | 'no-misused-capture-owner-stack'
  | 'no-nested-component-definitions'
  | 'no-nested-lazy-component-declarations'
  | 'no-redundant-should-component-update'
  | 'no-set-state-in-component-did-mount'
  | 'no-set-state-in-component-did-update'
  | 'no-set-state-in-component-will-update'
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
  | 'prefer-destructuring-assignment'
  | 'prefer-namespace-import'
  | 'purity'
  | 'refs'
  | 'rules-of-hooks'
  | 'set-state-in-effect'
  | 'set-state-in-render'
  | 'unsupported-syntax'
  | 'use-memo'
  | 'use-state';

type ConfigRulesName = Exclude<
  PluginRuleNames,
  // experimentalPluginRuleNames,
  // https://eslint-react.xyz/docs/rules/no-implicit-children
  | 'no-implicit-children'

  // experimental
  // https://eslint-react.xyz/docs/rules/no-implicit-ref
  | 'no-implicit-ref'

  // experimental
  // https://eslint-react.xyz/docs/rules/purity
  | 'purity'

  // legacy api
  // https://eslint-react.xyz/docs/rules/no-forward-ref
  | 'no-forward-ref'

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
  // https://eslint-react.xyz/docs/rules/immutability
  | 'immutability'
>;

type PluginRulesConfig = Required<
  PluginRuleNamesRemapper<'react-x', ConfigRulesName>
>;

export const REACT_RULES: Linter.RulesRecord = {
  // https://eslint-react.xyz/docs/rules/exhaustive-deps
  'react-x/exhaustive-deps': 'error',

  // https://eslint-react.xyz/docs/rules/rules-of-hooks
  'react-x/rules-of-hooks': 'error',

  // https://eslint-react.xyz/docs/rules/component-hook-factories
  'react-x/component-hook-factories': 'error',

  // https://eslint-react.xyz/docs/rules/unsupported-syntax
  'react-x/unsupported-syntax': 'error',

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

  // https://eslint-react.xyz/docs/rules/no-unnecessary-use-callback
  'react-x/no-unnecessary-use-callback': 'error',

  // https://eslint-react.xyz/docs/rules/no-unnecessary-use-memo
  'react-x/no-unnecessary-use-memo': 'error',

  // https://eslint-react.xyz/docs/rules/no-unnecessary-use-prefix
  'react-x/no-unnecessary-use-prefix': 'error',

  // https://eslint-react.xyz/docs/rules/no-unstable-context-value
  'react-x/no-unstable-context-value': 'error',

  // https://eslint-react.xyz/docs/rules/no-unstable-default-props
  'react-x/no-unstable-default-props': 'error',

  // https://eslint-react.xyz/docs/rules/no-unused-props
  'react-x/no-unused-props': 'error',

  // https://eslint-react.xyz/docs/rules/no-use-context
  'react-x/no-use-context': 'error',

  // https://eslint-react.xyz/docs/rules/prefer-destructuring-assignment
  'react-x/prefer-destructuring-assignment': 'error',

  // https://eslint-react.xyz/docs/rules/prefer-react-namespace-import
  'react-x/prefer-namespace-import': 'error',

  // https://eslint-react.xyz/docs/rules/use-state
  'react-x/use-state': [
    'error',
    {
      enforceAssignment: true,
      enforceSetterName: true,
      enforceLazyInitialization: true,
    },
  ],

  // https://eslint-react.xyz/docs/rules/error-boundaries
  'react-x/error-boundaries': 'error',

  // https://eslint-react.xyz/docs/rules/refs
  'react-x/refs': 'error',

  // https://eslint-react.xyz/docs/rules/set-state-in-effect
  'react-x/set-state-in-effect': 'error',

  // https://eslint-react.xyz/docs/rules/set-state-in-render
  'react-x/set-state-in-render': 'error',

  // https://eslint-react.xyz/docs/rules/use-memo
  'react-x/use-memo': 'error',
} satisfies PluginRulesConfig;
