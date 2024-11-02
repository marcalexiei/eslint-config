import React, { useEffect, useMemo } from 'react';

interface HookComponentProps {
  boh?: string;
}

export function HookComponent(props: HookComponentProps): JSX.Element {
  const { boh } = props;

  useEffect(() => {
    boh.trim();
  }, []);

  if (!boh) {
    return <>react-hooks</>;
  }

  const data = useMemo(() => boh.trim(), []);

  return <>Something: {data}</>;
}
