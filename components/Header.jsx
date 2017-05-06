import React, { PropTypes, Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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
                <FloatingActionButton secondary={true} style={defaultStyle} onClick={this.addOrgmodeItem.bind(this)}>
                <ContentAdd />
                </FloatingActionButton>
            </header>
        );
    }
}

Header.propTypes = {
    addOrgmodeItem: PropTypes.func.isRequired
};

export default Header;
