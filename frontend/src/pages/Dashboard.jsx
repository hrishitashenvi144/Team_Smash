import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

export default function Dashboard() {

    const data = [
        { week: "W1", exchanges: 5 },
        { week: "W2", exchanges: 9 },
        { week: "W3", exchanges: 14 },
        { week: "W4", exchanges: 18 },
        { week: "W5", exchanges: 24 }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">

            <div className="max-w-7xl mx-auto px-8 py-10">

                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-800">
                            🌍 Sustainability Impact Dashboard
                        </h1>
                        <p className="text-gray-500 mt-1">
                            Monitor circular economy performance & environmental savings
                        </p>
                    </div>

                    <div className="bg-white shadow-md rounded-xl px-6 py-3">
                        <p className="text-sm text-gray-500">Network Status</p>
                        <p className="text-green-600 font-bold">● Active</p>
                    </div>
                </div>

                {/* KPI cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
                        <p className="text-gray-500">Resources Shared</p>
                        <h2 className="text-5xl font-bold text-purple-700 mt-2">24</h2>
                        <p className="text-green-600 mt-2">↑ 12% this week</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
                        <p className="text-gray-500">Waste Diverted</p>
                        <h2 className="text-5xl font-bold text-blue-700 mt-2">120 kg</h2>
                        <p className="text-green-600 mt-2">↑ Circular usage growing</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
                        <p className="text-gray-500">CO₂ Emissions Saved</p>
                        <h2 className="text-5xl font-bold text-green-600 mt-2">78 kg</h2>
                        <p className="text-green-600 mt-2">Equivalent to planting 4 trees 🌱</p>
                    </div>

                </div>

                {/* analytics section */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* ⭐ REAL CHART */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h3 className="text-xl font-bold mb-4 text-gray-700">
                            Resource Exchange Trend
                        </h3>

                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="week" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line
                                        type="monotone"
                                        dataKey="exchanges"
                                        stroke="#7c3aed"
                                        strokeWidth={3}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* insight panel */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h3 className="text-xl font-bold mb-4 text-gray-700">
                            Environmental Intelligence
                        </h3>

                        <ul className="space-y-3 text-gray-600">
                            <li>🌱 Your network reduced landfill pressure</li>
                            <li>⚡ Industrial reuse efficiency improved</li>
                            <li>🌍 Local circular economy strengthening</li>
                            <li>📈 Sustainability impact growing weekly</li>
                        </ul>
                    </div>

                </div>

            </div>

        </div>
    );
}