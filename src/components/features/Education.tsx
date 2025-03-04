import React, { useState } from 'react';

type Course = {
  courseId: string;
  title: string;
  grade: string;
  units: string;
};

type Degree = {
    title: string;
    graduationDate: string;
  };

type School = {
  name: string;
  years: string;
  gpa: string;
  degree?: string | Degree[];
  courses: Course[];
};

const EducationSection = () => {
  const [expandedSchool, setExpandedSchool] = useState<string | null>(null);

  const schools: School[] = [
    {
      name: "California State University Fullerton",
      years: "2022 - 2025",
      gpa: "3.51",
      degree: "Bachelor of Science in Computer Science",
      courses: [
        // Fall 2022
        { courseId: "CPSC 121A", title: "Object Oriented Programming", grade: "B", units: "2.0" },
        { courseId: "CPSC 121L", title: "Object Oriented Programming", grade: "B", units: "1.0" },
        { courseId: "LBST 335", title: "Science on the Silver Screen", grade: "A", units: "3.0" },
        { courseId: "MATH 170B", title: "Mathematical Structure II", grade: "B-", units: "3.0" },
        { courseId: "MATH 338", title: "Stat Applied to Natural Science", grade: "B", units: "4.0" },
        
        // Spring 2023
        { courseId: "CPSC 131", title: "Data Structures", grade: "A", units: "3.0" },
        { courseId: "CPSC 253", title: "Cybersecurity Foundations and Principles", grade: "B+", units: "3.0" },
        { courseId: "FIN 310", title: "Personal Financial Management", grade: "B", units: "3.0" },
        { courseId: "PHIL 106", title: "Introduction to Logic", grade: "B+", units: "3.0" },
        
        // Summer 2023
        { courseId: "CPSC 335", title: "Algorithm Engineering", grade: "B+", units: "3.0" },
        { courseId: "CPSC 362", title: "Software Engineering", grade: "B+", units: "3.0" },
        
        // Fall 2023
        { courseId: "CPSC 240", title: "Comp Org & Assembly Lang", grade: "A", units: "3.0" },
        { courseId: "CPSC 315", title: "Prof Ethics in Computing", grade: "A+", units: "3.0" },
        { courseId: "CPSC 481", title: "Artificial Intelligence", grade: "A", units: "3.0" },
        { courseId: "CPSC 483", title: "Introduction to Machine Learning", grade: "A", units: "3.0" },
        { courseId: "MATH 370", title: "Mathematical Model Building", grade: "B", units: "4.0" },
        
        // Spring 2024
        { courseId: "CPSC 323", title: "Compilers and Languages", grade: "B", units: "3.0" },
        { courseId: "CPSC 332", title: "File Structure & Database", grade: "B", units: "3.0" },
        { courseId: "CPSC 351", title: "Operating System Concepts", grade: "A", units: "3.0" },
        { courseId: "CPSC 375", title: "Intro to Data Science & Big Data", grade: "B+", units: "3.0" },
        { courseId: "CPSC 490", title: "Undergraduate Seminar", grade: "A", units: "3.0" },
        
        // Fall 2024 (In Progress)
        { courseId: "CPSC 349", title: "Web Front-End Engineering", grade: "A", units: "3.0" },
        { courseId: "CPSC 449", title: "Web Back-End Engineering", grade: "A", units: "3.0" },
        { courseId: "CPSC 471", title: "Computer Communications", grade: "B", units: "3.0" },
        { courseId: "CPSC 491", title: "Senior Capstone Project", grade: "A", units: "3.0" }
      ]
    },
    {
        name: "Rio Hondo College",
        years: "2017 - 2022",
        gpa: "3.53",
        degree: [
          {
            title: "Associate of Arts in Social Sciences",
            graduationDate: "May 2021"
          },
          {
            title: "Associate of Science in Mathematics and Sciences",
            graduationDate: "December 2021"
          }
        ],
        courses: [
        // Fall 2017
        { courseId: "CIT 101", title: "Intro Comp Info Tech", grade: "A", units: "3.0" },
        { courseId: "ENGL 101", title: "College Comp & Research", grade: "A", units: "3.5" },
        { courseId: "MATH 190", title: "Calculus I", grade: "B", units: "4.0" },
        { courseId: "READ 101", title: "Critical Reading", grade: "A", units: "3.0" },
        
        // Spring 2018
        { courseId: "ART 115", title: "The Art of Film", grade: "A", units: "3.0" },
        { courseId: "CIT 135", title: "Intro to Java Programming", grade: "A", units: "4.0" },
        { courseId: "ENGL 201", title: "Advanced Composition and Critical Thinking", grade: "A", units: "3.5" },
        { courseId: "MATH 191", title: "Calculus II", grade: "C", units: "4.0" },
        { courseId: "PSY 101", title: "Introductory Psychology", grade: "A", units: "3.0" },

        // Summer 2018
        { courseId: "ASTR 110", title: "General Astronomy", grade: "A", units: "3.0" },
        { courseId: "COUN 100", title: "Intro to College Survival", grade: "A", units: "1.5" },
        { courseId: "POLS 110", title: "Government of the U.S.", grade: "A", units: "3.0" },
        { courseId: "SOC 101", title: "Introduction to Sociology", grade: "B", units: "3.0" },

        // Fall 2018
        { courseId: "MATH 049", title: "Introduction to MESA", grade: "A", units: "1.0" },
        { courseId: "MATH 260", title: "Linear Algebra", grade: "C", units: "4.0" },
        { courseId: "PHIL 101", title: "Introduction to Philosophy", grade: "A", units: "3.0" },

        // Spring 2019
        { courseId: "ANTH 101", title: "Intro to Physical Anthropology", grade: "A", units: "3.0" },
        { courseId: "ANTH 101L", title: "Physical Anthropology Lab", grade: "A", units: "1.0" },
        { courseId: "CIT 136", title: "Advanced Java Programming", grade: "A", units: "4.0" },
        { courseId: "HIST 158", title: "Amer. Indians & BlackAmericans", grade: "A", units: "3.0" },

        // Spring 2020
        { courseId: "MATH 250", title: "Calculus III", grade: "B", units: "4.0" },
        { courseId: "SPCH 100", title: "Interpersonal Communication", grade: "A", units: "3.0" },

        // Fall 2020
        { courseId: "HIST 167", title: "History of California", grade: "A", units: "3.0" },
        { courseId: "MATH 270", title: "Differential Equations", grade: "C", units: "4.0" },

        // Summer 2021
        { courseId: "PHY 211", title: "Physics Sci & Engrs", grade: "B", units: "4.0" },

        // Fall 2021
        { courseId: "CIT 125", title: "Intro. to C++ Programming", grade: "A", units: "4.0" },

        // Spring 2022
        { courseId: "CIT 126", title: "Adv. C++ Programming", grade: "A", units: "4.0" },
        { courseId: "CS 152", title: "Discrete Structures", grade: "B", units: "3.0" }
      ]
    },
    {
      name: "La Serna High School",
      years: "2013 - 2017",
      gpa: "3.92",
      degree: "High School Diploma",
      courses: [
        // 9th Grade - Fall 2013
        { courseId: "2020", title: "Digital Communication", grade: "A", units: "5.00" },
        { courseId: "2203", title: "English 1-P", grade: "A", units: "5.00" },
        { courseId: "4027", title: "Geometry-P", grade: "A", units: "5.00" },
        { courseId: "4534", title: "Physical Education 1", grade: "A+", units: "5.00" },
        { courseId: "5000", title: "Biology-P", grade: "A", units: "5.00" },
        { courseId: "5592", title: "Global Issues-P", grade: "A", units: "5.00" },

        // 9th Grade - Spring 2014
        { courseId: "2020", title: "Digital Communication", grade: "A-", units: "5.00" },
        { courseId: "2203", title: "English 1-P", grade: "A-", units: "5.00" },
        { courseId: "4027", title: "Geometry-P", grade: "A", units: "5.00" },
        { courseId: "4534", title: "Physical Education 1", grade: "A+", units: "5.00" },
        { courseId: "5000", title: "Biology-P", grade: "A", units: "5.00" },
        { courseId: "5592", title: "Global Issues-P", grade: "A", units: "5.00" },

        // 10th Grade - Fall 2014
        { courseId: "2212", title: "English 2-P", grade: "A", units: "5.00" },
        { courseId: "2812", title: "German 1-P", grade: "A+", units: "5.00" },
        { courseId: "4009", title: "Algebra 2-HP", grade: "B-", units: "5.00" },
        { courseId: "4547", title: "Physical Education 2-4", grade: "A+", units: "5.00" },
        { courseId: "5009", title: "Chemistry-HP", grade: "B", units: "5.00" },
        { courseId: "5539", title: "World Civilizations-P", grade: "A", units: "5.00" },

        // 10th Grade - Spring 2015
        { courseId: "2212", title: "English 2-P", grade: "A", units: "5.00" },
        { courseId: "2812", title: "German 1-P", grade: "A+", units: "5.00" },
        { courseId: "4009", title: "Algebra 2-HP", grade: "B-", units: "5.00" },
        { courseId: "4547", title: "Physical Education 2-4", grade: "A+", units: "5.00" },
        { courseId: "5009", title: "Chemistry-HP", grade: "B", units: "5.00" },
        { courseId: "5539", title: "World Civilizations-P", grade: "A", units: "5.00" },

        // 11th Grade - Fall 2015
        { courseId: "2221", title: "English 3-P", grade: "A", units: "5.00" },
        { courseId: "2500", title: "Art 1-P", grade: "A", units: "5.00" },
        { courseId: "2815", title: "German 2-P", grade: "A+", units: "5.00" },
        { courseId: "4039", title: "Math Analysis-HP", grade: "C", units: "5.00" },
        { courseId: "5098", title: "Physics 1-AP", grade: "B", units: "5.00" },
        { courseId: "5542", title: "U.S. History-P", grade: "A+", units: "5.00" },

        // 11th Grade - Spring 2016
        { courseId: "2221", title: "English 3-P", grade: "A", units: "5.00" },
        { courseId: "2500", title: "Art 1-P", grade: "A+", units: "5.00" },
        { courseId: "2815", title: "German 2-P", grade: "A", units: "5.00" },
        { courseId: "4039", title: "Math Analysis-HP", grade: "B", units: "5.00" },
        { courseId: "5098", title: "Physics 1-AP", grade: "B", units: "5.00" },
        { courseId: "5542", title: "U.S. History-P", grade: "A", units: "5.00" },

        // 12th Grade - In Progress at transcript time
        { courseId: "2024", title: "Computer Principles AP", grade: "A", units: "5.00" },
        { courseId: "2343", title: "ERWC-P", grade: "B", units: "5.00" },
        { courseId: "2818", title: "German 3-P", grade: "A", units: "5.00" },
        { courseId: "4015", title: "Calculus AB-AP", grade: "B", units: "5.00" },
        { courseId: "5545", title: "Government-P", grade: "A", units: "5.00" }
      ]
    }
  ];

  const renderDegree = (degree: string | Degree[]) => {
    if (Array.isArray(degree)) {
      return (
        <div className="mt-2 space-y-1">
          {degree.map((d, index) => (
            <div key={index} className="text-teal-500">
              <p className="font-medium">{d.title}</p>
              {d.graduationDate && (
                <p className="text-sm text-teal-400">{d.graduationDate}</p>
              )}
            </div>
          ))}
        </div>
      );
    }
    return <p className="text-teal-500">{degree}</p>;
  };


  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8 text-white">Education</h2>
      
      <div className="space-y-4">
        {schools.map((school) => (
          <div key={school.name} className="bg-gray-800 rounded-lg overflow-hidden">
            <button
              onClick={() => setExpandedSchool(expandedSchool === school.name ? null : school.name)}
              className="w-full p-4 flex justify-between items-center hover:bg-gray-700 transition-colors"
            >
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white">{school.name}</h3>
                <p className="text-gray-400">{school.years}</p>
                {school.degree && renderDegree(school.degree)}
                <p className="text-gray-400">GPA: {school.gpa}</p>
              </div>
              <svg
                className={`w-6 h-6 transform transition-transform ${
                  expandedSchool === school.name ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {expandedSchool === school.name && (
              <div className="p-4 border-t border-gray-700">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left bg-gray-900">
                        <th className="p-2">Course ID</th>
                        <th className="p-2">Title</th>
                        <th className="p-2">Grade</th>
                        <th className="p-2">Units</th>
                      </tr>
                    </thead>
                    <tbody>
                      {school.courses.map((course, index) => (
                        <tr 
                          key={course.courseId + index}
                          className="border-t border-gray-700 hover:bg-gray-700"
                        >
                          <td className="p-2">{course.courseId}</td>
                          <td className="p-2">{course.title}</td>
                          <td className="p-2">{course.grade}</td>
                          <td className="p-2">{course.units}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;