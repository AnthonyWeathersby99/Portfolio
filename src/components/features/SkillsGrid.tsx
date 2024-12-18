import React, { useState } from 'react';

const SkillsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const skills = {
    technical: {
      "Programming Languages": [
        { name: 'C#', proficiency: 85, experience: '1 years' },
        { name: 'Python', proficiency: 90, experience: '7 years' },
        { name: 'C++', proficiency: 80, experience: '3 years' },
        { name: 'JavaScript', proficiency: 70, experience: '1 year' },
        { name: 'HTML/CSS', proficiency: 85, experience: '7 years' },
        { name: 'R', proficiency: 85, experience: '1 year' }
      ],
      "Frameworks & Libraries": [
        { name: 'Unity', proficiency: 90, experience: '1 year' },
        { name: 'React', proficiency: 75, experience: '1 year' },
        { name: 'Flask', proficiency: 80, experience: '1 year' },
        { name: 'OpenCV', proficiency: 60, experience: '6 months' },
        { name: 'YOLOv8', proficiency: 60, experience: '6 months' }
      ],
      "Cloud & DevOps": [
        { name: 'AWS Cognito', proficiency: 80, experience: '1 year' },
        { name: 'AWS DynamoDB', proficiency: 80, experience: '1 year' },
        { name: 'AWS Lambda', proficiency: 85, experience: '1 year' },
        { name: 'Google Cloud Platform', proficiency: 60, experience: '6 months' }
      ],
      "Developer Tools": [
        { name: 'Git', proficiency: 90, experience: '4 years' },
        { name: 'VS Code', proficiency: 95, experience: '7 years' },
        { name: 'Visual Studio', proficiency: 95, experience: '7 years' },
        { name: 'Unity Editor', proficiency: 85, experience: '1 year' },
        { name: 'Android Studio', proficiency: 80, experience: '5 year' },
        { name: 'R Studio', proficiency: 80, experience: '1 year' }
      ]
    },
    nonTechnical: {
      "Soft Skills": [
        { name: 'Problem Solving', proficiency: 90, description: 'Strong analytical and debugging abilities' },
        { name: 'Team Collaboration', proficiency: 85, description: 'Experience working in agile development teams' },
        { name: 'Communication', proficiency: 85, description: 'Clear and effective technical communication' },
        { name: 'Time Management', proficiency: 80, description: 'Efficient project and deadline management' }
      ],
      "Project Management": [
        { name: 'Agile Methodology', proficiency: 75, description: 'Experience with sprint planning and scrum' },
        { name: 'Documentation', proficiency: 85, description: 'Technical writing and documentation' },
        { name: 'Requirements Analysis', proficiency: 80, description: 'Gathering and analyzing project requirements' }
      ],
      "Research": [
        { name: 'Data Analysis', proficiency: 85, description: 'Statistical analysis and data interpretation' },
        { name: 'Academic Research', proficiency: 80, description: 'Literature review and methodology' },
        { name: 'Technical Learning', proficiency: 90, description: 'Quick adaptation to new technologies' }
      ]
    }
  };

  const categories = {
    all: 'All Skills',
    technical: 'Technical Skills',
    nonTechnical: 'Non-Technical Skills'
  };

  const renderSkillCard = (skill: any, type: string) => (
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
        <span className="text-teal-400 font-medium">
          {skill.proficiency}%
        </span>
      </div>
      
      <div className="w-full bg-gray-600 rounded-full h-2 mb-4">
        <div
          className="bg-teal-500 rounded-full h-2 transition-all duration-1000 ease-out"
          style={{ width: `${skill.proficiency}%` }}
        />
      </div>
      
      {type === 'technical' ? (
        <p className="text-gray-400">Experience: {skill.experience}</p>
      ) : (
        <p className="text-gray-400">{skill.description}</p>
      )}
    </div>
  );

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-center mb-8 space-x-4">
        {Object.entries(categories).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === key
                ? 'bg-teal-500 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {value}
          </button>
        ))}
      </div>

      <div className="space-y-12">
        {(selectedCategory === 'all' || selectedCategory === 'technical') && (
          <div className="space-y-8 transition-opacity duration-500">
            <h2 className="text-3xl font-bold text-white mb-6">Technical Skills</h2>
            {Object.entries(skills.technical).map(([category, categorySkills]) => (
              <div key={category}>
                <h3 className="text-2xl font-semibold text-teal-400 mb-4">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill, index) => (
                    <div 
                      key={index}
                      className="transition-all duration-300 ease-in-out"
                      style={{
                        opacity: 1,
                        transform: 'translateY(0)',
                      }}
                    >
                      {renderSkillCard(skill, 'technical')}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {(selectedCategory === 'all' || selectedCategory === 'nonTechnical') && (
          <div className="space-y-8 transition-opacity duration-500">
            <h2 className="text-3xl font-bold text-white mb-6">Non-Technical Skills</h2>
            {Object.entries(skills.nonTechnical).map(([category, categorySkills]) => (
              <div key={category}>
                <h3 className="text-2xl font-semibold text-teal-400 mb-4">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill, index) => (
                    <div 
                      key={index}
                      className="transition-all duration-300 ease-in-out"
                      style={{
                        opacity: 1,
                        transform: 'translateY(0)',
                      }}
                    >
                      {renderSkillCard(skill, 'nonTechnical')}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsPage;
