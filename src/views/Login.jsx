import Card from "../components/Card";

export default function Login() {
  return (
    <>
      <div className="container">
        <div className="container__auth">
          <Card className="p-4 w-350px">
            <h2>Login</h2>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" className="form-control" placeholder="email@test.com" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className="form-control" placeholder="password" />
            </div>
            <button className="btn">LOGIN</button>
          </Card>

        </div>
      </div>
    </>
  );
}