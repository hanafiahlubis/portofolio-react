import Footer from "../components/Footer";

const dataProject = [
  {
    id: 1,
    name: "Toko Ali Syariah",
    img: "/ali-syariah.c.png",
    link: "https://github.com/hanafiahlubis/penjualan-Al-quran-hadits/",
    dectiption: "Penjualan Al-Qur`an dan Hadits",
  },
  {
    id: 2,
    name: "Hanafi`A",
    img: "/Hanafi`A.png",
    link: "https://github.com/hanafiahlubis/quiz-quran",
    dectiption: "Quiz Al-qur`an dan Ayat - ayat Al-Qur`an",
  },
  {
    id: 3,
    name: "An-Nafi`",
    img: "/an-nafi.png",
    link: "https://github.com/hanafiahlubis/an-nafi",
    dectiption: "Ayat-Ayat Al-Qur`an",
  },
  {
    id: 4,
    name: "Al-Likah",
    img: "/al-likah.png",
    link: "https://github.com/hanafiahlubis/toko-baju",
    dectiption: "Toko Al-Likah Yakni Toko penjualan baju",
  },
  {
    id: 5,
    name: "Whats-Al",
    img: "/what-al.png",
    link: "https://github.com/hanafiahlubis/whats-al",
    dectiption: "Media Sosial untuk chat dan memposting cerita",
  },
  {
    id: 6,
    name: "Jadwal-CPU",
    img: "/bac-end.avif",
    link: "https://github.com/hanafiahlubis/BackEnd-jadwal-CPU",
    dectiption: "Back End Penjadwal CPU Dengan 4 Metode",
  },
];
export default function Projects() {
  return (
    <>
      <div>
        <div id="Projecs" className="p-6 flex flex-col gap-4">
          <h3>My projects</h3>
          {dataProject.map((project) => (
            <>
              <div key={project.id} className="w-full m-1 gap-8 flex flex-col ">
                <h5 className="sm:text-lg ">{project.name}</h5>
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-3/4 h-full mx-auto"
                />
                <div>
                  <p className="text-[12px] sm:text-sm md:text-base">
                    {project.dectiption}
                  </p>
                </div>
                <div className="h-[2px] bg-slate-300"></div>
              </div>
            </>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
