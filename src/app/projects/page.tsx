import { Badge, Card } from "@radix-ui/themes";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Make sure to import the correct components

export default function Projects() {
  const projects = [
    {
      title: "FizzBruzz",
      description: "Make coding courses easier with everything in one place and a dash of brain rot.",
      date: "Nov 2024, submitted for Brainrot Hackathon",
      builtWith: "Built with Next.JS, MongoDB, TailwindCSS, and Radix UI using open-source HuggingFace AI models.",
      images: [
       "/fizzbruzz.png",
      ],
      badges: ["Full-stack Development"],
      type: 'desktop',
    },
    {
      title: "Flora Fit",
      description: "Pokemon Go-inspired app to get people to learn more about the environment and be more cognizant of their mental health.",
      date: "Apr 2024, submitted for LA Hacks",
      builtWith: "Built with React Native, Firebase, and Google Gemini.",
      images: [
        "/flora-fit.svg",
        "/flora-map.svg",
        "/root-route.svg",
        "/journaling.svg",
        "/raid-screen.svg",
      ],
      badges: ["Full-stack Development", "UI/UX Design"],
      type: 'mobile',
    },
    {
      title: "DishDelish",
      description: "Never let food go to waste again.",
      date: "Jan - May 2024",
      builtWith: "Built with Next.JS, MongoDB, and Material UI using open-source HuggingFace AI models.",
      images: [
        "/dishdelish.png",
        "/recipe.png",
      ],
      badges: ["Back-end Engineering", "UI/UX Design"],
      type: 'desktop',
    },
    {
      title: "CNN For Mice Sleep Analysis",
      description: "Predictor for sleep stages in mice.",
      date: "Mar - Jun 2023",
      builtWith: "Built in Python using PyTorch, Pandas, and Tkinter.",
      images: [
        "/mice-sleep.jpg",
        "/architecture.png",
        "/results.png",
      ],
      badges: ["Data Science"],
      type: 'desktop',
    },
  ];

  return (
    <div className="h-[calc(100vh-56px)] overflow-hidden p-8 text-black overflow-y-auto">
      <div className="mb-8">
      <div className="flex gap-4">
      <Image width='32' height='32' src='/smiski.png' alt='smiski computer guy'/>
          <h1 className="text-4xl font-bold">
          projects
          </h1>
          </div>
        <p className="mt-4 text-gray-600 font-accent">
          Here are some of the projects I&apos;ve worked on recently.
        </p>
      </div>
      <div className="space-y-8 mb-24">
        {projects.map((project, index) => (
          <div key={index} className={`flex flex-wrap mb-24 gap-8 flex-col lg:flex-row`}>
                        {/* Shadcn Carousel for Images */}
                        <Carousel className='mx-16 lg:w-2/5' opts={{
    loop: true,
  }}>
                  <CarouselContent className="h-96 w-auto">
                    {project.images.map((image, idx) => (
                      <CarouselItem key={idx} className={`${project.type === 'mobile' ? 'md:basis-1/3' : ''}`}>
                        <img
                          src={image}
                          alt={`${project.title} image ${idx + 1}`}
                          className="rounded-lg w-full h-full object-contain"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious/>
                  <CarouselNext />
                </Carousel>
                    <Card
            key={index}
            size="1"
            variant="surface"
            className='flex flex-row items-center lg:w-1/2'
          >
              <div className="my-6 mx-20">
                <div className="flex items-center gap-4 flex-wrap">
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  {project.badges.map((badge, badgeIndex) => (
                    <Badge
                      key={badgeIndex}
                      color={badgeIndex % 2 === 0 ? "plum" : "cyan"}
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-400 mt-1">{project.date}</p>
                <div className="flex flex-col gap-2 mt-4">
                  <p className="text-gray-400">{project.description}</p>
                  <p className="text-gray-400">{project.builtWith}</p>
                </div>
              </div>
          </Card>
          </div>
        ))}
        <div className="text-xs text-center italic pt-16">And this website was built with Next.js, Tailwind, Radix UI, and Shadcn!</div>
      </div>
    </div>
  );
}
