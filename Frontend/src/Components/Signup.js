import React, { useEffect, useState } from 'react'
import { json, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user")
    if (auth) {
      navigate('/')
    }
  }, [])

  const collectData = async () => {

    if (!name || !email || !password) {
      setError(true)
      return false
    }

    console.warn(name, email, password)
    let result = await fetch("http://localhost:5000/register", {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result))
    navigate('/')
  }

  return (
    <section className='section1'>
      <div className='form-box'>
        <form action=''>
          <h2>Sign Up</h2>
          <div className='input-box'>
            <ion-icon name="person-outline"></ion-icon>
            <input type="text" required
              value={name} onChange={(e) => setName(e.target.value)} />
            {error && !name && <span className='invalid-input'>Enter Valid Name</span>}
            <label for=''>Name</label>
          </div>
          <div className='input-box'>
            <ion-icon name="mail-outline"></ion-icon>
            <input type="email" required
              value={email} onChange={(e) => setEmail(e.target.value)} />
            {error && !email && <span className='invalid-input'>Enter Valid Email</span>}
            <label for=''>Email</label>
          </div>
          <div className='input-box'>
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input type="password" required
              value={password} onChange={(e) => setPassword(e.target.value)} />
            {error && !password && <span className='invalid-input'>Enter Password</span>}
            <label for=''>Password</label>
          </div>
          <button className='Inup-button' onClick={collectData}>Sign Up</button>
          <div className='register-acc'>
            <p>Already have a account <a href='./Login'>Login</a></p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Signup