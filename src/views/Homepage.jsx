import { useContext } from "react";
import { Context } from "../context/Context";

export default function Homepage() {
  const { author } = useContext(Context);
  return (
    <>
      <div className="hero my-gradient">
        <h1>{author}</h1>
      </div>
    </>
  );
}