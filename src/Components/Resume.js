import React from 'react';

const Resume = ({ data: { education, background, work, skills } }) => {
  const educationArray = education.map(education => (
    <div key={education.school}>
      <h3>
        <img
          className={`${education.logoSize}-logo`}
          alt="img"
          src={education.logo}
        />{' '}
        {education.school}
      </h3>
      <p className="info">
        {education.degree} <span>&bull;</span>
        <em className="date">{education.graduated}</em>
      </p>
      <p>{education.description}</p>
    </div>
  ));
  const backgroundArray = background.map(function(bgrd) {
    return (
      <div key={bgrd.title}>
        <h3>
          <img className={`${bgrd.logoSize}-logo`} alt="img" src={bgrd.logo} />{' '}
          {bgrd.title}
        </h3>
        <p className="info">
          {bgrd.subtitle} <span>&bull;</span>
          <em className="date">{bgrd.date}</em>
        </p>
        <p>{bgrd.description}</p>
      </div>
    );
  });
  const workArray = work.map(function(work) {
    return (
      <div key={work.company}>
        <h3>
          <img className={`${work.logoSize}-logo`} alt="img" src={work.logo} />{' '}
          {work.company}
        </h3>

        <p className="info">
          {work.title}
          <span>&bull;</span> <em className="date">{work.years}</em>
        </p>
        <p>{work.description}</p>
        {work.stack && (
          <p>
            <em>Stack: </em>
            {work.stack}
          </p>
        )}
      </div>
    );
  });
  const skillsArray = skills.map(function(skills) {
    const className = 'skill-image ' + skills.name.toLowerCase();
    return (
      <li key={skills.name} className="skill-list">
        <img className={className} alt={skills.name} src={skills.image} />
        <em>{skills.name}</em>
      </li>
    );
  });

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{educationArray}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{workArray}</div>
      </div>

      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Background</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{backgroundArray}</div>
          </div>
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="">
            <ul className="skills">{skillsArray}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
