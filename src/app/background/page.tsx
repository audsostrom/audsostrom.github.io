import { Card } from "@radix-ui/themes";
import Image from "next/image";

export default function Background() {
  const works = [
    {
      company: "Tech4Good",
      title: "Research Development Lead",
      date: "Mar 2023 - Present",
      description: "",
      image: "/tech4good.png",
    },
    {
      company: "Sorbet",
      title: "Full-Stack Engineer Intern",
      date: "Sep 2023 - Present",
      description: "",
      image: "/sorbet.svg",
    },
    {
      company: "UCSC Open Source Program Office",
      title: "Software Developer Intern",
      date: "Sep 2023 - Present",
      description: "",
      image: "/ospo.png",
    },
    {
      company: "UCSC Baskin School of Engineering",
      title: "Teaching Assistant",
      date: "Jan 2022 - Sep 2024",
      description: "",
      image: "/baskin-engineering.png",
    },
    {
      company: "UCSC Baskin School of Engineering",
      title: "Grader",
      date: "Oct 2021 - Sep 2024",
      description: "",
      image: "/baskin-engineering.png",
    },
    {
      company: "GraceHacks",
      title: "Tech Director",
      date: "Jun 2023 - Jun 2024",
      description: "",
      image: "/gracehacks.png",
    },
    {
      company: "UCSC BluePrint",
      title: "Mobile Developer",
      date: "Jun 2023 - Jun 2024",
      description: "",
      image: "/blueprint.png",
    },
  ];

  return (
    <div className="h-[calc(100vh-56px)] overflow-hidden p-8 text-black overflow-y-auto">
      <div className="mb-8">
          <div className="flex gap-4">
          <Image width='32' height='32' src='/smiski.png' alt='smiski computer guy'/>
          <h1 className="text-4xl font-bold">
          work & extras
          </h1>
          </div>
        <p className="mt-4 text-gray-600 font-accent">
          Always staying involved.
        </p>
      </div>
      <div className="space-y-4 mb-24">

        {works.map((work, index) => (
          <Card
          key={index}
          size="1"
          variant="surface"
          className='flex flex-row items-center gap-4 sm:gap-16 px-4 sm:px-20'
        >
          <img
            src={work.image}
            alt={`${work.title} image`}
            className="rounded-lg w-24 h-24 object-contain"
          />

          <div className="my-6">
          <div className="flex items-center gap-4">
                <h2 className="text-2xl"><b>{work.title},</b> {work.company}</h2>
              </div>
              <p className="text-gray-400 mt-1">{work.date}</p>
            </div>
        </Card>
        ))}
      </div>
    </div>
  );
}
