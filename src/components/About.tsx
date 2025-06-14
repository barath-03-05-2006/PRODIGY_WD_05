
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
            Get to know the student behind the code
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Personal Story */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <User className="text-purple-600 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-gray-800">My Journey</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Hi! I'm Barath S, a pre-final year Computer Science student with a passion for 
                web development and technology. My journey into programming started with curiosity 
                about how websites and applications work, which has now evolved into a deep love 
                for creating digital solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As a student, I'm constantly learning and exploring new technologies. I believe in 
                hands-on learning and have built various projects to apply theoretical knowledge 
                practically. I'm excited about the endless possibilities in the tech world.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <Code className="text-blue-600 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-gray-800">My Approach</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                I approach every project with enthusiasm and a growth mindset. I focus on writing 
                clean, readable code and creating user-friendly interfaces. I stay updated with 
                the latest technologies and best practices through online courses, documentation, 
                and building personal projects.
              </p>
            </div>
          </div>

          {/* Experience & Education */}
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Award className="text-blue-600 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-gray-800">Education</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-800">Bachelor of Computer Science</h4>
                  <p className="text-blue-600 font-medium">University • 2022 - 2026 (Expected)</p>
                  <p className="text-gray-600 mt-2">
                    Currently in pre-final year with CGPA: 8.5/10. Specializing in software 
                    engineering, data structures, algorithms, and web technologies.
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-800">Higher Secondary Education</h4>
                  <p className="text-green-600 font-medium">ABC School • 2020 - 2022</p>
                  <p className="text-gray-600 mt-2">
                    Completed with 95% in Science stream, with focus on Mathematics, 
                    Physics, and Computer Science.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience & Projects */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <Briefcase className="text-purple-600 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-gray-800">Experience & Involvement</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-800">Web Development Intern</h4>
                  <p className="text-purple-600 font-medium">TechStartup • Summer 2024</p>
                  <p className="text-gray-600 mt-2">
                    Worked on frontend development using React and contributed to building 
                    responsive web applications. Gained hands-on experience with modern development workflows.
                  </p>
                </div>
                <div className="border-l-4 border-indigo-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-800">Technical Team Member</h4>
                  <p className="text-indigo-600 font-medium">College Tech Club • 2023 - Present</p>
                  <p className="text-gray-600 mt-2">
                    Active member organizing coding workshops, hackathons, and technical events. 
                    Mentoring junior students in programming fundamentals.
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-800">Online Learning</h4>
                  <p className="text-gray-600 mt-2">
                    Completed various online courses in React, Node.js, Python, and Database Management. 
                    Continuously learning through platforms like Coursera, Udemy, and FreeCodeCamp.
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
