import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaGoogle,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function DigitalMarketing() {
  return (
    <>
      <Navbar />

      <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">

        {/* Background Glow */}
        <div className="absolute w-[700px] h-[700px] bg-purple-600/20 blur-[150px] rounded-full" />

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">

          {/* LEFT SIDE */}
          <div>

            <span className="uppercase tracking-[0.3em] text-gray-400 text-sm">
              Digital Marketing
            </span>

            <h1 className="text-5xl lg:text-7xl font-black text-white leading-none mt-6 mb-8">
              Scale Your
              <br />
              Business With
              <span className="block text-purple-500">
                Performance Marketing
              </span>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
              We help brands generate leads, increase sales,
              improve visibility and achieve measurable growth
              through Google Ads, Meta Ads, SEO and Social Media Marketing.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <button className="px-8 py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition">
                Get Free Consultation
              </button>

              <button className="px-8 py-4 border border-white text-white rounded-full font-semibold">
                View Case Studies
              </button>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center items-center h-[600px]">

            {/* PHONE */}

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
              className="w-[260px] h-[520px] rounded-[40px] bg-gradient-to-b from-gray-900 to-black border border-gray-700 shadow-2xl flex items-center justify-center"
            >
              <div className="text-center">
                <h3 className="text-white text-2xl font-bold">
                  OMNEXA
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Growth Dashboard
                </p>

                <div className="mt-8">
                  <h2 className="text-green-400 text-4xl font-black">
                    +327%
                  </h2>

                  <p className="text-gray-500">
                    Revenue Growth
                  </p>
                </div>
              </div>
            </motion.div>

            {/* GOOGLE ADS */}

            <motion.div
              animate={{
                y: [-20, 20, -20],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute top-10 left-0 bg-white p-4 rounded-2xl shadow-xl"
            >
              <FaGoogle className="text-3xl text-red-500" />
              <p className="font-bold mt-2">Google Ads</p>
            </motion.div>

            {/* META ADS */}

            <motion.div
              animate={{
                y: [20, -20, 20],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute top-24 right-0 bg-white p-4 rounded-2xl shadow-xl"
            >
              <FaFacebook className="text-3xl text-blue-600" />
              <p className="font-bold mt-2">Meta Ads</p>
            </motion.div>

            {/* INSTAGRAM */}

            <motion.div
              animate={{
                y: [-15, 15, -15],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
              }}
              className="absolute bottom-20 left-4 bg-white p-4 rounded-2xl shadow-xl"
            >
              <FaInstagram className="text-3xl text-pink-500" />
              <p className="font-bold mt-2">Instagram</p>
            </motion.div>

            {/* YOUTUBE */}

            <motion.div
              animate={{
                y: [15, -15, 15],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute bottom-10 right-6 bg-white p-4 rounded-2xl shadow-xl"
            >
              <FaYoutube className="text-3xl text-red-600" />
              <p className="font-bold mt-2">YouTube Ads</p>
            </motion.div>

          </div>

        </div>

      </section>

      {/* RESULTS SECTION */}

      <section className="py-32 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-black text-center mb-20">
            Results That Matter
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-gray-100 rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-black text-purple-600">
                500%
              </h3>
              <p className="mt-3 text-gray-600">
                Lead Growth
              </p>
            </div>

            <div className="bg-gray-100 rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-black text-purple-600">
                10M+
              </h3>
              <p className="mt-3 text-gray-600">
                Impressions
              </p>
            </div>

            <div className="bg-gray-100 rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-black text-purple-600">
                4.8x
              </h3>
              <p className="mt-3 text-gray-600">
                Average ROAS
              </p>
            </div>

            <div className="bg-gray-100 rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-black text-purple-600">
                95%
              </h3>
              <p className="mt-3 text-gray-600">
                Retention
              </p>
            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}