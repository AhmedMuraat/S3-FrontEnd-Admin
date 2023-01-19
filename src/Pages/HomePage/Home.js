//import PostService from "../../services/post.service";
import React from "react";

export function Home() {
console.log(localStorage.getItem("Token"));
  return (
    <div data-testid="HomeTest">
      <h1 className="text-center">Welcome admin</h1>
    </div>
  );
}

export default Home;
