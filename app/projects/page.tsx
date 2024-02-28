import React from 'react'
import { ProjectLink } from '../page'

const ProjectsPage = () => {
  return (
    <div className="my-8 flex flex-col space-y-4 w-full">
      <ProjectLink
        name="unumcornu"
        link="https://unumcornu.com"
        sub="site commissioned for local ceramics artist"
        thumb="unum"
        stack="Next.JS,TailwindCSS"
      />
      <ProjectLink
        name="rendezview"
        link="https://smelk.onrender.com"
        sub="group event planning platform"
        thumb="rendez"
        stack="MongoDB, ExpressJS, React.JS, NodeJS"
      />
      <ProjectLink
        name="fakebook"
        link="https://fakebook-tuhp.onrender.com/login"
        sub="clone of social media site Facebook"
        thumb="fake"
        stack="Ruby on Rails, ReactJS, NodeJS, PostgreSQL"
      />
    </div>
  );
}

export default ProjectsPage