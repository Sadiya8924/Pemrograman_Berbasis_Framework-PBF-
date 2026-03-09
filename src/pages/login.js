import { useRouter } from "next/router";
import Link from "next/link";

const LoginPage = () => {
    const router = useRouter();

    // Navigasi imperatif ke Product
    const goToProduct = () => {
        // Set status login ke localStorage
        localStorage.setItem("isLoggedIn", "true");
        router.push("/produk");
    };

    return (
        <div>
            <h1>Halaman Login</h1>
            
            {/* Navigasi Imperatif ke Product */}
            <button 
                onClick={goToProduct}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#0070f3",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px"
                }}
            >
                Login
            </button>

            <hr />

            {/* Navigasi dengan Link ke Register */}
            <p>
                Belum punya akun? {" "}
                <Link 
                    href="/register"
                    style={{
                        color: "#0070f3",
                        textDecoration: "underline",
                        cursor: "pointer"
                    }}
                >
                    Register
                </Link>
            </p>
        </div>
    );
};

export default LoginPage;
