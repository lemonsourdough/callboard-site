import { useEffect, useState } from "react";

export default function LiveTicker() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const opts = {
        timeZone: "Asia/Seoul",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      const formatted = new Intl.DateTimeFormat("ko-KR", opts).format(now);
      setTime(formatted.replace(/\. /g, ".").replace(/\./g, "."));
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  const items = [
    "CALLBOARD INDEX",
    `${time || "—"} KST`,
    "신규 공고 38",
    "진행 오디션 241",
    "매칭 성사 892 MTD",
    "뮤지컬 수요 ↑ 28% YoY",
    "댄스/아이돌 ↑ 41% YoY",
    "표준계약서 채택 94.2%",
    "평균 정산 21일",
    "검증 제작사 1,284",
    "활성 예술인 47,219",
  ];

  return (
    <div className="live-ticker">
      <div className="live-ticker-track">
        {[...items, ...items].map((item, i) => (
          <span key={i}>
            {i === 0 && <span className="live-ticker-dot" />}
            <span>{item}</span>
            <span className="sep">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
