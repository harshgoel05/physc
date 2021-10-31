import BottomLeft from '../../assets/1.png';
import TopRight from '../../assets/2.png';
import Logo from '../../assets/logo.png';
import Illustration from '../../assets/login_illustration.png';
import Input from '../../shared/components/InputBox/input';
import { useState } from 'react';
import { Loader } from '../../shared/components/Button/button';
import { loginUser } from '../../shared/api';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import logo from '../../assets/logo.png';
import blur from '../../assets/blur.png';
import card from '../../assets/card.png';

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
      const res = await loginUser({
        email: data.email.toLowerCase(),
        password: data.password,
      });
      console.log(res);
      localStorage.setItem('token', res.token);
      history.push('/dashboard');
    } catch (err: any) {
      console.log(err);
      toast.error(err.response.data.error || err.response.data);
    }
    setIsLoading(false);
  };
  return (
    <>
      {/* <div className="bg-lightpurple min-h-screen w-screen relative">
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
      </div> */}

      <div>
        <img src={logo} className=" h-8 fixed top-8 left-8" alt="" />
        <div className="flex p-4 h-screen overflow-hidden">
          <div className="w-full flex items-center justify-center">
            <div className="w-5/12 -ml-8">
              <p className=" text-2xl font-bold">Login</p>
              <div className="w-full mt-10">
                <input
                  placeholder="Email"
                  type="email"
                  value={data.email}
                  onChange={(e: any) =>
                    setData({ ...data, email: e?.target?.value })
                  }
                  className="outline-none border-b p-2 w-full"
                />
                <input
                  placeholder="Password"
                  value={data.password}
                  onChange={(e: any) =>
                    setData({ ...data, password: e?.target?.value })
                  }
                  className="outline-none border-b p-2 w-full mt-8"
                  type="password"
                />
                <p
                  onClick={onSubmit}
                  className="bg-darkpurple w-full text-white rounded-lg mt-12 text-center py-3 cursor-pointer"
                >
                  {isLoading ? <Loader /> : 'Sign in'}
                </p>
                <p className="text-gray-500 mt-8">
                  First time here?{' '}
                  <span
                    className="text-darkpurple cursor-pointer"
                    onClick={() => history.push('/register')}
                  >
                    Register Now
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="h-full w-2/4 bg-blue-50 flex items-center rounded-r-xl relative">
            <img
              src={blur}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              alt=""
            />
            <img
              src={card}
              className="rounded-xl w-full transform -translate-x-36"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
