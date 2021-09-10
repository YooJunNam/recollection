import React from "react";
import styled from "styled-components";
import place from "./png/place.png";

function ContentsHistories() {
  return (
    <ContentWithDateDiv>
      <span
        style={{
          fontSize: "12px",
          color: "white",
          fontWeight: "800",
          marginLeft: "20px",
        }}
      >
        2021.09.02
      </span>

      <ContentWithDate>
        <div style={{ backgroundColor: "#121212" }}>
          <span style={{ backgroundColor: "#121212", color: "white" }}>
            content
          </span>
        </div>
        <ContentHistory>
          <span>2021.09.02</span>
          <img
            src={place}
            style={{ width: "8px", height: "8px", marginLeft: "10px" }}
          ></img>
          <span>동백호수공원</span>
        </ContentHistory>
      </ContentWithDate>
    </ContentWithDateDiv>
  );
}

export default ContentsHistories;

const ContentWithDateDiv = styled.div`
  margin-top: 20px;
  overflow: scroll;
  height: 560px;
`;

const ContentWithDate = styled.div`
  border-radius: 7px;
  background-color: #121212;
  margin: 12px;
  padding: 10px;
`;

const ContentHistory = styled.div`
  font-size: 6px;
  color: #8e8e92;
  background-color: #121212;
`;
