import Footer from "../components/Footer";

const dataProject = [
  {
    id: 1,
    name: "Toko Ali Syariah",
    img: "/ali-syariah.c.png",
    link: "https://github.com/hanafiahlubis/penjualan-Al-quran-hadits/",
    dectiption:
      "Penjualan Al-Quran dan hadis adalah proyek yang bertujuan untuk menyebarkan ilmu dan ajaran Islam kepada masyarakat luas.",
  },
  {
    id: 2,
    name: "Hanafi`A",
    img: "/Hanafi`A.png",
    link: "https://github.com/hanafiahlubis/quiz-quran",
    dectiption: `
    Al-Qur'an adalah kitab suci umat Islam yang berisi petunjuk dan pedoman hidup bagi umat manusia. Al-Qur'an terdiri dari 114 surat yang dibagi menjadi 30 juz. Setiap surat terdiri dari ayat-ayat yang berisi berbagai macam topik, seperti kisah, hukum, dan perintah Allah.
    Proyek Al-Qur'an ini bertujuan untuk membantu umat Islam untuk mempelajari Al-Qur'an dengan lebih mudah dan menyenangkan. Proyek ini akan berisi berbagai macam fitur, seperti: Teks Al-Qur'an, Kuis Al-Qur'an ,Fitur untuk membuat soal kuis Al-Qur'an.
    Proyek Al-Qur'an ini diharapkan dapat menjadi sumber belajar yang bermanfaat bagi umat Islam di seluruh dunia.`,
  },
  {
    id: 3,
    name: "An-Nafi`",
    img: "/an-nafi.png",
    link: "https://github.com/hanafiahlubis/an-nafi",
    dectiption: `
    Proyek ini menampilkan jadwal sholat, ayat-ayat Al-Quran, dan doa-doa. Proyek ini bertujuan untuk membantu umat Islam untuk beribadah dengan lebih baik. Proyek ini juga bertujuan untuk meningkatkan pemahaman umat Islam tentang Islam.
    
    Proyek ini akan menampilkan jadwal sholat untuk berbagai kota di dunia. Proyek ini juga akan menampilkan ayat-ayat Al-Quran dan doa-doa dalam berbagai bahasa. Proyek ini akan mudah digunakan dan dapat diakses oleh siapa saja.
    
    Proyek ini akan bermanfaat bagi umat Islam yang ingin beribadah dengan lebih baik. Proyek ini juga akan bermanfaat bagi umat Islam yang ingin meningkatkan pemahaman mereka tentang Islam.`,
  },
  {
    id: 4,
    name: "Al-Likah",
    img: "/al-likah.png",
    link: "https://github.com/hanafiahlubis/toko-baju",
    dectiption: `Toko Al-likah adalah  
    Menawarkan berbagai macam baju dengan kualitas yang baik dan harga yang terjangkau.
    Memiliki layanan WebSite yang baik dan Mantap.`,
  },
  {
    id: 5,
    name: "Whats-Al",
    img: "/what-al.png",
    link: "https://github.com/hanafiahlubis/whats-al",
    dectiption:
      "Proyek media sosial yang berisi mengirim pesan dan memposting cerita akan menjadi cara yang bagus untuk terhubung dengan teman dan keluarga. Pengguna dapat mengirim pesan satu sama lain, memposting cerita, dan berbagi foto dan video. Proyek ini juga dapat digunakan untuk mempromosikan bisnis atau organisasi.",
  },
  {
    id: 6,
    name: "Jadwal-CPU",
    img: "/bac-end.avif",
    link: "https://github.com/hanafiahlubis/BackEnd-jadwal-CPU",
    dectiption: `Jadwal CPU adalah algoritma yang menentukan urutan proses yang akan dijalankan pada CPU. Algoritma ini penting karena memastikan bahwa proses-proses berjalan secara adil dan efisien.First-come, first-served (FCFS)Algoritma ini sederhana dan mudah diimplementasikan, tetapi tidak selalu efisien.
      Shortest job first (SJF) Algoritma ini lebih efisien daripada FCFS, tetapi lebih kompleks dan lebih sulit diimplementasikan. 
      Priority scheduling Algoritma ini memungkinkan proses diberi prioritas yang berbeda, dan proses dengan prioritas tertinggi akan dijalankan terlebih dahulu.
      Round robin Algoritma ini membagi waktu CPU menjadi slot-slot waktu yang sama, dan setiap proses diberi giliran untuk menggunakan CPU selama satu slot waktu.`,
  },
];
export default function Projects() {
  return (
    <div className="w-full">
      <div id="Projecs" className="p-6 flex flex-col gap-4">
        <h3>My projects</h3>
        {dataProject.map((project) => (
          <>
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
          </>
        ))}
      </div>
      <Footer />
    </div>
  );
}
