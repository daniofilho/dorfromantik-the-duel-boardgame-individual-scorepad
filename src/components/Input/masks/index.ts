const getOnlyNumber = (text: string): string => text.replace(/\D/g, "");

const masks = {
  numbers: (val: string): string => getOnlyNumber(val),
};

export default masks;
