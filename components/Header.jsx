import React, { PropTypes, Component } from 'react';

import AppBar from 'material-ui/AppBar';

const defaultStyle = {
  marginLeft: 20
};

class Header extends Component {

    addOrgmodeItem(){
this.props.addOrgmodeItem('alma', null);
    }

  render() {
    return (
      <header className="header">
          <AppBar title="React + Redux + Material UI Boilerplate" />
          <h1 style={defaultStyle} >Orgmode Items</h1>
            <button onClick={this.addOrgmodeItem.bind(this)}>
                Add
            </button>
      </header>
    );
  }
}

Header.propTypes = {
  addOrgmodeItem: PropTypes.func.isRequired
};

export default Header;
