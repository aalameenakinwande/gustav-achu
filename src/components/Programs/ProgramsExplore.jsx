import React, { useEffect, useRef } from "react";

const ProgramsExplore = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const currentRefs = cardRefs.current; // Copy cardRefs.current to a local variable

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Unobserve once it has become visible
          }
        });
      },
      {
        threshold: 0.1, // Adjust the threshold as needed
      }
    );

    currentRefs.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      currentRefs.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start items-center py-16">
          <header className="px-8 text-center">
            <h1 className="text-2xl lg:text-4xl font-bold mb-4">
              Explore the power
              <br /> of You’re Enough Coaching™
            </h1>
          </header>
          <div className="flex flex-col mt-8 sm:flex-row sm:justify-between sm:items-start sm:space-x-4">
            <div
              className="card shadow-md p-6 flex-1 mb-4 sm:mb-0"
              style={{
                backgroundColor: "#0B1623",
                color: "white",
                height: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                textAlign: "start",
              }}
              ref={(el) => (cardRefs.current[0] = el)} // Corrected index to 0
            >
              <div style={{ marginTop: "240px" }}>
                <h2 className="text-lg font-bold mb-1">Tailored</h2>
                <p style={{ fontSize: "13px" }}>
                  Lorem ipsum dolor sit amet consectetur. Egestas ut viverra at
                  consequat nulla tristique risus tincidunt. Vel feugiat
                  elementum tempus eros sapien eget.      </p>
              </div>
            </div>
            <div
              className="card shadow-md p-6 flex-1 mb-4 sm:mb-0"
              style={{
                backgroundColor: "#0B1623",
                color: "white",
                height: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                textAlign: "start",
              }}
              ref={(el) => (cardRefs.current[1] = el)} // Corrected index to 1
            >
              <div style={{ marginTop: "240px" }}>
                <h2 className="text-lg font-bold mb-1">Holistic</h2>
                <p style={{ fontSize: "13px" }}>
                  Lorem ipsum dolor sit amet consectetur. Egestas ut viverra at
                  consequat nulla tristique risus tincidunt. Vel feugiat
                  elementum tempus eros sapien eget.      </p>
              </div>
            </div>
            {/* Third Card */}
            <div
              className="card shadow-md p-6 flex-1 mb-4 sm:mb-0"
              style={{
                backgroundColor: "#0B1623",
                color: "white",
                height: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                textAlign: "start",
              }}
              ref={(el) => (cardRefs.current[2] = el)} // Corrected index to 2
            >
              <div style={{ marginTop: "240px" }}>
                <h2 className="text-lg font-bold mb-1">Actionable</h2>
                <p style={{ fontSize: "13px" }}>
                  Lorem ipsum dolor sit amet consectetur. Egestas ut viverra at
                  consequat nulla tristique risus tincidunt. Vel feugiat
                  elementum tempus eros sapien eget.      </p>
              </div>
            </div>
            <div
              className="card shadow-md p-6 flex-1"
              style={{
                backgroundColor: "#0B1623",
                color: "white",
                height: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                textAlign: "start",
              }}
              ref={(el) => (cardRefs.current[3] = el)} // Corrected index to 3
            >
              <div style={{ marginTop: "240px" }}>
                <h2 className="text-lg font-bold mb-1">Empowering</h2>
                <p style={{ fontSize: "13px" }}>
                  Lorem ipsum dolor sit amet consectetur. Egestas ut viverra at
                  consequat nulla tristique risus tincidunt. Vel feugiat
                  elementum tempus eros sapien eget.      </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsExplore;
