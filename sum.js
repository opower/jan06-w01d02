const args = process.argv;
let values = args.slice(2);

const sum = arr => {

  let sum = 0;
  for(let i in arr){
    if (Number.isInteger(Number(arr[i])) === true){
      sum += Number(arr[i]);
    }
  }

  console.log(sum);

}

sum(values);