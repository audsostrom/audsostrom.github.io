import { Badge, Card } from "@radix-ui/themes";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Make sure to import the correct components

export default function Background() {
  const works = [
    {
      company: "Tech4Good",
      title: "Research Development Lead",
      date: "Mar 2023 - Present",
      description: "Built with Next.JS, MongoDB, TailwindCSS, and Radix UI using open-source HuggingFace AI models.",
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150/0000FF/808080",
        "https://via.placeholder.com/150/FF0000/FFFFFF",
      ],
    },
    {
      company: "Sorbet",
      title: "Full-Stack Engineer Intern",
      date: "Sep 2023 - Present",
      description: "Built with React Native, Firebase, and Google Gemini.",
      images: [
        "/audsostrom.github.io/flora-fit.svg",
        "/audsostrom.github.io/flora-map.svg",
        "/audsostrom.github.io/root-route.svg",
        "/audsostrom.github.io/journaling.svg",
        "/audsostrom.github.io/raid-screen.svg",
      ],
    },
    {
      company: "Baskin School of Engineering",
      title: "Teaching Assistant",
      date: "Jan 2022 - Sep 2024",
      description: "made sure people didn't fail their data structures, discrete math, and python courses",
      images: [
        "https://via.placeholder.com/150/FF00FF",
        "https://via.placeholder.com/150/000000",
      ],
    },
    {
      company: "Baskin School of Engineering",
      title: "Grader",
      date: "Oct 2021 - Sep 2024",
      description: "made sure people didn't fail their data structures, discrete math, and python courses",
      images: [
        "https://via.placeholder.com/150/FF00FF",
        "https://via.placeholder.com/150/000000",
      ],
    },
    {
      company: "GraceHacks",
      title: "Tech Director",
      date: "Jun 2023 - Jun 2024",
      description: "made sure people didn't fail their data structures, discrete math, and python courses",
      images: [
        "https://via.placeholder.com/150/FF00FF",
        "https://via.placeholder.com/150/000000",
      ],
    },
    {
      company: "UCSC BluePrint",
      title: "Mobile Developer",
      date: "Jun 2023 - Jun 2024",
      description: "made sure people didn't fail their data structures, discrete math, and python courses",
      images: [
        "https://via.placeholder.com/150/FF00FF",
        "https://via.placeholder.com/150/000000",
      ],
    },
  ];

  return (
    <div className="h-screen p-8 text-black overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">work & extracurriculars 👩🏼‍💻</h1>
        <p className="mt-4 text-gray-600 font-accent">
          Always staying involved.
        </p>
      </div>
      <div className="space-y-4 mb-24">
        {works.map((work, index) => (
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
                    {work.images.map((image, idx) => (
                      <CarouselItem key={idx}>
                        <img
                          src={image}
                          alt={`${work.company} image ${idx + 1}`}
                          className="rounded-lg w-full h-full object-contain"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselNext />
                </Carousel>
              </div>

              <div className="ml-16">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-bold">{work.title}, {work.company}</h2>
                </div>
                <p className="text-gray-400 mt-1">{work.date}</p>
                  <p className="text-gray-400 mt-4">{work.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
