// should report import-x/order because there is an empty line inside groups
import fs from 'node:fs';

import path from 'node:path';

import { testShadow } from '../generic/index';

Object.keys(testShadow);
path.basename(fs.Stats.name);
