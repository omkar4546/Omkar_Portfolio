import { Briefcase, Code, User } from "lucide-react";
import resumePDF from "/OmkarResume.pdf";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

            <p className="text-muted-foreground">
              I am an aspiring Software Developer eager to leverage my skills in
              a dynamic organization Having completed my MCA degree, I bring
              hands-on experience as a Software Developer Intern.
            </p>

            <p className="text-muted-foreground">
              I have comleted my internship at Code B Solution Pvt Ltd, I have
              contributed to the development of mpIe.ai, an AI-powered sales
              training platform. Where I have to create responsive and dynamic
              frontend components using React.js, enhancing the user interface.
              Additionally, he worked on backend features with Nest.js and
              MongoDB to enable efficient data handling and personalized
              performance tracking for users.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href={resumePDF}
                download={`Omkar_Resume`}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    I have a strong passion for creating responsive websites and
                    web applications using modern frameworks
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Education Background
                  </h4>
                  <p className="text-muted-foreground">
                    M.C.A from Sterling Institute of Management Studies
                  </p>
                  <p className="text-muted-foreground">
                    B.Sc.IT from D.G. Ruparel College of Arts, Science and
                    Commerce
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Hobby</h4>
                  <p className="text-muted-foreground">Aquarium Keeping</p>
                  <p className="text-muted-foreground">Team Sports</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
