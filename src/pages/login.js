import { Link, useNavigate } from "react-router-dom";
// useHistory hook has been replaced with the useNavigate
import FirebaseContext from "../context/firebase"
import { useContext, useState, useEffect } from "react";
export default function Login() {
    const history = useNavigate();
    const { firebase } = useContext(FirebaseContext);
    // WE NEED ACCES TO FIREBASE WHEN USER SIGN IN ,LOGIN   

    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const isInvalid = password === "" || emailAddress === "";

    const handleLogin = () => {

    }

    useEffect(() => {
        document.title = "Login-Instagram"
    }, [])

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">

            <div className="flex w-3/5">
                <img src="/images/iphone-with-profile.jpg" alt="Phone" ></img>
            </div>


            <div className="flex flex-col w-2/5">
                <div className="flex flex-col item-center bg-white p-4 border border-gray-primary mb-4 rounded">

                    <h1 className="flex justify-center w-full">

                        <img src="/images/logo.png" className="mt-2 w-6/12 mb-4 "></img>

                    </h1>


                    {error && <p className="ab-4 text-xs text-red-primary">{error}</p>}
                    <form onSubmit={handleLogin} method="POST">
                        <input aria-label="Enter your email address"
                            type="text"
                            placeholder="Email Address"
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2  "

                            onChange={({ target }) => setEmailAddress(target.value)}></input>
                        <input aria-label="Enter your email address"
                            type="password"
                            placeholder="Password"
                            className="text-sm text-grey-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"

                            onChange={({ target }) => setPassword(target.value)}
                        ></input>
                        <button
                            disabled={isInvalid}
                            type="submit"
                            className={`bg-blue-medium text-white w-full rounded h-8 font-bold
                         ${isInvalid && "opacity-50"} cursor-grab`} >
                            Login
                        </button>
                    </form>
                </div>
                {/* Tailwind install 
 npm install prop-types -D
 npm install postcss-cli -D*/}
                <div className="flex justify-center items-center flex-col w-full bg-white p4 border border-grey-primary ">
                    <p className="text-sm">Don't have an account?  {`  `}
                        <Link to="/signup" className="font-bold text-blue-medium">Signup</Link>
                    </p>

                </div>
            </div>
        </div >
    )


}

// text - red - primary =>
// text - grey - base