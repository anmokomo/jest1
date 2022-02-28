const filterByTerm = (inputArray, filterTerm) => {
    return inputArray.filter(linkObj => linkObj.url.includes(filterTerm))
}
const testInput = [
    {id: 1, url: 'https://www.aurl5768.com'},
    {id: 2, url: 'www.test157.net'},
    {id: 3, url: 'http://www.mylink.dev'}
  ]
const test = filterByTerm(testInput, 'link')
console.log('test', test)