import { Badge, Card } from "@radix-ui/themes";
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
       "/audsostrom.github.io/fizzbruzz.png",
      ],
      badges: ["Full-stack Development"],
    },
    {
      title: "Flora Fit",
      description: "Pokemon Go-inspired app to get people to learn more about the environment.",
      date: "Apr 2024, submitted for LA Hacks",
      builtWith: "Built with React Native, Firebase, and Google Gemini.",
      images: [
        "/audsostrom.github.io/flora-fit.svg",
        "/audsostrom.github.io/flora-map.svg",
        "/audsostrom.github.io/root-route.svg",
        "/audsostrom.github.io/journaling.svg",
        "/audsostrom.github.io/raid-screen.svg",
      ],
      badges: ["Full-stack Development", "UI/UX Design"],
    },
    {
      title: "DishDelish",
      description: "Never let food go to waste again.",
      date: "Jan - May 2024",
      builtWith: "Built with Next.JS, MongoDB, and Material UI using open-source HuggingFace AI models.",
      images: [
        "/audsostrom.github.io/dishdelish.png",
        "/audsostrom.github.io/recipe.png",
      ],
      badges: ["Back-end Engineering", "UI/UX Design"],
    },
    {
      title: "CNN For Mice Sleep Analysis",
      description: "Predictor for sleep stages in mice.",
      date: "Mar - Jun 2023",
      builtWith: "Built in Python using PyTorch, Pandas, and Tkinter.",
      images: [
        "https://via.placeholder.com/150/800080",
        "https://via.placeholder.com/150/FFFF00",
      ],
      badges: ["Data Science"],
    },
  ];

  return (
    <div className="h-screen p-8 text-black overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">projects 👩🏼‍💻</h1>
        <p className="mt-4 text-gray-600 font-accent">
          Here are some of the projects I’ve worked on recently.
        </p>
      </div>
      <div className="space-y-4 mb-24">
        {projects.map((project, index) => (
          <Card
            key={index}
            size="2"
            variant="surface"
            className="p-5 h-100 bg-white rounded-lg shadow-lg"
          >
            <div className="flex gap-4">
              {/* Shadcn Carousel for Images */}
              <div className="h-64 rounded-lg">
                <Carousel className="w-64" opts={{
    loop: true,
  }}>
                  <CarouselContent className="h-64">
                    {project.images.map((image, idx) => (
                      <CarouselItem key={idx}>
                        <img
                          src={image}
                          alt={`${project.title} image ${idx + 1}`}
                          className="rounded-lg w-full h-full object-cover"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselNext />
                </Carousel>
              </div>

              <div className="ml-16">
                <div className="flex items-center gap-4">
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
            </div>
          </Card>
        ))}
        <div className="text-xs italic pt-4">And this website was built with Next.js, Tailwind, Radix UI, and Shadcn!</div>
      </div>
    </div>
  );
}
