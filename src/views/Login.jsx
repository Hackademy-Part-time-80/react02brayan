import { useForm } from "react-hook-form";

export default function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const showData = (data) => console.log(data);

  return (
    <>
      <div className="w-8/9 mx-auto my-0 p-2">
        <div className="h-[calc(80vh-70px)] flex justify-center items-center">

          <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4" onSubmit={handleSubmit(showData)}>
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

            <button className="btn btn-neutral mt-4" type="submit">Login</button>
            <button className="btn btn-ghost mt-1" type="reset">Reset</button>
          </form>

        </div>
      </div >
    </>
  );
}