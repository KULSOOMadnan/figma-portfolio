// import React from "react";

interface Props {
    heading: string;
    description: string;
    smallDescription?: string; // `smallDescription` is optional and can be undefined
    link: string;
  }

import React from "react";


function Project1({ heading, description, smallDescription, link }: Props) {
  return (
    <div className=" h-[80vh] w-full px-14 my-24">
      <div className="flex justify-center px-20 flex-row  ">
        <div className="w-1/3 flex flex-col justify-between font-[DM Sans] tracking-tighter">
          <div>
            <h1 className="font-[500] text-justify text-[#181717]">
             {heading}<br />
            </h1>
            <p className="leading-6 mt-6 text-sm">
              {description}
            </p>
            {smallDescription && ( // Conditionally render `smallDescription`
              <p className="mt-6 text-[10px] text-[#606060]">
                {smallDescription}
              </p>
            )}
          </div>
          <div>
            <a href='/' target="_blank" rel="noopener noreferrer">
              <p className="text-[14px] underline underline-offset-1 text-[#181717]">
                {/* more sorts from this project ↗ */} {link}
              </p>
            </a>
          </div>
        </div>

        <div className="w-1/2 justify-end ml-14">
          <div className="w-[540px] h-[364px] justify-end text-[#606060] items-end text-justify font-[DM Sans] bg-[gray] pt-20">
            {/* Placeholder for project image or content */}
          </div>
          
        </div>
      </div>
     
    </div>
  );
}

export default Project1;



// function Project1({heading , description , smallDescription , link} : Props) {
//   return (
//     <div className="border-b-2 h-screen border-[#606060] w-full px-14 ">
//       <div className=" flex justify-center    px-20 flex-row ">
//         <div className="w-1/3 flex flex-col justify-between font-[DM Sans] tracking-tighter">
//           <div>
//           <h1 className=" font-[500] text-justify   text-[#181717] ">
//             {" "}
//             01 /RESUME BUILDER <br />
//           </h1>
//           <p className="leading-6 mt-6 text-sm">  </p>
//           <p className=" mt-6 text-[10px] text-[#606060]" </p>
//           </div>
//           <div>
//           <p className="text-[14px] underline underline-offset-1 text-[#181717]">more sorts from this project ↗</p>

//           </div>
//         </div>

//         <div className="w-1/2 justify-end ml-14 ">
//           <div className="w-[540px] h-[364px] justify-end text-[#606060] items-end text-justify font-[DM Sans] bg-[gray] pt-20 ">
            
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Project1;