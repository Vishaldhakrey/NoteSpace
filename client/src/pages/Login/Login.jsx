import React, { useState } from "react"
import PasswordInput from "../../components/Input/PasswordInput"
import { Link, useNavigate } from "react-router-dom"
import { validateEmail } from "../../utils/helper"
import { useDispatch } from "react-redux"
import { signInFailure, signInStart, signInSuccess } from "../../redux/user/userSlice"
import axios from "axios"
import { toast } from "react-toastify"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();
        
        if(!validateEmail(email)) {
            setError("Please enter a valid email address")
            setEmail('')
            setPassword('')
            return
        }

        if(!password) {
            setError("please enter the password")
            return 
        }

        setError('')

        //Login Api
        try {
            dispatch(signInStart())

            const res = await axios.post(
                "http://localhost:3000/api/auth/login", 
                {email, password},
                {withCredentials: true}
            )

            if(res.data.success === false){
                toast.error(res.data.message)
                console.log(res.data);
                dispatch(signInFailure(data.message))
            }

            toast.success(res.data.message)
            dispatch(signInSuccess(res.data))
            navigate("/")
            
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            dispatch(signInFailure(error.message));
        }
    }

    return (
        <div className="flex item-center justify-center mt-28">
            <div className="w-96 border rounded bg-white px-7 py-10">
                <form onSubmit={handleLogin}>
                    <h4 className="text-2xl mb-7">Login</h4>
                    <input
                        type="text"
                        placeholder="Email"
                        className="input-box"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <PasswordInput 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button 
                        type="submit"
                        className="btn-primary"
                    >
                        LOGIN
                    </button>

                    {error && <p className="text-red-500 text-sm pb-1">
                        {error}
                    </p>}

                    <p className="text-sm text-center mt-4">
                        Not Register yet?
                        <Link to={"/signup"} className="font-medium text-primary underline mx-1">
                            create an account
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;