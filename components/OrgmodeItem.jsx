import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';
import { ListItem, IconButton, IconMenu, MenuItem } from 'material-ui';
import { Checkbox, List } from 'material-ui';
import { grey400 } from 'material-ui/styles/colors'


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

        return (
            <ListItem>
            {item.text}
            <button onClick={this.handleAddChild.bind(this)}>
                Add Child
            </button>
          <List className="todo-list">
                {this.props.item.children.map(ch =>
                    <OrgmodeItem key = {ch.id} item = {ch} addChild={this.props.addChild} {...actions} />
                 )}
          </List>
            </ListItem>
        );
    }
}

export default OrgmodeItem;
