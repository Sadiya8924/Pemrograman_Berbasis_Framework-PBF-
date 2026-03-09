import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import MainSection from "./MainSection";

const ProdukView = () => {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        // Cek status login dari localStorage
        const loggedIn = localStorage.getItem("isLoggedIn") === "true";
        
        if (!loggedIn) {
            // Redirect ke login jika belum login
            router.push("/login");
        } else {
            setIsLogin(true);
        }
    }, []);

    // Tampilkan loading jika belum cek status
    if (!isLogin) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <HeroSection />
            <MainSection />
        </div>
    );
};

export default ProdukView;
