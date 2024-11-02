export interface MyModel {
  boh: true;
}

export interface DumpDB {
  list: Array<MyModel>;
}

export type RemoteAPI = DumpDB;

export const CONSTANT_VARIABLE = 'CONSTANT_VARIABLE';
