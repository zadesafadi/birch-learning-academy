import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/site-data";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <div className="relative pt-32 pb-12">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <span className="inline-block text-xs font-medium text-amber bg-amber/20 px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-medium mb-4">
            {post.title}
          </h1>
          <p className="text-white/70 text-sm">
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}{" "}
            · {post.readTime}
          </p>
        </div>
      </div>

      <Section background="cream">
        <article className="max-w-3xl mx-auto prose prose-lg prose-charcoal">
          <p className="text-xl text-charcoal/80 leading-relaxed font-medium">
            {post.excerpt}
          </p>
          <div className="mt-8 space-y-4 text-charcoal/70 leading-relaxed">
            <p>
              Choosing the right early learning environment is one of the most important
              decisions you&apos;ll make as a parent. In Johnson County, families are
              fortunate to have many options — but not all centers are created equal.
            </p>
            <p>
              At Birch Learning Academy, we believe transparency builds trust. That&apos;s
              why we share our philosophy, our pricing, and our practices openly. We invite
              you to tour our campus, meet our teachers, and see the difference a
              boutique, nature-inspired approach makes.
            </p>
            <p>
              Whether you&apos;re exploring preschool in Overland Park, Leawood,
              or Pre-K programs across the Kansas City metro, we hope
              this resource helps you make an informed, confident choice for your family.
            </p>
          </div>
        </article>

        <div className="max-w-3xl mx-auto mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sage font-medium hover:text-sage-dark transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <Button href="/contact">Schedule a Tour</Button>
        </div>
      </Section>
    </>
  );
}
