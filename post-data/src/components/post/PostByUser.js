import React, { useEffect } from "react";

const PostByUser = ({ obj }) => {
  console.log(obj);
  useEffect(() => {}, []);
  const handleCLick = () => {
    const item = localStorage.getItem("auth");

    console.log(item);
  };
  return (
    <div>
      <h1>post by {obj.owner.firstName}</h1>
      <button onClick={handleCLick}>click</button>
    </div>
  );
};

export default PostByUser;
