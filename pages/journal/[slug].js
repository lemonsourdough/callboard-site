import Link from "next/link";
import Layout from "../../components/Layout";
import { getPostBySlug, getPostSlugs, markdownToHtml } from "../../lib/posts";

export default function JournalPost({ post }) {
  if (!post) return null;
  return (
    <Layout title={post.title} description={post.excerpt}>
      <article className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <Link href="/journal" className="mono ink-dim" style={{ fontSize: "0.82rem" }}>
            ← Journal
          </Link>
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginTop: 24, marginBottom: 16 }}>
            <span className="badge badge-outline">{post.category || "POST"}</span>
            <span className="mono ink-dim" style={{ fontSize: "0.82rem" }}>{post.date}</span>
            {post.author && (
              <>
                <span className="mono ink-dim" style={{ fontSize: "0.82rem" }}>· {post.author}</span>
              </>
            )}
          </div>
          <h1 className="h-hero" style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)" }}>{post.title}</h1>
          {post.excerpt && (
            <p style={{ fontSize: "1.1rem", color: "var(--ink-dim)", lineHeight: 1.7, marginBottom: 40 }}>
              {post.excerpt}
            </p>
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
          font-size: 1.04rem;
          line-height: 1.85;
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
        .markdown-content a {
          color: var(--blue-info);
          text-decoration: underline;
        }
        .markdown-content hr {
          border: none;
          height: 1px;
          background: var(--line);
          margin: 32px 0;
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticPaths() {
  const slugs = getPostSlugs("journal");
  return {
    paths: slugs.map((s) => ({ params: { slug: s.replace(/\.md$/, "") } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug("journal", params.slug, [
    "title", "date", "excerpt", "category", "author", "content",
  ]);
  if (!post) return { notFound: true };
  post.content = await markdownToHtml(post.content || "");
  return { props: { post } };
}
