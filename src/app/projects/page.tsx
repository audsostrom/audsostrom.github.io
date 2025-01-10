import { Badge, Card, Link } from "@radix-ui/themes";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Make sure to import the correct components
import { FigmaLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { YoutubeIcon } from "lucide-react";
import { Newspaper } from "lucide-react";
import { ImageIcon } from "lucide-react";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    /** {
      title: "FizzBruzz",
      description: "Make coding courses easier with everything in one place and a dash of brain rot.",
      date: "Nov 2024, won top 5 community vote in BR hackathon against 1200+ participants",
      builtWith: "Built with Next.JS, MongoDB, TailwindCSS, and Radix UI using open-source HuggingFace AI models.",
      images: [
       "/fizzbruzz.png",
      ],
      badges: ["Full-stack Development"],
      type: 'desktop',
      githubLink: 'https://github.com/audsostrom/brainrot-hackathon',
      devpostLink: 'https://devpost.com/software/fizzbruzz',
    },*/
    {
      title: "Causeway",
      description: "An application for learning web development through micro-role based hierarchies.",
      date: "Jun 2024 - Present",
      builtWith: "Built with Angular, NgRx, and Firebase.",
      images: [
        "/causeway-title.png",
        "/causeway-dashboard.png",
        "/causeway-guide.png",
        "/causeway-code-editor.png",
      ],
      badges: ["Front-end Development"],
      type: 'desktop',
      siteLink: 'https://tech4good-causeway.web.app/',
      paperLink: 'https://ucsc-ospo.github.io/report/osre24/ucsc/causeway/20240620-audsostrom/'
    },
    {
      title: "Flora Fit",
      description: "An adventure app that inspires exploration, environmental awareness, and mental wellness. As players travel in nature, they're encouraged to reflect and engage with their world around them with tailored journal prompts using Gemini. When they do so, they given seeds which they can then grow and evolve to learn more about plants indigenous to the player's area and what invasive species are nearby.",
      date: "Apr 2024",
      builtWith: "Built with React Native, Firebase, and Google Gemini. Submitted for LA Hacks a part of a team of 4.",
      images: [
        "/flora-fit.svg",
        "/flora-map.svg",
        "/root-route.svg",
        "/journaling.svg",
        "/raid-screen.svg",
      ],
      badges: ["Full-stack Development", "UI/UX Design"],
      type: 'mobile',
      githubLink: 'https://github.com/LAHacks2024/FloraFit',
      figmaLink: 'https://www.figma.com/design/znQMf3sQG5IyTKSn0B6J7u/Flora-Fit-Figma?node-id=0-1&t=7Y1kREYfFo3zxHcs-1',
      youtubeLink: 'https://youtu.be/zV-ObX7yRm8',
    },

    {
      title: "DishDelish",
      description: "Never let food go to waste again. Using the ingredients you already have, you're matched with recipes that best match your pantry and preferences using AI to augment results.",
      date: "Jan - May 2024",
      builtWith: "Built with Next.JS, MongoDB, Material UI, and HuggingFace AI.",
      images: [
        "/dishdelish.png",
        "/recipe.png",
      ],
      badges: ["Back-end Development", "UI/UX Design"],
      type: 'desktop',
      siteLink: 'https://dishdelish.vercel.app/',
      figmaLink: 'https://www.figma.com/file/OfIogM0BU2t5Mtn3DQ9ZJ9/DishDelish-Figma?type=design&node-id=0%3A1&mode=design&t=0iplRGkv9s0KNw9u-1',
      githubLink: 'https://github.com/audsostrom/dishdelish',
    },
    {
      title: "JusticeNav",
      description: "JusticeNav aims to empower new immigrants to the United States by providing them with easily accessible legal information and resources.",
      date: "Jan - Mar 2024",
      builtWith: "Built with Angular and Firebase. Submitted for GDSC with as part of a team of 6.",
      images: [
        "/justicenav-title.png",
        "/justicenav-home.png",
        "/justicenav-english1.png",
        "/justicenav-english2.png",
        "/justicenav-quiz.png",
        "/justicenav-success.png",
        "/justicenav-spanish.png",
      ],
      badges: ["Front-end Development", "UI/UX Design"],
      type: 'mobile',
      figmaLink: 'https://www.figma.com/design/ushuElFlfVrR0G3Wt9BCV3/JusticeNav?node-id=407-430&t=RCYK7Vigt7xAfqUv-0',
      githubLink: 'https://github.com/audsostrom/gdsc-legal-app',
    },
    {
      title: "CNNs and RNNs For Mice Sleep Analysis",
      description: "Predictors for sleep stages in mice using convolutional neural networks (CNNs) and recurrent neural networks (RNNs), based on datasets of EEG and EMG data collected at Zuo Labs.",
      date: "Mar - Jun 2023",
      builtWith: "Built in Python using PyTorch, Pandas, and Tkinter.",
      images: [
        "/mice-sleep.jpg",
        "/architecture.png",
        "/results.png",
      ],
      badges: ["Data Science"],
      type: 'desktop',
      githubLink: 'https://github.com/audsostrom/mice-sleep-analysis',
      paperLink: 'https://github.com/audsostrom/mice-sleep-analysis/blob/main/Final_Report.pdf'
    },
    {
      title: "What Makes a Masterpiece?",
      description: "Writing sample covering the use of AI for generating art and its impact on society.",
      date: "May 2023",
      builtWith: "Submitted for technical writing capstone course.",
      images: [
        "/CSE_185_Final_Poster.png",
      ],
      badges: ["Technical Writing"],
      type: 'desktop',
      imageLink: '/CSE_185_Final_Poster.png',
      paperLink: '/CSE_185_Final_Paper.pdf',
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
          <div key={index} className={`flex mb-24 gap-8 flex-col xl:flex-row`}>
                        <Carousel className='mx-16 xl:w-2/5' opts={{
    loop: true,
  }}>
                  <CarouselContent className="h-96 w-auto">
                    {project.images.map((image, idx) => (
                      <CarouselItem key={idx} className={`${project.type === 'mobile' ? 'md:basis-1/3' : ''}`}>
                        <img
                          src={image}
                          alt={`${project.title} image ${idx + 1}`}
                          className="rounded-lg w-full h-96 object-contain"
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
            className='flex flex-row items-center xl:w-1/2'
          >
              <div className="my-6 mx-20">
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  {project.siteLink && <Link  href={project.siteLink} rel="noopener noreferrer" target="_blank">
      <ExternalLink className='size-5'/>
        </Link>}
                  {project.githubLink && <Link href={project.githubLink} rel="noopener noreferrer" target="_blank">
      <GitHubLogoIcon className='size-5'/>
        </Link>}
        {project.figmaLink && <Link  href={project.figmaLink} rel="noopener noreferrer" target="_blank">
      <FigmaLogoIcon className='size-5'/>
        </Link>}
        {project.youtubeLink && <Link  href={project.youtubeLink} rel="noopener noreferrer" target="_blank">
      <YoutubeIcon className='size-5'/>
        </Link>}
        {/** project.devpostLink && <Link  href={project.devpostLink} rel="noopener noreferrer" target="_blank">
      <Crown className='size-5'/>
        </Link> */}
            
        {project.paperLink && <Link  href={project.paperLink} rel="noopener noreferrer" target="_blank">
      <Newspaper className='size-5'/>
        </Link>}
        {project.imageLink && <Link  href={project.imageLink} rel="noopener noreferrer" target="_blank">
      <ImageIcon className='size-5'/>
        </Link>}
        
                </div>
                <div className="flex items-center gap-2 my-2 flex-wrap">
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
                  <p className="text-gray-400 mt-2">{project.builtWith}</p>
                </div>
              </div>
          </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
