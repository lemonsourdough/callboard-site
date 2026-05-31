import Link from "next/link";
import Layout from "../components/Layout";

const castings = [
  { id: "J-2604-12", genre: "뮤지컬", title: "달의 그림자 — 여주인공", producer: "럭키참스", venue: "서울 충무아트홀", apps: 248, views: 4120, match: 68, deadline: "D-3", urgent: true },
  { id: "J-2604-09", genre: "아이돌", title: "Project: NEON — 글로벌 보컬", producer: "미러볼 엔터테인먼트", venue: "서울 강남", apps: 1830, views: 12400, match: 60, deadline: "D-7" },
  { id: "J-2604-08", genre: "대극장 뮤지컬", title: "명성황후 2026 — 앙상블 8역", producer: "한울제작소", venue: "예술의전당", apps: 96, views: 1840, match: 66, deadline: "D-12" },
  { id: "J-2604-04", genre: "단편영화", title: "Reset Room — 남자 조연", producer: "스튜디오 노블", venue: "경기 파주", apps: 64, views: 980, match: 64, deadline: "D-1", urgent: true },
  { id: "J-2603-91", genre: "연극", title: "봄밤의 비명 — 더블 캐스트", producer: "무대지기 컴퍼니", venue: "대학로", apps: 41, views: 720, match: 71, deadline: "D-9" },
  { id: "J-2603-77", genre: "독립영화", title: "심해의 빛 — 다이버 역", producer: "블루홀씨어터", venue: "부산", apps: 32, views: 410, match: 62, deadline: "D-21" },
  { id: "J-2603-66", genre: "광고", title: "LG OBJET — 30대 부부 역", producer: "파인앤펀치", venue: "서울 성수", apps: 412, views: 5240, match: 82, deadline: "D-5", urgent: true },
];

const producers = [
  { name: "럭키참스", code: "P-0042", est: 2014, type: "뮤지컬 · 영화 제작", grade: "A", trust: 92, jobs: 7 },
  { name: "무대지기 컴퍼니", code: "P-0118", est: 2009, type: "연극 · 창작극", grade: "A", trust: 87, jobs: 3 },
  { name: "스튜디오 노블", code: "P-0203", est: 2019, type: "단편영화 · OTT", grade: "B+", trust: 78, jobs: 5 },
  { name: "미러볼 엔터테인먼트", code: "P-0341", est: 2011, type: "아이돌 · 댄스", grade: "A", trust: 84, jobs: 4 },
  { name: "한울제작소", code: "P-0420", est: 1998, type: "뮤지컬 · 대극장", grade: "A", trust: 81, jobs: 6 },
];

const insights = [
  { label: "뮤지컬", val: 92, dir: "up" },
  { label: "아이돌·댄스", val: 84, dir: "up" },
  { label: "OTT", val: 71, dir: "up" },
  { label: "연극", val: 61, dir: "flat" },
  { label: "단편영화", val: 52, dir: "up" },
  { label: "광고", val: 49, dir: "down" },
  { label: "독립영화", val: 28, dir: "down" },
];

