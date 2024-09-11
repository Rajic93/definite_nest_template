import {
  split as _split,
  isNil as _isNil,
  parseInt as _parseInt,
} from 'lodash';

export const split = (str: string, separator: string) => _split(str, separator);
export const isNil = (value: any) => _isNil(value);
export const parseBoolean = (value: any) => !!value;
export const parseInt = (value: string) => _parseInt(value, 10);

export default { split, isNil, parseBoolean, parseInt };
