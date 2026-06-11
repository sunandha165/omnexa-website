import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCpu,
  FiMessageSquare,
  FiMail,
  FiDatabase,
  FiZap,
  FiArrowRight,
  FiActivity,
  FiSettings,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ======================================
   FLIP CARD
====================================== */

interface AutomationCardProps {
  icon: React.ReactNode;
  title: string;
  points: string[];
}

function AutomationCard({
  icon,
  title,
  points,
}: AutomationCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="h-[340px] cursor-pointer"
      style={{
        perspective: "1200px",
      }}
    >
      <motion.div
        animate={{
          rotateY: flipped ? 180 : 0,
        }}
        transition={{
          duration: 0.8,
        }}
        whileHover={{
          rotateZ: 2,
          scale: 1.03,
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
          className="
          absolute
          inset-0
          rounded-[32px]
          bg-white/[0.03]
          backdrop-blur-xl
          border
          border-white/10
          flex
          flex-col
          justify-center
          items-center
          p-8
          "
        >
          <div className="text-6xl text-white mb-8">
            {icon}
          </div>

          <h3 className="text-2xl font-semibold text-center">
            {title}
          </h3>

          <p className="text-white/40 mt-5 text-center">
            Click To Explore
          </p>
        </div>

        {/* BACK */}

        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="
          absolute
          inset-0
          rounded-[32px]
          bg-white
          text-black
          p-8
          flex
          flex-col
          justify-center
          "
        >
          <h3 className="text-2xl font-semibold mb-8">
            {title}
          </h3>

          <div className="space-y-4">
            {points.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3"
              >
                <span>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ======================================
   PAGE
====================================== */

export default function AutomationSolutions() {
  return (
    <>
      <Navbar />

      {/* HERO */}

      <section className="min-h-screen bg-black text-white pt-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[80vh]">

            {/* LEFT */}

            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <span className="uppercase tracking-[0.35em] text-sm text-white/40">
                Automation Solutions
              </span>

              <h1 className="mt-8 text-5xl lg:text-7xl font-semibold leading-[0.95]">
                Automate.
                <br />
                Scale.
                <br />
                Grow.
              </h1>

              <p className="mt-8 text-lg text-white/60 max-w-xl leading-relaxed">
                Eliminate repetitive work and build
                intelligent systems that run your
                business efficiently. From AI chatbots
                to workflow automation, we help
                businesses save time and increase
                productivity.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                  px-8
                  py-4
                  bg-white
                  text-black
                  rounded-full
                  font-medium
                  flex
                  items-center
                  gap-2
                  "
                >
                  Start Automation
                  <FiArrowRight />
                </motion.button>

              </div>
            </motion.div>

            {/* RIGHT VISUAL */}

                        <div className="relative h-[700px] flex items-center justify-center">

              {/* CENTER CORE */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                absolute
                w-[280px]
                h-[280px]
                rounded-full
                border
                border-white/10
                flex
                items-center
                justify-center
                "
              >

                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="
                  w-[140px]
                  h-[140px]
                  rounded-full
                  border
                  border-white/20
                  bg-white/[0.03]
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                  "
                >
                  <FiCpu className="text-6xl" />
                </motion.div>

              </motion.div>

              {/* NODE 1 */}

              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                absolute
                top-20
                left-20
                w-28
                h-28
                rounded-3xl
                bg-white/[0.03]
                border
                border-white/10
                backdrop-blur-xl
                flex
                items-center
                justify-center
                "
              >
                <FiMessageSquare className="text-4xl" />
              </motion.div>

              {/* NODE 2 */}

              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="
                absolute
                top-24
                right-20
                w-28
                h-28
                rounded-3xl
                bg-white/[0.03]
                border
                border-white/10
                backdrop-blur-xl
                flex
                items-center
                justify-center
                "
              >
                <FiMail className="text-4xl" />
              </motion.div>

              {/* NODE 3 */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                }}
                className="
                absolute
                bottom-24
                left-28
                w-28
                h-28
                rounded-3xl
                bg-white/[0.03]
                border
                border-white/10
                backdrop-blur-xl
                flex
                items-center
                justify-center
                "
              >
                <FiDatabase className="text-4xl" />
              </motion.div>

              {/* NODE 4 */}

              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                }}
                className="
                absolute
                bottom-20
                right-24
                w-28
                h-28
                rounded-3xl
                bg-white/[0.03]
                border
                border-white/10
                backdrop-blur-xl
                flex
                items-center
                justify-center
                "
              >
                <FiZap className="text-4xl" />
              </motion.div>

              {/* CONNECTION LINES */}

              <div className="absolute w-[450px] h-[450px] border border-white/5 rounded-full" />
              <div className="absolute w-[550px] h-[550px] border border-white/5 rounded-full" />

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="py-40 bg-white text-black">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                value: "80%",
                label: "Reduced Manual Work",
              },
              {
                value: "24/7",
                label: "Automated Support",
              },
              {
                value: "10X",
                label: "Faster Response Time",
              },
              {
                value: "99%",
                label: "Workflow Accuracy",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                }}
                className="
                p-10
                rounded-[32px]
                border
                border-black/10
                "
              >

                <h3 className="text-5xl font-semibold">
                  {item.value}
                </h3>

                <p className="mt-4 text-gray-500">
                  {item.label}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* SERVICES */}


            <section className="py-40 bg-black text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-24">

            <span className="uppercase tracking-[0.35em] text-sm text-white/40">
              Automation Services
            </span>

            <h2 className="mt-8 text-5xl lg:text-7xl font-semibold">
              Intelligent Systems
              <br />
              For Modern Businesses
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <AutomationCard
              icon={<FiMessageSquare />}
              title="AI Chatbots"
              points={[
                "24/7 Customer Support",
                "Lead Qualification",
                "WhatsApp Integration",
                "AI Conversations",
              ]}
            />

            <AutomationCard
              icon={<FiZap />}
              title="Workflow Automation"
              points={[
                "Task Automation",
                "Process Optimization",
                "Time Saving",
                "Business Efficiency",
              ]}
            />

            <AutomationCard
              icon={<FiDatabase />}
              title="CRM Automation"
              points={[
                "Lead Tracking",
                "Customer Pipelines",
                "Automated Follow-ups",
                "Sales Management",
              ]}
            />

            <AutomationCard
              icon={<FiMail />}
              title="Email Automation"
              points={[
                "Welcome Sequences",
                "Lead Nurturing",
                "Follow-up Campaigns",
                "Customer Engagement",
              ]}
            />

            <AutomationCard
              icon={<FiActivity />}
              title="Lead Automation"
              points={[
                "Lead Collection",
                "Auto Assignment",
                "Lead Scoring",
                "Instant Notifications",
              ]}
            />

            <AutomationCard
              icon={<FiSettings />}
              title="Business Automation"
              points={[
                "Operations Automation",
                "Internal Workflows",
                "Reporting Systems",
                "Data Processing",
              ]}
            />

            <AutomationCard
              icon={<FiCpu />}
              title="AI Agents"
              points={[
                "Smart Assistants",
                "AI Decision Support",
                "Knowledge Systems",
                "Task Execution",
              ]}
            />

            <AutomationCard
              icon={<FiZap />}
              title="WhatsApp Automation"
              points={[
                "Auto Replies",
                "Lead Capture",
                "Customer Support",
                "Broadcast Workflows",
              ]}
            />

          </div>

        </div>

      </section>

      {/* PROCESS */}

      <section className="py-40 bg-white text-black">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-24">

            <span className="uppercase tracking-[0.35em] text-sm text-gray-500">
              Our Process
            </span>

            <h2 className="mt-8 text-5xl lg:text-7xl font-semibold">
              How We Automate
            </h2>

          </div>

          <div className="grid lg:grid-cols-5 gap-10">

            {[
              "Discover",
              "Design",
              "Build",
              "Deploy",
              "Optimize",
            ].map((step, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                }}
                className="
                text-center
                p-10
                rounded-[32px]
                border
                border-black/10
                "
              >

                <div className="text-6xl font-semibold text-black/10">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-6 text-2xl font-medium">
                  {step}
                </h3>

                <p className="mt-4 text-gray-500">
                  Strategic implementation focused
                  on automation and business growth.
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-40 bg-black text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <span className="uppercase tracking-[0.35em] text-sm text-white/40">
            Ready To Automate?
          </span>

          <h2 className="mt-8 text-5xl lg:text-7xl font-semibold leading-tight">
            Let Technology
            <br />
            Work For You
          </h2>

          <p className="mt-8 text-lg text-white/60 leading-relaxed max-w-3xl mx-auto">
            Build intelligent systems that automate
            repetitive tasks, streamline operations,
            improve customer experiences and help
            your business scale faster with less effort.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-6">

            <motion.button
              whileHover={{
                scale: 1.05,
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
              Start Automation Project
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
              px-10
              py-5
              border
              border-white/20
              rounded-full
              font-medium
              "
            >
              Book Consultation
            </motion.button>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}