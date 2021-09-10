import React, { useEffect } from "react";
import styled from "styled-components";
import ContentsHistories from "./ContentsHistories";
import HomeHeader from "./Header/HomeHeader";
import MapHeader from "./Header/MapHeader";

const { kakao } = window;

const Map = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <>
      <MapHeader />
      <MapContainer>
        <MapBox id="map"></MapBox>
      </MapContainer>
      <ContentsHistories />
    </>
  );
};

export default Map;

const MapContainer = styled.div`
  text-align: center;

  max-width: 100%;
  padding: 30px;
`;

const MapBox = styled.div`
  display: inline-block;
  text-align: center;
  width: 300px;
  height: 400px;
  border: 10px solid #121212;
`;
