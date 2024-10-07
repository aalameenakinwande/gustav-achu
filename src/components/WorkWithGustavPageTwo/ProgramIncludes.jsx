import React from 'react';
import { FaChalkboardTeacher, FaUserEdit, FaChartLine, FaRegBuilding } from 'react-icons/fa';

const ProgramIncludes = () => {
  return (
    <div className="w-full py-2 md:py-10">
      <h2 className="text-center mb-8 text-2xl">Program includes:</h2>
      <div className="flex flex-wrap justify-center space-x-10 mt-20">
        <div className="bg-white p-6 m-1 rounded-lg shadow-lg flex flex-col items-center h-64 w-56 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <FaChalkboardTeacher size={32} className="mb-4" />
          <h3 className="text-center font-bold mb-2 text-md md:text-lg">One-on-one coaching</h3>
          <p className="text-center text-gray-600 text-sm">Personalized sessions focused on your specific goals and challenges.</p>
        </div>
        <div className="bg-white p-6 m-1 rounded-lg shadow-lg flex flex-col items-center h-64 w-56 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <FaUserEdit size={32} className="mb-4" />
          <h3 className="text-center font-bold mb-2 text-md md:text-lg">Personalized guidance</h3>
          <p className="text-center text-gray-600 text-sm">Tailored advice and support based on your individual circumstances.</p>
        </div>
        <div className="bg-white p-6 m-1 rounded-lg shadow-lg flex flex-col items-center h-64 w-56 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <FaChartLine size={32} className="mb-4" />
          <h3 className="text-center font-bold mb-2 text-md md:text-lg">Strategic advice</h3>
          <p className="text-center text-gray-600 text-sm mt-6">Insights and direction to help you make informed decisions and progress effectively.</p>
        </div>
        <div className="bg-white p-6 m-1 rounded-lg shadow-lg flex flex-col items-center h-64 w-56 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <FaRegBuilding size={32} className="mb-4" />
          <h3 className="text-center font-bold mb-2 text-md md:text-lg">Legacy building</h3>
          <p className="text-center text-gray-600 text-sm mt-6">Learn effective methods for creating a lasting impact through planning and action.</p>
        </div>
      </div>

    </div>
  );
}

export default ProgramIncludes;
