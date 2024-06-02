import React from 'react'
import GustavImage from '../../images/homeImages/Gustav.webp';


const ProgramDetails = () => {
    return (
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row text-white py-16 lg:py-24">
            {/* First Column: Image */}
            <div className="md:w-1/2 w-full mb-4 md:mb-0">
              <img src={GustavImage} alt="Gustav" className="w-full h-[300px] md:h-auto hover:scale-105 transition-transform object-cover rounded-lg shadow-md"/>
            </div>
    
            {/* Second Column: Text and Button */}
            <div className="md:w-1/2 w-full flex flex-col items-start md:pl-6 md:ml-20">
              <p style={{ color: '#EFE359', fontSize: '13px' }}>THE BENEFITS OF YOU'RE ENOUGH TRAINING</p>
              <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-black">
              Training To Get You To Your Best Self              </h1>
    
              <p className="text-black pb-6" style={{ fontSize: '13px' }}>
              Lorem ipsum et sed ipsum massa arcu et. Non felis diam consectetur velit porta odio facilisis sociis augue. Tortor proin consequat senectus orci habitant. Suspendisse cursus in sed aenean ut sit aliquam. In urna venenatis erat ut nunc nec egestas. Turpis ut ridiculus quis massa. Mi suspendisse accumsan adipiscing sed justo tortor amet. Aenean platea leo pellentesque augue duis feugiat in nascetur. Quam ullamcorper adipiscing gravida est turpis quam donec. Vestibulum eu orci enim urna pellentesque egestas pharetra. Mi quam in vulputate rutrum ultricies congue a. Auctor tempor ac enim orci fusce at. Metus felis vitae tristique ornare purus ut. Lectus mollis nisi tempus vel urna. Amet pretium aliquet sed urna adipiscing nisi donec. Odio in diam consequat velit scelerisque in platea congue. Eget semper tellus donec cras ut. Rhoncus phasellus non nisi facilisi hendrerit consequat consequat. Euismod magna semper ullamcorper diam. Nisl quis rhoncus feugiat aliquet.             </p>
            </div>
          </div>
        </div>
      );
}

export default ProgramDetails
