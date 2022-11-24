import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import axios from "axios";

const RegisterWorker = () => {
  const validatePhone = (phone) =>
    /010-\d{3,4}-\d{4}/.test(phone) ? true : false;

  const validatePwd = (pwd2) => (pwd2 === pwd ? true : false);

  const validateEmail = (email) =>
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
      email
    )
      ? true
      : false;

  const [email, emailChange, setEmail, emailValid] = useInput(
    "",
    validateEmail
  );
  const [name, nameChange, setName] = useInput("");
  const [pwd, pwdChange, setPwd] = useInput("");
  const [pwd2, pwd2Change, setPwd2, pwdValid] = useInput("", validatePwd);
  const [phone, phoneChange, setPhone, phoneValid] = useInput(
    "",
    validatePhone
  );
  const [code, codeChange, setCode] = useInput("");

  const handleRegister = () => {
    const userData = {
      member_email: email,
      member_name: name,
      member_pwd: pwd,
      member_phone: phone,
      authentication_code: code,
    };

    axios
      .post("/api/signup/manager", userData)
      .then(function (response) {
        // 응답 처리하기
        console.log(response);
        setEmail("");
        setName("");
        setPwd("");
        setPhone("");
        setCode("");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <LoginWrapper>
      <InputWrapper>
        <TextField
          error={!emailValid}
          helperText={emailValid ? "" : "올바른 이메일을 형식을 입력하세요"}
          id="outlined-basic"
          label="이메일"
          variant="outlined"
          fullWidth={true}
          value={email}
          onChange={emailChange}
        />
      </InputWrapper>
      <InputWrapper>
        <TextField
          id="outlined-basic"
          label="이름"
          variant="outlined"
          fullWidth={true}
          value={name}
          onChange={nameChange}
        />
      </InputWrapper>

      <InputWrapper>
        <TextField
          id="outlined-password-input"
          label="비밀번호"
          type="password"
          autoComplete="current-password"
          fullWidth={true}
          value={pwd}
          onChange={pwdChange}
        />
      </InputWrapper>
      <InputWrapper>
        <TextField
          error={!pwdValid}
          helperText={pwdValid ? "" : "비밀번호가 일치하지 않습니다"}
          id="outlined-password-input"
          label="비밀번호 확인"
          type="password"
          autoComplete="current-password"
          fullWidth={true}
          value={pwd2}
          onChange={pwd2Change}
        />
      </InputWrapper>

      <InputWrapper>
        <TextField
          error={!phoneValid}
          helperText={
            phoneValid
              ? ""
              : "올바른 휴대폰 번호를 입력하세요 ex) 010-1234-5678"
          }
          id="outlined-basic"
          label="휴대폰 번호"
          variant="outlined"
          fullWidth={true}
          value={phone}
          onChange={phoneChange}
        />
      </InputWrapper>

      <InputWrapper>
        <TextField
          id="outlined-basic"
          label="인증코드"
          variant="outlined"
          fullWidth={true}
          value={code}
          onChange={codeChange}
        />
      </InputWrapper>

      <InputWrapper>
        <Button
          variant="contained"
          fullWidth={true}
          size="large"
          onClick={handleRegister}
        >
          회원가입
        </Button>
      </InputWrapper>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div``;
const InputWrapper = styled.div`
  max-width: 500px;
  text-align: center;
  margin: 30px auto;
`;

const BtnWrapper = styled.div`
  margin-top: 20px;
`;

export default RegisterWorker;
