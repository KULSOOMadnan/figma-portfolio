
import Project1 from "@/components/Project1";

export default function Home() {
  return (
    <div className="h-[400px] mt-24 ">
      <div className=" h-[350px] flex justify-center px-14  place-items-center   flex-row ">
        <h1 className="w-1/3 text-4xl font-[500] pl-12 text-justify font-[DM Sans] tracking-tighter text-[#181717] ">
          {" "}
          Hello, I&apos;m <br />
          <span className="leading-4">Kulsoom Adnan. </span>
        </h1>
        <div className="w-1/2 justify-end ">
          <div className="w-9/12 justify-end text-[#606060] items-end text-justify font-[DM Sans] pt-20 ml-14 ">
            I am a student at GIAIC, focused on artificial intelligence, Web 3,
            and the metaverse. With a strong foundation in programming.
          </div>
        </div>
      </div>
      <div className=" flex w-1/4 text-2xl items-center justify-center mx-5 ml-16 mb-28  ">
        <p className="fa-solid fa-arrow-down" aria-hidden="true"></p>
      </div>
      <Project1 heading=" 01 /RESUME BUILDER " description="The project allows users to create, customize, and share professional resumes with ease, including options to add a profile picture, skills, and unique URLs for easy sharing." smallDescription="Developed a dynamic resume builder using Next.js and Tailwind CSS, featuring real-time preview, field validation, and PDF export functionality." link='More shots from this project ↗'/>
      <div className="border-b-2 border-[#606060] w-[80%] text-center flex mx-auto -mt-24  "></div>
      <Project1 heading=" 02 /PORTFOLIO" description="This portfolio showcases skills in modern web development through projects that highlight expertise in technologies like Next.js and Tailwind CSS. The work reflects a commitment to creating responsive, user-centered applications, offering a clear and impactful view of technical abilities and growth."  link='see case study ↗'/>
      <div className="border-b-2 border-[#606060] w-[80%] text-center flex mx-auto -mt-24"></div>
      <Project1 heading=" 03 /Assignment" description="The project allows users to create, customize, and share professional resumes with ease, including options to add a profile picture, skills, and unique URLs for easy sharing."  link='More shots from this project ↗'/>
    </div>
  );
}
