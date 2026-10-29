import { useState } from "react";
import useFetch from "../hooks/useFetch";

export default function UserRequest() {

  const [url, setUrl] = useState();
  const data = useFetch(url, url);
  // const [trigger, setTrigger] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [isVisible, setIsVisible] = useState(false);

  // const getData = async () => {
  //   const url = 'https://jsonplaceholder.typicode.com/users';
  //   const promise = await fetch(url);
  //   const json = await promise.json();
  //   setUsers(json);
  // }

  // useEffect(() => {
  //   if (trigger) {
  //     setTimeout(() => {
  //       getData();
  //       setLoading(false);
  //     }, 2000);
  //   }
  // }, [trigger])

  // const handleClick = () => {
  //   if (isVisible) {
  //     setUsers(null);
  //     setTrigger(false);
  //     setIsVisible(false);
  //   } else {
  //     setUrl('https://jsonplaceholder.typicode.com/users');
  //     setIsVisible(true);
  //     setTrigger(true);
  //     setLoading(true);
  //   }

  // }


  return (
    <>
      <div className="container">
        <h2>Async Users List</h2>
        <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/users')}>Mostrare Users</button>
        <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos')}>Mostrare TODO</button>
        {/* {loading && <p>Caricando...</p>} */}
        <ul>
          {
            // isVisible 
            data && data.map((element) => {
              return (
                <li>{element.name || element.title}</li>
              )
            })
          }

        </ul>
      </div>

    </>
  );
}