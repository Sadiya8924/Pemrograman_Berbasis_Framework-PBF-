import dynamic from "next/dynamic";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const TampilanProduk = dynamic(() => import("../views/produk"), {
  ssr: false,
});

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

type ApiResponse = {
  data: ProductType[];
};

const kategori = () => {
  const { data, error, isLoading } = useSWR<ApiResponse>("/api/produk", fetcher);

  if (error) {
    return <p>Gagal memuat data produk.</p>;
  }

  return (
    <div>
      <TampilanProduk products={data?.data ?? []} loading={isLoading} />
    </div>
  );
};

export default kategori;