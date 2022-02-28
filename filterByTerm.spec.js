//function we're testing (putting it in same file for simplicity)
const filterByTerm = (inputArray, filterTerm) => {
  if(filterTerm){
    return inputArray.filter(linkObj => linkObj.url.includes(filterTerm.toLowerCase()))
  }
}
/* describe = Jest function, contains 1+ related tests
2 args - string description, function callback wrapping the actual test
*/
describe('filter by term function (link)',() => {
  test('this should filter by search term (url)', () => {
    /* create single object(array) for test inputs, and an output object */
    const testInputs = [
      {id: 1, url: 'https://www.aurl5768.com'},
      {id: 2, url: 'www.test157.net'},
      {id: 3, url: 'http://www.mylink.dev'}
    ]
    const testOutput1 = [{id: 3, url: 'http://www.mylink.dev'}]
    const testOutput2 = [{id: 1, url: 'https://www.aurl5768.com'}]
    //func usage: filterByTerm(input: Array, term: string)
    //test using inputs and output above:
    expect(filterByTerm(testInputs, 'link')).toEqual(testOutput1)
    expect(filterByTerm(testInputs, 'UrL')).toEqual(testOutput2)
    expect(filterByTerm(testInputs, '')).toEqual(undefined)
    expect(filterByTerm(testInputs, 'LINK')).toEqual(testOutput1)
  })
})
