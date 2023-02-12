import React from "react";
import useAxios from "./customHooks/useAxios";

function Posts() {
  const { response, error, loading } = useAxios({
    method: "get",
    url: "posts",
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error!</h1>;
  }

  if (response) {
    return <div>Posts</div>;
  }
}

export default Posts;
