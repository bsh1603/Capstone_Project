import NavBar from "../components/NavBar";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Header from "../components/Header";

//멤버 당 박스 안에 모든 정보가 나오는 느낌, 어려우면 표나 리스트 형식으로 표현
const mlist = [
  {
    name: "강현구",
    email: "hustlekang@naver.com",
    pwd: "1234",
    phone: "010-1111-1111",
    authentication_code: "#$@#$",
  },
  {
    name: "고정빈",
    email: "alexko96@naver.com",
    pwd: "1234",
    phone: "010-2222-2222",
    authentication_code: "!@#$@#$",
  },
];

const Member = () => {
  //멤버 별 자신이 속하는 지점의 팀원들 조회
  //axios
  //    .get("/api/member/{member_id}", mlist)

  return (
    <>
      <Header />
      <NavWrapper>
        <NavBar />
      </NavWrapper>
      <div>
        <InputWrapper>
          //반복문 사용해서 팀원 정보 조회
          <ul>
            <pre>
              <b> {mlist[0].name} </b>
              <span>
                {" "}
                <b> {mlist[0].email} </b>{" "}
              </span>
              <span>
                {" "}
                <b> {mlist[0].pwd} </b>{" "}
              </span>
              <span>
                {" "}
                <b> {mlist[0].phone} </b>{" "}
              </span>
              <span>
                {" "}
                <b> {mlist[0].authentication_code} </b>{" "}
              </span>
            </pre>
          </ul>
          <ul>
            <pre>
              <b> {mlist[1].name} </b>
              <span>
                {" "}
                <b> {mlist[1].email} </b>{" "}
              </span>
              <span>
                {" "}
                <b> {mlist[1].pwd} </b>{" "}
              </span>
              <span>
                {" "}
                <b> {mlist[1].phone} </b>{" "}
              </span>
              <span>
                {" "}
                <b> {mlist[1].authentication_code} </b>{" "}
              </span>
            </pre>
          </ul>
          //매니저만 삭제가능, 채팅방 왼쪽+팀원정보 기준 오른쪽 하단에
          위치하도록함.
          <Button variant="contained" fullWidth={true} size="small">
            팀원 정보 삭제
          </Button>
        </InputWrapper>
      </div>
    </>
  );
};

export default Member;

const InputWrapper = styled.div`
  max-width: 1000px;
  text-align: center;
  margin: 30px auto;
`;

const NavWrapper = styled.div`
  padding-top: 150px;
`;
