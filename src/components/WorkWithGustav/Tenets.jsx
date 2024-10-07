import React, { useEffect } from 'react';

const Tenets = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      card.classList.add(`card-${index + 1}`);
    });
  }, []);

  return (
    <div className="bg-[#F3F3F3] text-white py-10 md:py-20 px-4 flex justify-center">
      <div className="max-w-7xl w-full">
      <h1
          className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl text-center text-black mb-20 font-semibold"
          style={{ fontFamily: "Butler, serif" }}
        >          Tenets of #YouREnough#
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10">
         
          <div className="card bg-gray-800 p-6 md:p-8 lg:p-10 rounded-lg shadow-lg h-[26rem] md:h-[33rem] lg:h-[42rem] xl:h-[38rem] flex flex-col">
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">Personal development</h2>
            <p className="text-sm md:text-sm lg:text-lg mb-4 md:mb-8 flex-grow">
              Gustav Achu champions personal development as the cornerstone of success. With a focus on growth mindset, resilience, and continuous learning, he inspires individuals to unlock their full potential. His holistic approach nurtures self-awareness, emotional intelligence, and skills development, empowering people to thrive in all aspects of life.
            </p>
          </div>
          <div className="card bg-gray-800 p-6 md:p-8 lg:p-10 rounded-lg shadow-lg h-[26rem] md:h-[33rem] lg:h-[42rem] xl:h-[38rem] flex flex-col">
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">Wealth accumulation</h2>
            <p className="text-sm md:text-sm lg:text-lg mb-4 md:mb-8 flex-grow">
              Gustav Achu's expertise extends to wealth accumulation strategies that go beyond financial gains. He educates on the principles of financial literacy, investment strategies, and entrepreneurial mindset, empowering individuals to build sustainable wealth. By fostering a culture of financial discipline and strategic planning, he guides his audience towards long-term prosperity and financial independence.
            </p>
          </div>
          <div className="card bg-gray-800 p-6 md:p-8 lg:p-10 rounded-lg shadow-lg h-[26rem]  md:h-[33rem] lg:h-[42rem] xl:h-[38rem] flex flex-col">
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">Legacy building</h2>
            <p className="text-sm md:text-sm lg:text-lg mb-4 md:mb-8 flex-grow">
              Gustav Achu is dedicated to legacy building, guiding individuals and organizations to create lasting impacts that transcend generations. Through his teachings and mentorship, he empowers others to cultivate values of integrity, purpose, and contribution, ensuring their actions today shape a meaningful legacy tomorrow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tenets;
