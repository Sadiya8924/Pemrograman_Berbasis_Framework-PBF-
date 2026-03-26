import { useEffect, useState } from "react";

type ProductType = {
    id: string;
    nama: string;
    harga: number;
    ukuran: string;
    category: string;
};

type ApiProductType = {
    id: string;
    nama?: string;
    harga?: number;
    ukuran?: string;
    category?: string;
    kategori?: string;
    name?: string;
    price?: number;
    size?: string;
};

const kategori = () => {
    // const [isLogin, setIsLogin] = useState(false);
    // const { push } = useRouter();
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //   if (!isLogin) {
    //     push("/auth/login");
    //   }
    // }, []);

    const loadProducts = () => {
        setLoading(true);
        fetch("/api/produk")
        .then((response) => response.json())
        .then((responsedata) => {
            const normalizedProducts = (responsedata.data || []).map((item: ApiProductType) => ({
                id: item.id,
                nama: item.nama ?? item.name ?? "-",
                harga: item.harga ?? item.price ?? 0,
                ukuran: item.ukuran ?? item.size ?? "-",
                category: item.category ?? item.kategori ?? "-",
            }));

            setProducts(normalizedProducts);
        })
        .catch((error) => {
            console.error("Error fetching produk:", error);
        })
        .finally(() => {
            setLoading(false);
        });
    };

    useEffect(() => {
        loadProducts();
    }, []);

    return (
    <div>
        <h1>Daftar Produk</h1>
        {products.map((product: ProductType) => (
        <div key={product.id}>
            <h2>{product.nama}</h2>
            <p>Harga: {product.harga}</p>
            <p>Ukuran: {product.ukuran}</p>
            <p>Category: {product.category}</p>
        </div>
        ))}
        <button
            onClick={loadProducts}
            disabled={loading}
            style={{
                marginTop: "12px",
                marginBottom: "20px",
                padding: "8px 14px",
                border: "1px solid #9ca3af",
                backgroundColor: "white",
                color: "#374151",
                borderRadius: "6px",
                cursor: loading ? "not-allowed" : "pointer",
            }}
        >
            {loading ? "Loading..." : "Refresh Data"}
        </button>
    </div>
    );
};

export default kategori;