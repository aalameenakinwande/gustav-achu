import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import LegacyImg from "../../images/gustavImages/WorkGustav.jpg";
import MillionaireImg from "../../images/gustavImages/Community3.jpg";
import PurposeImg from "../../images/gustavImages/Community1.jpg";
import OneImg from "../../images/gustavImages/Community2.jpg";

const programs = [
  {
    title: "GUARANTEE YOUR LEGACY",
    image: LegacyImg,
    price: "$3,999",
    value: "$15,000",
    accent: "from-indigo-500 to-purple-600",
    content: (
      <>
        • 8 weeks commitment.
        <br />• Weekly 1:1 private coaching calls (1 hour) plus mentorship.
        <br />• Wealth accumulation, expansion, and preservation.
        <br />• Investing strategies for growth & profits
        <br />• Next of kin orientation.
        <br />• Protect generational assets.
        <br />• Referrals to top-tier legacy planning resources and advisers as needed.
        <br />• Direct access to me via DM.
        <br />• Prequalification to the #YouREnough# private mastermind group.
      </>
    ),
    cta: [
      {
        label: "Access Now",
        link: "https://calendly.com/gustavachu77/guarantee-your-legacy?month=2024-09",
        external: true,
      },
      { label: "Learn More", link: "/learn-more" },
    ],
  },
  {
    title: "THE MILLIONAIRE IMMIGRANT",
    image: MillionaireImg,
    price: "$49 / month",
    value: "$299",
    accent: "from-pink-500 to-rose-600",
    content: (
      <>
        • Live 60‑minute weekly Immersive group Coaching Session with Gustav.
        <br />• Exclusive member-only information.
        <br />• Exclusive member-only discounts on products and materials.
        <br />• Learn uncommon strategies for personal development & investing.
        <br />• Immediate access to educational vault
        <br />• Membership to the #YouREnough# private group.
      </>
    ),
    cta: [
      {
        label: "Access Now",
        link: "https://buy.stripe.com/9AQeVY0XEg3G18YfZ7",
        external: true,
      },
    ],
  },
  {
    title: "PURPOSE MASTERY",
    image: PurposeImg,
    price: "$999",
    value: "$9,000",
    accent: "from-emerald-500 to-teal-600",
    content: (
      <>
        • 8 weeks commitment.
        <br />• Weekly 30 mins private 1:1 coaching call.
        <br />• Gain clarity on what your purpose is.
        <br />• Build & monetize your gift.
        <br />• Tools to bring purpose to fruition.
        <br />• Navigate growth stages confidently.
        <br />• Membership to the #YouREnough# private community.
      </>
    ),
    cta: [
      {
        label: "Access Now",
        link: "https://book.stripe.com/bIYeVY0XE9Fi9Fu000",
        external: true,
      },
    ],
  },
  {
    title: "1:1 WITH GUSTAV",
    image: OneImg,
    price: "$99",
    value: "$399",
    accent: "from-amber-500 to-orange-600",
    content: (
      <>
        • 30 mins personalized 1:1 private call.
        <br />• Career, finance & business clarity.
        <br />• Tailored insights.
        <br />• Entrepreneurship guidance.
        <br />• Membership to the #YouREnough# private group.
      </>
    ),
    cta: [
      {
        label: "Access Now",
        link: "https://calendly.com/gustavachu77/1-1-with-gustav?month=2024-09",
        external: true,
      },
    ],
  },
];

const WorkWithGustavOneWithGustav = () => {
  return (
    <section className="relative py-24 bg-[#0A0A0F] overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/30 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-16">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Glass Card */}
            <div className="grid lg:grid-cols-2 gap-10 items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 lg:p-14 shadow-2xl">
              {/* Image */}
              <div
                className={`relative ${
                  index % 2 !== 0 ? "lg:order-2" : ""
                }`}
              >
                <div
                  className={`absolute -inset-2 bg-gradient-to-r ${program.accent} rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition`}
                />

                <img
                  src={program.image}
                  alt={program.title}
                  className="relative w-full h-[340px] md:h-[420px] object-cover object-top rounded-2xl shadow-2xl"
                />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 flex-wrap">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                    {program.title}
                  </h2>

                  <span
                    className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${program.accent} text-white font-semibold shadow-lg`}
                  >
                    Premium Program
                  </span>
                </div>

                <p className="text-gray-300 leading-relaxed text-sm md:text-lg">
                  {program.content}
                </p>

                {/* Pricing */}
                <div className="flex items-end gap-4">
                  <span className="text-3xl font-bold text-white">
                    {program.price}
                  </span>
                  <span className="text-gray-400 line-through">
                    {program.value}
                  </span>
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {program.cta.map((btn, i) =>
                    btn.external ? (
                      <a
                        key={i}
                        href={btn.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`bg-gradient-to-r ${program.accent} text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl text-sm md:text-lg font-semibold shadow-xl hover:scale-105 transition`}
                      >
                        {btn.label}
                      </a>
                    ) : (
                      <Link
                        key={i}
                        to={btn.link}
                        className={`bg-gradient-to-r ${program.accent} text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl text-sm md:text-lg font-semibold shadow-xl hover:scale-105 transition`}
                      >
                        {btn.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkWithGustavOneWithGustav;
