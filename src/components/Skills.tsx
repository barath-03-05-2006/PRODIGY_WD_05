
import { Code, Layout, Star } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Layout,
      color: "purple",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap", level: 75 },
        { name: "TypeScript", level: 70 }
      ]
    },
    {
      title: "Backend & Database",
      icon: Code,
      color: "blue",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Python", level: 80 },
        { name: "Express.js", level: 70 },
        { name: "MySQL", level: 75 },
        { name: "MongoDB", level: 65 },
        { name: "RESTful APIs", level: 70 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Star,
      color: "indigo",
      skills: [
        { name: "Git", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "Figma", level: 70 },
        { name: "Linux", level: 65 },
        { name: "Postman", level: 75 },
        { name: "Firebase", level: 60 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: {
        text: "text-purple-600",
        bg: "bg-purple-600",
        border: "border-purple-600",
        gradient: "from-purple-50 to-purple-100"
      },
      blue: {
        text: "text-blue-600",
        bg: "bg-blue-600",
        border: "border-blue-600",
        gradient: "from-blue-50 to-blue-100"
      },
      indigo: {
        text: "text-indigo-600",
        bg: "bg-indigo-600",
        border: "border-indigo-600",
        gradient: "from-indigo-50 to-indigo-100"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies I've learned and tools I use to build projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            const IconComponent = category.icon;
            
            return (
              <div
                key={categoryIndex}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${colors.gradient} flex items-center justify-center`}>
                    <IconComponent className={colors.text} size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className={`text-sm font-semibold ${colors.text}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${colors.bg} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Redux', 'Next.js', 'GraphQL', 'Docker', 'AWS', 'Jest',
              'Vue.js', 'Django', 'PostgreSQL', 'Flutter', 'Machine Learning', 'Data Structures'
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-200 hover:border-purple-300 hover:text-purple-600 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
