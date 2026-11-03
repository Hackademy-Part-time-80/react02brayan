import { useForm } from "react-hook-form";
import Card from "../components/Card";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router";
export default function Register() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { sign_in } = useContext(UserContext);
  const navigate = useNavigate();

  const [myError, setMyError] = useState(false);

  const registerUSer = (data) => {
    const { password } = data;
    const { password_confirm } = data;
    if (password === password_confirm) {
      setMyError(false)
      sign_in(data);
      navigate('/');
    } else {
      setMyError(true);
    }
  };


  return (
    <>
      <div className="w-8/9 mx-auto my-0 p-2 h-[calc(100vh-70px)]">
        <div className="flex justify-center items-center h-full">

          <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4" onSubmit={handleSubmit(registerUSer)}>
            <fieldset className="fieldset">
              <label className="label">Username</label>
              <input type="text" className="input" placeholder="username"
                {...register('username',
                  {
                    required: 'Username required',
                    maxLength: {
                      value: 50,
                      message: 'Maximun 50 characters'
                    }
                  })} />
              {errors.username && <p className="text-red-500">{errors.username.message}</p>}

            </fieldset>

            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email"
                {...register('email',
                  {
                    required: 'Email required',
                    maxLength: {
                      value: 50,
                      message: 'Maximun 50 characters'
                    }
                  })} />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            </fieldset>

            <label className="fieldset">
              <span className="label">Password</span>
              <input type="password" className="input" placeholder="Password"
                {...register('password',
                  {
                    required: 'Password required',
                    maxLength: {
                      value: 50,
                      message: 'Maximun 50 characters'
                    }
                  })} />
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </label>

            <label className="fieldset">
              <span className="label">Confirm Password</span>
              <input type="password" className="input" placeholder="Password"
                {...register('password_confirm',
                  {
                    required: 'Password required',
                    maxLength: {
                      value: 50,
                      message: 'Maximun 50 characters'
                    }
                  })} />
              {errors.password_confirm && <p className="text-red-500">{errors.password_confirm.message}</p>}
            </label>

            {myError &&
              <p className="validator text-red-500">
                The passwords do not match.
              </p>
            }
            <button className="btn btn-neutral mt-4" type="submit">Register</button>
            <button className="btn btn-ghost mt-1" type="reset">Reset</button>
          </form>


        </div>
      </div >
    </>
  );
}