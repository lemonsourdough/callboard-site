import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllPosts } from "../../lib/posts";

export default function Reports({ posts }) {
  return (
    <Layout title="Industry Reports" description="콜보드 산업 보고서. 매월 발행되는 데이터셋 포함 리포트.">
      <section className="section">
        <div className="container">
          <p className="eyebrow">( Industry Reports · Monthly )</p>
          <h1 className="h-hero">산업의 좌표를<br />매월 보내드립니다.</h1>
          <p style={{ fontSize: "1.05rem", maxWidth: 720, lineHeight: 1.65 }}>
            매월 둘째 주 화요일 발행. 캐스팅·계약·정산·매칭 데이터셋 포함 PDF 리포트.
            <br />
            정책 변화 알림, 데이터셋 API, 비공개 라운드테이블까지.
          </p>
          <div className="btn-group">
            <a href="mailto:ceo@callboard.kr?subject=Monthly%20Report%20Subscription" className="btn">
              구독 시작 — ₩19,000/월 →
            </a>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          {posts.length === 0 ? (
            <div style={{ padding: "80px 32px", textAlign: "center", border: "1px dashed var(--line-strong)" }}>
              <p className="eyebrow">( Coming Soon )</p>
              <h2 className="h-card">첫 번째 리포트가 곧 발행됩니다.</h2>
              <p style={{ color: "var(--ink-dim)", marginTop: 16 }}>
                2026 Q2 종합 리포트 — 2026.06 발행 예정
              </p>
            </div>
          ) : (
            <div style={{ borderTop: "2px solid var(--line-strong)" }}>
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/reports/${p.slug}`}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "120px 120px 1fr auto",
                    gap: 32,
                    padding: "32px 0",
                    borderBottom: "1px solid var(--line)",
                    alignItems: "baseline",
                  }}
                  className="report-row"
                >
                  <span className="mono" style={{ color: "var(--red-live)", fontWeight: 600, fontSize: "0.86rem" }}>
                    {p.issue || "—"}
                  </span>
                  <span className="mono ink-dim" style={{ fontSize: "0.82rem" }}>{p.date}</span>
                  <div>
                    <h3 className="h-card" style={{ marginBottom: 6 }}>{p.title}</h3>
                    <p style={{ fontSize: "0.92rem", color: "var(--ink-dim)", margin: 0 }}>{p.excerpt}</p>
                  </div>
                  <span className="mono" style={{ fontSize: "0.78rem" }}>{p.pages ? `${p.pages}p` : "PDF"} →</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 860px) {
          :global(.report-row) {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts("reports", ["title", "date", "excerpt", "issue", "pages"]);
  return { props: { posts } };
}
