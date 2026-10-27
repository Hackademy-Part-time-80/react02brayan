import Card from "../components/Card";

export default function Register() {
  return (
    <>
      <div className="container">
        <div className="container__auth">
          <Card className="p-4 w-350px">
            <h2>Register</h2>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" className="form-control" placeholder="Brayan Marino Vilchez Daga" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" className="form-control" placeholder="email@test.com" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className="form-control" placeholder="password" />
            </div>
            <div className="form-group">
              <label htmlFor="password_repeat">Password repeat  </label>
              <input type="password" id="password_repeat" className="form-control" placeholder="repeat password" />
            </div>
            <button className="btn">Register</button>
          </Card>
        </div>
      </div>
    </>
  );
}