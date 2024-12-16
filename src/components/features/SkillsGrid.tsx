import React from 'react';

interface Skill {
  name: string;
  category: string;
  proficiency: number;
}

const SkillsGrid = () => {
  const skills: Skill[] = [
    // Languages
    { name: 'C', category: 'Languages', proficiency: 90 },
    { name: 'Python', category: 'Languages', proficiency: 85 },
    { name: 'C++', category: 'Languages', proficiency: 80 },
    { name: 'JavaScript', category: 'Languages', proficiency: 85 },
    { name: 'HTML/CSS', category: 'Languages', proficiency: 85 },
    { name: 'R', category: 'Languages', proficiency: 75 },
    
    // Frameworks & Libraries
    { name: 'Unity', category: 'Frameworks & Libraries', proficiency: 90 },
    { name: 'OpenCV', category: 'Frameworks & Libraries', proficiency: 85 },
    { name: 'YOLOv8', category: 'Frameworks & Libraries', proficiency: 80 },
    { name: 'React', category: 'Frameworks & Libraries', proficiency: 85 },
    { name: 'Flask', category: 'Frameworks & Libraries', proficiency: 75 },
    
    // Cloud & DevOps
    { name: 'AWS Cognito', category: 'Cloud & DevOps', proficiency: 80 },
    { name: 'AWS DynamoDB', category: 'Cloud & DevOps', proficiency: 80 },
    { name: 'AWS Lambda', category: 'Cloud & DevOps', proficiency: 75 },
    { name: 'Google Cloud Platform', category: 'Cloud & DevOps', proficiency: 75 },
    
    // Developer Tools
    { name: 'Git', category: 'Developer Tools', proficiency: 90 },
    { name: 'VS Code', category: 'Developer Tools', proficiency: 90 },
    { name: 'Visual Studio', category: 'Developer Tools', proficiency: 85 },
    { name: 'Unity Editor', category: 'Developer Tools', proficiency: 85 },
    { name: 'Android Studio', category: 'Developer Tools', proficiency: 80 },
    { name: 'R Studio', category: 'Developer Tools', proficiency: 75 },
    
    // Machine Learning
    { name: 'Computer Vision', category: 'Machine Learning', proficiency: 85 },
    { name: 'Pose Estimation', category: 'Machine Learning', proficiency: 85 },
    { name: 'Real-time Object Detection', category: 'Machine Learning', proficiency: 80 }
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {categories.map(category => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills
              .filter(skill => skill.category === category)
              .map(skill => (
                <div
                  key={skill.name}
                  className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-medium text-white">{skill.name}</h3>
                    <span className="text-sm text-gray-400">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div
                      className="bg-teal-500 rounded-full h-2 transition-all duration-500"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;