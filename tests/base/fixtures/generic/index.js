// should throw no-unused-var
const notUsed = true;

const str = '';
str.trim();

export function testShadow() {
  // should throw no-shadow
  const str = '';
  str.trim();
}
