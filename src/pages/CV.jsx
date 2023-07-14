import Footer from "../components/Footer";

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
        title: "SEPTEMBER 2021 - SEKARANG",
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
];

export default function CV() {
  return (
    <>
      <div className="p-6 pt-10 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="border-b-2">{cv[0].judul}</h2>
          <p className="text-[12px] text-justify">{cv[0].profile}</p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="border-b-red-200">Education</h2>
          {cv[1].educations.map((education, i) => {
            return (
              <div key={i} className="flex flex-col gap-2">
                <h5>{education.name}</h5>
                <p className="text-[12px] text-justify">{education.title}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-4">
          <h2>Skills</h2>
          <ul type="square" className="flex flex-wrap min-w-[94%] gap-2">
            {cv[2].skills.map((skill, i) => {
              return (
                <li className="text-xs" key={i}>
                  {skill}{" "}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
