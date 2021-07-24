import React, { useState } from 'react'
import axios from 'axios'
import '../App.css'

const SignUp = () => {
    const [fullname, setFullname] = useState('')
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submit = (e) => {
        console.log(fullname)
        e.preventDefault()
        const register = {
            fullname: fullname,
            username: username,
            email: email,
            password: password
        }
        axios.post('http://localhost:4000/app/signup', register)
            .then(res => console.log(res.data)).then(data => { alert('SignUp SuccessFully') })
    }
    return (
        <div>
            <div className="container">
                <div className="form-div">
                    <form onSubmit={submit} >
                        <input type="text" placeholder="FullName" required onChange={(e) => setFullname(e.target.value)} />
                        <br />
                        <input type="text" placeholder="Username" required onChange={(e) => setusername(e.target.value)} />
                        <br />
                        <input type="text" placeholder="Email" required onChange={(e) => setemail(e.target.value)} />
                        <br />
                        <input type="text" placeholder="Password" required onChange={(e) => setpassword(e.target.value)} />
                        <br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>

        </div>
    )
}

export default SignUp
