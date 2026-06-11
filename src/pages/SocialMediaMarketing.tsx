import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaCamera,
} from "react-icons/fa";

export default function SocialMediaMarketing() {
  const [selectedReel, setSelectedReel] = useState(0);

  const reels = [
    {
      title: "Product Launch Reel",
      views: "3.2M",
      likes: "120K",
    },
    {
      title: "Brand Story Reel",
      views: "1.8M",
      likes: "82K",
    },
    {
      title: "Customer Review Reel",
      views: "920K",
      likes: "41K",
    },
    {
      title: "Behind The Scenes",
      views: "640K",
      likes: "25K",
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}

      <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">

        {/* Background Glow */}

        <div className="absolute w-[700px] h-[700px] bg-white/5 rounded-full blur-[180px]" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">

          {/* LEFT SIDE */}

          <div>

            <span className="uppercase tracking-[0.35em] text-gray-500 text-sm">
              Social Media Marketing
            </span>

            <h1 className="text-5xl lg:text-7xl font-black text-white leading-none mt-6 mb-8">
              Turn Followers
              <br />
              Into
              <span className="block text-gray-400">
                Customers
              </span>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
              Social media is no longer just a place to post content.

              It is where customers discover brands,
              build trust, compare options, and make
              buying decisions.

              We help businesses grow through content
              strategy, reels, creative design,
              audience engagement, and consistent
              brand storytelling.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <button className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition">
                Book Free Consultation
              </button>

              <button className="px-8 py-4 border border-white text-white rounded-full font-semibold">
                View Portfolio
              </button>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="relative flex justify-center items-center h-[700px]">

            {/* FLOATING INSTAGRAM */}

            <motion.div
              animate={{
                y: [-20, 20, -20],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute top-12 left-0 bg-white text-black px-6 py-4 rounded-3xl shadow-2xl z-20"
            >
              <FaInstagram size={28} />
              <p className="font-bold mt-2">
                Instagram Growth
              </p>
            </motion.div>

            {/* FLOATING FACEBOOK */}

            <motion.div
              animate={{
                y: [20, -20, 20],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute top-24 right-0 bg-white text-black px-6 py-4 rounded-3xl shadow-2xl z-20"
            >
              <FaFacebook size={28} />
              <p className="font-bold mt-2">
                Brand Reach
              </p>
            </motion.div>

            {/* FLOATING REELS */}

            <motion.div
              animate={{
                y: [-15, 15, -15],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
              }}
              className="absolute bottom-20 left-0 bg-white text-black px-6 py-4 rounded-3xl shadow-2xl z-20"
            >
              <FaCamera size={28} />
              <p className="font-bold mt-2">
                Viral Reels
              </p>
            </motion.div>

            {/* FLOATING YOUTUBE */}

            <motion.div
              animate={{
                y: [15, -15, 15],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute bottom-16 right-0 bg-white text-black px-6 py-4 rounded-3xl shadow-2xl z-20"
            >
              <FaYoutube size={28} />
              <p className="font-bold mt-2">
                Video Marketing
              </p>
            </motion.div>

            {/* 3D MOBILE */}

            <motion.div
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="relative w-[280px] h-[560px] rounded-[45px] bg-gradient-to-b from-zinc-900 to-black border border-zinc-700 shadow-[0_0_50px_rgba(255,255,255,0.08)] overflow-hidden"
            >

              {/* NOTCH */}

              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[30px] bg-black rounded-b-3xl z-20" />

              {/* SCREEN */}

              <div className="absolute inset-3 rounded-[35px] bg-white overflow-hidden">

                {/* HEADER */}

                <div className="bg-black text-white p-4">

                  <h3 className="font-bold text-lg">
                    OMNEXA Media
                  </h3>

                  <p className="text-xs text-gray-400">
                    Social Growth Dashboard
                  </p>

                </div>

                {/* REELS FEED */}

                <motion.div
                  animate={{
                    y: [0, -300, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="p-4 space-y-4"
                >

                  {reels.map((reel, index) => (
                    <div
                      key={index}
                      className="bg-black text-white rounded-2xl p-4"
                    >
                      <div className="h-28 bg-zinc-800 rounded-xl mb-3 flex items-center justify-center">
                        REEL
                      </div>

                      <h4 className="font-bold text-sm">
                        {reel.title}
                      </h4>

                      <div className="flex justify-between mt-2 text-xs text-gray-400">
                        <span>{reel.views} Views</span>
                        <span>{reel.likes} Likes</span>
                      </div>
                    </div>
                  ))}

                </motion.div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>
            {/* WHY SOCIAL MEDIA */}

      <section className="py-32 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              <span className="uppercase tracking-[0.3em] text-gray-500 text-sm">
                Why Social Media Matters
              </span>

              <h2 className="text-5xl lg:text-6xl font-black text-black mt-6 mb-8">
                Your Customers
                <br />
                Already Live
                <span className="block text-gray-400">
                  On Social Media
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                More than 5 billion people use social media every day.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Before buying, customers check your Instagram,
                Facebook, LinkedIn, and online presence.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                A strong social media strategy builds trust,
                creates awareness, and turns attention into sales.
              </p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              <div className="bg-black rounded-[40px] p-10 text-white">

                <h3 className="text-4xl font-black mb-8">
                  Growth Funnel
                </h3>

                <div className="space-y-6">

                  <div className="text-center">
                    <div className="bg-white text-black py-4 rounded-2xl font-bold">
                      Content
                    </div>
                  </div>

                  <div className="text-center text-4xl">
                    ↓
                  </div>

                  <div className="text-center">
                    <div className="bg-white text-black py-4 rounded-2xl font-bold">
                      Engagement
                    </div>
                  </div>

                  <div className="text-center text-4xl">
                    ↓
                  </div>

                  <div className="text-center">
                    <div className="bg-white text-black py-4 rounded-2xl font-bold">
                      Trust
                    </div>
                  </div>

                  <div className="text-center text-4xl">
                    ↓
                  </div>

                  <div className="text-center">
                    <div className="bg-white text-black py-4 rounded-2xl font-bold">
                      Leads
                    </div>
                  </div>

                  <div className="text-center text-4xl">
                    ↓
                  </div>

                  <div className="text-center">
                    <div className="bg-white text-black py-4 rounded-2xl font-bold">
                      Sales
                    </div>
                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* WHAT WE MANAGE */}

      <section className="py-32 bg-black text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="uppercase tracking-[0.3em] text-gray-500 text-sm">
              Services
            </span>

            <h2 className="text-5xl lg:text-6xl font-black mt-6">
              What We
              <span className="block text-gray-500">
                Manage
              </span>
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* REELS */}

            <motion.div
              whileHover={{ y: -10 }}
              className="border border-white/10 rounded-3xl p-8"
            >
              <div className="text-5xl mb-6">
                🎬
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Reels
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Short-form videos designed to increase
                reach, engagement, and visibility.
              </p>
            </motion.div>

            {/* POSTS */}

            <motion.div
              whileHover={{ y: -10 }}
              className="border border-white/10 rounded-3xl p-8"
            >
              <div className="text-5xl mb-6">
                📸
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Posts
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Professional content that builds trust
                and communicates your brand value.
              </p>
            </motion.div>

            {/* CONTENT */}

            <motion.div
              whileHover={{ y: -10 }}
              className="border border-white/10 rounded-3xl p-8"
            >
              <div className="text-5xl mb-6">
                ✍️
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Content Creation
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Creative visuals, captions, campaigns,
                and brand storytelling.
              </p>
            </motion.div>

            {/* PAGE MANAGEMENT */}

            <motion.div
              whileHover={{ y: -10 }}
              className="border border-white/10 rounded-3xl p-8"
            >
              <div className="text-5xl mb-6">
                📈
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Page Management
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Consistent posting, audience engagement,
                analytics and optimization.
              </p>
            </motion.div>

          </div>

        </div>

      </section>

      {/* REELS SHOWCASE */}

      <section className="py-32 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="uppercase tracking-[0.3em] text-gray-500 text-sm">
              Reels Performance
            </span>

            <h2 className="text-5xl font-black mt-6">
              Viral Content
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[1, 2, 3].map((item) => (

              <motion.div
                key={item}
                whileHover={{
                  scale: 1.04,
                }}
                className="bg-black text-white rounded-[40px] overflow-hidden"
              >

                <div className="h-[400px] bg-zinc-800 flex items-center justify-center text-5xl">
                  REEL
                </div>

                <div className="p-8">

                  <h3 className="text-2xl font-bold">
                    Reel 0{item}
                  </h3>

                  <div className="flex justify-between mt-4 text-gray-400">

                    <span>3.2M Views</span>

                    <span>120K Likes</span>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

            {/* FLIP POST CARDS */}

      <section className="py-32 bg-black text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="uppercase tracking-[0.3em] text-gray-500 text-sm">
              Content Showcase
            </span>

            <h2 className="text-5xl lg:text-6xl font-black mt-6">
              Interactive
              <span className="block text-gray-500">
                Post Cards
              </span>
            </h2>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Click a card to reveal the strategy behind the content.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[1, 2, 3, 4].map((card) => (

              <FlipCard
                key={card}
                frontTitle={`Instagram Post ${card}`}
                backTitle="Marketing Strategy"
                backContent={[
                  "Brand Awareness",
                  "Audience Engagement",
                  "Lead Generation",
                  "Sales Growth",
                ]}
              />

            ))}

          </div>

        </div>

      </section>

      {/* BUSINESS GROWTH */}

      <section className="py-32 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-24">

            <span className="uppercase tracking-[0.3em] text-gray-500 text-sm">
              Growth Journey
            </span>

            <h2 className="text-5xl lg:text-6xl font-black mt-6">
              How Content
              <br />
              Creates Revenue
            </h2>

          </div>

          <div className="flex flex-col items-center gap-10">

            {[
              "Content Creation",
              "Audience Reach",
              "Engagement",
              "Trust Building",
              "Lead Generation",
              "Sales Growth",
            ].map((step, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="w-full max-w-md"
              >

                <div className="bg-black text-white rounded-3xl py-6 px-8 text-center text-xl font-bold">

                  {step}

                </div>

                {index !== 5 && (
                  <div className="text-center text-5xl my-4">
                    ↓
                  </div>
                )}

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="py-32 bg-black text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="uppercase tracking-[0.3em] text-gray-500 text-sm">
              Industry Statistics
            </span>

            <h2 className="text-5xl lg:text-6xl font-black mt-6">
              Why Social Media Works
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <motion.div
              whileHover={{ y: -10 }}
              className="border border-white/10 rounded-3xl p-10"
            >

              <h3 className="text-7xl font-black">
                92%
              </h3>

              <p className="mt-6 text-gray-400 leading-relaxed">
                Consumers trust brands with an active and
                professional social media presence.
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="border border-white/10 rounded-3xl p-10"
            >

              <h3 className="text-7xl font-black">
                71%
              </h3>

              <p className="mt-6 text-gray-400 leading-relaxed">
                Customers are more likely to purchase
                after engaging with a brand online.
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="border border-white/10 rounded-3xl p-10"
            >

              <h3 className="text-7xl font-black">
                5B+
              </h3>

              <p className="mt-6 text-gray-400 leading-relaxed">
                Active social media users globally
                every single month.
              </p>

            </motion.div>

          </div>

        </div>

      </section>

      {/* PROCESS */}

      <section className="py-32 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="uppercase tracking-[0.3em] text-gray-500 text-sm">
              Our Process
            </span>

            <h2 className="text-5xl lg:text-6xl font-black mt-6">
              How We Grow
              <br />
              Your Brand
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Research",
              "Content Strategy",
              "Design & Creation",
              "Publishing",
              "Community Management",
              "Reporting & Optimization",
            ].map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  scale: 1.03,
                }}
                className="border rounded-3xl p-8"
              >

                <div className="text-6xl font-black text-gray-200 mb-6">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {item}
                </h3>

                <p className="text-gray-600">
                  Professional execution focused on
                  long-term audience growth and
                  measurable business results.
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


            {/* FINAL CTA */}

      <section className="py-32 bg-black text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <span className="uppercase tracking-[0.3em] text-gray-500 text-sm">
              Ready To Grow?
            </span>

            <h2 className="text-5xl lg:text-7xl font-black mt-8 leading-tight">
              Let's Build
              <br />
              Your Social Presence
            </h2>

            <p className="mt-8 text-gray-400 text-lg max-w-2xl mx-auto">
              Professional reels, content creation, page management,
              engagement strategies and audience growth that help
              your business attract customers consistently.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-6">

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="px-10 py-5 bg-white text-black rounded-full font-bold"
              >
                Start Project
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="px-10 py-5 border border-white rounded-full font-bold"
              >
                View Portfolio
              </motion.button>

            </div>

          </motion.div>

        </div>

      </section>

      <Footer />
</>


  );
}

/* ===================================
   FLIP CARD COMPONENT
=================================== */

interface FlipCardProps {
  frontTitle: string;
  backTitle: string;
  backContent: string[];
}

function FlipCard({
  frontTitle,
  backTitle,
  backContent,
}: FlipCardProps) {

  const [flipped, setFlipped] = useState(false);

  return (

    <div
      className="h-[320px] cursor-pointer perspective-[1200px]"
      onClick={() => setFlipped(!flipped)}
    >

      <motion.div
        animate={{
          rotateY: flipped ? 180 : 0,
        }}
        transition={{
          duration: 0.8,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full"
      >

        {/* FRONT */}

        <div
          style={{
            backfaceVisibility: "hidden",
          }}
          className="absolute inset-0 bg-white text-black rounded-3xl border-2 border-black flex flex-col justify-center items-center p-8"
        >

          <div className="text-6xl mb-6">
            📱
          </div>

          <h3 className="text-2xl font-black text-center">
            {frontTitle}
          </h3>

          <p className="text-gray-500 mt-4 text-center">
            Click To Reveal Strategy
          </p>

        </div>

        {/* BACK */}

        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute inset-0 bg-black text-white rounded-3xl border border-white/20 flex flex-col justify-center p-8"
        >

          <h3 className="text-2xl font-black mb-6">
            {backTitle}
          </h3>

          <ul className="space-y-4">

            {backContent.map((item, index) => (

              <li
                key={index}
                className="flex items-center gap-3"
              >

                <span>✓</span>

                <span>{item}</span>

              </li>

            ))}

          </ul>

        </div>

      </motion.div>

    </div>

  );
}