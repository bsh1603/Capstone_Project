import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import NavBar from "../components/NavBar";
import { userState } from "../recoil/atom";

const Main = () => {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.id) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <NavBar />
      <div>메인 페이지</div>
    </>
  );
};

export default Main;
