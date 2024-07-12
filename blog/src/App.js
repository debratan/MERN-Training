import React from "react";
import BlogPostManager from "./component/BlogPost";
import AuthButton from "./component/Authbutton";
import { AuthProvider } from "./component/AuthContext";


const App = () => {
  return (
    <AuthProvider>
      <div>
        <AuthButton />
        <BlogPostManager />
      </div>
    </AuthProvider>
  );
};

export default App;
