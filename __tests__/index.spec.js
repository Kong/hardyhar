import hardyHAR from '../src'
import example_har from './example_har.json'

// TODO: implement HTTPSnippet tests https://github.com/Kong/httpsnippet/tree/master/test

test("can transform HAR to javascript", () => {
  const snippet = new hardyHAR(example_har)

  expect(snippet).toHaveProperty('requests')

  const code = snippet.convert('javascript')

  expect(typeof (code)).toEqual('string')
  expect(code.length).toBeGreaterThan(489)
})
