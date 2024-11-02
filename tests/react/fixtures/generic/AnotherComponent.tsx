import React, { useCallback, useEffect, useState } from 'react';

import { TestComponent } from './TestComponent';

export function AnotherComponent(): React.JSX.Element {
  const [foo, setFoo] = useState('');

  useEffect(() => {
    foo.substring(0, 1);
  }, [foo]);

  const handleClick = useCallback(() => {
    setFoo('ciao');
  }, []);

  return (
    <>
      <button onClick={handleClick}>edit foo</button>
      <TestComponent itemList={[]} />;
    </>
  );
}
