function QuestionsMarks(str) {
  // Step 1: Clean the input
  let cleanArr = str.match(/[0-9?]/g);
  // Create a "clean" array containing only numbers and question marks

  console.log(cleanArr);

  // Step 2: Find pairs that add up to 10
  let pairs = [];

  for (let i = 0; i < cleanArr.length; i++) {
    let a = parseInt(cleanArr[i]);
    for (let j = i + 1; j < cleanArr.length; j++) {
      let b = parseInt(cleanArr[j]);
      if (a + b === 10) {
        // If pair adds up to 10
        pairs.push([a, b]); // Add the pair to the array
        break;
      }
    }
  }

  console.log(pairs);

  // Step 3: Search for matches with exactly three question marks between pairs
  let matchCount = 0;

  for (let k = 0; k < pairs.length; k++) {
    let target = `${pairs[k][0]}???${pairs[k][1]}`; // Create target string with 3 question marks
    if (cleanArr.join("").indexOf(target) !== -1) {
      // If target string is found in cleanArr
      matchCount++; // Increment match count
      cleanArr.splice(cleanArr.join("").indexOf(target), 4); // Remove matched series
    }
  }

  // Step 4: Compare and return
  return pairs.length > 0 && matchCount === pairs.length ? true : false; // Return true if pairs and match count are equal
}

console.log(QuestionsMarks("acc?7??sss?3rr1??????5"));
