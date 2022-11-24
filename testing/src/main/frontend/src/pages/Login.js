import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, emailChange, setEmail] = useInput("");
  const [pwd, pwdChange, setPwd] = useInput("");

  const handleLogin = () => {
    const loginData = { member_email: email, member_pwd: pwd };

    axios
      .post("/api/login", loginData)
      .then(function (response) {
        // 응답 처리하기
        console.log(response);
        setEmail("");
        setPwd("");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <LoginWrapper>
      <Wrapper>
        <TextField
          id="outlined-basic"
          label="이메일"
          variant="outlined"
          fullWidth={true}
          value={email}
          onChange={emailChange}
        />
      </Wrapper>

      <Wrapper>
        <TextField
          id="outlined-password-input"
          label="비밀번호"
          type="password"
          autoComplete="current-password"
          fullWidth={true}
          value={pwd}
          onChange={pwdChange}
        />
      </Wrapper>

      <Wrapper>
        <Button
          variant="contained"
          fullWidth={true}
          size="large"
          onClick={handleLogin}
        >
          로그인
        </Button>
      </Wrapper>

      <Wrapper>
        <BtnWrapper>
          <Button
            variant="outlined"
            fullWidth={true}
            size="large"
            onClick={() => navigate("/registermanager")}
          >
            매니저 회원가입
          </Button>
        </BtnWrapper>
        <BtnWrapper>
          <Button
            variant="outlined"
            fullWidth={true}
            size="large"
            onClick={() => navigate("/registerworker")}
          >
            알바생 회원가입
          </Button>
        </BtnWrapper>
      </Wrapper>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div``;
const Wrapper = styled.div`
  max-width: 500px;
  text-align: center;
  margin: 30px auto;
`;

const BtnWrapper = styled.div`
  margin-top: 20px;
`;

export default Login;
