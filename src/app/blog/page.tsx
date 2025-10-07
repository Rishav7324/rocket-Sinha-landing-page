import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "@/lib/blog-posts";
import LegalLayout from "../legal-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

export const metadata = {
  title: "Blog | Rocket Signals",
  description: "Learn about binary trading, strategies, and market insights from the experts at Rocket Signals.",
};

const BlogPage = () => {
  const posts = getBlogPosts();

  return (
    <LegalLayout>
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Rocket Signals Blog
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
            Insights, strategies, and news on binary trading and financial markets.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 group-hover:shadow-primary/20 group-hover:shadow-lg group-hover:-translate-y-1">
                <CardHeader className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={post.image.imageHint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col p-6">
                  <div className="mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="mr-2">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="mb-2 text-xl leading-tight group-hover:text-primary">
                    {post.title}
                  </CardTitle>
                  <p className="flex-1 text-sm text-foreground/70">{post.summary}</p>
                  <div className="mt-4 flex items-center text-xs text-foreground/60">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>{post.readingTime} min read</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </LegalLayout>
  );
};

export default BlogPage;
