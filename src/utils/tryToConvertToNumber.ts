// eslint-disable-next-line @typescript-eslint/no-explicit-any
const tryToConvertToNumber = (value: any): number => {
  try {
    const number = Number(value);

    if (Number.isNaN(number)) return 0;

    return number;
  } catch (_) {
    return 0;
  }
};

export default tryToConvertToNumber;
