import Card from "../components/Card";

export default function Login() {
  return (
    <>
      <div className="w-8/9 mx-auto my-0 p-2">
        <div className="h-[calc(80vh-70px)] flex justify-center items-center">
          <Card className="p-4 w-78">
            <h2>Login</h2>
            <div className="w-full flex flex-col mb-[0.3rem]">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" className="form-control" placeholder="email@test.com" />
            </div>
            <div className="w-full flex flex-col mb-[0.3rem]">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className="form-control" placeholder="password" />
            </div>
            <button className="bg-black text-white text-[1rem] p-[0.4rem] rounded-[10px]">LOGIN</button>
          </Card>

        </div>
      </div >
    </>
  );
}