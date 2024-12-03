import React from "react";

function Aboutme() {
  return (
    <div className="flex flex-row justify-between  mx-28 py-28 ">
      <div className="mx-auto w-1/2 flex flex-col gap-y-8 px-16">
        <div className="text-4xl font-[DM Sans] tracking-tighter  text-[#181717]">
          <h1>
            Hi I’m Kulsoom <br /> Adnan, a Web <br /> Developer.
          </h1>
        </div>
        <div className=" text-[#606060] text-sm">
          <p>
            I am a dedicated student with a strong focus on web development and
            emerging technologies. Skilled in JavaScript, React, Next.js, and
            Tailwind CSS, I have built projects like a dynamic resume builder,
            which showcases my ability to create interactive, user-friendly
            applications. I am passionate about leveraging my knowledge in
            front-end development to design responsive, efficient, and visually
            appealing web experiences.
          </p>
          <p className="mt-6">
            Currently, I am actively seeking internship opportunities where I
            can apply my skills in a real-world setting, contribute to impactful
            projects, and continue learning from experienced professionals in
            the field.
          </p>
        </div>
        <div className="tracking-tighter flex flex-col justify-between text-[14px] ">
          <div className="flex flex-row mt-24  justify-between">
            <h1 className="underline-offset-1 underline text-[#181717] ">
              {" "}
              Main Softwer{" "}
            </h1>
            <p className="text-[#606060]">
              VS Code, GitHub, Figma, Chrome DevTools, <br /> npm, Next.js CLI,
              Postman, Trello, Docker 
            </p>
          </div>

          <div className="flex flex-row mt-4  justify-end">
            <p className="text-[#606060]">
              {" "}
              Vercel, MongoDB Compass, Terminal
            </p>
          </div>

          <div className="flex flex-row mt-10 justify-between">
            <h1 className="underline-offset-1 underline "> Main Skills </h1>
            <p className="text-[#606060]">
              HTML | CSS | JavaScript | TypeScript | <br /> React | Next.js |
              Tailwind CSS | Bootstrap{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto w-1/2 flex place-items-center justify-center h-[200px] p-16 ">
        <img
          src="https://s3-alpha-sig.figma.com/img/2d94/43a5/3cdcdd917bc0e24fdd38c0ec707675ba?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DIg0vBz3TvdcTCUDS2nMOT~RVcegqi3Pxcn4aFKe9HrHGY3M~U~ys-suKSjqnEA3NkX~yALo1MjqszljD7eQoUGGI6PYNcprCGFJ9IpA1HDBwS4jUx901JLFdS6eDQgH0CE4S8cgT3plFSWw-w~ZmNIgNal4ujmv367B5nx7U85iG9BLrgoVv83hXUx3vVUdnnJpe2OLvDoSDnaewcmPveP4EKx1dDd04DIFJXPY6b~uBDZh0G17bFcdx5HNP2KzUYF37NIxjQbFhCnzurvLOZjuVt0KERSeZ56kJv70hFi6ARcfJSmsz-jdBJiuFHZEYr17FgXLVxrDw4cLFsYmbw__"
          alt="imag"
        />
      </div>
    </div>
  );
}

export default Aboutme;
