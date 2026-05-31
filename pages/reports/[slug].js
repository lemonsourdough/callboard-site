import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllPosts, getPostBySlug, getPostSlugs, markdownToHtml } from "../../lib/posts";

export default function Report({ post }) {
  if (!post) return null;
  return (
    <Layout title={post.title} description={post.excerpt}>
      <article className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <Link href="/reports" className="mono ink-dim" style={{ fontSize: "0.82rem" }}>
            ← All Reports
          </Link>
          <p className="eyebrow" style={{ marginTop: 24 }}>
            ( {post.issue || "REPORT"} · {post.date} )
          </p>
          <h1 className="h-hero" style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)" }}>{post.title}</h1>
          <p style={{ fontSize: "1.05rem", color: "var(--ink-dim)", lineHeight: 1.7, marginBottom: 32 }}>
            {post.excerpt}
          </p>

          {post.pdf && (
            <a href={post.pdf} target="_blank" rel="noreferrer" className="btn" style={{ marginBottom: 48 }}>
              PDF 다운로드 ({post.pages || "—"}p) →
            </a>
          )}

          <hr className="divider-strong" />

          <div
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      <style jsx global>{`
        .markdown-content {
          font-size: 1.02rem;
          line-height: 1.8;
          color: var(--ink);
        }
        .markdown-content h2 {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 700;
          margin: 48px 0 16px;
          letter-spacing: -0.01em;
        }
        .markdown-content h3 {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 600;
          margin: 32px 0 12px;
        }
        .markdown-content p { margin: 0 0 20px; }
        .markdown-content ul, .markdown-content ol {
          margin: 0 0 20px;
          padding-left: 28px;
        }
        .markdown-content li { margin: 6px 0; }
        .markdown-content blockquote {
          margin: 24px 0;
          padding: 16px 24px;
          border-left: 3px solid var(--red-live);
          background: var(--bg-secondary);
          font-style: italic;
        }
        .markdown-content code {
          font-family: var(--font-mono);
          background: var(--accent-soft);
          padding: 2px 6px;
          font-size: 0.92em;
        }
        .markdown-content pre {
          background: var(--ink);
          color: var(--ink-on-dark);
          padding: 20px;
          overflow-x: auto;
          font-family: var(--font-mono);
          font-size: 0.86rem;
        }
        .markdown-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 24px 0;
        }
        .markdown-content th, .markdown-content td {
          padding: 12px;
          border-bottom: 1px solid var(--line);
          text-align: left;
        }
        .markdown-content th {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--ink-dim);
        }
        .markdown-content hr {
          border: none;
          height: 1px;
          background: var(--line);
          margin: 32px 0;
        }
        .markdown-content a {
          color: var(--blue-info);
          text-decoration: underline;
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticPaths() {
  const slugs = getPostSlugs("reports");
  return {
    paths: slugs.map((s) => ({ params: { slug: s.replace(/\.md$/, "") } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug("reports", params.slug, [
    "title", "date", "excerpt", "issue", "pages", "pdf", "content",
  ]);
  if (!post) return { notFound: true };
  post.content = await markdownToHtml(post.content || "");
  return { props: { post } };
}
