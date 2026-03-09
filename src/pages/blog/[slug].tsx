import { useRouter } from 'next/router';

export default function BlogDetail() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Halaman Blog Detail</h1>
      <p>Slug: {slug}</p>
      <p>Ini adalah halaman blog dengan dynamic routing</p>
    </div>
  );
}