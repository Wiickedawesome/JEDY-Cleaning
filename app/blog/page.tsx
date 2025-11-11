import Link from 'next/link';

export const metadata = {
  title: 'Blog',
  description: 'Tips, checklists, and insights for a cleaner, happier home in Knoxville.'
};

const posts = [
  {
    slug: 'move-out-cleaning-checklist',
    title: 'The Ultimate Move-Out Cleaning Checklist',
    excerpt:
      'Make your move stress-free with this room-by-room checklist to help you get that deposit back and leave things spotless.',
    date: '2025-09-15',
    tag: 'Checklists',
    color: 'from-pink-50 to-cream-50',
    border: 'border-pink-200',
  },
  {
    slug: 'weekly-vs-biweekly-cleaning',
    title: 'Weekly vs. Bi-Weekly Cleaning: What\'s Right for You?',
    excerpt:
      'We break down the pros and cons so you can pick the cadence that fits your home, budget, and schedule.',
    date: '2025-10-02',
    tag: 'Guides',
    color: 'from-cream-50 to-pink-50',
    border: 'border-pink-200',
  },
  {
    slug: 'kid-and-pet-safe-products',
    title: 'Kid- and Pet-Safe Cleaning Products We Love',
    excerpt:
      'Our favorite gentle products that are effective, safe, and smell amazing—perfect for families.',
    date: '2025-10-28',
    tag: 'Recommendations',
    color: 'from-cream-100 to-pink-50',
    border: 'border-pink-200',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-cream-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-pink-600 via-pink-700 to-brown-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="relative max-w-6xl mx-auto px-4 text-center z-10">
          <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-semibold tracking-wide mb-6">
            TIPS • GUIDES • CHECKLISTS
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">Blog</h1>
          <p className="text-xl md:text-2xl text-cream-100 max-w-3xl mx-auto">
            Practical advice and local insights from the JEDY Cleaning team in Knoxville
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="relative py-20">
        <div className="absolute inset-0 pattern-grid" />
        <div className="relative max-w-6xl mx-auto px-4 z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className={`relative bg-gradient-to-br ${post.color} rounded-2xl border-2 ${post.border} shadow-warm p-8 hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-2 group overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white to-transparent opacity-50 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-sm text-brown-700 mb-4">
                    <span className="inline-block px-3 py-1 bg-white/70 rounded-full border border-pink-200 font-semibold tracking-wide">
                      {post.tag}
                    </span>
                    <time className="opacity-70" dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </time>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-brown-900 mb-3">{post.title}</h2>
                  <p className="text-brown-700 mb-6 leading-relaxed">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block text-pink-600 font-semibold hover:text-pink-700 transition-colors"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-pink-600 via-pink-700 to-brown-800 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Have a topic you want us to cover?</h2>
          <p className="text-xl mb-10 text-cream-100 max-w-2xl mx-auto">
            Tell us what cleaning challenges you're dealing with—we'll write a guide and send it to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-pink-600 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-cream-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-white"
            >
              Request a topic →
            </a>
            <a
              href="tel:8653332637"
              className="bg-brown-800 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-brown-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-brown-700"
            >
              📞 Call (865) 333-2637
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
