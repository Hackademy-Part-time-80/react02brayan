import { useContext, useState } from "react";
import Card from "../components/Card";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router";

export default function Register() {
  const { register } = useContext(UserContext);

  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userPasswordRepeat, setuserPasswordRepeat] = useState();

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.id === 'name') {
      setUserName(e.target.value);
    } else if (e.target.id === 'email') {
      setUserEmail(e.target.value);
    }
    else if (e.target.id === 'password') {
      setUserPassword(e.target.value);
    }
    else if (e.target.id === 'password_repeat') {
      setuserPasswordRepeat(e.target.value);
    }
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    if (userName, userEmail, userPassword, userPasswordRepeat) {
      if (userPassword !== userPasswordRepeat) {
        alert('le password non sono le stesse')
        return;
      }
      register({ name: userName, mail: userEmail });
    }
    navigate("/");
  }

  return (
    <>
      <div className="w-8/9 mx-auto my-0 p-2 h-[calc(100vh-70px)]">
        <div className="flex justify-center items-center h-full">
          <form action="" onSubmit={handlesubmit}>
            <Card className="p-4 w-95">
              <h2>Register</h2>
              <div className="w-full flex flex-col mb-[0.3rem]">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" className="border border-gray-400 text-[1rem] p-[0.4rem] rounded-sm" placeholder="Brayan Marino Vilchez Daga" onChange={handleChange} required />
              </div>
              <div className="w-full flex flex-col mb-[0.3rem]">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" className="border border-gray-400 text-[1rem] p-[0.4rem] rounded-sm" placeholder="email@test.com" onChange={handleChange} required />
              </div>
              <div className="w-full flex flex-col mb-[0.3rem]">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="border border-gray-400 text-[1rem] p-[0.4rem] rounded-sm" placeholder="password" onChange={handleChange} required />
              </div>
              <div className="w-full flex flex-col mb-[0.3rem]">
                <label htmlFor="password_repeat">Password repeat  </label>
                <input type="password" id="password_repeat" className="border border-gray-400 text-[1rem] p-[0.4rem] rounded-sm" placeholder="repeat password" onChange={handleChange} required />
              </div>
              <button className="bg-black text-white text-[1rem] p-[0.4rem] rounded-[10px]">Register</button>
            </Card>
          </form>
        </div>
      </div>
    </>
  );
}