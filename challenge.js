function sortOutNegatives(array){
    const sorted = array.filter(num => num >= 0)
    return sorted;
}

function wordGreaterThanFive(arr){
    const newArray = arr.filter(word => word.length > 5)
    return newArray;
}
console.log(wordGreaterThanFive(['apple', 'banana', 'cherry', 'date', 'elderberry']))
 
function squareNum(arr){
    const squared = arr.map(num => num * num)
    return squared;
}
console.log(squareNum([2, 4, 6, 8, 10]))

function sortAlphabetically(arr){
    return arr.sort((a,b) => a.localeCompare(b));
}
console.log(sortAlphabetically(['John', 'alice', 'Bob', 'david', 'Charlie']))

function points(games) {
    let totalPoints = 0;
    for(let game of games) {
      let [x, y] = game.split(":").map(Number)
     totalPoints+=x>y?3:1
    }return totalPoints;
  }
  console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))