import React,{ useState }from 'react'

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the form data, like submitting to a server
        console.log(formData);
      };
  return (
    <form > 
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </label>
      <br />
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
      <button type="submit" onClick={handleSubmit} color='green'>Submit</button>
    </form>
  )
}

export default Login;