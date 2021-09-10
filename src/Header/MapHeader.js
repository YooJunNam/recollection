import React from "react";
import styled from "styled-components";
import map from "../png/map.png";
import { Link, withRouter } from "react-router-dom";
import arrow from "../png/left-arrow.png";
import pencil from "../png/pencil.png";
import calendar from "../png/calendar.png";

function MapHeader({ history }) {
  return (
    <MapHeaderContainer>
      <MapHeaderItemLeft>
        <IconPaddingImg
          src={arrow}
          style={{ width: "30px", height: "30px" }}
          onClick={() => {
            history.goBack();
          }}
        ></IconPaddingImg>
      </MapHeaderItemLeft>
      <MapHeaderItemMiddle>
        <MapHeaderMiddleContent>{}</MapHeaderMiddleContent>
      </MapHeaderItemMiddle>
      <HomeHeaderItemRight>
        <Link to="/Location">
          <IconPaddingImg
            src={calendar}
            style={{ width: "30px", height: "30px" }}
          ></IconPaddingImg>
        </Link>

        <IconPaddingImg
          src={pencil}
          style={{ width: "30px", height: "30px" }}
        ></IconPaddingImg>
      </HomeHeaderItemRight>
    </MapHeaderContainer>
  );
}

export default withRouter(MapHeader);

const MapHeaderContainer = styled.div`
  height: 4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: #121212;
  color: white;
`;

const MapHeaderItemLeft = styled.div`
  padding-left: 5px;
`;
const HomeHeaderItemRight = styled.div``;

const MapHeaderItemMiddle = styled.div`
  padding-left: 1.6rem;
  padding-bottom: 0.3rem;
  font-weight: 600;
  font-size: 24px;
`;
const MapHeaderMiddleContent = styled.span`
  text-align: center;
  align-items: center;
  background-color: #121212;
`;

const IconPaddingImg = styled.img`
  width: 20px;
  height: 20px;
  padding: 5px;
`;
