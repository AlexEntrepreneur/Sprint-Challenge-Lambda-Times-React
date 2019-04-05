import React from 'react';

const Tab = props => {
  const isTabSelected = () => {
    if (props.selectedTab === props.tab) {
      return 'active-tab';
    }
    return null;
  }

  return (
    <div
      className={`tab ${isTabSelected()}`}
      onClick={() => {
        props.selectTabHandler(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
