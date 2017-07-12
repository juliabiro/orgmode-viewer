import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';
import { ListItem, IconButton, IconMenu, MenuItem } from 'material-ui';
import { Checkbox, List } from 'material-ui';
import { grey400 } from 'material-ui/styles/colors'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
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

    handleSave(item, text) {
        if (text.length === 0) {
            this.props.deleteOrgmodeItem(item);
        } else {
            this.props.editOrgmodeItem(item, text);
        }
        this.setState({ editing: false });
    }

    handleAddChild(){
        this.props.addChild('korte', this.props.item);
    }

    render(){
        const { item, actions} = this.props;
        // problem: here the childres dont come from items, that is why the text is not updated
        const children = this.props.item.children.map(ch =>
            <OrgmodeItem key = {ch.id} item = {ch} addChild={actions.addOrgmodeItem} editOrgmodeItem={actions.editOrgmodeItem} actions={actions} {...actions} />
        );

        let element ="";
        if (this.state.editing) {
            element = (
                <TodoTextInput text={item.text}
                               editing={this.state.editing}
                               onSave={(text) => this.handleSave(this.props.item, text)} />
            );

        } else{
            console.log(item)
            element=item.text;
        }
            return(
                <ListItem nestedItems={children} initiallyOpen={true} insetChildren={true} nestedLevel={this.props.item.level} >
                    {element}
                    <FloatingActionButton onClick={this.handleAddChild.bind(this)} mini={true} >
                        <ContentAdd />
                    </FloatingActionButton>
                    <FlatButton onClick={this.handleEdit.bind(this)} label="edit">
                    </FlatButton>
                </ListItem>
            );
        }
}

export default OrgmodeItem;
