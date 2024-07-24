import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Send POST request with the filename
        const response = await axios.post('http://192.168.0.10/js2/index.php/load', {
          filename: 'user_data'
        });
        alert('Log In successfully');
      } catch (err) {
        setError('An error occurred. Please try again later.');
        console.error(err);
      }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="col-md-3 border-none p-3 mb-5 bg-info bg-opacity-10 rounded shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-3 ">
            <input
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control bg-info bg-opacity-10 border-info rounded-pill"
              id="exampleFormControlInput1"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control bg-info bg-opacity-10 border-info rounded-pill"
              id="inputPassword2"
              placeholder="Password "
            />
          </div>
          {error && <div className="text-danger">{error}</div>}
          <button type="submit" className="btn btn-info text-light position-relative rounded-pill" style={{ width: '50.5vh'}}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;