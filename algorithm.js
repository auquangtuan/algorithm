function miniMaxSum(arr) {
  let min = arr[0];
  let max = arr[0];
  let evend = [];
  let odd = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] % 2 === 0) {
      evend.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
    sum += arr[i];
  }
  const resuilt = `${sum - max} ${sum - min},
  {
    "Total of array ": ${sum},
    "min in array": ${min},
    "max in array": ${max},
    "even elements in array": ${evend},
    "odd elements in array": ${odd},
  }`;
  return resuilt;
}
console.log(miniMaxSum([1, 3, 5, 7, 9]));
