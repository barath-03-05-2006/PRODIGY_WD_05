
import { User, Code } from 'lucide-react';

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

        <div className="max-w-4xl mx-auto">
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
        </div>
      </div>
    </section>
  );
};

export default About;
