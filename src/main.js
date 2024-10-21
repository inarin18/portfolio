import React from 'react';
import { Brain } from 'lucide-react';

import TechStack from './components/Techstack';
import ProjectTimeline from './components/Timeline';
import projects from './components/Projects';


const PortfolioMain = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-800 mb-2">Hinata Inaoka</h1>
        <p className="text-xl text-indigo-600">ML developer and Data Scientist</p>
        <TechStack />
      </header>

      <main className="max-w-4xl mx-auto bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg p-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4 flex items-center">
            <Brain className="mr-2 text-indigo-600 translate-y-[1.5px]" /> About Me
          </h2>
          <p className="text-gray-700">
            As a passionate AI and DNN researcher, I specialize in developing cutting-edge solutions using Python and various machine learning frameworks. My expertise spans from computer vision to natural language processing, always pushing the boundaries of what's possible in artificial intelligence.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-6 text-center">Development Outputs History</h2>
          <ProjectTimeline projects={projects} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Publications</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Publication 1 - Title, Journal/Conference, Year</li>
            <li>Publication 2 - Title, Journal/Conference, Year</li>
            <li>Publication 3 - Title, Journal/Conference, Year</li>
          </ul>
        </section>
      </main>

      <footer className="text-center mt-12 text-indigo-600">
        © {new Date().getFullYear()} Hinata Inaoka - AI and DNN Researcher
      </footer>
    </div>
  );
};

export default PortfolioMain;