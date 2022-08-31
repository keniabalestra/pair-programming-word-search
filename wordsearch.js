const wordSearch = (letters, word) => {
  //checks for horizontal words
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word))
      return true;
  }
  //checks for vertical words
  const verticalJoin = [];
  for (let i = 0; i < letters[0].length; i++) {
    let column = "";
    for (let j = 0; j < letters.length; j++) {
      column += letters[j][i];
    }
    verticalJoin.push(column);
  }
  for (l of verticalJoin) {
    if (l.includes(word))
      return true;
  }
  //returns false if no words present
  return false;
};

module.exports = wordSearch;