import React, { useState } from 'react';

import type { MyModel } from './models';

interface TestComponentProps {
  data?: MyModel;

  itemList: Array<MyModel>;
}

export function TestComponent(props: TestComponentProps): React.JSX.Element {
  const { data } = props;

  const [myState] = useState('something');

  return (
    <>
      TestComponent {data?.boh} {myState}
    </>
  );
}
