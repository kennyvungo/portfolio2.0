import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const WorkPage = () => {
  return (
    <section className="mb-24">
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p></p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl tracking-tighter flex flex-row justify-between overflow-y-auto">
          BottleUp{" "}
          <Image
            src={"/bottle.jpg"}
            alt="bottleup logo"
            width={45}
            height={50}
          />{" "}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm -mt-3 mb-1">
          Software Engineer Intern, Oct 2023 - Present
        </p>
        <ul>
          <li>
            Built out frontend mobile (iOS, Android) user interface (UI) using
            React Native, Expo and TypeScript as part of end of year product
            release
          </li>
          <li>
            Developed backend using Supabase to facilitate faster and more
            efficient user queries by 10%
          </li>
          <li>
            Collaborated with team of 3 software engineers on CI/CD pipeline
            using Agile and Git workflow
          </li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Freelance{" "}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-1">
          Software Engineer, Jul 2023 - Present
        </p>
        <ul>
          <li>
            Collaborate with small businesses to build custom full stack web
            applications (Next.JS, Tailwind,PostgreSQL) designed in Figma
            tailored to client specifications
          </li>
          <li>
            Leverage Next.JS server side rendering on front-end and S3 object
            storage for assets decreasing render time
          </li>
          <li>
            Conduct unit and E2E tests through Cypress verifying performance
            before deployment to production on Vercel
          </li>
        </ul>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter flex flex-row justify-between">
          Alto Pharmacy{" "}
          <Image
            src={"/alto.jpg"}
            alt="alto logo"
            width={45}
            height={50}
          />
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm -mt-3 mb-1">
          Pharmacist, Oct 2023 - Present
        </p>
        <ul>
          <li>
            Provide comprehensive and accurate clinical utilization review and
            dispensing services
          </li>
          <li>
            Assist in the proper ordering, handling, receiving, documentation,
            storage,compliance and inventory management of all controlled
            substances
          </li>
          <li>Review content and accuracy of drug packaging and labeling</li>
          <li>
            Review for completeness and accuracy of new and refill prescriptions
          </li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter flex flex-row justify-between">
          Castle Family Health Center{" "}
          <Image
            src={"/castle.jpg"}
            alt="castle logo"
            width={45}
            height={50}
          />
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm -mt-3 mb-1">
          Pharmacy Manager, Apr 2021 - Jan 2023
        </p>
        <ul>
          <li>
            Manage independent charitable 340b pharmacy and ancillary staff in
            fulfilling up to 2,000 monthly prescriptions
          </li>
          <li>
            Consult with physicians and patients with regard to medication
            strength, indication, and potential interactions/side effects of
            prescription and OTC medications
          </li>
          <li>
            Leveraged 340B program to provide expensive brand name medications
            and medical equipment to patients at little or no cost
          </li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter flex flex-row justify-between">
          BJRX Long Term Care
          <Image
            src={"/bjrx.jpg"}
            alt="bjrx logo"
            width={45}
            height={50}
          />
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm -mt-3 mb-1">
          Staff Pharmacist, Mar 2021 - Jan 2023
        </p>
        <ul>
          <li>
            Coordinate and oversee multiple remote COVID vaccinations clinics
            throughout the Bay Area of up to 1,000 vaccinations daily
          </li>
          <li>
            Review long term care facility and nursing home patients weekly and
            monthly medication regimens to screen for appropriate drug
            selection, dosing, and contraindications
          </li>
          <li>
            Monitor Clozapine patients through the REMS program ensuring
            neutrophil levels stay within therapeutic and safe ranges
          </li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter flex flex-row justify-between">
          CVS Health{" "}
          <Image
            src={"/cvs.jpg"}
            alt="cvs logo"
            width={45}
            height={50}
          />
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm -mt-3 mb-1">
          Floater Pharmacist, Sep 2020 - Jan 2021
        </p>
        <ul>
          <li>
            Verified and dispensed medications according to prescription,
            reducing fill errors and consulting with prescribers for cost-saving
            therapeutic alternatives
          </li>
          <li>
            Administer onsite routine immunizations to promote vaccination
            initiatives for wellness
          </li>
        </ul>
      </div>
    </section>
  );
}

export default WorkPage