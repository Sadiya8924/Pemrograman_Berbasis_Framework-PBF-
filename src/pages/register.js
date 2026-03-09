import Link from "next/link";

const RegisterPage = () => {
    return (
        <div>
            <h1>Halaman Register</h1>
            
            {/* Navigasi dengan Link ke Login */}
            <p>
                Sudah punya akun? {" "}
                <Link 
                    href="/login"
                    style={{
                        color: "#0070f3",
                        textDecoration: "underline",
                        cursor: "pointer"
                    }}
                >
                    Login
                </Link>
            </p>
        </div>
    );
};

export default RegisterPage;
