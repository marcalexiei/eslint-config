# Get rules name

> [!NOTE]
> Since v1.52.7 (<https://github.com/Rel1cx/eslint-react/releases/tag/v1.52.7>),
> the plugin exports its rules object without 'as const', making it impossible to
> infer rule names statically at compile time.
> Therefore, we need to manually maintain the rule list below.

1. Run

   ```sh
   node './packages/eslint-config/scripts/get-rules-from-react-x.ts'
   ```

2. Update the relevant `ReactXRules` type in `rule.ts` file with the relevant output
