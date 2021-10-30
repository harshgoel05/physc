import BottomLeft from "../../assets/1.png";
import TopRight from "../../assets/2.png";
import Logo from "../../assets/logo.png";
import Illustration from "../../assets/login_illustration.png";
export default function Login() {
  return (
    <div className="bg-lightpurple min-h-screen w-screen relative">
      <img src={Logo} alt="" className="absolute top-10 left-10 w-32 " />
      <img src={BottomLeft} alt="" className="absolute bottom-0 left-0 -z-10" />
      <img src={TopRight} alt="" className="absolute top-0 right-0 -z-10" />

      <div className="flex h-screen">
        <div className="w-1/2">Hello</div>
        <div className="w-1/2 flex justify-center items-center">
          <img src={Illustration} alt="" className="3/5" />
        </div>
      </div>
    </div>
  );
}
