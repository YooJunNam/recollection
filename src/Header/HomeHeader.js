import React from "react";
import styled from "styled-components";
import calendar from "../png/calendar.png";
import map from "../png/map.png";
import user from "../png/usericon.png";
import { Link } from "react-router-dom";

function HomeHeader() {
  return (
    <HomeHeaderContainer>
      <HomeHeaderItemLeft>
        <IconPaddingImg
          src={user}
          style={{ width: "30px", height: "30px" }}
        ></IconPaddingImg>
      </HomeHeaderItemLeft>
      <HomeHeaderItemMiddle>
        <HomeHeaderMiddleContent>Recollection</HomeHeaderMiddleContent>
      </HomeHeaderItemMiddle>
      <HomeHeaderItemRight>
        <Link to="/Map">
          <IconPaddingImg
            src={map}
            style={{ width: "30px", height: "30px" }}
          ></IconPaddingImg>
        </Link>
        <Link to="/Calendar">
          <IconPaddingImg
            src={calendar}
            style={{ width: "30px", height: "30px" }}
          ></IconPaddingImg>
        </Link>
      </HomeHeaderItemRight>
    </HomeHeaderContainer>
  );
}

export default HomeHeader;

const HomeHeaderContainer = styled.div`
  height: 4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: #121212;
  color: white;
`;

const HomeHeaderItemLeft = styled.div`
  padding-left: 5px;
`;
const HomeHeaderItemRight = styled.div``;

const HomeHeaderItemMiddle = styled.div`
  padding-left: 1.6rem;
  padding-bottom: 0.3rem;
  font-weight: 600;
  font-size: 24px;
`;
const HomeHeaderMiddleContent = styled.span`
  text-align: center;
  align-items: center;
  background-color: #121212;
`;

const IconPaddingImg = styled.img`
  width: 20px;
  height: 20px;
  padding: 5px;
`;
