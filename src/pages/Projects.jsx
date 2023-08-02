import { useContext } from "react";
import Footer from "../components/Footer";
import { ThemeContext } from "../App";
import BackToTopButton from "../components/BackToTopButton";
import { useRef } from "react";

const dataProject = [
  {
    id: 1,
    name: "Toko Ali Syariah",
    img: "/ali-syariah.c.png",
    link: "https://github.com/hanafiahlubis/penjualan-Al-quran-hadits/",
    dectiption:
      "The sale of Al-Quran and Hadith is a project that aims to spread Islamic knowledge and teachings to the wider community.",
  },
  {
    id: 2,
    name: "Hanafi`A",
    img: "/Hanafi`A.png",
    link: "https://github.com/hanafiahlubis/quiz-quran",
    dectiption: `
    Al-Qur'an is the holy book of Muslims which contains instructions and guidelines for life for mankind. Al-Qur'an consists of 114 chapters which are divided into 30 chapters. Each sura consists of verses covering various topics, such as stories, laws, and commands of Allah.
    This Al-Qur'an project aims to help Muslims to learn the Qur'an more easily and pleasantly. This project will contain various features, such as: Al-Qur'an Text, Al-Qur'an Quiz, Features for making Al-Qur'an quiz questions.
    It is hoped that this Al-Qur'an project will become a useful learning resource for Muslims around the world.`,
  },
  {
    id: 3,
    name: "An-Nafi`",
    img: "/an-nafi.png",
    link: "https://github.com/hanafiahlubis/an-nafi",
    dectiption: `
    This project displays prayer times, verses of the Al-Quran, and prayers. This project aims to help Muslims to pray better. This project also aims to increase the understanding of Muslims about Islam.
    
    This project will display prayer times for different cities of the world. The project will also feature verses from the Al-Quran and prayers in different languages. This project will be easy to use and accessible to anyone.
   
    This project will benefit Muslims who wish to worship better. This project will also benefit Muslims who want to increase their understanding of Islam.`,
  },
  {
    id: 4,
    name: "Al-Likah",
    img: "/al-likah.png",
    link: "https://github.com/hanafiahlubis/toko-baju",
    dectiption: `Al-likah shop is
    Offers a wide range of clothes with good quality and affordable prices.
    Have a good and steady WebSite service.`,
  },
  {
    id: 5,
    name: "Whats-Al",
    img: "/what-al.png",
    link: "https://github.com/hanafiahlubis/whats-al",
    dectiption:
      "Social media projects that involve sending messages and posting stories would be a great way to connect with friends and family. Users can message each other, post stories, and share photos and videos. This project can also be used to promote a business or organization.",
  },
  {
    id: 6,
    name: "Jadwal-CPU",
    img: "/bac-end.avif",
    link: "https://github.com/hanafiahlubis/BackEnd-jadwal-CPU",
    dectiption: `The CPU schedule is an algorithm that determines the order in which processes will run on the CPU. This algorithm is important because it ensures that processes run fairly and efficiently. First-come, first-served (FCFS) This algorithm is simple and easy to implement, but not always efficient.
    Shortest job first (SJF) This algorithm is more efficient than FCFS, but more complex and more difficult to implement.
    Priority scheduling This algorithm allows processes to be given different priorities, and the process with the highest priority will be executed first.
    Round robin This algorithm divides CPU time into equal time slots, and each process is given a turn to use the CPU during one time slot.`,
  },
];
export default function Projects() {
  const { theme } = useContext(ThemeContext);
  const backToTopRef = useRef(null);
  return (
    <div className="w-full">
      <div
        ref={backToTopRef}
        id="Projecs"
        className={`${
          theme === "dark" ? "bg-slate-900 text-white" : "text-black"
        } p-6 flex flex-col gap-4`}
      >
        <h3>My projects</h3>
        {dataProject.map((project) => (
          <div key={project.id} className="w-full m-1 gap-8 flex flex-col ">
            <h3 className="sm:text-lg ">{project.name}</h3>
            <img
              src={project.img}
              alt={project.name}
              className="w-3/4 h-full mx-auto"
            />
            <div>
              <p className="text-[12px] sm:text-sm md:text-base text-justify indent-4">
                {project.dectiption}
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href={project.link}
                className="no-underline  p-2 text-sm  bg-slate-600 text-white rounded-lg hover:bg-slate-300 hover:text-slate-600"
              >
                Open Link
              </a>
            </div>
            <div className="h-[2px] bg-slate-300"></div>
          </div>
        ))}
        <BackToTopButton backToTopRef={backToTopRef} />
        <Footer />
      </div>
    </div>
  );
}
