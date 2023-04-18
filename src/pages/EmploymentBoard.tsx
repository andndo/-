import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function EmploymentBoard() {
  return (
    <MainDiv>
      <div
        className="header"
        style={{
          width: "100%",
          background: "red",
          height: "80px",
          position: "absolute",
        }}
      ></div>
      <MyPage>
        <h1>hello</h1>
      </MyPage>
      <Board>
        <h1>취준생 게시판</h1>
        <BoxContainer>
          <Box>
            <nav></nav>
            <h2>취업하고싶다</h2>
            <hr />
          </Box>
          <Box>
            <nav></nav>
            <h2>취업하고싶다</h2>
          </Box>
          <Box>
            <nav></nav>
            <h2>취업하고싶다</h2>
          </Box>
          <Box>
            <nav></nav>
            <h2>취업하고싶다</h2>
          </Box>
        </BoxContainer>
      </Board>
    </MainDiv>
  );
}
export default EmploymentBoard;
const MainDiv = styled.div`
  display: flex;
`;
const MyPage = styled.div`
  width: 20%;
  height: 100vh;
  background: #fff;
  h1 {
    padding-top: 50px;
    color: black;
  }
`;
const Board = styled.div`
  display: relative;
  width: 80%;
  h1 {
    padding-top: 100px;
    width: 240px;
    margin: 0 auto;
    font-weight: 800;
  }
`;
const BoxContainer = styled.div`
  padding-top: 100px;
  width: 1030px;
  display: flex;
  gap: 50px;
  margin: 0 auto;
`;
const Box = styled.div`
  width: 250px;
  background: #fff;
  height: 350px;
  position: relative;
  z-index: 0;
  border-radius: 15px;
  box-shadow: 4px 4.23px 4.46px rgba(0, 0, 0, 0.2);
  nav {
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    z-index: 1;
    margin-left: 90px;
    margin-top: -30px;
  }
  h2 {
    padding-top: 0;
    margin-top: 8px;
    padding-left: 20px;
    color: #685f5f;
  }
  hr {
    width: 70%;
    height: 4px;
    color: gray;
  }
`;
