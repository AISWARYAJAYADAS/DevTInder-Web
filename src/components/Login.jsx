import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(email, password);
    }

  return (

    <div className="flex justify-center items-center mt-10">
        <div className="card bg-base-300 text-primary-content w-96">
  <div className="card-body">
    <h2 className="card-title flex justify-center">Login</h2>

    <fieldset className="fieldset">
    <legend className="fieldset-legend">Email Id</legend>
    <input type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
    </fieldset>

<fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <input type="text" className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
</fieldset>

    <div className="card-actions flex justify-center mt-5">
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
    </div>

  )
}

export default Login