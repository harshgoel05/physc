import BottomLeft from "../../assets/1.png";
import TopRight from "../../assets/2.png";
import Logo from "../../assets/logo.png";
import Illustration from "../../assets/login_illustration.png";
import Input from "../../shared/components/InputBox/input";
import { useState } from "react";
import Button from "../../shared/components/Button/button";
export default function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const onSubmit = async () => {
    console.log(data);
  };
  return (
    <div className="bg-lightpurple min-h-screen w-screen relative">
      <img src={Logo} alt="" className="absolute top-10 left-10 w-32 " />
      <img src={BottomLeft} alt="" className="absolute bottom-0 left-0 -z-10" />
      <img src={TopRight} alt="" className="absolute top-0 right-0 -z-10" />

      <div className="flex h-screen">
        <div className="w-1/2 flex flex-col justify-center items-center gap-8">
          <Input
            value={data.username}
            data={data}
            setValue={(e: any) =>
              setData({ ...data, username: e?.target?.value })
            }
          />
          <Input
            value={data.password}
            data={data}
            setValue={(e: any) =>
              setData({ ...data, password: e?.target?.value })
            }
          />
          <Button title="Submit" onClick={onSubmit} />
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img src={Illustration} alt="" className="3/5" />
        </div>
      </div>
    </div>
  );
}
