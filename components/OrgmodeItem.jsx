import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';
import { ListItem, IconButton, IconMenu, MenuItem } from 'material-ui';
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
        this.props.addChild('korte', this.props.item)

    }



    render(){
        const { item, children, actions} = this.props;
console.log(this.props);
        return (
            <div>
                {item.text}
                {children.map(ch =>
                 <OrgmodeItem key = {ch.id} item = {ch} addChild={this.props.addChild} children={[]} {...actions} />
                 )}
                <button onClick={this.handleAddChild.bind(this)}>
                    Add Child
                </button>

            </div>
        );
    }
}

export default OrgmodeItem;
