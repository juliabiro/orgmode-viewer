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

            let children =[]
        let top_level_items = items.filter(item => item.level === 0);

        return (
            <section className="main" style={defaultStyle}>
          <List className="todo-list">
            {top_level_items.map(item =>
                <OrgmodeItem key={item.id} item={item} addChild={actions.addOrgmodeItem} {...actions} />
            )}
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
