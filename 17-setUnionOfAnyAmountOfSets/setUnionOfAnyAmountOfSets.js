function setUnionOfAnyAmountOfSets(...args) {
  const union = new Set();
  args.forEach(element => {
    element.forEach(x => {
      union.add(x);
    })
  })
  return union;
}
// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;