export default function IndexPage() {
  return (
    <Layout title="Live Index" description="콜보드 실시간 데이터 인덱스. 캐스팅·제작사·산업 통계.">
      <section className="section-tight" style={{ background: "var(--ink)", color: "var(--ink-on-dark)" }}>
        <div className="container-wide">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 16 }}>
            <div>
              <p className="eyebrow" style={{ color: "var(--ink-on-dark-dim)", margin: 0 }}>
                ( Live Index · Data Terminal )
              </p>
              <h1 className="h-section" style={{ color: "var(--ink-on-dark)", marginTop: 8 }}>
                Callboard Index<span style={{ color: "var(--red-live)" }}>.</span>
              </h1>
            </div>
            <span className="mock-banner" style={{ borderColor: "var(--ink-on-dark-dim)", color: "var(--ink-on-dark-dim)", background: "transparent" }}>
              Mock data · MVP launching Q3 2026
            </span>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section style={{ background: "var(--ink)", padding: "0 0 40px" }}>
        <div className="container-wide">
          <div className="data-grid" style={{ margin: 0, borderColor: "var(--ink-on-dark-dim)", borderTop: "2px solid var(--ink-on-dark-dim)", borderBottom: "2px solid var(--ink-on-dark-dim)" }}>
            {[
              { n: "1,284", l: "Certified Producers", d: "+12 W/W", up: true },
              { n: "47,219", l: "Verified Artists", d: "+1,402 MTD", up: true },
              { n: "3,612", l: "Open Calls", d: "+186 MTD", up: true },
              { n: "₩4.82조", l: "Market Size · 2026", d: "+9.4% YoY", up: true },
            ].map((s, i) => (
              <div key={i} className="data-cell" style={{ borderColor: "var(--ink-on-dark-dim)" }}>
                <span className="data-num" style={{ color: "var(--ink-on-dark)" }}>{s.n}</span>
                <span className="data-label" style={{ color: "var(--ink-on-dark-dim)" }}>{s.l}</span>
                <span className="data-delta" style={{ color: s.up ? "var(--green-up)" : "var(--red-down)" }}>{s.d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN GRID: castings + sidebar */}
      <section className="section" style={{ paddingTop: 56 }}>
        <div className="container-wide">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 48 }} className="terminal-grid">
            {/* MAIN — castings table */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <p className="eyebrow" style={{ margin: 0 }}>( Now Casting · Top Calls )</p>
                <span className="mono ink-dim" style={{ fontSize: "0.74rem" }}>Sort: Deadline ↑</span>
              </div>

              <div style={{ borderTop: "2px solid var(--line-strong)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "100px 1fr 100px 100px 80px 80px", padding: "12px 0", borderBottom: "1px solid var(--line)", fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-dim)" }} className="table-header">
                  <span>ID</span>
                  <span>Title · Producer</span>
                  <span style={{ textAlign: "right" }}>Apps</span>
                  <span style={{ textAlign: "right" }}>Views</span>
                  <span style={{ textAlign: "right" }}>Match</span>
                  <span style={{ textAlign: "right" }}>D-day</span>
                </div>

                {castings.map((c) => (
                  <div key={c.id} style={{ display: "grid", gridTemplateColumns: "100px 1fr 100px 100px 80px 80px", padding: "16px 0", borderBottom: "1px solid var(--line)", alignItems: "center" }} className="table-row">
                    <span className="mono" style={{ fontSize: "0.78rem", color: "var(--ink-dim)" }}>{c.id}</span>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                        <span className="badge badge-outline" style={{ fontSize: "0.62rem", padding: "2px 6px" }}>{c.genre}</span>
                        {c.urgent && <span className="badge badge-live" style={{ fontSize: "0.62rem", padding: "2px 6px" }}>Urgent</span>}
                      </div>
                      <div style={{ fontWeight: 600, fontSize: "0.96rem" }}>{c.title}</div>
                      <div style={{ fontSize: "0.82rem", color: "var(--ink-dim)" }}>{c.producer} · {c.venue}</div>
                    </div>
                    <span className="mono" style={{ textAlign: "right", fontSize: "0.86rem" }}>{c.apps.toLocaleString()}</span>
                    <span className="mono" style={{ textAlign: "right", fontSize: "0.86rem", color: "var(--ink-dim)" }}>{c.views.toLocaleString()}</span>
                    <span className="mono" style={{ textAlign: "right", fontSize: "0.86rem", color: "var(--green-up)", fontWeight: 600 }}>{c.match}%</span>
                    <span className="mono" style={{ textAlign: "right", fontSize: "0.86rem", color: c.urgent ? "var(--red-live)" : "var(--ink)", fontWeight: 600 }}>{c.deadline}</span>
                  </div>
                ))}
              </div>

              {/* Producers section */}
              <div style={{ marginTop: 64 }}>
                <p className="eyebrow" style={{ marginBottom: 20 }}>( Producer Index · Top Trust Score )</p>
                <div style={{ borderTop: "2px solid var(--line-strong)" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 100px 80px 80px 60px", padding: "12px 0", borderBottom: "1px solid var(--line)", fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-dim)" }} className="table-header">
                    <span>Producer · Type</span>
                    <span style={{ textAlign: "right" }}>Est.</span>
                    <span style={{ textAlign: "right" }}>Grade</span>
                    <span style={{ textAlign: "right" }}>Trust</span>
                    <span style={{ textAlign: "right" }}>Jobs</span>
                  </div>
                  {producers.map((p) => (
                    <div key={p.code} style={{ display: "grid", gridTemplateColumns: "1fr 100px 80px 80px 60px", padding: "16px 0", borderBottom: "1px solid var(--line)", alignItems: "center" }} className="table-row">
                      <div>
                        <div style={{ fontWeight: 600, fontSize: "0.96rem" }}>{p.name}</div>
                        <div style={{ fontSize: "0.82rem", color: "var(--ink-dim)" }}>{p.code} · {p.type}</div>
                      </div>
                      <span className="mono" style={{ textAlign: "right", fontSize: "0.86rem", color: "var(--ink-dim)" }}>{p.est}</span>
                      <span className="mono" style={{ textAlign: "right", fontSize: "0.86rem", color: "var(--green-up)", fontWeight: 700 }}>{p.grade}</span>
                      <span className="mono" style={{ textAlign: "right", fontSize: "0.86rem", fontWeight: 600 }}>{p.trust}</span>
                      <span className="mono" style={{ textAlign: "right", fontSize: "0.86rem", color: "var(--ink-dim)" }}>{p.jobs}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside style={{ position: "sticky", top: 120, alignSelf: "start" }} className="terminal-sidebar">
              {/* Industry Pulse */}
              <div style={{ background: "var(--bg-card)", padding: 24, border: "1px solid var(--line)", marginBottom: 24 }}>
                <p className="eyebrow" style={{ marginBottom: 16, fontSize: "0.68rem" }}>( Industry Pulse · Q2 2026 )</p>
                {insights.map((i) => (
                  <div key={i.label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid var(--line)" }}>
                    <span style={{ fontSize: "0.86rem" }}>{i.label}</span>
                    <span className="mono" style={{ fontSize: "0.86rem", color: i.dir === "up" ? "var(--green-up)" : i.dir === "down" ? "var(--red-down)" : "var(--ink-dim)", fontWeight: 600 }}>
                      {i.val} {i.dir === "up" ? "↑" : i.dir === "down" ? "↓" : "→"}
                    </span>
                  </div>
                ))}
              </div>

              {/* Standard Contract */}
              <div style={{ background: "var(--ink)", color: "var(--ink-on-dark)", padding: 24, marginBottom: 24 }}>
                <p className="eyebrow" style={{ marginBottom: 12, fontSize: "0.68rem", color: "var(--ink-on-dark-dim)" }}>( Standard Contract )</p>
                <div className="data-num" style={{ color: "var(--ink-on-dark)", fontSize: "2.8rem" }}>94.2%</div>
                <div className="data-label" style={{ color: "var(--ink-on-dark-dim)" }}>채택률 · 전월 +1.8%p</div>
              </div>

              {/* Avg payment */}
              <div style={{ background: "var(--bg-card)", padding: 24, border: "1px solid var(--line)", marginBottom: 24 }}>
                <p className="eyebrow" style={{ marginBottom: 12, fontSize: "0.68rem" }}>( Avg Payment Cycle )</p>
                <div className="data-num" style={{ fontSize: "2.4rem" }}>18.4<span style={{ fontSize: "0.5em" }}>일</span></div>
                <div className="data-label">YoY -3.2일</div>
              </div>

              {/* CTA */}
              <Link href="/reports" className="btn" style={{ width: "100%", justifyContent: "center" }}>
                Get Full Report →
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 980px) {
          :global(.terminal-grid) {
            grid-template-columns: 1fr !important;
          }
          :global(.terminal-sidebar) {
            position: static !important;
          }
          :global(.table-header),
          :global(.table-row) {
            grid-template-columns: 80px 1fr 70px !important;
          }
          :global(.table-header > span:nth-child(4)),
          :global(.table-header > span:nth-child(5)),
          :global(.table-row > span:nth-child(4)),
          :global(.table-row > span:nth-child(5)) {
            display: none;
          }
        }
      `}</style>
    </Layout>
  );
}
