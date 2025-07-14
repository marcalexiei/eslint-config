import type { MyModel } from './models';

export function pippo(): number {
  return 1;
}

const asd: MyModel = { boh: true };

console.info(asd.boh);

export enum MyEnumWithFunnyThings {
  THANOS = 'good',
  AVENGERS = 'bad',
}
