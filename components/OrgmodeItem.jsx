import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';
import { ListItem, IconButton, IconMenu, MenuItem } from 'material-ui';
import { Checkbox, List } from 'material-ui';
import { grey400 } from 'material-ui/styles/colors'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


class OrgmodeItem extends Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            editing: false
        }
    }
    handleEdit () {
        this.setState({ editing: true });
    }

    handleSave(id, text) {
        if (text.length === 0) {
            this.props.deleteOrgmodeItem(id);
        } else {
            this.props.editOrgmodeItem(id, text);
        }
        this.setState({ editing: false });
    }

    handleAddChild(){
        this.props.addChild('korte', this.props.item);
    }

    render(){
        const { item, actions} = this.props;

        const children = this.props.item.children.map(ch =>
            <OrgmodeItem key = {ch.id} item = {ch} addChild={this.props.addChild} {...actions} />
        );
return(
    <ListItem nestedItems={children} initiallyOpen={true} insetChildren={true} nestedLevel={this.props.item.level} >
        {item.text}
            <FloatingActionButton onClick={this.handleAddChild.bind(this)} mini={true} >
                <ContentAdd />
            </FloatingActionButton>
    </ListItem>
);
    }
}

export default OrgmodeItem;
