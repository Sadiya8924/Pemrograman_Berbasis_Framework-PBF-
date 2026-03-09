import { useRouter } from "next/router";

const halamanToko = () => {
    const { query } = useRouter();
    const { slug } = query;

    return (
        <div>
            <h1>Halaman Toko</h1>
            <p>Kategori: {slug ? slug[0] : "Semua Kategori"}</p>
            <p>Sub-kategori: {slug && slug[1] ? slug[1] : "-"}</p>
            <p>Detail: {slug && slug[2] ? slug[2] : "-"}</p>
        </div>
    );
};

export default halamanToko;
