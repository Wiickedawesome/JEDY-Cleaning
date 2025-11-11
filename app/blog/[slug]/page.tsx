import Link from 'next/link';
import { notFound } from 'next/navigation';

const posts = [
  {
    slug: 'move-out-cleaning-checklist',
    title: 'The Ultimate Move-Out Cleaning Checklist',
    content: `\
Moving is stressful enough—cleaning shouldn’t make it harder. Use this simple, room-by-room checklist to leave your place spotless and ready for inspection.\n\n• Kitchen: Inside fridge, oven, microwave; cabinets wiped; counters sanitized; floors mopped.\n• Bathrooms: Scrub showers/tubs, toilets, grout; mirrors and fixtures polished; floors sanitized.\n• Living areas: Dust baseboards, blinds, fans; vacuum and mop; spot-clean walls and doors.\n• Bedrooms: Wipe closets and shelves; clean windows; vacuum under beds and in corners.\n\nWant us to handle it end-to-end? We offer dedicated move-in/out packages tailored to your timeline.`,
    date: '2025-09-15',
    tag: 'Checklists',
  },
  {
    slug: 'weekly-vs-biweekly-cleaning',
    title: 'Weekly vs. Bi-Weekly Cleaning: What’s Right for You?',
    content: `\
The right cadence depends on your lifestyle, home size, and budget.\n\nWeekly works best for busy households with kids or pets. Bi-weekly is a great balance for smaller homes or lighter traffic. We can help you choose and adjust anytime.`,
    date: '2025-10-02',
    tag: 'Guides',
  },
  {
    slug: 'kid-and-pet-safe-products',
    title: 'Kid- and Pet-Safe Cleaning Products We Love',
    content: `\
We favor gentle, effective products with low fragrance and safe ingredients. Ask us about our default options or request a custom product list—we’re happy to accommodate sensitivities.`,
    date: '2025-10-28',
    tag: 'Recommendations',
  },
];

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-cream-50">
      <section className="bg-gradient-to-br from-sage-900 to-sage-800 text-cream-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 text-sm text-cream-200/80 mb-4">
            <Link href="/blog" className="hover:text-white transition-colors">← Back to Blog</Link>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span>•</span>
            <span>{post.tag}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold">{post.title}</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg max-w-none text-sage-800">
            {post.content.split('\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </article>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:8653332637"
              className="bg-white text-terracotta-600 hover:bg-cream-50 border-2 border-terracotta-600 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              📞 (865) 333-2637
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
