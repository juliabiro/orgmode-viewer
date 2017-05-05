import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as ItemActions from '../actions/items';

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../src/material_ui_raw_theme_file'

class App extends Component {
  render() {
    const { items, actions } = this.props;
    return (
      <div>
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <Header addOrgmodeItem={actions.addOrgmodeItem}/>
            <MainSection items={items} actions={actions}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  items: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ItemActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
