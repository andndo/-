import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

function SignUpPage() {
  const personalData: string[] = ["닉네임", "아이디", "비밀번호"];
  const inputType: string[] = ["text","text", "password"];

  const personalDataList = personalData.map((list, index) => (
    <InputDiv>
      <p>{list}</p>
      <input type={inputType[index]} placeholder={list + "를 입력해주세요"} />
    </InputDiv>
  ));
  return (
    <>
      <PageBackground>
        <MainDiv>
          <SubDiv>
            <SignUpDiv>
              <h2>SIGN UP</h2>
              <hr />
              <InputContainer>
                {personalDataList}
                <SelectDiv>
                  <InputDiv>
                    <p>비밀번호 확인</p>
                    <input type="text" placeholder="비밀번호를 입력해주세요" />
                  </InputDiv>
                  <p>직업</p>
                  <select>
                    <option>학생</option>
                    <option>취준생</option>
                    <option>재직자</option>
                    <option>기타</option>
                  </select>
                </SelectDiv>
              </InputContainer>
              <Link to="/login">로그인으로 이동</Link>
              <LoginBtn>
                <button>회원가입</button>
              </LoginBtn>
            </SignUpDiv>
            <ImgDiv>
              <img src="" alt="" />
            </ImgDiv>
          </SubDiv>
        </MainDiv>
      </PageBackground>
    </>
  );
}
const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 480px;
    height: 303.77px;
  }
`;
const SelectDiv = styled.div`
  padding-top: 10px;
  p {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
  select {
    width: 320px;
    height: 42px;
    text-indent: 15px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    border-radius: 5px;
    border: 1px solid #9e9e9e;
  }
`;
const LoginBtn = styled.div`
  padding-top: 20px;
  button {
    width: 320px;
    height: 42px;
    background-color: #242424;
    color: #fff;
    border-radius: 5px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
  }
`;
const InputContainer = styled.div`
  padding-bottom: 20px;
`;
const InputDiv = styled.div`
  padding-top: 10px;

  p {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
  input {
    width: 320px;
    height: 42px;
    text-indent: 15px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    border-radius: 5px;
    border: 1px solid #9e9e9e;
  }
`;
const PageBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #bbdaff;
`;
const MainDiv = styled.div`
  height: 100%;
  width: 77vw;
  background-color: #fff;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubDiv = styled.div`
  display: flex;
  gap: 29vw;
  margin-left: 250px;
`;
const SignUpDiv = styled.div`
  width: 320px;
  text-align: left;
  h2 {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
  }
  hr {
    width: 67px;
    height: 2px;
    background-color: #fed267;
    border: 0;
  }
  a {
    color: #fed267;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    padding-bottom: 20px;
  }
`;
export default SignUpPage;
