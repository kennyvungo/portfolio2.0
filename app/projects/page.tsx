import React from 'react'
import Image from 'next/image';

function ProjectLink({
  link,
  name,
  sub,
  stack,
  thumb,
}: {
  link: string;
  name: string;
  sub: string;
  stack: string;
  thumb: string;
}) {
  return (
    <div>
      <a
        href={link}
        className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex flex-row items-start justify-between px-3 py-4 h-56 hover:text-neutral-200"
      >
        <div className="flex flex-col bg-inherit ml-2 mt-2">
          <p>{name}</p>
          <p className="h-6 text-sm mt-2">{sub}</p>
          <p className="flex flex-col items-start justify-end h-28 text-xs">
            {stack}
          </p>
        </div>

        <div className="flex flex-row justify-center items-center h-full bg-inherit mr-4">
          <Image
            alt="thumbnail"
            src={`/${thumb}.jpg`}
            width={300}
            height={400}
          />
        </div>
      </a>
    </div>
  );
}

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