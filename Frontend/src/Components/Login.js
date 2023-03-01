import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("user")
        if (auth) {
            navigate('/')
        }

    }, [])
    const handleLogin = async () => {
        let result = await fetch("http://localhost:5000/login", {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result)
        if (result.name) {
            localStorage.setItem('user', JSON.stringify(result));
            navigate("/")
        } else {
            alert("Invalid")
        }
    }

    return (
        <section className='section1'>
            <div className='form-box'>
                <form action=''>
                    <h2>Login</h2>
                    <div className='input-box'>
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="email" required
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label for=''>Email</label>
                    </div>
                    <div className='input-box'>
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" required
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                        <label for=''>Password</label>
                    </div>
                    <div className='forget'>
                        <label for=''><input type='checkbox' />Remember Me <a href='#'>Forget Password</a></label>

                    </div>
                    <button className='Inup-button' onClick={handleLogin} type="button">Login</button>
                    <div className='register-acc'>
                        <p>Don't have a account <a href='./Signup'>Register</a></p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login