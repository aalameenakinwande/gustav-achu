import React from "react";
import WorkBookImageOne from "../../images/bookImages/Book1.webp";
import OneImage from '../../images/SpeakerImages/1.png';
import TwoImage from '../../images/SpeakerImages/2.png';
import ThreeImage from '../../images/SpeakerImages/3.png';
import FourImage from '../../images/SpeakerImages/4.png';
import FiveImage from '../../images/SpeakerImages/5.png';
import SixImage from '../../images/SpeakerImages/6.png';


const resources = [
  {
    title: "Dr. Atangcho Celestine",
    imgSrc: WorkBookImageOne,
    links: [
      {
        text: "Watch Now",
        url: "https://drive.google.com/file/d/1GVKVufPVe8k57hp0uYErjG6Bag4bSsGK/view",
      },
    ],
  },
  {
    title: "Kingsley Pungong",
    imgSrc: ThreeImage,
    links: [
      {
        text: "Watch Now",
        url: "https://drive.google.com/file/d/1So1GgvPFWJZNF-s_pPNFGykAXhl3Gdr2/view",
      },
    ],
  },
  {
    title: "Behyia Leonard Bruce",
    imgSrc: TwoImage,
    links: [
      {
        text: "Watch Now",
        url: "https://drive.google.com/file/d/11DHwwXwyLrpX-ABtUsa0Rw-3lT_sTcqt/view",
      },
    ],
  },
  {
    title: "MoAtsoh Mofor",
    imgSrc: OneImage,
    links: [
      {
        text: "Watch Now",
        url: "https://drive.google.com/file/d/1oDpyRjb8JPo8ZLe7JfAdONXXT4NN3zKb/view",
      },
    ],
  },
  {
    title: "Charles Njoya",
    imgSrc: FourImage,
    links: [
      {
        text: "Watch Now",
        url: "https://drive.google.com/file/d/10g9ZOrBS0QdXMT9mRuK62eVJRXUy10U9/view",
      },
    ],
  },
  {
    title: "Pastor Ajimo",
    imgSrc: SixImage,
    links: [
      {
        text: "Watch Now",
        url: "https://drive.google.com/file/d/1BP6ofDUSIaJbLwKdaeqe_n45Jp0wrDmx/view",
      },
    ],
  },
  {
    title: "Simonie Mpondo",
    imgSrc: FiveImage,
    links: [
      {
        text: "Watch Now",
        url: "https://drive.google.com/file/d/1NeM_qOt-mLsm_38h5RYC19Lxz2FRJfUL/view",
      },
    ],
  },
];

const ResourceSpeakers = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 relative">
      <h2 className="text-center text-xl font-semibold tracking-wide uppercase text-gray-800">
        Watch Speakers From The Seeker Book Launch
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
        {resources.map((resource, index) => (
          <div key={index} className="flex flex-col items-center text-center">
         <div className="w-[100px] lg:w-[250px] h-[200px] lg:h-[250px] overflow-hidden rounded-md shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
  <img
    src={resource.imgSrc}
    alt={resource.title}
    className="w-full h-full object-contain"
  />
</div>

            <h3 className="mt-4 text-sm lg:text-lg font-semibold italic text-gray-900">
              {resource.title}
            </h3>
            <div className="flex justify-center gap-4 mt-2">
              {resource.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs lg:text-sm font-semibold text-[#181349] hover:underline"
                >
                  ↓ {link.text}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceSpeakers;
