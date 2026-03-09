import Link from "next/link";
import { useRouter } from "next/router";

const TampilanRegister = () => {
    const { push } = useRouter();
    const handleRegister = () => {
        // logic register disini
        push("/auth/login");
    }
    
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Halaman Register</h1>
                <button 
                    onClick={() => handleRegister()}
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 mb-4"
                >
                    Register
                </button>
                <br />
                <Link href="/auth/login" className="text-blue-500 hover:underline">
                    Sudah punya akun? Login disini
                </Link>
            </div>
        </div>
    );
};

export default TampilanRegister;
