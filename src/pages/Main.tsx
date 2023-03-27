import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Main.css";

function Main() {
  return (
    <>
      <Container>
        <h1>취업 지원 게시판</h1>
        <City_wrapper>
          <Wrapper>
            <Home1>
              <div className="house-wrapper">
                <div className="house1">
                  <div className="house1-roof"></div>
                  <div className="window-wrap">
                    <div className="house1-window"></div>
                    <div className="house1-window"></div>
                    <div className="house1-window"></div>
                    <div className="house1-window"></div>
                  </div>
                  <div className="house1-center">
                    <div className="house1-center-roof"></div>
                    <div className="window-wrap">
                      <div className="house1-window window-center"></div>
                      <div className="house1-center-door"></div>
                    </div>
                  </div>
                </div>
              </div>
              <MainNav>
                <ul>
                  <li>
                    <a className="signin" href="#0">
                      로그인
                    </a>
                  </li>
                  <li>
                    <a className="signup" href="#0">
                      회원가입
                    </a>
                  </li>
                </ul>
              </MainNav>
            </Home1>
            <Home2>
              <div className="tree-wrapper">
                <div className="tree">
                  <div className="base"></div>
                </div>
              </div>
              <div className="building-wrapper">
                <div className="building building1">
                  <div className="window-wrap">
                    <div className="building-window"></div>
                    <div className="building-window"></div>
                    <div className="building-window"></div>
                    <div className="building-window"></div>
                    <div className="building-window"></div>
                    <div className="building-window"></div>
                    <div className="building-door"></div>
                  </div>
                </div>
              </div>
              <div className="building-wrapper">
                <div className="building building2">
                  <div className="window-wrap">
                    <div className="building-window"></div>
                    <div className="building-window"></div>
                    <div className="building-window"></div>
                    <div className="building-window"></div>
                    <div className="building-window"></div>
                    <div className="building-window"></div>
                    <div className="building-door"></div>
                  </div>
                </div>
              </div>
            </Home2>
            <div className="tree-wrapper">
              <div className="tree">
                <div className="base"></div>
              </div>
            </div>
            <Home3>
              <div className="building-wrapper">
                <div className="building building2 building3">
                  <div className="window-wrap">
                    <div className="building-window"></div>
                    <div className="building-window"></div>
                    <div className="building-window"></div>
                    <div className="building-window"></div>
                    <div className="building-window"></div>
                    <div className="building-window"></div>
                    <div className="building-door"></div>
                  </div>
                </div>
              </div>
              <div className="house-wrapper">
                <div className="house1 house1a">
                  <div className="house1-roof"></div>
                  <div className="window-wrap">
                    <div className="house1-window"></div>
                    <div className="house1-window"></div>
                    <div className="house1-window"></div>
                    <div className="house1-window"></div>
                  </div>
                  <div className="house1-center">
                    <div className="house1-center-roof"></div>
                    <div className="window-wrap">
                      <div className="house1-window window-center"></div>
                      <div className="house1-center-door"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Home3>
          </Wrapper>
        </City_wrapper>
      </Container>
    </>
  );
}
const Home1 = styled.div`
  position: relative;
  top: 160px;
`;
const Home2 = styled.div`
  position: relative;
`;
const Home3 = styled.div`
  margin-left: 10px;
  position: relative;
`;
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  text-align: center;
`;
/* CITY */

const City_wrapper = styled.div`
  margin: 30px auto;
  width: 1300px;
`;

const Wrapper = styled.div`
  padding: 30px 15px;
  text-align: left;
  position: relative;
  display: flex;
  margin-left: 60px;
  margin-top: 300px;
`;

const MainNav = styled.nav`
  width: 90%;
  max-width: 240px;
  margin: 0 auto;
  height: 100%;
  margin-left: 4px;
  cursor: pointer;
  ul {
    position: absolute;
    width: 100%;
    top: 40%;
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      float: left;
      a {
        background: #bbdaff;
        border: 2px solid #fff;
        &:hover {
          background: #fff;
          color: #bbdaff;
        }
      }
    }
  }
  a {
    display: block;
    height: 50px;
    margin: 10px;
    padding: 2px 25px;
    text-decoration: none;
    border-radius: 30px;
    line-height: 45px;
    color: #fff;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
  }
`;

/*.main-nav li:nth-child(2) a {
  background: #9e2c2c;
  border: 2px solid #9e2c2c;
}
.main-nav li:nth-child(2) a:hover {
  background: #b13131;
  border: 2px solid #b13131;
}*/

export default Main;
