import React, { useState, useInput } from 'react';

function Forms() {
  // const [formData, setFormData] = useState({
  //   username: '',
  //   password: ''
  // });
  const [userName,bindUserName,resetUserName] = useInput(" ");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
   // setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, like submitting to a server
    // console.log(formData);
  };

  return (
    // <form onSubmit={handleSubmit}> 
      <label>
        Username:
        <input
          type="text"
          name="username"
        {...bindUserName}
          onChange={handleInputChange}
        />
      </label>
     /* { <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>} */
  );
}

export default Forms;
