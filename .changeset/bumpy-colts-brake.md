---
'@marcalexiei/eslint-config': major
---

feat!: replace `eslint-plugin-react` with `eslint-plugin-react-{x,hooks-extra}`

Refines rules of react and react-hooks by using <https://eslint-react.xyz>.
Notable changes:

- enforce `React` namespace import
- configure relevant rules from core plugin (<https://eslint-react.xyz/docs/rules/overview#x-rules>)
- add more check on hooks (<https://eslint-react.xyz/docs/rules/overview#hooks-extra-rules>)
