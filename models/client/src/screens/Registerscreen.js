import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from '../components/Loader';
import Error from "../components/Error";
import Success from "../components/Success";


function Registerscreen() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')

    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();
    const [success, setsucess] = useState();

    async function register() {
        if (password === cpassword) {
            const user = {
                name,
                email,
                password,
                cpassword
            };
            
            try {
            setloading(true);
            const result = await axios.post('/api/users/register' , user).data
            setloading(false);
            setsucess(true);
            
            setname('');
            setemail('');
            setpassword('');
            setcpassword('');

            } catch (error) {
            console.log(error);
            setloading(false);
            seterror(true);
            }

        }
        else {
            alert('Password does not match')
        }
    }
    return (
        <div>
          {loading && (<Loader/>)}
          {error && (<Error/>)}
          {success && (<Success message='User has beeen successfully registered'/>)}

            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5">
                    <div className='bs'>
                        <h2>Register</h2>
                        <input type="text" className="form-control" placeholder="name"
                            value={name} onChange={(e) => (setname(e.target.value))} />
                        <input type="text" className="form-control" placeholder="email"
                            value={email} onChange={(e) => (setemail(e.target.value))} />
                        <input type="text" className="form-control" placeholder="password"
                            value={password} onChange={(e) => (setpassword(e.target.value))} />
                        <input type="text" className="form-control" placeholder="cpassword"
                            value={cpassword} onChange={(e) => (setcpassword(e.target.value))} />

                        <button className='btn btn-primary mt-3' onClick={register}>Register</button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Registerscreen