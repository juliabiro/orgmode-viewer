import { createStore } from 'redux';
import rootReducer from '../reducers';


function read_orgmode(orgCode){
    const org = require("org");
    const orgParser = new org.Parser();

    let orgDocument = orgParser.parse(orgCode);
    return orgDocument;
}

function get_state_from_orgDocument(orgDocument){
    console.log(orgDocument.nodes);
    // problem: this structure has html in it. not just tree info
    let state = {"items":[]};
    return state;
}

export default function configureStore(responseText) {
    let state = get_state_from_orgDocument( read_orgmode(responseText));
    console.log(state);
    const store = createStore(
        rootReducer,
        //read_orgmode(),
        //initialState,
        state,
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
