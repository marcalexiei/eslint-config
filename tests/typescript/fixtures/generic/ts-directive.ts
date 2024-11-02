{
  // @ts-expect-error I know this is an error
  const suppressError: number = 'asd';
  // eslint-disable-next-line no-console
  console.info(suppressError);
}
