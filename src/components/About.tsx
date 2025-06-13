
import { Award, Briefcase, User, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Personal Story */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <User className="text-purple-600 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-gray-800">My Story</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Hi! I'm a passionate web developer with over 5 years of experience creating digital solutions 
                that make a real impact. My journey started with curiosity about how websites work, and it 
                evolved into a deep love for crafting beautiful, functional applications.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I believe in writing clean, maintainable code and creating user experiences that are both 
                intuitive and delightful. Every project is an opportunity to learn something new and push 
                the boundaries of what's possible on the web.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <Code className="text-blue-600 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-gray-800">My Approach</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                I focus on understanding the unique needs of each project and client. Whether it's a 
                sleek landing page or a complex web application, I bring the same attention to detail 
                and commitment to excellence. I stay updated with the latest technologies and best 
                practices to deliver modern, scalable solutions.
              </p>
            </div>
          </div>

          {/* Experience & Education */}
          <div className="space-y-8">
            {/* Experience */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Briefcase className="text-purple-600 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-gray-800">Experience</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-800">Senior Frontend Developer</h4>
                  <p className="text-purple-600 font-medium">Tech Solutions Inc. • 2021 - Present</p>
                  <p className="text-gray-600 mt-2">
                    Leading frontend development for enterprise applications, mentoring junior developers, 
                    and implementing modern React architectures.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-800">Frontend Developer</h4>
                  <p className="text-blue-600 font-medium">Digital Agency • 2019 - 2021</p>
                  <p className="text-gray-600 mt-2">
                    Developed responsive web applications for various clients, focusing on performance 
                    optimization and user experience.
                  </p>
                </div>
                <div className="border-l-4 border-indigo-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-800">Junior Developer</h4>
                  <p className="text-indigo-600 font-medium">StartupXYZ • 2018 - 2019</p>
                  <p className="text-gray-600 mt-2">
                    Started my professional journey building features for a fast-growing SaaS platform.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Award className="text-blue-600 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-gray-800">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-800">Bachelor of Computer Science</h4>
                  <p className="text-blue-600 font-medium">University of Technology • 2014 - 2018</p>
                  <p className="text-gray-600 mt-2">
                    Graduated Magna Cum Laude with focus on software engineering and web technologies.
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-800">Certifications</h4>
                  <p className="text-gray-600 mt-2">
                    AWS Certified Developer, Google Cloud Professional, React Advanced Patterns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
