import React, { Component, PropTypes } from 'react';
import OrgmodeItem from './OrgmodeItem'
import Footer from './Footer';
import { Checkbox, List } from 'material-ui';

const defaultStyle = {
  width: 300,
  marginLeft: 20
};


class MainSection extends Component {
  constructor(props, context) {
    super(props, context);
  }


    render() {
        const { items, actions } = this.props;
        //TODO: get list of children here
 //       for (let i=0; i<items.length; i++){
            //console.log("item id ", items[i].id)
            //console.log("item parent ", items[i].parent)
            //if (items[i].parent){
//console.log("parent id ", items[i].parent.id)
            //}
   //     }


            let children =[]
        let top_level_items = items.filter(item => item.parent==null);

        let displayable_items=[];

        for (let i=0; i<top_level_items.length; i++){
            let it= top_level_items[i];
            let children = items.filter(item => item.parent? item.parent.id === it.id:false );
            displayable_items.push({item: it, children: children});
        }

        return (
      <section className="main" style={defaultStyle}>
            {displayable_items.map(ditem =>
                <OrgmodeItem key={ditem.item.id} item={ditem.item} children={ditem.children} addChild={actions.addOrgmodeItem} {...actions} />
            )}
          <List className="todo-list">
          </List>
      </section>
    );
  }
}

MainSection.propTypes = {
  items: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default MainSection;
