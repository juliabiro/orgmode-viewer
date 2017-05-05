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
        this.props.addChild('korte', this)

    }



    render(){
        const { item, children} = this.props;

        return (
            <div>
                {item.text}
                {children.map(ch =>
                 <OrgmodeItem key = {ch.key} item = {ch} parent ={this} addChild={this.props.addChild} {...actions} />
                 )}

                <button onClick={this.handleAddChild.bind(this)}>
                    Add Child
                </button>

            </div>
        );
        /* let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
                      editing={this.state.editing}
                      onSave={(text) => this.handleSave(text)} />
      );
    } else {
      element = (
        <ListItem primaryText={todo.text}
        />
      );
    }

    return (
      <div className={classnames({
          completed: todo.completed,
          editing: this.state.editing
        })}>
        {element}
      </div>
    );*/
    }
}

export default OrgmodeItem;
