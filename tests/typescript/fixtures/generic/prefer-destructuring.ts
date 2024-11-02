/** testing @typescript-eslint/prefer-destructuring */
{
  const array = [1, 2, 3];

  /** array declaration */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [myNumberDeclared] = array;

  /** array assignment */
  let myNumber: number | undefined;
  // eslint-disable-next-line prefer-const,@typescript-eslint/no-unused-vars
  myNumber = array[0];
}

{
  /** object declaration */
  const obj = { what: false };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { what } = obj;
}
{
  /** object assignment */
  const obj = { what: false };

  let what: boolean;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,prefer-const
  what = obj.what;
}
