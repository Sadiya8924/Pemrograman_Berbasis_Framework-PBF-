import type { NextApiRequest, NextApiResponse } from "next";
import { retriveProducts } from "../utlis/db/sevicefirebase";

type ProductItem = {
	id: string;
	name: string;
	category: string;
	price: number;
	image: string;
};

type Data = {
	status: boolean;
	status_code: number;
	data: ProductItem[];
};

type RawProduct = {
	id?: string;
	name?: string;
	nama?: string;
	category?: string;
	kategori?: string;
	price?: number;
	harga?: number;
	image?: string;
	imageUrl?: string;
	IMG?: string;
	img?: string;
};

const normalizeProduct = (item: RawProduct): ProductItem => ({
	id: item.id ?? "",
	name: item.name ?? item.nama ?? "-",
	category: item.category ?? item.kategori ?? "-",
	price: item.price ?? item.harga ?? 0,
	image: item.image ?? item.imageUrl ?? item.IMG ?? item.img ?? "",
});

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const rawData = await retriveProducts("products");
	const data = (rawData || []).map((item: RawProduct) => normalizeProduct(item));
    res.status(200).json({ status: true, status_code: 200, data });
}