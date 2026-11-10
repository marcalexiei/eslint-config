// `.js` specifiers resolving to `.ts` files must not be reported
import { VALUE } from './value.js';

export { VALUE as ALIASED_VALUE } from './value.js';

VALUE.trim();
