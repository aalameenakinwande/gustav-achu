import React from "react";
import { HiArrowRight } from "react-icons/hi";

const ThankYouTwo = () => {
  const steps = [
    {
      title: "Complete the registration form",
      description: "Secure your spot on Zoom by registering.",
      link: "https://us06web.zoom.us/meeting/register/IQ1YPSK3RriZV_hyzLdHdw#/registration",
      button: "Register Now",
    },
    {
      title: "Complete your workbook",
      description: "Prepare your mindset before the session begins.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScYqelUSvbug9Hx6-3dtXfgVSOmXcp3ks75lOiWYePuYz3MzA/viewform",
      button: "Open Workbook",
    },
    {
      title: "Check your inbox for confirmation + Zoom link",
      description: "You'll receive an email with your session access details.",
    },
    {
      title: "Mark your calendar for Saturday, August 2nd, 2025",
      description: "Set a reminder for 12 PM – 1:30 PM EST",
    },
  ];

  return (
    <section className="bg-gray-100 px-4 sm:px-6 lg:px-8 py-6 md:py-16 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Next Steps</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border-l-4 border-[#181349] rounded-md shadow-sm px-5 py-6"
            >
              <div className="flex items-start gap-4">
                <div className="text-[#181349] font-bold text-lg mt-1 w-6 flex-shrink-0">
                  {index + 1}.
                </div>
                <div>
                  <p className="text-base sm:text-lg font-semibold">{step.title}</p>
                  {step.description && (
                    <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                  )}
                  {step.link && step.button && (
                    <a
                      href={step.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#989031] hover:underline"
                    >
                      {step.button}
                      <HiArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThankYouTwo;
