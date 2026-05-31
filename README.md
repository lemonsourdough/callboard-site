# Callboard — Site

콜보드 공식 웹사이트. Next.js 기반 정적 사이트.

## 📦 파일 구조

```
callboard-site/
├── pages/                     # 각 페이지
│   ├── index.js              # 홈 (랜딩)
│   ├── index-page.js         # /index-page (데이터 터미널)
│   ├── product.js            # 제품 5개 모듈
│   ├── pricing.js            # 멤버십 4개 플랜
│   ├── about.js              # 회사 소개
│   ├── case-study.js         # 럭키참스 케이스 스터디
│   ├── vs.js                 # 경쟁사 비교
│   ├── faq.js                # 투자자 FAQ
│   ├── investors.js          # 투자자 페이지
│   ├── press.js              # 보도자료
│   ├── reports/
│   │   ├── index.js          # 보고서 리스트
│   │   └── [slug].js         # 개별 보고서
│   └── journal/
│       ├── index.js          # 아티클 리스트
│       └── [slug].js         # 개별 아티클
│
├── content/                   # 마크다운 콘텐츠
│   ├── reports/              # 산업 보고서 .md 파일
│   └── journal/              # 아티클 .md 파일
│
├── components/                # 공통 컴포넌트
├── lib/                       # 마크다운 처리 함수
├── public/                    # 정적 파일 (이미지·PDF)
└── styles/                    # CSS
    ├── theme.css             # 3개 테마 (a/b/c)
    └── globals.css           # 글로벌 스타일
```

## 🎨 디자인 테마 전환

3개의 시안이 한 파일에 있음. URL 끝에 `?theme=b` 또는 `?theme=c` 붙이면 전환됨.

- `?theme=a` — 강한 노랑 (기본, IR 덱 무드)
- `?theme=b` — 옅은 노랑 + 흰 카드 (블룸버그 무드)
- `?theme=c` — 거의 흰색 + 노랑 액센트 (B2B 진중)

본인이 보고 결정한 다음, `pages/_document.js`의 `data-theme="a"`만 바꾸면 영구 적용됨.

## 🚀 배포

### 1) GitHub 새 저장소 만들기

- https://github.com/new
- 이름: `callboard-site` (또는 원하는 이름)
- Private 추천
- 체크박스 모두 끄기

### 2) 파일 업로드

- "uploading an existing file" 클릭
- 이 폴더의 **모든 파일**을 드래그앤드롭
- ⚠️ `node_modules/`는 절대 업로드하지 말 것 (없음)
- Commit changes

### 3) Vercel 배포

- https://vercel.com → Add New → Project
- 방금 만든 GitHub 저장소 Import
- Framework Preset: **Next.js** (자동 감지됨)
- 추가 설정 없이 **Deploy**
- 1~2분 후 `callboard-site.vercel.app` 같은 주소로 살아남

### 4) 도메인 연결 (나중에)

`callboard.kr` 도메인 등록 후 Vercel Settings → Domains에서 연결.

## ✏️ 콘텐츠 발행 (마크다운)

### 새 산업 보고서 발행

1. `content/reports/` 폴더에 새 `.md` 파일 만들기 (예: `2026-q2-industry-report.md`)
2. 파일 맨 위에 메타데이터:
   ```yaml
   ---
   title: "ISSUE #047 — 경력 인증 뱃지가 바꾼 12개월"
   date: "2026-05-10"
   issue: "ISSUE #047"
   pages: 64
   pdf: "/pdfs/issue-047.pdf"
   excerpt: "표준계약서 채택률이 94%를 넘어선 시점, 캐스팅 디렉터 12명이 말하는 데이터 기반 신뢰의 변화."
   ---
   ```
3. 그 아래에 본문 (마크다운)
4. PDF 파일은 `public/pdfs/` 폴더에 업로드
5. GitHub에 commit → 1~2분 후 자동 반영

샘플은 `content/reports/_sample.md.example` 참조.

### 새 아티클 발행

1. `content/journal/` 폴더에 새 `.md` 파일
2. 메타데이터:
   ```yaml
   ---
   title: "표준계약서 94% 돌파 — 12개월간 무슨 일이"
   date: "2026-05-25"
   category: "TREND"
   author: "콜보드 팀"
   excerpt: "..."
   ---
   ```
3. 본문 작성 → GitHub commit

샘플은 `content/journal/_sample.md.example` 참조.

## 🔧 로컬 개발 (선택)

만약 본인이 컴퓨터에서 미리 보고 싶으면:

```bash
npm install
npm run dev
```

`http://localhost:3000` 에서 미리보기 가능. 변경하면 자동 새로고침.

## 📞 문의

대표이사 김규린 — ceo@callboard.kr
