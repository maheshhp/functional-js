function countWords(inputWords) {
  // SOLUTION GOES HERE
  if (inputWords.length === 0) {
    return [];
  }
  return inputWords.reduce(function (allFruits, fruit) {
    if (fruit in allFruits) {
      allFruits[fruit]++;
    }
    else {
      allFruits[fruit] = 1;
    }
    return allFruits;
  }, {});
}

// let inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];
// let noInputWords = [];
// console.log('Return [] for zero objects : ', countWords(noInputWords).length === 0);
// console.log('Return correct count values : ', countWords(inputWords).Apple === 2 && countWords(inputWords).Durian === 3 && countWords(inputWords).Banana === 1);
module.exports = countWords;
