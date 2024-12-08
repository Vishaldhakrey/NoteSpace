import React, { useState } from "react";
import PasswordInput from "../../components/Input/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail, validateName, validatePassword } from "../../utils/helper";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        // Client-side validation
        if (!validateName(name)) {
            setError("Please enter a valid name");
            setName("");
            return;
        }
        if (!validateEmail(email)) {
            setError("Please enter a valid email address");
            setEmail("");
            return;
        }

        if (!password) {
            setError("Please enter a password");
            return;
        }
        if (password && !validatePassword(password)) {
            setError(
                `Please enter a valid password that has at least one lowercase letter, one uppercase letter, one digit, one special character, and is at least 8 characters long.`
            );
            setPassword("");
            return;
        }

        setError("");  // Clear error message

        // Sign up API request
        try {
            const res = await axios.post(
                "http://localhost:3000/api/auth/signup", 
                { username: name, email, password },
                { withCredentials: true}  // 5 seconds timeout
            );
            
            if (res.data.success === false) {
                setError(res.data.message);
                toast.error(res.data.message);
                return;
            }

            toast.success(res.data.message);
            setError("");
            navigate("/login");
        } catch (error) {
            console.error("Error during signup:", error);
            toast.error(error.response?.data?.message || error.message);
            setError(error.response?.data?.message || error.message);
        }
    };

    return (
        <div className="flex item-center justify-center mt-28">
            <div className="w-96 border rounded bg-white px-7 py-10">
                <form onSubmit={handleSignUp}>
                    <h4 className="text-2xl mb-7">Sign Up</h4>
                    <input
                        type="text"
                        placeholder="Name"
                        className="input-box"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
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
                    <button type="submit" className="btn-primary">
                        SIGN UP
                    </button>

                    {error && <p className="text-red-500 text-sm pb-1">{error}</p>}

                    <p className="text-sm text-center mt-4">
                        Already have an account? 
                        <Link to={"/login"} className="font-medium text-primary underline mx-1">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
