import React from 'react';
import styled from 'styled-components';

const StyledTopBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const TopBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const TopBarContentLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;

  span {
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
  }
`;

const TopBarContentCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;

  span {
    cursor: pointer;
    margin-right: 5%;

    &:hover {
      text-decoration: underline;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

const TopBarContentRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;

  span {
    cursor: pointer;
  }
`;

const TopBar = () => {
  return (
    <StyledTopBar>
      <TopBarContainer>
        <TopBarContentLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </TopBarContentLeft>
        <TopBarContentCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </TopBarContentCenter>
        <TopBarContentRight>
          <span>LOG IN</span>
        </TopBarContentRight>
      </TopBarContainer>
    </StyledTopBar>
  )
}

export default TopBar;
