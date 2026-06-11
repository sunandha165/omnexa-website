import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const tickerItems = [
  "Technical SEO",
  "Keyword Research",
  "On-Page SEO",
  "Link Building",
  "Content Strategy",
  "Local SEO",
  "Google Analytics",
  "Schema Markup",
];
const faqs = [
  {
    question: "How long does SEO take?",
    answer:
      "Most websites start seeing measurable SEO improvements within 3 to 6 months."
  },
  {
    question: "Do you guarantee #1 rankings?",
    answer:
      "No ethical SEO agency can guarantee rankings. We focus on sustainable growth."
  },
  {
    question: "Is SEO better than Google Ads?",
    answer:
      "SEO builds long-term organic traffic while Ads provide immediate visibility."
  },
  {
    question: "Do you provide monthly reports?",
    answer:
      "Yes. We provide detailed reports covering traffic, rankings and conversions."
  }
];
export default function SEOOptimization() {
  const [scrolled, setScrolled] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
    


      {/* HERO */}
      <section className="bg-black min-h-screen flex items-center relative overflow-hidden pt-24">

        {/* Background Text */}
        <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 text-[180px] md:text-[250px] font-black text-white/5 select-none">
          SEO
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>

              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-gray-500"></span>

                <p className="uppercase tracking-[0.25em] text-xs text-gray-400 font-semibold">
                  Search Engine Optimization
                </p>
              </div>

              <h1 className="text-5xl lg:text-7xl font-black text-white leading-none mb-8">
                Rank Higher.
                <br />

                <span className="text-gray-500 font-light">
                  Get Found First.
                </span>

                <br />
                Grow Faster.
              </h1>

              <p className="text-gray-400 text-xl leading-relaxed max-w-xl mb-10">
                Most businesses are invisible on Google.
                We change that with data-driven SEO that
                moves you from page 3 to position 1 and
                keeps you there.
              </p>

              <div className="flex flex-wrap gap-4">

                <button className="px-8 py-4 border border-white rounded-full text-white hover:bg-white hover:text-black transition">
                  Get Free Audit →
                </button>

                <button
                  onClick={() => {
                    document
                      .getElementById("results")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                  className="text-gray-400 hover:text-white transition"
                >
                  See Results ↓
                </button>

              </div>
            </div>

            {/* RIGHT SERP CARD */}
            <div className="hidden lg:block">

              <div className="bg-white rounded-xl overflow-hidden shadow-2xl">

                <div className="bg-gray-100 p-4 border-b flex items-center gap-3">

                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>

                  <div className="flex-1 bg-white border rounded px-4 py-2 text-xs text-gray-500">
                    google.com/search?q=best+spice+brand
                  </div>
                </div>

                <div className="p-6">

                  <p className="uppercase text-xs font-semibold tracking-wider text-gray-500 mb-4">
                    Google Search Results
                  </p>

                  <div className="bg-green-50 border rounded-lg p-4 mb-3">

                    <div className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded mb-3">
                      ↑ Moved from #8 to #1
                    </div>

                    <h3 className="text-blue-700 font-semibold">
                      Addanki FMCG & Spices
                    </h3>

                    <p className="text-green-700 text-sm">
                      afsplcom.com
                    </p>

                    <p className="text-gray-500 text-sm mt-2">
                      Premium spice blends trusted by
                      thousands of customers.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4 opacity-50 mb-2">
                    Competitor Brand #2
                  </div>

                  <div className="border rounded-lg p-4 opacity-40">
                    Competitor Brand #3
                  </div>

                  <div className="flex items-center gap-3 mt-6 text-sm">

                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded">
                      Was #8
                    </span>

                    →

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded">
                      Now #1
                    </span>

                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* TICKER */}
      <section className="border-y overflow-hidden">

        <div className="flex gap-12 py-4 whitespace-nowrap animate-pulse">

          {tickerItems.map((item, index) => (
            <span
              key={index}
              className="uppercase text-sm text-gray-500 font-medium"
            >
              {item}
            </span>
          ))}

        </div>

      </section>
            {/* WHAT IS SEO */}
      <section className="py-32 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl">

            <span className="uppercase tracking-[0.25em] text-xs text-gray-500 font-semibold">
              Why SEO Matters
            </span>

            <h2 className="text-5xl lg:text-6xl font-black mt-6 mb-8">
              Visibility Creates
              <br />
              Revenue.
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              SEO is not about rankings alone.
              It's about becoming visible when your
              ideal customer is actively searching for
              your product or service.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">

            <div className="p-8 border rounded-3xl">
              <div className="text-5xl font-black mb-4">
                01
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Get Discovered
              </h3>

              <p className="text-gray-600">
                Appear when customers search
                for products and services related
                to your business.
              </p>
            </div>

            <div className="p-8 border rounded-3xl">
              <div className="text-5xl font-black mb-4">
                02
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Build Trust
              </h3>

              <p className="text-gray-600">
                Ranking higher increases authority
                and customer confidence.
              </p>
            </div>

            <div className="p-8 border rounded-3xl">
              <div className="text-5xl font-black mb-4">
                03
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Generate Leads
              </h3>

              <p className="text-gray-600">
                Turn search traffic into inquiries,
                sales and long-term growth.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* SEO PILLARS */}
      <section className="py-32 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="uppercase tracking-[0.25em] text-xs text-gray-500 font-semibold">
              Our Framework
            </span>

            <h2 className="text-5xl font-black mt-6">
              The 3 SEO Pillars
            </h2>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="bg-white p-10 rounded-3xl">

              <div className="text-6xl mb-6">
                ⚙️
              </div>

              <h3 className="text-3xl font-bold mb-4">
                Technical SEO
              </h3>

              <p className="text-gray-600 mb-6">
                Improve site speed, indexing,
                crawling, schema markup and
                technical performance.
              </p>

              <ul className="space-y-3 text-gray-600">
                <li>✓ Site Speed</li>
                <li>✓ Core Web Vitals</li>
                <li>✓ Schema Markup</li>
                <li>✓ Mobile Optimization</li>
              </ul>

            </div>

            <div className="bg-white p-10 rounded-3xl">

              <div className="text-6xl mb-6">
                ✍️
              </div>

              <h3 className="text-3xl font-bold mb-4">
                Content SEO
              </h3>

              <p className="text-gray-600 mb-6">
                Create content that matches
                search intent and attracts
                qualified visitors.
              </p>

              <ul className="space-y-3 text-gray-600">
                <li>✓ Keyword Research</li>
                <li>✓ Blog Strategy</li>
                <li>✓ Landing Pages</li>
                <li>✓ Content Optimization</li>
              </ul>

            </div>

            <div className="bg-white p-10 rounded-3xl">

              <div className="text-6xl mb-6">
                🔗
              </div>

              <h3 className="text-3xl font-bold mb-4">
                Authority SEO
              </h3>

              <p className="text-gray-600 mb-6">
                Build credibility and domain
                authority through quality links.
              </p>

              <ul className="space-y-3 text-gray-600">
                <li>✓ Link Building</li>
                <li>✓ PR Outreach</li>
                <li>✓ Brand Mentions</li>
                <li>✓ Authority Growth</li>
              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* BENEFITS */}
      <section className="py-32 bg-black text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <span className="uppercase tracking-[0.25em] text-xs text-gray-500">
                Benefits
              </span>

              <h2 className="text-5xl lg:text-6xl font-black mt-6 mb-8">
                Why Businesses
                <br />
                Invest In SEO
              </h2>

              <p className="text-xl text-gray-400 leading-relaxed">
                Unlike paid ads, SEO compounds.
                Every improvement creates long-term
                visibility and sustainable growth.
              </p>

            </div>

            <div className="space-y-8">

              <div className="border-b border-white/10 pb-8">
                <h3 className="text-2xl font-bold mb-3">
                  More Organic Traffic
                </h3>

                <p className="text-gray-400">
                  Reach customers without paying
                  for every click.
                </p>
              </div>

              <div className="border-b border-white/10 pb-8">
                <h3 className="text-2xl font-bold mb-3">
                  Better Quality Leads
                </h3>

                <p className="text-gray-400">
                  Attract visitors already looking
                  for your solutions.
                </p>
              </div>

              <div className="border-b border-white/10 pb-8">
                <h3 className="text-2xl font-bold mb-3">
                  Higher Conversions
                </h3>

                <p className="text-gray-400">
                  Improved visibility builds trust
                  and drives action.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Long-Term ROI
                </h3>

                <p className="text-gray-400">
                  SEO continues generating value
                  long after implementation.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>
            {/* SEO SERVICES */}
      <section className="py-32 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="uppercase tracking-[0.25em] text-xs text-gray-500 font-semibold">
              Services
            </span>

            <h2 className="text-5xl font-black mt-6">
              Complete SEO Services
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="border rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Technical SEO
              </h3>

              <p className="text-gray-600">
                Site audits, Core Web Vitals,
                schema implementation and indexing fixes.
              </p>
            </div>

            <div className="border rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Keyword Research
              </h3>

              <p className="text-gray-600">
                Discover high-intent keywords that drive
                qualified traffic.
              </p>
            </div>

            <div className="border rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                On-Page SEO
              </h3>

              <p className="text-gray-600">
                Optimize titles, content, metadata and
                internal linking.
              </p>
            </div>

            <div className="border rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Content Strategy
              </h3>

              <p className="text-gray-600">
                Create SEO-focused content that attracts
                and converts visitors.
              </p>
            </div>

            <div className="border rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Local SEO
              </h3>

              <p className="text-gray-600">
                Improve local visibility through Google
                Business Profile optimization.
              </p>
            </div>

            <div className="border rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Link Building
              </h3>

              <p className="text-gray-600">
                Build authority through quality backlinks
                and digital PR.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="py-32 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="uppercase tracking-[0.25em] text-xs text-gray-500 font-semibold">
              Process
            </span>

            <h2 className="text-5xl font-black mt-6">
              Our SEO Process
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-10">

            <div>
              <div className="text-6xl font-black text-gray-300 mb-4">
                01
              </div>

              <h3 className="text-xl font-bold mb-3">
                Audit
              </h3>

              <p className="text-gray-600">
                Analyze your website and identify opportunities.
              </p>
            </div>

            <div>
              <div className="text-6xl font-black text-gray-300 mb-4">
                02
              </div>

              <h3 className="text-xl font-bold mb-3">
                Strategy
              </h3>

              <p className="text-gray-600">
                Build a custom SEO roadmap based on goals.
              </p>
            </div>

            <div>
              <div className="text-6xl font-black text-gray-300 mb-4">
                03
              </div>

              <h3 className="text-xl font-bold mb-3">
                Optimization
              </h3>

              <p className="text-gray-600">
                Implement technical, content and authority improvements.
              </p>
            </div>

            <div>
              <div className="text-6xl font-black text-gray-300 mb-4">
                04
              </div>

              <h3 className="text-xl font-bold mb-3">
                Growth
              </h3>

              <p className="text-gray-600">
                Monitor rankings and continuously improve performance.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CASE STUDY */}
      <section className="py-32 bg-black text-white">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <span className="uppercase tracking-[0.25em] text-xs text-gray-500">
            Case Study
          </span>

          <h2 className="text-5xl lg:text-6xl font-black mt-6 mb-12">
            From Page 3
            <br />
            To Position #1
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/5 rounded-3xl p-8">
              <h3 className="text-5xl font-black mb-4">
                #8
              </h3>

              <p className="text-gray-400">
                Starting Position
              </p>
            </div>

            <div className="bg-white/5 rounded-3xl p-8">
              <h3 className="text-5xl font-black mb-4">
                #1
              </h3>

              <p className="text-gray-400">
                Current Position
              </p>
            </div>

            <div className="bg-white/5 rounded-3xl p-8">
              <h3 className="text-5xl font-black mb-4">
                +340%
              </h3>

              <p className="text-gray-400">
                Organic Traffic
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* RESULTS */}
      <section
        id="results"
        className="py-32 bg-white"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="uppercase tracking-[0.25em] text-xs text-gray-500 font-semibold">
              Results
            </span>

            <h2 className="text-5xl font-black mt-6">
              Numbers That Matter
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="text-center">
              <h3 className="text-6xl font-black mb-3">
                250%
              </h3>

              <p className="text-gray-600">
                Average Traffic Growth
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-6xl font-black mb-3">
                100+
              </h3>

              <p className="text-gray-600">
                Keywords Ranked
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-6xl font-black mb-3">
                40+
              </h3>

              <p className="text-gray-600">
                SEO Audits Completed
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-6xl font-black mb-3">
                95%
              </h3>

              <p className="text-gray-600">
                Client Retention
              </p>
            </div>

          </div>

        </div>

      </section>
            {/* FAQ */}
      <section className="py-32 bg-gray-50">

        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="uppercase tracking-[0.25em] text-xs text-gray-500 font-semibold">
              FAQ
            </span>

            <h2 className="text-5xl font-black mt-6">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="space-y-4">

            {faqs.map((faq, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl border overflow-hidden"
              >

                <button
                  onClick={() =>
                    setOpenFAQ(
                      openFAQ === index ? null : index
                    )
                  }
                  className="w-full text-left p-8 flex justify-between items-center"
                >

                  <span className="font-bold text-lg">
                    {faq.question}
                  </span>

                  <span className="text-2xl">
                    {openFAQ === index ? "−" : "+"}
                  </span>

                </button>

                {openFAQ === index && (

                  <div className="px-8 pb-8 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">

        <div className="max-w-5xl mx-auto text-center px-6">

          <span className="uppercase tracking-[0.25em] text-xs text-gray-500">
            Ready To Grow?
          </span>

          <h2 className="text-5xl lg:text-7xl font-black mt-6 mb-8">

            Let's Put Your
            <br />
            Business On
            <br />
            Page One.

          </h2>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Get a free SEO audit and discover exactly
            what's holding your website back from ranking.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <button className="px-10 py-5 bg-white text-black rounded-full font-bold">
              Get Free SEO Audit
            </button>

            <button className="px-10 py-5 border border-white rounded-full font-bold">
              Schedule Consultation
            </button>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}