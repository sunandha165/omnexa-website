import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ==========================================
   PREMIUM FALLING LETTER CUBE
========================================== */
function FallingLetterCube() {
  const words = [
    "TRUST",
    "VALUE",
    "VISION",
    "GROWTH",
    "LOYALTY",
    "IMPACT",
    "QUALITY",
    "AUTHORITY",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === words.length - 1 ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const activeWord = words[activeIndex];
  const letters = activeWord.split("");

  return (
    <div className="relative h-[720px] flex items-center justify-center overflow-hidden">

      {/* FALLING LETTERS */}

      <AnimatePresence mode="wait">
        {letters.map((letter, index) => (
          <motion.div
            key={`${activeWord}-${index}`}
            initial={{
              y: -250,
              opacity: 0,
            }}
            animate={{
              y: 210,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 1.8,
              delay: index * 0.18,
              ease: "easeInOut",
            }}
            className="absolute z-30"
            style={{
              left: "49%",
              top: 0,
              transform: "translateX(-50%)",
            }}
          >
            <span
              className="text-5xl font-medium text-white"
              style={{
                textShadow:
                  "0 0 15px rgba(255,255,255,.9),0 0 35px rgba(255,255,255,.6)",
              }}
            >
              {letter}
            </span>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* LIGHT STREAKS */}

      {[...Array(35)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: -500,
            opacity: 0,
          }}
          animate={{
            y: 350,
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.08,
            ease: "linear",
          }}
          className="absolute w-[1px] h-40 bg-white/20"
          style={{
            left: `${40 + Math.random() * 20}%`,
          }}
        />
      ))}

      {/* IMPACT GLOW */}

      <motion.div
        key={activeWord}
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1.8, 1],
        }}
        transition={{
          duration: 2,
        }}
        className="
          absolute
          top-[300px]
          w-24
          h-24
          rounded-full
          bg-white/20
          blur-[45px]
        "
      />

      {/* CUBE */}

      <div className="relative w-[500px] h-[420px]">

        {/* TOP */}

        <div
          className="absolute left-1/2 top-[60px] border border-white/20 bg-black"
          style={{
            width: "300px",
            height: "140px",
            transform:
              "translateX(-50%) skewX(-45deg)",
          }}
        />

        {/* LEFT */}

        <div
          className="
          absolute
          left-[70px]
          top-[170px]
          bg-black
          border
          border-white/10
          flex
          items-center
          justify-center
          "
          style={{
            width: "190px",
            height: "220px",
            transform: "skewY(45deg)",
          }}
        >
          <span className="text-white/5 text-3xl tracking-[0.3em]">
            VALUE
          </span>
        </div>

        {/* RIGHT */}

        <div
          className="
          absolute
          right-[70px]
          top-[170px]
          bg-black
          border
          border-white/10
          flex
          items-center
          justify-center
          "
          style={{
            width: "190px",
            height: "220px",
            transform: "skewY(-45deg)",
          }}
        >
          <span className="text-white/10 text-3xl tracking-[0.3em]">
            VISION
          </span>
        </div>

        {/* FRONT */}

        <div
          className="
          absolute
          left-1/2
          top-[170px]
          -translate-x-1/2
          bg-black
          border
          border-white/20
          flex
          items-center
          justify-center
          "
          style={{
            width: "240px",
            height: "220px",
            boxShadow:
              "0 0 60px rgba(255,255,255,.05)",
          }}
        >
          <motion.h2
            key={activeWord}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: [0.8, 1.08, 1],
            }}
            transition={{
              duration: 0.5,
            }}
            className="
            text-6xl
            lg:text-7xl
            font-medium
            tracking-[0.22em]
            text-white
            "
            style={{
              textShadow:
                "0 0 20px rgba(255,255,255,.9),0 0 40px rgba(255,255,255,.5)",
            }}
          >
            {activeWord}
          </motion.h2>
        </div>

        {/* FLOOR REFLECTION */}

        <div
          className="absolute left-1/2 bottom-0 -translate-x-1/2"
          style={{
            width: "220px",
            height: "70px",
            background:
              "radial-gradient(circle, rgba(255,255,255,.18) 0%, transparent 70%)",
            filter: "blur(25px)",
          }}
        />
      </div>
    </div>
  );
}

/* ==========================================
   MAIN PAGE
========================================== */

