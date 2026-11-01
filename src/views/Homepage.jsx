import { useContext } from "react";
import { Context } from "../context/Context";

export default function Homepage() {
  const { author } = useContext(Context);
  return (
    <>
      <div className="h-[calc(100vh-70px)] flex justify-center items-center my-gradient">
        <h1 className="text-7xl text-center text-white">{author}</h1>
      </div>
    </>
  );
}