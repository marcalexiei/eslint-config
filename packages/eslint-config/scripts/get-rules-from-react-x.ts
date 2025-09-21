import pluginReactX from 'eslint-plugin-react-x';

const ruleNames = Object.keys(pluginReactX.rules);
console.info(ruleNames.map((name) => `'${name}'`).join(' | '));
