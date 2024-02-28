import Image from "next/image";
import { FaLinkedin, FaThumbsDown } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}


function ProjectLink({ slug, name, sub, stack, thumb }) {
  return (
    <div>
      <a
        href={`/project/${slug}`}
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

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        hey, I'm Kenny👋
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I am a software developer, pharmacist, and adventurer. I have always
          loved making and tinkering with things and followed this passion into
          coding. Here you can find some of the projects I'm currently working
          on as well as some of my past work.
        </p>
      </div>
      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Image
            alt="Me climbing"
            src={"/rock.jpg"}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4">
          <Image
            alt="Me climbing"
            src={"/race.jpg"}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4">
          <Image
            alt="Me climbing"
            src={"/pass.jpg"}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Me climbing"
            src={"/climb.jpg"}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Me climbing"
            src={"/pharmacy.jpg"}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4">
          <Image
            alt="Me climbing"
            src={"/kite.jpeg"}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded px-3 py-4 w-1/4 mb-6 flex flex-row justify-around items-center items-start align-middle hover:text-neutral-200">
          <GrDocumentText/>
        <a href="files/KennyNgoresume.pdf" className="bg-inherit">
          Resume in PDF
        </a>
      </div>
      <p>
        I have worked with many technologies and built and deployed several
        projects. You can find the link to some of them below
      </p>
      <div className="my-8 flex flex-col space-y-4 w-full">
        <ProjectLink
          name="unumcornu"
          slug="unumcornu"
          sub="site commissioned for local ceramics artist"
          thumb="unum"
          stack="Next.JS,TailwindCSS"
        />
        <ProjectLink
          name="rendezview"
          slug="rendezview"
          sub="group event planning platform"
          thumb="rendez"
          stack="MongoDB, ExpressJS, React.JS, NodeJS"
        />
        <ProjectLink
          name="fakebook"
          slug="fakebook"
          sub="clone of social media site Facebook"
          thumb="fake"
          stack="Ruby on Rails, ReactJS, NodeJS, PostgreSQL"
        />
      </div>

      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm mb-24 text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://linkedin.com/in/kennyvungo"
          >
            <FaLinkedin size={40} />
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/"
          >
            <FaGithub size={40} />
          </a>
        </li>
      </ul>
    </section>
  );
}
