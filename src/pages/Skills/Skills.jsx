import "./Skills.css";

function Skills() {
  return (
    <>
      <section className="skills-section">
        <div className="skills-container">
          <div className="skills-text-container">
            <h2 className="skills-header">SKILLS</h2>
            <p className="skills-paragraph">
              Over the years, I’ve mastered front-end technologies like React,
              JavaScript, and Tailwind CSS to create pixel-perfect, responsive
              interfaces that users love. <br />
              <br />
              On the back-end, I’m comfortable with Node.js and Express,
              ensuring your site runs fast and secure. I’m also well-versed in
              optimizing performance, debugging complex issues, and integrating
              APIs to add that extra functionality.
              <br />
              <br />
              Beyond the tech, I bring a problem-solving mindset and a
              commitment to delivering projects that are as reliable as they are
              beautiful.
            </p>
          </div>
          <div className="skills-img-container">
            <img
              src="src/assets/avatar.jpg"
              alt="avatar"
              className="skills-img"
            />
          </div>
        </div>
        {/* <hr className="" /> */}
      </section>
    </>
  );
}

export default Skills;















// sta je express.js,
//  sta je node.js
//  what is server side rendering
// what is client side rendering
// client side rendering vs server side rendering
// how to podignem basic express js server

// zadatak: podignutt express server u folderu server
// taj server treba da procesuira jedan request i da vrati json hello world
// osim foldera server, folder client i u folderu client je vite aplikacija
// iz main.js napravi request prema svom serveru 
