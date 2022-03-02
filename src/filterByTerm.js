//function we're testing (putting it in same file for simplicity)
const filterByTerm = (inputArray, filterTerm) => {
    if(!filterTerm){
        throw new Error('filter term can\'t be empty')
    }
    if(!inputArray.length){
        throw new Error('array can\'t be empty')
    }
    return inputArray.filter(linkObj => linkObj.url.includes(filterTerm.toLowerCase()))

  }

  module.exports = filterByTerm