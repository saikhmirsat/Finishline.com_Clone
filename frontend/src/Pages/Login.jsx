import React from 'react'
import { useState } from 'react'

export default function Register() {

    const [firstname, setFname] = useState("")
    const [lastname, setLname] = useState("")
    const [dob, setDob] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const handlesubmit = () => {
        const payload = {
            firstname,
            lastname,
            dob,
            email,
            password
        }
        console.log(payload)

        

        try {
            fetch(`https://dull-puce-hedgehog-ring.cyclic.app/users/register`, {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-type": "application/json"
                }
            }).then((res) => res.json())
                .then((res) => console.log(res))
        } catch (err) {
            console.log(err)
        }


    }

    return (
        <div>
            <h1>Register</h1>
            <input type="text" placeholder='f name' value={firstname} onChange={(e) => setFname(e.target.value)} />
            <input type="text" placeholder='l name' value={lastname} onChange={(e) => setLname(e.target.value)} />
            <input type="text" placeholder='dob' value={dob} onChange={(e) => setDob(e.target.value)} />
            <input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='pass' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handlesubmit}>Register</button>
        </div>

    )
}
