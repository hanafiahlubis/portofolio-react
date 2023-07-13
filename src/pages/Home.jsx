import Projects from "./Projects";

export default function Home() {
  return (
    <>
      <div id="Home" className="p-6">
        <p className="">Hey there 👋</p>
        <h1 className="">I'm Ali Hanafiah</h1>
        <h3 className="">Junior FrontEnd And BackEnd Developer</h3>
        <p className="">
          I am someone who is very interested in the IT world. Therefore, I very
          happy with learning and understanding programming languages.
          Especially JavaScript, NodeJs, and PHP. PHP.
        </p>
      </div>
      <Projects />
    </>
  );
}
