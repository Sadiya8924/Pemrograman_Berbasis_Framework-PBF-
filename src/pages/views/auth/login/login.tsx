import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./login.module.css";

const halamanLogin = () => {
    const { push } = useRouter();
    const handleLogin = () => {
        // Simulasi login
        push("/produk");
    }
    return (
        <div className={styles.login}>
            <div>
                <h1>Halaman Login</h1>
                <button onClick={() => handleLogin()}>Login</button><br />
                <Link href="/auth/register">Ke Halaman Register</Link>
            </div>
        </div>
    );
};

export default halamanLogin;