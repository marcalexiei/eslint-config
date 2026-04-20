import pluginReactX from 'eslint-plugin-react-jsx';

const ruleNames = Object.keys(pluginReactX.rules as never);
console.info(ruleNames.map((name) => `'${name}'`).join(' | '));
