import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import calendar from "./png/calendar.png";
import map from "./png/map.png";
import user from "./png/usericon.png";
import confirm from "./png/confirm.png";
import landscape from "./png/landscape.png";
import place from "./png/place.png";
import trash from "./png/trash.png";

function Home() {
  const [url, setUrl] = useState([]);
  const onChange = (e) => {
    const images = e.target.files;
    console.log(images);

    const imageKeys = Object.keys(images);
    const value = [];
    for (let i = 0; i < imageKeys.length; i++) {
      const key = imageKeys[i];

      console.log(value);
      console.log(key);
      let imgUrl = URL.createObjectURL(images[key]);
      value.push(imgUrl);
    }
    console.log(value);
    setUrl(value);
  };
  return (
    <div className="Home">
      <HomeHeaderContainer>
        <HomeHeaderItemLeft>
          <IconPaddingImg src={user} style={{}}></IconPaddingImg>
        </HomeHeaderItemLeft>
        <HomeHeaderItemMiddle>
          <HomeHeaderMiddleContent>Recollection</HomeHeaderMiddleContent>
        </HomeHeaderItemMiddle>
        <HomeHeaderItemRight>
          <IconPaddingImg src={map}></IconPaddingImg>
          <IconPaddingImg src={calendar}></IconPaddingImg>
        </HomeHeaderItemRight>
      </HomeHeaderContainer>
      <DiaryCotainer>
        <DiaryContent>
          <DiaryTextArea placeholder="오늘의 기억을 적어주세요"></DiaryTextArea>
        </DiaryContent>
        <DiaryContentBtnBox>
          <DiaryContentBtn>
            <IconPaddingImg
              src={confirm}
              style={{ backgroundColor: "#5b6168" }}
            ></IconPaddingImg>
          </DiaryContentBtn>
        </DiaryContentBtnBox>
      </DiaryCotainer>
      {url.map((image) => {
        return (
          <PreviewImg>
            <img
              src={image}
              style={{ color: "white", width: "55px", height: "55px" }}
            ></img>
          </PreviewImg>
        );
      })}

      <DiaryOptionBox>
        <DiaryOption>
          <label htmlFor="image-upload">
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={onChange}
              multiple
              style={{ display: "none" }}
            />
            <IconPaddingImg src={landscape}></IconPaddingImg>
          </label>

          <IconPaddingImg src={place}></IconPaddingImg>
          <IconPaddingImg src={trash}></IconPaddingImg>
        </DiaryOption>
        <Date>
          <span>{moment().format("YYYY.MM.DD")}</span>
        </Date>
      </DiaryOptionBox>

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
    </div>
  );
}

export default Home;

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

const DiaryCotainer = styled.div`
  display: flex;
  margin-top: 1rem;
  height: 10rem;
`;

const PreviewImg = styled.div`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  display: inline-block;
`;

const DiaryContent = styled.div`
  flex: 3;
`;
const DiaryTextArea = styled.textarea`
  padding: 0 6px;
  width: 100%;
  height: 100%;
  border: none;
  background-color: black;
  color: white;
`;
const DiaryContentBtnBox = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const DiaryContentBtn = styled.button`
  border: none;
  border-radius: 6px;
  background-color: #5b6168;
  width: 48px;
  height: 48px;
`;

const DiaryOptionBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #121212;
  margin-top: 15px;
`;

const DiaryOption = styled.div``;
const Date = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  color: white;
`;

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
