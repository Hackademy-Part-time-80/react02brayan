import { useEffect, useState } from "react";

export default function UserRequest() {
  const [users, setUsers] = useState();
  const [trigger, setTrigger] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const getData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const promise = await fetch(url);
    const json = await promise.json();
    setUsers(json);
  }

  useEffect(() => {
    if (trigger) {
      setTimeout(() => {
        getData();
        setLoading(false);
      }, 2000);
    }
  }, [trigger])

  const handleClick = () => {
    if (isVisible) {
      setUsers(null);
      setTrigger(false);
      setIsVisible(false);
    } else {
      setIsVisible(true);
      setTrigger(true);
      setLoading(true);
    }

  }

  return (
    <>
      <div className="container">
        <h2>Async Users List</h2>
        <button onClick={handleClick}>Mostrare Users</button>
        {loading && <p>Caricando...</p>}
        <ul>
          {isVisible && users && users.map((user) => {
            return (
              <li key={user.id}> Nome: {user.name} - Email: {user.email}</li>
            )
          })}

        </ul>
      </div>

    </>
  );
}