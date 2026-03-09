import { useRouter } from "next/router";

const MainSection = () => {
    const router = useRouter();

    const handleLogout = () => {
        // Hapus status login
        localStorage.removeItem("isLoggedIn");
        // Redirect ke login
        router.push("/login");
    };

    return (
        <div className="text-center py-12 px-6">
            <p className="text-lg mb-6 text-gray-700">Anda sudah login!</p>
            <button 
                onClick={handleLogout} 
                className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition duration-300 shadow-lg"
            >
                Logout
            </button>
        </div>
    );
};

export default MainSection;
