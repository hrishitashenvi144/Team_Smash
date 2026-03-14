import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function Signup() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();

        const userData = { name, email, password };

        localStorage.setItem("user", JSON.stringify(userData));

        alert("Account created! Please login.");

        navigate("/");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">

            {/* background glow shapes */}
            <div className="absolute w-80 h-80 bg-purple-500 opacity-30 rounded-full blur-3xl top-10 left-10"></div>
            <div className="absolute w-80 h-80 bg-blue-500 opacity-30 rounded-full blur-3xl bottom-10 right-10"></div>

            {/* signup card */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-10 w-96 text-white z-10">

                <h2 className="text-4xl font-bold text-center mb-2">
                    Create Account
                </h2>

                <p className="text-center text-gray-300 mb-8">
                    Join the circular economy revolution 🌍
                </p>

                <form onSubmit={handleSignup} className="flex flex-col gap-5">

                    <div>
                        <label className="text-sm text-gray-300">Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full mt-1 p-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-300"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

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
                            placeholder="Create a password"
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
                        Create Account
                    </button>

                </form>

                <p className="mt-6 text-center text-gray-300">
                    Already have an account?{" "}
                    <Link to="/" className="text-purple-300 font-semibold hover:underline">
                        Login
                    </Link>
                </p>

            </div>

        </div>
    );
}

export default Signup;