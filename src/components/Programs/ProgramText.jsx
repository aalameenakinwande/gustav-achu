import React from 'react';

const ProgramText = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between h-full text-gray-900 py-4 lg:py-8">
          {/* First Text Block */}
          <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left mb-8 md:mb-0 md:mr-8" style={{ height: '400px' }}>
            <p className="mb-10 mt-10" style={{ fontSize: '13px' }}>
              Lorem ipsum dolor sit amet consectetur. Senectus quam id sed bibendum. In vulputate amet iaculis ultricies viverra massa ullamcorper morbi. Ac magna arcu faucibus sed orci mattis. Quisque aliquet maecenas pellentesque iaculis nulla felis. Felis pellentesque in eget commodo. At non ultrices erat faucibus sit. Eget quis tortor lectus sagittis dignissim nibh. Morbi non amet leo aliquet justo malesuada. Mattis suspendisse malesuada enim nec. Neque elit suspendisse et neque quis purus enim non. Facilisi nisl erat aliquam tortor lectus. Diam natoque scelerisque amet vel blandit. Arcu suspendisse tincidunt egestas et feugiat ullamcorper et varius. Neque nibh eget euismod amet hendrerit morbi proin. Orci mauris id volutpat viverra. Quam risus aliquet volutpat diam ullamcorper amet quisque. Aliquam nullam risus enim risus nulla. Risus nullam diam risus in tincidunt aliquet quam. Dictum aliquam dui massa posuere nibh aliquet. Amet sodales venenatis neque sit vulputate. Commodo ultrices orci augue et molestie mattis pulvinar mollis. Amet nec dui viverra tortor condimentum vitae sed non amet. Neque dignissim enim non arcu mattis. Amet nec dui viverra tortor condimentum vitae sed non amet. Neq.Duis.
            </p>
          </div>
          {/* Second Text Block */}
          <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left mt-0 md:mt-10" style={{ height: '400px' }}>
            <p className="mb-10" style={{ fontSize: '13px' }}>
              Lorem ipsum dolor sit amet consectetur. Senectus quam id sed bibendum: <br />
              <br />
              ● In vulputate amet iaculis ultricies viverra massa ullamcorper morbi. Ac magna arcu faucibus sed orci mattis.<br /><br />
              ● In vulputate amet iaculis ultricies viverra massa ullamcorper morbi. Ac magna arcu faucibus sed orci mattis. In vulputate amet iaculis ultricies viverra massa ullamcorper morbi. <br /><br />
              ● Ac magna arcu faucibus sed orci mattis. In vulputate amet iaculis ultricies viverra massa ullamcorper morbi. <br /><br />
              ● Ac magna arcu faucibus sed orci mattis. In vulputate amet iaculis ultricies viverra massa ullamcorper morbi. <br /><br />
              ● Ac magna arcu faucibus sed orci mattis. In vulputate amet iaculis ultricies viverra massa ullamcorper morbi. <br /><br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramText;
