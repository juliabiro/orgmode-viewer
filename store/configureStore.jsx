import { createStore } from 'redux';
import rootReducer from '../reducers';


function read_orgmode(){
  const org = require("org");
  const orgParser = new Org.Parser();

    // make sure that orgCode here is a good string

    let orgCode="";

    const RNFS = require('react-native-fs')
    RNFS.readFile('./orgmode-example.org', 'utf8')
        .then((contents) => {
            console.warn(contents)
            orgCode=contents;
        })

    let orgDocument = orgParser.parse(orgCode);
    let orgHTMLDocument = orgDocument.convert(org.ConverterHTML, {
        headerOffset: 1,
        exportFromLineNumber: false,
        suppressSubScriptHandling: false,
        suppressAutoLink: false
    });

    //console.dir(orgHTMLDocument); // => { title, contentHTML, tocHTML, toc }
    console.log(orgHTMLDocument.toString()); // => Rendered HTML
    console.log(orgDocument);
    return orgDocument;
}

export default function configureStore(initialState) {
    console.log(initialState)
  const store = createStore(
      rootReducer,
    read_orgmode(),
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
