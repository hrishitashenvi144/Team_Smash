import { useState } from "react";

export default function PostResources() {

    const [form, setForm] = useState({
        resource: "",
        quantity: "",
        location: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch("http://localhost:5000/resources", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });

            alert("Resource posted successfully!");

        } catch {
            alert("Demo mode: Resource submitted!");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-emerald-900 flex items-center justify-center relative overflow-hidden">

            {/* background glow */}
            <div className="absolute w-80 h-80 bg-green-400 opacity-20 rounded-full blur-3xl top-10 left-10"></div>
            <div className="absolute w-80 h-80 bg-purple-400 opacity-20 rounded-full blur-3xl bottom-10 right-10"></div>

            {/* card */}
            <form
                onSubmit={handleSubmit}
                className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-10 w-[440px] text-white z-10"
            >

                <h2 className="text-4xl font-bold text-center mb-2">
                    Share a Resource
                </h2>

                <p className="text-center text-gray-300 mb-8">
                    Help reduce waste & enable circular exchange 🌱
                </p>

                {/* resource */}
                <div className="mb-5">
                    <label className="text-sm text-gray-300">Resource Name</label>
                    <input
                        placeholder="eg. Plastic scrap"
                        className="w-full mt-1 p-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-300"
                        onChange={(e) => setForm({ ...form, resource: e.target.value })}
                        required
                    />
                </div>

                {/* quantity */}
                <div className="mb-5">
                    <label className="text-sm text-gray-300">Quantity</label>
                    <input
                        placeholder="eg. 200 kg"
                        className="w-full mt-1 p-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-300"
                        onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                        required
                    />
                </div>

                {/* location */}
                <div className="mb-6">
                    <label className="text-sm text-gray-300">Location</label>
                    <input
                        placeholder="eg. Bangalore"
                        className="w-full mt-1 p-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-300"
                        onChange={(e) => setForm({ ...form, location: e.target.value })}
                        required
                    />
                </div>

                {/* impact hint */}
                <div className="bg-green-400/20 border border-green-300/30 text-green-200 text-sm p-3 rounded-lg mb-6">
                    🌍 Posting this resource can contribute to CO₂ reduction and landfill diversion.
                </div>

                <button
                    className="w-full bg-gradient-to-r from-green-400 to-emerald-500 hover:scale-105 transition duration-300 py-3 rounded-lg font-semibold shadow-lg"
                >
                    Submit Resource
                </button>

            </form>

        </div>
    );
}