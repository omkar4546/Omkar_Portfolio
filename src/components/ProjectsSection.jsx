import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Uber Ride",
    description:
      "A full-stack ride-hailing application inspired by Uber, developed to simulate real-world cab booking experiences",
    image: "/projects/project1.png",
    tags: ["React", "Gsap", "Express", "MongoDB"],
    demoUrl: "",
    githubUrl: "https://github.com/omkar4546/swift_ride",
  },
  {
    id: 2,
    title: "AI Trip Planner",
    description:
      "Developed an AI-powered trip planning website using Gemini's generative AI tools to recommend travel destinations based on budget and trip type (family, friends, couple), with day-by-day itineraries and real-time images from Google Maps API.",
    image: "/projects/project2.png",
    tags: ["Next.js", "Firebase", "Radix UI"],
    demoUrl: "#",
    githubUrl: "https://github.com/omkar4546/trip_planner",
  },
  {
    id: 3,
    title: "Job Portal",
    description:
      "A full-stack ride-hailing application inspired by Uber, developed to simulate real-world cab booking experiences",
    image: "/projects/project3.png",
    tags: ["Next", "Typescript", "MaterialUI", "Express", "MongoDB"],
    demoUrl: "",
    githubUrl: "https://github.com/omkar4546/Job_portal",
  },
  {
    id: 4,
    title: "Chatly",
    description:
      "Developed a real-time multimedia chat application using DesyUI, offering 32 customizable themes and Cloudinary for image storage.",
    image: "/projects/project4.png",
    tags: ["React", "Node.js", "daisyui", "express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/omkar4546/chat_app",
  },
  {
    id: 5,
    title: "Movie App",
    description:
      "Developed a movie app using the TMDB API to fetch the latest movies and provide a personalized trending section based on user preferences.",
    image: "/projects/project5.png",
    tags: ["Next.js", "Appwrite"],
    demoUrl: "#",
    githubUrl: "https://github.com/omkar4546/movie_app",
  },
  {
    id: 6,
    title: "Google Authentication",
    description:
      "Built a Google Authentication application using OAuth 2.0 for secure login and OTP-based email verification to update passwords.",
    image: "/projects/project6.png",
    tags: ["React", "Express", "MongoDB", "MaterialUI"],
    demoUrl: "#",
    githubUrl: "https://github.com/omkar4546/google_auth",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Below are some of my recent projects, each developed with a focus on
          performance, user experience, and attention to detail.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
              </div>
              <div className="flex justify-between items-center pb-5 pl-10">
                <div className="flex space-x-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={30} className="animate-slide-lr" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/omkar4546"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
