
export function toNumber(value: any): number {
  const numericValue = Number(value);

  if (!isNumber(numericValue) || !value) {
    throw new Error('Can`t parse value to number');
  }

  return Number(value);
}

export function isNumber(value: any): boolean {
  return value ? !isNaN(Number(value)) : false;
}

export function toBoolean(value: any): boolean {
  return Boolean(value);
};
