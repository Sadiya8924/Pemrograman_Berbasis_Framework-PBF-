import Link from "next/link";
import { useRouter } from "next/router";

const TampilanLogin = () => {
    const { push } = useRouter();
    const handleLogin = () => {
        // Simulasi login
        push("/produk");
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Halaman Login</h1>
                <button 
                    onClick={() => handleLogin()}
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300 mb-4"
                >
                    Login
                </button>
                <br />
                <p className="text-red-600 border border-red-600 rounded-md p-2 mb-4">Belum punya akun</p>
                <Link href="/auth/register" className="text-blue-500 hover:underline">
                    Ke Halaman Register
                </Link>
            </div>
        </div>
    );
};

export default TampilanLogin;
