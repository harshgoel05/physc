import logo from '../../../assets/logo.png';
import ProfileImg from '../../../assets/profile.png';
import { MdAddBox } from 'react-icons/md';
import { BiCategory, BiLogOut } from 'react-icons/bi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { useStateValue } from '../../../store/stateProvider';
import { useHistory } from 'react-router';

export default function Navbar() {
  const [{ Doctor }, dispatch] = useStateValue();
  console.log(Doctor);

  const history = useHistory();
  return (
    <div className="h-screen w-4/12 pt-8 pl-8 pr-10 flex-col content-end bg-purple100">
      <img src={logo} alt="logo" className="mb-12 h-10" />
      <div>
        <div
          className="flex cursor-pointer rounded-2xl bg-lightpurple text-darkpurple justify-start items-center gap-3 p-5 py-4 mb-8"
          onClick={() => history.push('/post')}
        >
          <MdAddBox className="text-3xl" />
          <p className="font-sans text-sm font-medium">Create new post</p>
        </div>
        <div
          className="flex cursor-pointer text-darkpurple gap-4 items-center mb-8 pl-6"
          onClick={() => history.push('/dashboard')}
        >
          <BiCategory className="text-2xl" />
          <p className="font-sans text-sm  font-medium"> Dashboard</p>
        </div>

        <div className="flex cursor-pointer text-textmain gap-4 items-center mb-8 pl-6">
          <HiOutlineUserGroup className="text-2xl" />
          <p className="font-sans text-sm  font-medium"> Community</p>
        </div>

        <div
          className="flex cursor-pointer text-textmain gap-4 items-center mb-8 pl-6"
          onClick={() => history.push('/')}
        >
          <BiLogOut className="text-2xl" />
          <p className="font-sans text-sm  font-medium"> Sign Out </p>
        </div>
      </div>

      <div className="flex gap-2 absolute bottom-10">
        <div bg-faintpurple className="rounded-full ">
          <img alt="profile img" src={ProfileImg} />
        </div>
        <div>
          <p className=" font-sans font-medium">{Doctor?.name}</p>
          <p className=" font-sans text-base text-textmain">
            {Doctor?.department}
          </p>
        </div>
      </div>
    </div>
  );
}
