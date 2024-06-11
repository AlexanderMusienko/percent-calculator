import { IBaseFields, IDifferenceInPercentage } from "../pages/percent-calc";

export const calculatePercentOfANumber = (
  values: IBaseFields,
  toFixedNum?: number
) => {
  if (values?.fullNumber && values?.percent) {
    const [fullNumber, percent] = [+values.fullNumber, +values.percent];
    const percentOfNumberResult = (fullNumber * percent) / 100;
    return +percentOfNumberResult.toFixed(toFixedNum || 0);
  } else {
    return 0;
  }
};

export const calculatePercentPlusNumber = (
  values: IBaseFields,
  toFixedNum?: number
) => {
  if (values?.percent && values?.fullNumber) {
    const [fullNumber, percent] = [+values.fullNumber, +values.percent];
    const onePercentNumber = fullNumber / 100;
    const numberOfPercent = onePercentNumber * percent;
    const percentPlusNumberResult = numberOfPercent + fullNumber;
    return +percentPlusNumberResult.toFixed(toFixedNum || 0);
  } else {
    return 0;
  }
};

export const subtractPercentFromNumber = (
  values: IBaseFields,
  toFixedNum?: number
) => {
  if (values?.percent && values?.fullNumber) {
    const [fullNumber, percent] = [+values.fullNumber, +values.percent];
    const onePercentNumber = fullNumber / 100;
    const numberOfPercent = onePercentNumber * percent;
    const subtractedNumberResult = fullNumber - numberOfPercent;
    return +subtractedNumberResult.toFixed(toFixedNum || 0);
  } else {
    return 0;
  }
};

export const calculateDifferenceInPercentage = (
  values: IDifferenceInPercentage,
  toFixedNum?: number
) => {
  if (values?.fullNumber && values.secondFullNumber) {
    const [fullNumber, secondFullNumber] = [
      +values.fullNumber,
      +values.secondFullNumber,
    ];
    const max = Math.max(fullNumber, secondFullNumber);
    const min = Math.min(fullNumber, secondFullNumber);

    const differenceInPercentage = (max / min - 1) * 100;

    return +differenceInPercentage.toFixed(toFixedNum || 0);
  } else {
    return 0;
  }
};