export default function BrandStrategy() {
  return (
    <>
      <Navbar />

      {/* HERO */}

      <section className="min-h-screen bg-black text-white pt-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-20 items-center">

            {/* LEFT CONTENT */}

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <span className="uppercase tracking-[0.35em] text-sm text-white/50">
                Brand Strategy
              </span>

              <h1 className="mt-8 text-5xl lg:text-7xl font-semibold leading-[0.95] tracking-tight">
                The Brand
                <br />
                Experience
              </h1>

              <p className="mt-8 text-lg text-white/60 leading-relaxed max-w-xl">
                We build brands that do more than exist.
                Through positioning, messaging, visual
                identity and customer perception, we help
                businesses become memorable, trusted and
                impossible to ignore.
              </p>

              <div className="mt-10">
                <button className="px-8 py-4 border border-white rounded-full flex items-center gap-2">
                  Discover Strategy
                  <FiArrowRight />
                </button>
              </div>
            </motion.div>

            {/* RIGHT */}

            <FallingLetterCube />

          </div>

        </div>

      </section>

            {/* WHAT WE BUILD */}

      <section className="py-28 bg-white text-black">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-20">

            <span className="uppercase tracking-[0.3em] text-sm text-gray-500">
              What We Build
            </span>

            <h2 className="mt-6 text-4xl lg:text-6xl font-semibold leading-tight">
              Building Blocks
              <br />
              Of A Powerful Brand
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "Brand Strategy",
              "Visual Identity",
              "Typography",
              "Positioning",
              "Messaging",
              "Brand Voice",
              "Guidelines",
              "Brand Growth",
            ].map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                }}
                className="border border-black/10 rounded-3xl p-8 bg-white"
              >

                <div className="text-5xl font-semibold text-black/10">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-6 text-xl font-medium">
                  {item}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Strategic systems designed to create
                  recognition, trust and long-term growth.
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY BRANDING */}

      <section className="py-32 bg-black text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20">

            <div>

              <span className="uppercase tracking-[0.3em] text-sm text-white/40">
                Why Branding Matters
              </span>

              <h2 className="mt-6 text-4xl lg:text-6xl font-semibold leading-tight">
                People Remember
                <br />
                Brands, Not Businesses
              </h2>

            </div>

            <div>

              <p className="text-lg text-white/60 leading-relaxed">
                Branding creates perception. Strong brands
                attract attention faster, build trust
                quicker and convert customers more
                effectively than businesses with no clear
                identity.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-12">

                {[
                  "Trust",
                  "Recognition",
                  "Authority",
                  "Loyalty",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="border border-white/10 rounded-3xl p-8"
                  >
                    <h3 className="text-2xl font-semibold">
                      {item}
                    </h3>

                    <p className="mt-3 text-white/50">
                      Essential for long-term growth.
                    </p>
                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* FAQ */}

      <section className="py-28 bg-white text-black">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="uppercase tracking-[0.3em] text-sm text-gray-500">
              Frequently Asked Questions
            </span>

            <h2 className="mt-6 text-4xl lg:text-6xl font-semibold">
              Common Questions
            </h2>

          </div>

          <div className="space-y-6">

            {[
              {
                q: "What is Brand Strategy?",
                a: "Brand Strategy defines how customers perceive your business and why they should choose you over competitors.",
              },
              {
                q: "Why is Branding Important?",
                a: "Strong branding creates trust, recognition and consistency across every customer interaction.",
              },
              {
                q: "Can Branding Increase Sales?",
                a: "Yes. Better positioning and trust often improve conversions and customer retention.",
              },
              {
                q: "Do Small Businesses Need Branding?",
                a: "Absolutely. Branding helps small businesses stand out and compete effectively.",
              },
            ].map((faq, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -4,
                }}
                className="border border-black/10 rounded-3xl p-8"
              >

                <h3 className="text-2xl font-medium">
                  {faq.q}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.a}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-32 bg-black text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <span className="uppercase tracking-[0.3em] text-sm text-white/40">
            Ready To Build Your Brand?
          </span>

          <h2 className="mt-8 text-5xl lg:text-7xl font-semibold leading-tight">
            Turn Your Business
            <br />
            Into A Brand
          </h2>

          <p className="mt-8 text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            We create positioning, messaging, identity,
            customer perception and brand systems that
            help businesses stand out, attract customers
            and grow with confidence.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <motion.button
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
              px-10
              py-5
              bg-white
              text-black
              rounded-full
              font-medium
              "
            >
              Start Brand Strategy
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
              px-10
              py-5
              border
              border-white
              rounded-full
              font-medium
              "
            >
              View Portfolio
            </motion.button>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}