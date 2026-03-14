import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            localStorage.setItem("loggedIn", "true");
            navigate("/discover");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">

            {/* glass background blobs */}
            <div className="absolute w-72 h-72 bg-purple-500 opacity-30 rounded-full blur-3xl top-10 left-10"></div>
            <div className="absolute w-72 h-72 bg-blue-500 opacity-30 rounded-full blur-3xl bottom-10 right-10"></div>

            {/* card */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-10 w-96 text-white z-10">

                <h2 className="text-4xl font-bold text-center mb-2">
                    Welcome Back
                </h2>

                <p className="text-center text-gray-300 mb-8">
                    Login to continue your circular impact journey 🌱
                </p>

                <form onSubmit={handleLogin} className="flex flex-col gap-5">

                    <div>
                        <label className="text-sm text-gray-300">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full mt-1 p-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-300"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-300">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full mt-1 p-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-300"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition duration-300 p-3 rounded-lg font-semibold shadow-lg"
                    >
                        Login
                    </button>

                </form>

                <p className="mt-6 text-center text-gray-300">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-purple-300 font-semibold hover:underline">
                        Sign Up
                    </Link>
                </p>

            </div>

        </div>
    );
}

export default Login;