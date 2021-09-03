import React from "react";
import styled from "styled-components";
import kakao from "./png/kakao_login.png";

function Login() {
  return (
    <LoginPageContainer>
      <LogoContainer>
        <LogoName>Recollection</LogoName>
      </LogoContainer>
      <KakaoLogin>
        <img src={kakao}></img>
      </KakaoLogin>
    </LoginPageContainer>
  );
}

export default Login;

const LoginPageContainer = styled.div`
  positon: absolute;
`;

const LogoContainer = styled.div`
  background: #121212;
  display: flex;
  justify-content: center;
  text-align: center;
  position: relative;
  top: 15rem;
  height: 65px;
  align-items: center;
`;

const LogoName = styled.span`
  color: white;
  font-weight: 600;
`;

const KakaoLogin = styled.div`
  position: relative;
  top: 20rem;
  display: flex;
  text-align: center;
  justify-content: center;
`;
