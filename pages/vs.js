import Link from "next/link";
import Layout from "../components/Layout";

const features = [
  { name: "실시간 매칭", cb: true, bs: true, cd: false, pb: false, kr: false },
  { name: "투명성 데이터 (Trust Score)", cb: true, bs: false, cd: true, pb: false, kr: false },
  { name: "작품 아카이브 (1990s—Now)", cb: true, bs: false, cd: false, pb: true, kr: false },
  { name: "한국어 네이티브", cb: true, bs: false, cd: false, pb: false, kr: true },
  { name: "표준계약서 통합", cb: true, bs: false, cd: false, pb: false, kr: false },
  { name: "산업 데이터 리포트 (월간)", cb: true, bs: false, cd: true, pb: false, kr: false },
  { name: "인증 제작사 시스템", cb: true, bs: true, cd: true, pb: false, kr: false },
  { name: "예술인 멀티 프로필", cb: true, bs: true, cd: false, pb: false, kr: false },
  { name: "AI 적합도 매칭", cb: true, bs: false, cd: false, pb: false, kr: false },
  { name: "한국 정부·기관 정책 트래커", cb: true, bs: false, cd: false, pb: false, kr: false },
];

const Mark = ({ v }) =>
  v ? (
    <span style={{ color: "var(--green-up)", fontWeight: 700, fontSize: "1.2rem" }}>✓</span>
  ) : (
    <span style={{ color: "var(--ink-dim)", fontSize: "1rem" }}>—</span>
  );

export default function VS() {
  return (
    <Layout title="vs. Others" description="콜보드 vs. Backstage · Candid · Playbill. 글로벌 표준과 한국 산업 특수성의 결합.">
      <section className="section">
        <div className="container">
          <p className="eyebrow">( Comparison · Why Callboard )</p>
          <h1 className="h-hero">세 가지 글로벌 표준을<br />하나로.</h1>
          <p style={{ fontSize: "1.05rem", maxWidth: 720, lineHeight: 1.7 }}>
            콜보드는 단순한 "Backstage 한국판"이 아닙니다.
            <br /><strong>Backstage의 매칭, Candid의 투명성, Playbill의 아카이브</strong> —
            세 가지 글로벌 표준을 한국 공연예술 산업에 맞게 통합한 첫 번째 플랫폼입니다.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <p className="eyebrow">( Feature Comparison )</p>
          <h2 className="h-section">한 자리에서 비교.</h2>

          <div style={{ marginTop: 32, overflow: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.92rem", minWidth: 720 }}>
              <thead>
                <tr style={{ borderTop: "2px solid var(--line-strong)", borderBottom: "2px solid var(--line-strong)" }}>
                  <th style={{ padding: "16px 12px", textAlign: "left", fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-dim)" }}>Feature</th>
                  <th style={{ padding: "16px 12px", textAlign: "center", background: "var(--ink)", color: "var(--ink-on-dark)" }}>
                    <span className="mono" style={{ fontSize: "0.72rem", color: "var(--red-live)", letterSpacing: "0.1em" }}>OURS</span>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem" }}>Callboard</div>
                  </th>
                  <th style={{ padding: "16px 12px", textAlign: "center" }}>
                    <span className="mono ink-dim" style={{ fontSize: "0.72rem", letterSpacing: "0.1em" }}>US</span>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1rem" }}>Backstage</div>
                  </th>
                  <th style={{ padding: "16px 12px", textAlign: "center" }}>
                    <span className="mono ink-dim" style={{ fontSize: "0.72rem", letterSpacing: "0.1em" }}>US</span>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1rem" }}>Candid</div>
                  </th>
                  <th style={{ padding: "16px 12px", textAlign: "center" }}>
                    <span className="mono ink-dim" style={{ fontSize: "0.72rem", letterSpacing: "0.1em" }}>US</span>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1rem" }}>Playbill</div>
                  </th>
                  <th style={{ padding: "16px 12px", textAlign: "center" }}>
                    <span className="mono ink-dim" style={{ fontSize: "0.72rem", letterSpacing: "0.1em" }}>KR</span>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1rem", color: "var(--ink-dim)" }}>기존 게시판</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((f, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--line)" }}>
                    <td style={{ padding: "16px 12px", fontWeight: 500 }}>{f.name}</td>
                    <td style={{ padding: "16px 12px", textAlign: "center", background: "var(--accent-soft)" }}><Mark v={f.cb} /></td>
                    <td style={{ padding: "16px 12px", textAlign: "center" }}><Mark v={f.bs} /></td>
                    <td style={{ padding: "16px 12px", textAlign: "center" }}><Mark v={f.cd} /></td>
                    <td style={{ padding: "16px 12px", textAlign: "center" }}><Mark v={f.pb} /></td>
                    <td style={{ padding: "16px 12px", textAlign: "center" }}><Mark v={f.kr} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section text-center section-dark">
        <div className="container">
          <h2 className="h-section" style={{ color: "var(--ink-on-dark)" }}>
            Global standards.<br />Korean context.<br />One platform.
          </h2>
          <div className="btn-group" style={{ justifyContent: "center" }}>
            <Link href="/product" className="btn" style={{ background: "var(--red-live)", borderColor: "var(--red-live)" }}>
              See the Modules →
            </Link>
            <Link href="/case-study" className="btn btn-outline" style={{ borderColor: "var(--ink-on-dark)", color: "var(--ink-on-dark)" }}>
              Case Study →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
