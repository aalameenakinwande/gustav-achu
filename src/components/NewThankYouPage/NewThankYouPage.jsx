import React from "react";

const NewThankYouPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#181349] via-[#2a2356] to-[#181349] px-6 py-20">
      <div className="max-w-3xl w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 md:p-12 text-white">
        {/* Heading */}
        {/* <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-yellow-400">
          Thank You - The Seeker Transformation Bundle
        </h1> */}

        {/* Body */}
        <p className="mb-6 text-base md:text-lg">
          Thank you for ordering <span className="font-semibold">The Seeker Transformation Bundle</span> and being part of this life-changing transformation.
        </p>

        <p className="mb-6 text-base md:text-lg">
          Gustav here. <span className="font-semibold">PLEASE READ</span>
        </p>

        {/* List */}
        <ol className="list-decimal list-inside space-y-4 mb-8 text-base md:text-lg">
          <li>
            Your physical copy of <span className="font-semibold">THE SEEKER</span> is on the way. You will get a precise email on the delivery details.
          </li>
          <li>
            Here's where to access all your transformation bonuses:
            <ul className="list-disc list-inside mt-2 space-y-3 pl-4">
              <li>
                {/* Your Paycheck to Prosperity Masterclass recording. <br /> */}
                <a
                  href="https://drive.google.com/file/d/1jv2ckH2FExEYXgQUVc9xX41j_akuIXgT/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 underline hover:text-yellow-300"
                >
 Your Paycheck to Prosperity Masterclass recording                </a>
              </li>
              <li>
                Your invitation to the <span className="font-semibold">#YouREnough# Legacy Circle</span> <br />
                <a
                  href="https://chat.whatsapp.com/E1THU5dlbW05lCqVnYQHd9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 underline hover:text-yellow-300"
                >
(1-Year Private WhatsApp Community).                </a>
              </li>
              <li>
                Your invitation to the <span className="font-semibold">#YouREnough#</span>{" "}
                <a
                  href="https://www.gustavachu.com/community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 underline hover:text-yellow-300"
                >
                  Newsletter Community
                </a>
              </li>
            </ul>
          </li>
        </ol>

        {/* Closing */}
        <p className="mb-4 text-base md:text-lg">
          Your future self is counting on you taking action.
        </p>
        <p className="font-semibold text-lg md:text-xl">Time to stop surviving and start thriving.</p>

        {/* Signature */}
        <p className="mt-6 text-right font-bold text-yellow-400">Gustav B. Achu</p>
      </div>
    </section>
  );
};

export default NewThankYouPage;
