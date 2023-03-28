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
                    <Link to="/login">로그인</Link>
                  </li>
                  <li>
                    <Link to="/signUp">회원가입</Link>
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
              <MainNav>
                <ul>
                  <li>
                    <Link to="/employment">취준생 게시판</Link>
                  </li>
                </ul>
              </MainNav>
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
              <MainNav>
                <ul>
                  <li>
                    <Link to="/workerBoard">재직자 게시판</Link>
                  </li>
                </ul>
              </MainNav>
            </Home3>
          </Wrapper>
        </City_wrapper>
      </Container>
    </>
  );
}
const MainNav = styled.nav`
  width: 90%;
  max-width: 240px;
  margin: 0 auto;
  height: 100%;
  margin-left: 4px;
  cursor: pointer;
  ul {
    z-index: -1;
    position: absolute;
    width: 100%;
    top: 300px;
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
  }
`;
const Home1 = styled.div`
  position: relative;
  z-index: 10;
  &:hover{
    nav{
      position:absolute;
      margin-top: -700px;
      li{
        position: relative;
      }
    }
  }
  nav{
    -webkit-transition: all 0.3s ease-in-out;
  }
`;
const Home2 = styled.div`
  position: relative;
  &:hover {
    nav {
      position: absolute;
      margin-top: -700px;
    }
  }
  nav{
    -webkit-transition: all 0.3s ease-in-out;
  }
`;
const Home3 = styled.div`
  margin-left: 10px;
  position: relative;
  &:hover {
    nav {
      position: absolute;
      margin-top: -700px;
    }
  }
  nav{
    -webkit-transition: all 0.3s ease-in-out;
  }
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

/*.main-nav li:nth-child(2) a {
  background: #9e2c2c;
  border: 2px solid #9e2c2c;
}
.main-nav li:nth-child(2) a:hover {
  background: #b13131;
  border: 2px solid #b13131;
}*/

export default Main;
