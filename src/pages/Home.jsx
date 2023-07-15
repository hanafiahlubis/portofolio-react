import Projects from "./Projects";

export default function Home() {
  return (
    <div className="w-full">
      <div id="Home" className="p-6 flex flex-col gap-2 sm:">
        <p className="">Hey there 👋</p>
        <h1>I'm Ali Hanafiah</h1>
        <h3 className="md:text-xl">Junior FrontEnd And BackEnd Developer</h3>
        <p className="text-[12px] sm:text-sm md:text-base">
          I am someone who is very interested in the IT world. Therefore, I very
          happy with learning and understanding programming languages.
          Especially JavaScript, NodeJs, and PHP. PHP.
        </p>
      </div>
      <Projects />
    </div>
  );
}
