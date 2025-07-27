import * as React from 'react';

interface HookComponentProps {
  boh?: string;
}

export function HookComponent(props: HookComponentProps): React.JSX.Element {
  const { boh } = props;

  React.useEffect(() => {
    boh?.trim();
  }, []);

  if (!boh) {
    return <>react-hooks</>;
  }

  const data = React.useMemo(() => boh.trim(), []);

  return <>Something: {data}</>;
}
