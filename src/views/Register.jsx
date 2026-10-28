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
      <div className="container">
        <div className="container__auth">
          <form action="" onSubmit={handlesubmit}>
            <Card className="p-4 w-350px">
              <h2>Register</h2>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" className="form-control" placeholder="Brayan Marino Vilchez Daga" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" className="form-control" placeholder="email@test.com" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="form-control" placeholder="password" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="password_repeat">Password repeat  </label>
                <input type="password" id="password_repeat" className="form-control" placeholder="repeat password" onChange={handleChange} required />
              </div>
              <button className="btn">Register</button>
            </Card>
          </form>
        </div>
      </div>
    </>
  );
}