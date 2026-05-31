import Layout from "../components/Layout";

const news = [
  { d: "2026.05", cat: "선정", title: "HAI START-UP 입주경진대회 선정", desc: "동국대학교 캠퍼스타운센터 2026년 입주기업으로 선정." },
  { d: "2026.04", cat: "선정", title: "예술경영지원센터 초기창업지원 선정", desc: "김규린 / 럭키참스 — 2026 초기창업지원 사업 선정기업." },
  { d: "2026.04", cat: "선정", title: "SBA 서울경제진흥원 선정", desc: "2026 스타트업 플러스 기업으로 선정." },
  { d: "2026.03", cat: "기업", title: "동국패밀리 기업 등록", desc: "2026 동국패밀리 기업 등록 완료." },
  { d: "2025.12", cat: "제작", title: "국가보훈부 다큐멘터리 제작 지원", desc: "대전산업문화진흥원 제작지원작 — 〈청춘, 도산에게 말을 걸다〉 (Dear, Dosan)." },
];

export default function Press() {
  return (
    <Layout title="Press" description="콜보드 보도자료 및 선정 소식.">
      <section className="section">
        <div className="container">
          <p className="eyebrow">( Press · Recognition )</p>
          <h1 className="h-hero">검증된 시작.</h1>
          <p style={{ fontSize: "1.02rem", maxWidth: 640, lineHeight: 1.65 }}>
            2026, 콜보드의 첫 해. 정부·학계·민간이 검증한 5건의 선정 기록.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div style={{ borderTop: "2px solid var(--line-strong)" }}>
            {news.map((n, i) => (
              <article key={i} style={{ display: "grid", gridTemplateColumns: "100px 100px 1fr", gap: 32, padding: "28px 0", borderBottom: "1px solid var(--line)", alignItems: "baseline" }} className="press-row">
                <span className="mono" style={{ color: "var(--red-live)", fontWeight: 600, fontSize: "0.86rem" }}>{n.d}</span>
                <span className="badge badge-outline">{n.cat}</span>
                <div>
                  <h3 className="h-card" style={{ fontSize: "1.2rem", marginBottom: 6 }}>{n.title}</h3>
                  <p style={{ fontSize: "0.92rem", color: "var(--ink-dim)", margin: 0 }}>{n.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <p className="eyebrow">( Media Inquiries )</p>
          <h2 className="h-section">언론·미디어 문의.</h2>
          <p style={{ fontSize: "1.02rem", color: "var(--ink-dim)" }}>
            인터뷰, 기고, 인용 요청은 직접 메일로 부탁드립니다.
          </p>
          <a href="mailto:ceo@callboard.kr?subject=Press%20Inquiry%20-%20Callboard" className="btn" style={{ marginTop: 24 }}>
            ceo@callboard.kr →
          </a>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 720px) {
          :global(.press-row) {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </Layout>
  );
}
