import { Card } from "@radix-ui/themes";

export default function Projects() {
  const projects = [
    {
      title: "FizzBruzz",
      description: "A modern web app built with React and TailwindCSS.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Flora Fit",
      description: "Pokemon Go-inpired app to get people to learn more about the environment",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "CNN For Mice Sleep Analysis",
      description: "Predictor for sleep stages in mice",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="min-h-screen p-4 text-black">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <p className="text-gray-400">Here are some of the projects I’ve worked on recently.</p>
      </div>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <Card
            key={index}
            size="2"
            variant="surface"
            className="p-4 h-64 bg-white rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-50 h-58 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
