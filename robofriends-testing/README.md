# Testing:

## Enzyme

It is a library that provides a set of APIs that allow you to directly manipulate and interact with React components. It focuses on giving you tools to traverse the component tree, query elements, simulate events, and inspect component state and props.

In this example:

```javascript
expect(shallow(<Card />)).toMatchSnapshot();
```

**shallow** will render the component but not the subcomponents. **Mount** will render the component in the DOM and subcomponents as well. **Reder** will render a static HTML but will use cheerio as library.

The method `toMatchSnapshot();` will create a folder with the snapshoots and will check that the component doesnt change. To update the snapshot in the test. Press `npm run test` and then `u`.

To see the coverage of the tests run `npm test -- --coverage`

# robofriends-testing

To run the project:

1. Clone this repo
2. Run `npm install`
3. Run `npm start`
4. Run tests with `npm test` -- you may have to press "a" to run all tests

HEADS UP! Depending on your version of Jest, you may find that your snapshots aren't created properly (empty). This is a known issue and may require you to do the following: https://stackoverflow.com/questions/54419342/jest-enzyme-shallowwrapper-is-empty-when-creating-snapshot. I have included the code change mentioned in the article (package.json) in this git repo to show you how to do this if you encounter the issue.

_visist https://zerotomastery.io/ for more_
