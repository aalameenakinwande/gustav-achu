import React from "react";

const PodcastAppearance = () => {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-[1100px] mx-auto">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            GUSTAV’S PODCAST APPEARANCES
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Conversations on wealth, investing, mindset, legacy, and building a
            life of purpose.
          </p>
        </div>

{/* ================= PODCAST LIST ================= */}
<div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-10 mb-28">

  {/* ================= CARD 1 ================= */}
  <a
    href="https://www.youtube.com/watch?si=zpSkrTsAsDPDWoX-&v=mh4gubxlqLk&feature=youtu.be"
    target="_blank"
    rel="noreferrer"
    className="group relative rounded-3xl overflow-hidden bg-black shadow-xl hover:shadow-2xl transition duration-500"
  >
  <img
  src="https://img.youtube.com/vi/mh4gubxlqLk/hqdefault.jpg"
  alt="Podcast Thumbnail"
  className="w-full h-[300px] sm:h-[320px] object-contain transition duration-700 group-hover:scale-110"
/>


    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
        <span className="text-white text-2xl">▶</span>
      </div>
    </div>

    <div className="absolute bottom-0 p-6 text-white">
      <p className="text-xs uppercase tracking-widest text-red-500 mb-2">
        Podcast Episode
      </p>
      <h3 className="text-xl font-semibold leading-snug group-hover:text-red-400 transition">
        The TRUTH No One Wants to Hear About Getting Wealthy with Dividends
      </h3>
      <p className="text-sm text-gray-300 mt-2">
        With Ari Gutman
      </p>
    </div>
  </a>

  {/* ================= CARD 2 ================= */}
  <a
    href="https://www.youtube.com/live/nBHZ_xBQ904"
    target="_blank"
    rel="noreferrer"
    className="group relative rounded-3xl overflow-hidden bg-black shadow-xl hover:shadow-2xl transition duration-500"
  >
    <img
      src="https://img.youtube.com/vi/nBHZ_xBQ904/maxresdefault.jpg"
      alt="Podcast Thumbnail"
      className="w-full h-[300px] sm:h-[320px] object-contain transition duration-700 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
        <span className="text-white text-2xl">▶</span>
      </div>
    </div>

    <div className="absolute bottom-0 p-6 text-white">
      <p className="text-xs uppercase tracking-widest text-red-500 mb-2">
        Podcast Episode
      </p>
      <h3 className="text-xl font-semibold leading-snug group-hover:text-red-400 transition">
        The American Dream – Reshaping the Immigrant Mindset
      </h3>
      <p className="text-sm text-gray-300 mt-2">
        The Saaghe Fogwe Podcast
      </p>
    </div>
  </a>

  {/* ================= CARD 3 ================= */}
  <a
    href="https://youtu.be/6D3atOOL0qw?si=nnqdtj3QAnudX84g"
    target="_blank"
    rel="noreferrer"
    className="group relative rounded-3xl overflow-hidden bg-black shadow-xl hover:shadow-2xl transition duration-500"
  >
    <img
      src="https://img.youtube.com/vi/6D3atOOL0qw/maxresdefault.jpg"
      alt="Podcast Thumbnail"
      className="w-full h-[300px] sm:h-[320px] object-contain transition duration-700 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
        <span className="text-white text-2xl">▶</span>
      </div>
    </div>

    <div className="absolute bottom-0 p-6 text-white">
      <p className="text-xs uppercase tracking-widest text-red-500 mb-2">
        Podcast Episode
      </p>
      <h3 className="text-xl font-semibold leading-snug group-hover:text-red-400 transition">
        From Bankruptcy To A Million-Dollar Net Worth
      </h3>
      <p className="text-sm text-gray-300 mt-2">
        ft. @YouREnoughTV with Paul Adeyeye
      </p>
    </div>
  </a>

</div>



        {/* ================= FORM HEADER ================= */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Podcast Guest Request Form
          </h3>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Interested in having Gustav as a guest on your podcast? Please
            complete the form below.
          </p>
        </div>

        {/* ================= FORM ================= */}
<form
  className="space-y-10"
  action="mailto:management@gustavachu.com"
  method="POST"
  encType="text/plain"
>          {/* BASIC INFO */}
          <div className="grid md:grid-cols-2 gap-6">
            <Input label="Podcast Name*" />
            <Input label="Host Name*" />
            <Input label="First Name*" />
            <Input label="Last Name*" />
            <Input label="Email Address*" type="email" />
            <Input label="Website or Podcast Page URL" />
          </div>

          <Textarea
            label="Podcast Platforms & Links*"
            helper="Share links to Spotify, Apple Podcasts, YouTube, or other platforms."
          />

          <Textarea
            label="Podcast Overview / Description*"
            helper="Briefly describe your podcast, audience, and conversations you host."
          />

          {/* INTERVIEW DETAILS */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Interview Details
            </h4>

            <RadioGroup
              label="Is this interview virtual or in-person?*"
              options={["Virtual", "In-person"]}
            />
          </div>

          <Textarea
            label="Why would you like Gustav to be a guest on your podcast?*"
          />

          <RadioGroup
            label="Proposed Interview Duration*"
            options={["30 minutes", "45 minutes", "60 minutes", "Other"]}
          />

          <Textarea
            label="Proposed Talking Points"
            helper="Wealth, investing, purpose discovery, legacy building, etc."
          />

          {/* AUDIENCE */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Audience & Reach
            </h4>

            <RadioGroup
              label="Average Views / Downloads per Episode"
              options={[
                "0–100",
                "100–500",
                "500–2,000",
                "2,000–5,000",
                "5,000+",
              ]}
            />

            <Input label="Primary Audience Location(s) (Optional)" />
          </div>

          {/* PERMISSIONS */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Permissions & Acknowledgment
            </h4>

            <Checkbox
              label="I agree to allow Gustav B. Achu & his team to share approved clips or excerpts from the episode (with credit).*"
            />
            <Checkbox
              label="I agree to share the raw recording or final edited episode with the team after the interview.*"
            />
          </div>

          {/* SUBMIT */}
          <div className="pt-6">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-semibold  transition"
            >
              Submit Request
            </button>

            <p className="text-sm text-gray-500 mt-4 max-w-xl">
              All podcast requests are reviewed by our team. If approved, we’ll
              be in touch to coordinate next steps.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

/* ================= REUSABLE COMPONENTS ================= */

const Input = ({ label, type = "text" }) => (
  <div>
    <label className="block text-sm font-medium text-gray-800 mb-2">
      {label}
    </label>
    <input
      type={type}
      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black"
    />
  </div>
);

const Textarea = ({ label, helper }) => (
  <div>
    <label className="block text-sm font-medium text-gray-800 mb-2">
      {label}
    </label>
    <textarea
      rows={5}
      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black"
    />
    {helper && (
      <p className="text-xs text-gray-500 mt-1">{helper}</p>
    )}
  </div>
);

const RadioGroup = ({ label, options }) => (
  <div>
    <p className="text-sm font-medium text-gray-800 mb-3">{label}</p>
    <div className="space-y-2">
      {options.map((opt, i) => (
        <label key={i} className="flex items-center gap-3 text-sm text-gray-700">
          <input type="radio" name={label} className="accent-black" />
          {opt}
        </label>
      ))}
    </div>
  </div>
);

const Checkbox = ({ label }) => (
  <label className="flex items-start gap-3 text-sm text-gray-700 mb-3">
    <input type="checkbox" className="accent-black mt-1" />
    {label}
  </label>
);

export default PodcastAppearance;
