/**
 * @jest-environment node
 */

import { MemoryStorage } from '../../../src/core/storage';
import { createStorageTests } from './tests';

describe(
	'memory storage',
	createStorageTests(() => new MemoryStorage())
);
