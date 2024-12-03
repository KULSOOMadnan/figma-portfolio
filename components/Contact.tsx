import React from "react";

function Contact() {
  return (
    <div className="flex flex-row justify-between h-[20%] px-36">
      <div className="text-xl tracking-wide ">
        I am thrilled to answer  to <br/> your next project <p className="fa-solid fa-arrow-right ml-4 text-sm" aria-hidden="true"
        ></p>
      </div>
      <div className="flex flex-col leading-9 ">
        <p className="text-xl">adnanirfan282@gmail.com</p>
        <p className="text-[10px] "><a href="/">Veiw Resume </a> </p>
      </div>
    </div>
  );
}

export default Contact;
