import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllPosts } from "../../lib/posts";

export default function Journal({ posts }) {
  return (
    <Layout title="Journal" description="콜보드 저널. 매주 발행되는 인사이트, 인터뷰, 트렌드.">
      <section className="section">
        <div className="container">
          <p className="eyebrow">( Callboard Journal · Weekly )</p>
          <h1 className="h-hero">산업 트렌드를<br />데이터로.</h1>
          <p style={{ fontSize: "1.05rem", maxWidth: 720, lineHeight: 1.65 }}>
            매주 발행하는 인사이트. 인터뷰 · 트렌드 · 정책 · 데이터 분석.
          </p>
          <div className="btn-group">
            <a href="mailto:ceo@callboard.kr?subject=Newsletter%20Subscribe" className="btn">
              뉴스레터 구독 →
            </a>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          {posts.length === 0 ? (
            <div style={{ padding: "80px 32px", textAlign: "center", border: "1px dashed var(--line-strong)" }}>
              <p className="eyebrow">( Coming Soon )</p>
              <h2 className="h-card">첫 아티클이 곧 발행됩니다.</h2>
              <p style={{ color: "var(--ink-dim)", marginTop: 16 }}>
                매주 화요일 새로운 인사이트가 올라옵니다.
              </p>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="journal-grid">
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/journal/${p.slug}`}
                  style={{
                    display: "block",
                    padding: 32,
                    background: "var(--bg-card)",
                    border: "1px solid var(--line)",
                    transition: "transform 0.15s ease, border-color 0.15s ease",
                  }}
                  className="journal-card"
                >
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
                    <span className="badge badge-outline">{p.category || "POST"}</span>
                    <span className="mono ink-dim" style={{ fontSize: "0.74rem" }}>{p.date}</span>
                  </div>
                  <h2 className="h-card" style={{ marginBottom: 12 }}>{p.title}</h2>
                  <p style={{ fontSize: "0.92rem", color: "var(--ink-dim)", lineHeight: 1.6, margin: 0 }}>
                    {p.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        :global(.journal-card:hover) {
          border-color: var(--red-live) !important;
        }
        @media (max-width: 720px) {
          :global(.journal-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts("journal", ["title", "date", "excerpt", "category"]);
  return { props: { posts } };
}
