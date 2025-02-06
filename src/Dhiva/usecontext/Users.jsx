import React, { useContext } from "react";
import { Themecontext } from "./Main";

const Users = () => {
  const { theme } = useContext(Themecontext); // Make sure ThemeContext is provided

  const themeStyles = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
    color: theme === 'light' ? '#000000' : '#ffffff',
  };

  return (
    <div style={themeStyles}>
      <h1>User Component</h1>
    </div>
  );
};

export default Users;
