import React from 'react';
import { arrayOf, string } from 'prop-types';
import Tab from './Tab';
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {
          props.tabs.map(tab => {
            return (
              <Tab
                selectTabHandler={props.selectTabHandler}
                selectedTab={props.selectedTab}
                tab={tab}
                key={tab}
              />
            );
          })
        }
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: arrayOf(string).isRequired
}

export default Tabs;
