import { createStore } from 'redux';
import rootReducer from '../reducers';
import { Parser } from 'org';

function read_orgmode(){
const parser = new Parser();

// make sure that orgCode here is a good string

let  orgCode = "* alma \
** korte \
** korte \
* alma \
** korte "

let orgDocument = parser.parse(orgCode);
let orgHTMLDocument = orgDocument.convert(org.ConverterHTML, {
  headerOffset: 1,
  exportFromLineNumber: false,
  suppressSubScriptHandling: false,
  suppressAutoLink: false
});

console.dir(orgHTMLDocument); // => { title, contentHTML, tocHTML, toc }
  console.log(orgHTMLDocument.toString()) // => Rendered HTML
  return orgDocument;
}


export default function configureStore(initialState) {
    console.log(initialState)
    console.log(read_orgmode())
  const store = createStore(
      rootReducer,
    //read_orgmode(),
    initialState,
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
