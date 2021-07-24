import React, { useState } from 'react'
import axios from 'axios'
import '../App.css'

const Login = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const submit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/app/login', { email: email, password: password })
            .then(res => {
                console.log(res.data)
                if (res.data.t) {
                    alert('login SuccessFully')
                } else if (res.data.error) {
                    alert('User Not Found')
                }
                else {
                    alert('Please Provide the correct information')
                }
            })
            .catch(err => {
                alert('Error')
            })
    }

    return (
        <>
            <div className="container">
                <div className="form-div">
                    <form onSubmit={submit} >
                        <input type="text" placeholder="Email" required onChange={(e) => setemail(e.target.value)} />
                        <br />
                        <input type="text" placeholder="Password" required onChange={(e) => setpassword(e.target.value)} />
                        <br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login
