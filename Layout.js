import Head from "next/head";
import LiveTicker from "./LiveTicker";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, title = "Callboard", description }) {
  const desc =
    description ||
    "Callboard — 뉴미디어 예술의 데이터 인텔리전스 허브. 흩어져 있던 공연예술 데이터를 하나의 인덱스로.";

  return (
    <>
      <Head>
        <title>{title} · Callboard</title>
        <meta name="description" content={desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Pretendard:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LiveTicker />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
