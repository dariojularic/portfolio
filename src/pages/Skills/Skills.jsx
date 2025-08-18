import "./Skills.css";

function Skills() {
  return (
    <>
      <section className="skills-section">
        <div className="skills-text-container">
          <h2 className="skills-header">Skills</h2>
          <p className="skills-paragraph">
            Over the years, I’ve mastered front-end technologies like React,
            JavaScript, and Tailwind CSS to create pixel-perfect, responsive
            interfaces that users love. <br />
            <br />
            On the back-end, I’m comfortable with Node.js and Express, ensuring
            your site runs fast and secure. I’m also well-versed in optimizing
            performance, debugging complex issues, and integrating APIs to add
            that extra functionality.
            <br />
            <br />
            Beyond the tech, I bring a problem-solving mindset and a commitment
            to delivering projects that are as reliable as they are beautiful.
          </p>
        </div>
        <div className="skills-img-container">
          <img
            src="src/assets/avatar.jpg"
            alt="avatar"
            className="skills-img"
          />
        </div>
      </section>
      <hr />
    </>
  );
}

export default Skills;
