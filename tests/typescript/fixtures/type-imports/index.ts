// below there is an error, there is an inline type import of MyModel
import { CONSTANT_VARIABLE, type MyModel } from './models';
// below there is an error, this import should be a type import
import { DumpDB } from './models2';

const instance: MyModel | DumpDB = {} as MyModel;

Object.keys(instance);

CONSTANT_VARIABLE.trim();
