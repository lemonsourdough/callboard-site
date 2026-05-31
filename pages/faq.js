import Link from "next/link";
import Layout from "../components/Layout";

const faqs = [
  {
    cat: "Market",
    q: "TAM(시장 규모)이 얼마나 됩니까?",
    a: "한국 콘텐츠 산업 ₩160조 (2025), 연간 수출 $104억 달러. 예술산업 종사자 80만명, 콘텐츠 종사자 30만명. 직접 타겟층(공연·영상·아이돌) SAM은 ₩4.82조 규모이며 YoY +9.4% 성장 중입니다.",
  },
  {
    cat: "Market",
    q: "왜 지금 콜보드인가요?",
    a: "표준계약서 채택률 94% 돌파, 단편영화·OTT 캐스팅 38% 증가, 글로벌 오디션 영문 지원자 2.4배 증가. 한국 콘텐츠 산업이 글로벌화되면서 데이터 인프라 수요가 폭발하고 있지만, 여전히 엑셀과 카카오톡으로 운영됩니다.",
  },
  {
    cat: "Product",
    q: "이미 비슷한 서비스가 있지 않나요?",
    a: "한국 시장에는 단순 게시판 형태만 존재합니다. 글로벌에는 Backstage(매칭), Candid(투명성), Playbill(아카이브)가 분리되어 있고, 콜보드는 이 세 가지를 한국 산업 특수성에 맞춰 통합한 첫 번째 플랫폼입니다. /vs 페이지 참조.",
  },
  {
    cat: "Product",
    q: "어떻게 콜드 스타트 문제를 해결합니까?",
    a: "창업자 김규린이 럭키참스를 통해 12년간 30+ 프로젝트, 50+ 협업 예술인, 20+ 글로벌 파트너의 운영 데이터를 보유합니다. 콜보드는 첫날부터 실데이터로 작동하는 플랫폼입니다.",
  },
  {
    cat: "Business",
    q: "수익 모델은?",
    a: "다층 수익 구조 — (1) 예술인 멤버십 Plus/Premium (₩9,900 · ₩29,000), (2) 제작사 Producer Tier (Custom), (3) 월간 산업 리포트 구독 (₩19,000), (4) Class 수강료, (5) Producer Index 우선 노출 광고.",
  },
  {
    cat: "Business",
    q: "3년 재무 전망은?",
    a: "2026 매출 ₩2억 / 영업이익 -₩1억, 2027 매출 ₩6억 / -₩0.5억, 2028 매출 ₩13억 / +₩4.5억. 2~3년 내 손익구조 안정화 목표. 자세한 가정은 Pitch Deck에 포함.",
  },
  {
    cat: "Team",
    q: "팀 구성은?",
    a: "CEO 김규린 (12년 프로듀싱), CTO 배상훈 (JINX Pick Someone · BONDIT 개발), CMO 박신영 (전 크래프톤 글로벌 PM), Product/UX 김정현 (Microsoft 6년). 평균 경력 15년 내외.",
  },
  {
    cat: "Team",
    q: "왜 김규린 대표가 이 일을 잘할 수 있나요?",
    a: "공연·영화·전시 12년 운영 경험 + Brooklyn College MFA + 상명대 연극과. Disney Concert Hall, 예술의전당, 브로드웨이 쇼케이스 등 글로벌 무대 운영 실적 보유. 산업 현장 페인 포인트를 가장 잘 아는 창업자입니다.",
  },
  {
    cat: "Traction",
    q: "지금까지 검증된 트랙션은?",
    a: "2026 동국대학교 캠퍼스타운 입주, SBA 서울경제진흥원 선정, 예술경영지원센터 초기창업지원 선정, 동국패밀리 기업. 정부·학계 인프라가 이미 검증한 스타트업입니다.",
  },
  {
    cat: "Exit",
    q: "Exit 전략은?",
    a: "(1) 글로벌 콘텐츠 그룹의 한국 진출 게이트웨이 — HYBE, CJ ENM, Kakao Ent 등 전략적 인수 시나리오. (2) 동남아·일본 확장 후 IPO. (3) 데이터 사업 분사 (B2B 리포트·API 비즈니스).",
  },
  {
    cat: "Funding",
    q: "현재 펀딩 단계는?",
    a: "Pre-Seed / Seed 라운드 진행 중. 자세한 조건과 자료는 ceo@callboard.kr로 문의 부탁드립니다.",
  },
];

export default function FAQ() {
  const cats = [...new Set(faqs.map((f) => f.cat))];
  return (
    <Layout title="FAQ" description="콜보드 투자자 FAQ. 시장·제품·비즈니스·팀·트랙션·Exit·펀딩.">
      <section className="section">
        <div className="container">
          <p className="eyebrow">( Investor FAQ )</p>
          <h1 className="h-hero">자주 받는 질문.</h1>
          <p style={{ fontSize: "1.02rem", maxWidth: 640, lineHeight: 1.65 }}>
            펀딩 미팅에서 가장 자주 나오는 11가지 질문. 자세한 답변은 Pitch Deck과 미팅에서 다룹니다.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          {cats.map((cat) => (
            <div key={cat} style={{ marginBottom: 64 }}>
              <p className="eyebrow" style={{ marginBottom: 24 }}>( {cat} )</p>
              <div style={{ borderTop: "2px solid var(--line-strong)" }}>
                {faqs.filter((f) => f.cat === cat).map((f, i) => (
                  <details key={i} style={{ borderBottom: "1px solid var(--line)", padding: "20px 0" }}>
                    <summary style={{ cursor: "pointer", fontSize: "1.05rem", fontWeight: 600, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
                      <span>{f.q}</span>
                      <span className="mono" style={{ color: "var(--red-live)", fontSize: "1.4rem", lineHeight: 1 }}>+</span>
                    </summary>
                    <p style={{ marginTop: 16, lineHeight: 1.7, color: "var(--ink-dim)" }}>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-dark text-center">
        <div className="container">
          <p className="eyebrow">( Still curious? )</p>
          <h2 className="h-section" style={{ color: "var(--ink-on-dark)" }}>
            Let's talk.
          </h2>
          <div className="btn-group" style={{ justifyContent: "center" }}>
            <Link href="/investors" className="btn" style={{ background: "var(--red-live)", borderColor: "var(--red-live)" }}>
              Schedule Meeting →
            </Link>
            <a href="mailto:ceo@callboard.kr" className="btn btn-outline" style={{ borderColor: "var(--ink-on-dark)", color: "var(--ink-on-dark)" }}>
              ceo@callboard.kr
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        details summary::-webkit-details-marker { display: none; }
        details[open] summary span:last-child { transform: rotate(45deg); transition: transform 0.2s; }
      `}</style>
    </Layout>
  );
}
