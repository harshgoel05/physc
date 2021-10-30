import BottomLeft from '../../assets/1.png';
import TopRight from '../../assets/2.png';
import Logo from '../../assets/logo.png';
import Illustration from '../../assets/login_illustration.png';
import Input from '../../shared/components/InputBox/input';
import { useState } from 'react';
import Button from '../../shared/components/Button/button';
import { loginUser } from '../../shared/api';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
export default function Login() {
  let history = useHistory();

  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const res = await loginUser(data);
      console.log(res);
      localStorage.setItem('token', res.token);
      history.push('/dashboard');
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
    }
    setIsLoading(false);
  };
  return (
    <>
      <div className="bg-lightpurple min-h-screen w-screen relative">
        <img src={Logo} alt="" className="absolute top-10 left-10 w-32 " />
        <img
          src={BottomLeft}
          alt=""
          className="absolute bottom-0 left-0 -z-10"
        />
        <img src={TopRight} alt="" className="absolute top-0 right-0 -z-10" />

        <div className="flex h-screen">
          <div className="w-1/2 flex flex-col justify-center items-center gap-8">
            <Input
              value={data.email}
              setValue={(e: any) =>
                setData({ ...data, email: e?.target?.value })
              }
              placeholder="Email"
            />
            <Input
              value={data.password}
              setValue={(e: any) =>
                setData({ ...data, password: e?.target?.value })
              }
              placeholder="Password"
              type="password"
            />
            <Button title="Submit" onClick={onSubmit} isLoading={isLoading} />
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <img src={Illustration} alt="" className="3/5" />
          </div>
        </div>
      </div>
    </>
  );
}
