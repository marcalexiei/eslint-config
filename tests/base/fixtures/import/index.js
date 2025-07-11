// should report import-x/order because there is an empty line inside groups
import path from 'node:path';

import fs from 'node:fs';

import { testShadow } from '../generic/index';

Object.keys(testShadow);
path.basename(fs.Stats.name);
