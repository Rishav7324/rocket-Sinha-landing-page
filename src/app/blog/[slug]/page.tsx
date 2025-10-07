import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog-posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import LegalLayout from "@/app/legal-layout";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: `${post.title} | Rocket Signals Blog`,
    description: post.summary,
  };
}

const BlogPostPage = ({ params }: BlogPostPageProps) => {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <LegalLayout>
      <article className="prose prose-invert mx-auto max-w-3xl">
        <div className="mb-8">
          <Link
            href="/blog"
            className="flex items-center text-primary hover:text-primary/80 no-underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>
        <div className="relative mb-8 h-64 w-full overflow-hidden rounded-lg md:h-96">
          <Image
            src={post.image.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
            data-ai-hint={post.image.imageHint}
          />
        </div>
        <div className="mb-4 flex items-center space-x-4 text-sm text-foreground/60">
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            <span>{post.readingTime} min read</span>
          </div>
          <div className="flex items-center">
            <Tag className="mr-2 h-4 w-4" />
            <span>{post.tags.join(", ")}</span>
          </div>
        </div>
        <h1>{post.title}</h1>
        <p className="lead">{post.summary}</p>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </article>
    </LegalLayout>
  );
};

export default BlogPostPage;
