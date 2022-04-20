import { CreateSubArray } from "./helpersTypes";

export const createSubArray: CreateSubArray = (arr, arrSize) => {
  const subArr = [];
  for (let i = 0; i < Math.ceil(arr.length / arrSize); i++) {
    subArr[i] = arr.slice(i * arrSize, i * arrSize + arrSize);
  }
  return subArr;
};
