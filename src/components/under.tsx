import { IoCodeSlashSharp  } from "react-icons/io5";

function UnderDevelopment() {
  return (
    <div className="flex flex-col md:flex-row text-[2rem] gap-2 md:text-[4rem] font-bold justify-center items-center h-[100vh]">
        <IoCodeSlashSharp  className="text-[#0000FF] w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem]"/>
      <h1>Under Development</h1>
    </div>
  );
}

export default UnderDevelopment;