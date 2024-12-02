function dontGiveMeFive(start, end)
{
//getting the start and end number
let count = 0;
  for(i = start; i <= end; i++){
if(!String(i).includes(5)){
    count = count + 1;
}

  }
  console.log(count)
}

console.log(dontGiveMeFive(4,17))

