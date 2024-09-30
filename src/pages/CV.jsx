/* eslint-disable react/jsx-no-comment-textnodes */
import { useContext } from "react";
import Footer from "../components/Footer";
import { ThemeContext } from "../App";
import { useRef } from "react";
import BackToTopButton from "../components/BackToTopButton";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const cv = [
  {
    judul: "Profile",
    profile:
      "I am someone who is very interested in the world of IT. Therefore, I  very happy with learning and   understand programming language. Specifically   programming languages JavaScript, NodeJs, and   PHP.",
  },
  {
    educations: [
      {
        name: "UNIVERSITAS NASIONAL PASIM",
        title: "D3 MANAJEMEN INFORMATIKA SEPTEMBER 2021 - SEKARANG",
      },
      {
        name: "SMAS MUHAMMADIYAH 11 PadangSidimpuan",
        title: "SEPTEMBER/2019 - AGUSTUS/2021",
      },
    ],
  },
  {
    skills: [
      "TypeScript",
      "JavaScript",
      "Node.js",
      "C/C++",
      "PHP",
      "HTML",
      "CSS",
      "React",
      "Express",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Git",
      "GitHub",
    ],
  },
  {
    training: [
      { name: "Logika Algoritma", date: "September/2021 - Januari/2022" },
      { name: "Basis Data dan Strultur Data", date: "Januari/2022 - Mei/2022" },
      { name: "Fundamental Web", date: "Mei/2022 - Juli/2022" },
      { name: "Fundamental Node.js", date: "Agustus/2022 - Desember/2022" },
      { name: "Node.js Lanjutan", date: "Desember/2022 - April/2023" },
      { name: "Git dan GitHub", date: "Mei/2023" },
    ],
  },
  {
    workExperiences: [
      {
        name: "PT.Ifabula Digital Kreasi",
        deskriptions: [
          {
            name: "Backend Developer",
            detail: [
              {
                projects: "OneSmile",
                titles: ["Project  OneSmile ini saya mengembangkan aplikasi mobile dengan fokus pada kinerja optimal, berkekeloborasi dengan Tim FE, dan memimpin proses debugging dan pengujian applikasi mobile untuk memastikan pengalaman pengguna yang lancar dan bebas dari bug."]
              }]
          },
          {
            name: "Full Stack Developer",
            detail: [
              {
                projects: "Gefami HR",
                titles: [" mengembangkan WebSite dengan fokus pada kinerja optimal dan pengalaman pengguna yang lancar dan bebas dari bug."]
              },
              {
                projects: "Assyst",
                titles: ["mengembangkan WebSite dengan fokus pada kinerja optimal dan pengalaman."]
            
              }
            ]
          },
        ]
      }
    ]
  }
];

export default function CV() {
  const { theme } = useContext(ThemeContext);
  const backToTopRef = useRef(null);
  return (
    <div className={`${theme === "dark" && "bg-slate-900 text-white"}  w-full`}>
      <div ref={backToTopRef} className="p-6 pt-10 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="border-b-2">{cv[0].judul}</h2>
          <p
            className={`${theme === "dark" ? "bg-slate-600" : "bg-black"
              } text-whit text-[12px] text-justify text-white w-[64%] m-auto  rounded-2xl p-4 sm:text-sm indent-4`}
          >
            {cv[0].profile}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="border-b-red-200">Education</h2>
          <div className="flex gap-2 flex-wrap justify-center">
            {cv[1].educations.map((education, i) => {
              return (
                <div
                  key={i}
                  className={`${theme === "dark" ? "bg-slate-600" : "bg-black"
                    } flex flex-col gap-2 w-72 rounded-2xl text-white p-4`}
                >
                  <h4 className="text-center">{education.name}</h4>
                  <p className="  text-center">{education.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2>Work Experience</h2>
          <ul className="flex flex-wrap min-w-[94%] gap-2 list-disc justify-center">
            {cv[4].workExperiences.map((work, i) => {
              // console.log(work);

              return (
                <li
                  className={`${theme === "dark" ? "bg-slate-600" : "bg-black"
                    } text-white p-2 rounded-lg   w-[95%]  md:w-[80%]    h-["18rem"] overflow-y-auto `}
                  key={i}
                >
                  <p className="text-center">{work?.name || ""}</p>
                  ★ Projects
                  <ul>
                    {work?.deskriptions?.map(deskription => (
                      <>
                        <li className="ml-4"> # {deskription.name}

                          <ul>

                            {deskription?.detail.map(title => (
                              <>
                                <li className="before:content-['-'] ml-4 gap-4"> {title?.projects} </li>

                                <ul>
                                  {title?.titles.map(e => (
                                    <li className="flex  ml-6 gap-2 ">
                                      {/* <SentimentSatisfiedAltIcon /> */}
                                      <p className="text-justify p-0 pr-2 pb-2 pl-2"> * <span>{e}</span></p>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            ))}
                          </ul>
                        </li>
                      </>
                    )
                    )}

                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2>Skills</h2>
          <ul className="flex flex-wrap min-w-[94%] gap-2 list-disc justify-center">
            {cv[2].skills.map((skill, i) => {
              return (
                <li
                  className={`${theme === "dark" ? "bg-slate-600" : "bg-black"
                    } text-white p-2 rounded-lg w-[32%] text-center sm:w-1/5`}
                  key={i}
                >
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2>Training</h2>
          <ul
            type="square"
            className="flex flex-wrap w-full gap-2 justify-center"
          >
            {cv[3].training.map((t, i) => {
              return (
                <li
                  className={`${theme === "dark" ? "bg-slate-600" : "bg-black"
                    }  w-64 p-2 flex rounded-lg flex-col justify-evenly items-center text-white`}
                  key={i}
                >
                  <h3 className="text-center">{t.name}</h3>
                  <p className="text-center">{t.date}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <BackToTopButton backToTopRef={backToTopRef} />
      <Footer />
    </div>
  );
}
