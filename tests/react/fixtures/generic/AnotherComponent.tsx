import * as React from 'react';

import { TestComponent } from './TestComponent';

export function AnotherComponent(): React.JSX.Element {
  const [foo, setFoo] = React.useState('');

  React.useEffect(() => {
    foo.substring(0, 1);
  }, [foo]);

  const handleClick = React.useCallback(() => {
    setFoo('ciao');
  }, []);

  return (
    <>
      <span>{foo}</span>
      <button onClick={handleClick}>edit foo</button>
      <TestComponent itemList={[]} />
    </>
  );
}
