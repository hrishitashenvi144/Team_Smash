import { Link } from "react-router-dom";

function DiscoverResources() {

    const resources = [
        { name: "Plastic Waste", qty: "200 kg", location: "Bangalore", co2: "120 kg" },
        { name: "Metal Scraps", qty: "150 kg", location: "Hyderabad", co2: "90 kg" },
        { name: "Wood Pallets", qty: "80 kg", location: "Chennai", co2: "60 kg" },
        { name: "Coffee Grounds", qty: "50 kg", location: "Mysore", co2: "30 kg" },
    ];

    return (
        <div className="min-h-screen bg-gray-100">

            {/* ⭐ Premium Navbar */}
            <nav className="bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white shadow-xl">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

                    <h1 className="text-2xl font-bold tracking-wide">
                        🌍 Open Resource Ledger
                    </h1>

                    <div className="flex gap-8 text-lg">
                        <Link className="hover:text-purple-300 transition" to="/discover">Discover</Link>
                        <Link className="hover:text-purple-300 transition" to="/post">Post</Link>
                        <Link className="hover:text-purple-300 transition" to="/dashboard">Dashboard</Link>
                    </div>

                </div>
            </nav>

            {/* ⭐ Page Section */}
            <div className="max-w-7xl mx-auto px-8 py-10">

                {/* Heading */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-800">
                            Discover Resources
                        </h2>
                        <p className="text-gray-500 mt-1">
                            Find reusable materials around you and create circular impact.
                        </p>
                    </div>

                    {/* Post Button */}
                    <Link
                        to="/post"
                        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition"
                    >
                        + Post Resource
                    </Link>
                </div>

                {/* ⭐ Search + Filters */}
                <div className="bg-white p-6 rounded-xl shadow-md mb-10 flex flex-col md:flex-row gap-4 justify-between">

                    <input
                        type="text"
                        placeholder="🔎 Search resources, location..."
                        className="border p-3 rounded-lg w-full md:w-1/2 focus:ring-2 focus:ring-purple-400 outline-none"
                    />

                    <div className="flex gap-3">
                        <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200">
                            Plastic
                        </button>
                        <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200">
                            Metal
                        </button>
                        <button className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200">
                            Organic
                        </button>
                    </div>

                </div>

                {/* ⭐ Resource Grid */}
                <div className="grid md:grid-cols-3 gap-8">

                    {resources.map((r, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition"
                        >
                            <h3 className="text-2xl font-bold text-purple-700 mb-2">
                                {r.name}
                            </h3>

                            <p className="text-gray-600 mb-1">
                                📦 Quantity: <span className="font-semibold">{r.qty}</span>
                            </p>

                            <p className="text-gray-600 mb-3">
                                📍 Location: <span className="font-semibold">{r.location}</span>
                            </p>

                            {/* Impact badge */}
                            <div className="bg-green-100 text-green-700 px-3 py-2 rounded-lg inline-block font-semibold mb-4">
                                🌱 CO₂ Saving Potential: {r.co2}
                            </div>

                            <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-lg hover:scale-105 transition">
                                Request Exchange
                            </button>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}

export default DiscoverResources;