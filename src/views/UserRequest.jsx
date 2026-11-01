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
      <div className="w-8/9 mx-auto my-0  p-2">
        <h2 className="text-3xl font-bold mb-2">Async Users List</h2>
        <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/users')} className="bg-black text-white text-[1rem] p-2 rounded-xl me-1.5">Mostrare Users</button>
        <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos')} className="bg-black text-white text-[1rem] p-2 rounded-xl me-1.5">Mostrare TODO</button>
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