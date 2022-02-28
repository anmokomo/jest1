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
    const testOutput = [{id: 3, url: 'http://mylink.dev'}]

    //func usage: filterByTerm(input: Array, term: string)
    //test using inputs and output above:
    expect(filterByTerm(testInputs, 'link')).toEqual(testOutput)
  })
})
