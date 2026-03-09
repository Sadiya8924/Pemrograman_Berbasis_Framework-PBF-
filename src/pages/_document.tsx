import { Html, Head, Main, NextScript } from 'next/document'; // [cite: 5695]

export default function Document() {
  return (
    <Html lang="id"> {/* Mengubah lang ke id [cite: 5695] */}
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}