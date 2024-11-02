export interface MyModel {
  boh: true;
}

export interface DumpDB {
  list: Array<MyModel>;
}

export type API = DumpDB;
