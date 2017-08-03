import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Provider } from 'react-redux';

import App from '../containers/App';
import configureStore from '../store/configureStore';

//Needed for React Developer Tools
window.React = React;

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

function initilaize(responseText){
    const store = configureStore(responseText);

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("root")
    );
}

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = (function() {
    if (this.readyState === 4 && this.status === 200) {
        initilaize(this.responseText);
    }
});
    xhttp.open("GET", "https://s3-eu-west-1.amazonaws.com/juli-react/orgmode-example.org", true);
    xhttp.send();
