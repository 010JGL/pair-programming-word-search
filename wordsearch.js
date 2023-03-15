// Check to find the word horizontally and vertically
// Return true if the word is found, and return false if the word is not found
// NOTE: You do not need to check to see if a word is written backwards or diagonally.

const transpose = function(matrix) {
    const result = [];                               // To push result out of the function
    for (let i = 0; i < matrix[0].length; i++) {     // Make sure we dont loop over the whole array. just the small one
      result.push([]);                               // Creating a new array everytime we loop, so we get the right amount of columns
      for (let j = 0; j < matrix.length; j++) {      // loop inside of small array [j]
        result[i].push(matrix[j][i]);               // push the value index in [j] to result index array we created on line 11
      }
    }
    return result;                                    // return the array result, printMatrix() lines it up for us
  };

const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = transpose(letters).map(ls => ls.join(''));    // use transpose from the last exercise,  
    
    for (l of horizontalJoin) {             // checks letters of horizontalJoin
        if (l.includes(word)) {             // if it includes word ARG, return true
            return true
        }
    }
    for (l of verticalJoin) {               // same thing here
        if (l.includes(word)) {
            return true
        }
    }
    return false
};

module.exports = wordSearch