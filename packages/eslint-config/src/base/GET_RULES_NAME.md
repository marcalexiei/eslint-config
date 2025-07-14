# Get rules name

1. Go to <https://eslint.org/docs/latest/rules>
2. Load the following script in console

   ```js
   function getRuleNames(headingSelector) {
     const heading = document.querySelector(headingSelector);
     let rule = heading.nextElementSibling.nextElementSibling;

     while (rule && rule.tagName !== 'ARTICLE') {
       rule = rule.nextElementSibling;
     }

     const ruleNames = [];

     while (rule && rule.tagName === 'ARTICLE') {
       ruleNames.push(rule.querySelector('.rule__name').textContent);
       rule = rule.nextElementSibling;
     }

     console.log(ruleNames.map((it) => `'${it}'`).join('|'));
   }
   ```

3. Invoke the function with a relevant header

   ```js
   getRuleNames('#possible-problems');
   getRuleNames('#suggestions');
   getRuleNames('#layout--formatting');
   ```

4. Update the relevant `RuleName` type with the output
