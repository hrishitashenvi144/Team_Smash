function Navbar() {
    return (
        <nav className="bg-white shadow-md p-4 flex justify-between items-center px-10">

            <h1 className="text-2xl font-bold text-blue-600">
                Open Resource Ledger
            </h1>

            <div className="space-x-8 font-medium">
                <a href="#" className="hover:text-blue-600">Post</a>
                <a href="#" className="hover:text-blue-600">Discover</a>
                <a href="#" className="hover:text-blue-600">Dashboard</a>
            </div>

        </nav>
    );
}

export default Navbar;