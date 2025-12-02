// should report import-x/order because there is an empty line inside groups
import fs from 'node:fs';

import path from 'node:path';

import { MyEnumWithFunnyThings } from '../generic/misc';

Object.keys(MyEnumWithFunnyThings);
path.basename(fs.Stats.name);
