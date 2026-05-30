import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/site-data";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/ui/section";
import { AnimateInView } from "@/components/ui/animate-in-view";

export const metadata: Metadata = {
  title: "Blog & News",
  description:
    "Parenting tips, child development insights, and local family activities from Birch Learning Academy in Johnson County, Kansas.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog & News"
        subtitle="Insights for Johnson County families"
      />

      <Section background="cream">
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <AnimateInView key={post.slug} delay={index * 0.08}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-birch/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-sage bg-sage/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-charcoal/50">{post.readTime}</span>
                    </div>
                    <h2 className="font-serif text-xl text-charcoal mb-2 group-hover:text-sage transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-charcoal/70 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-sage font-medium text-sm">
                      Read More
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </article>
              </Link>
            </AnimateInView>
          ))}
        </div>
      </Section>
    </>
  );
}
