import React from 'react';
import { Brain } from 'lucide-react';

import TechStack from './components/Techstack';
import ProjectTimeline from './components/Timeline';
import projects from './components/Projects';
import HomeHamburgerMenu from './components/HomeHamburgerMenu';

const PortfolioMain = ({ language }) => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <header className="text-center mb-12">
        <HomeHamburgerMenu />
        <h1 className="text-4xl font-bold text-indigo-800 mb-2">Hinata Inaoka</h1>
        <p className="text-xl text-indigo-600">ML developer and Data Scientist</p>
        <TechStack />
      </header>

      <main className="max-w-4xl mx-auto bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg p-8">
        <section id="about" className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4 flex items-center">
            <Brain className="mr-2 text-indigo-600 translate-y-[1.5px]" /> About Me
          </h2>
          <p className="text-gray-700">
            {language === 'ja' 
              ? "初めまして。私は九州大学大学院システム情報科学府に所属している修士１年の稲岡陽向です。大学院では深層学習、特に画像分類モデルに対する敵対的攻撃への防御策について研究を行っています。また研究以外にも様々な開発を行っており、議事録作成AIを開発している企業の下でアルバイトをしていたり、予備校のAI部門でアルバイトをしたりしています。個人では興味の赴くままに開発をしており、下に記載しているのがその遍歴になっています。" 
              : "Hello. I am Hinata Inaoka, a first-year master's student at the Graduate School of Information Science and Electrical Engineering, Kyushu University. In graduate school, I am researching deep learning, specifically focusing on defense strategies against adversarial attacks on image classification models. In addition to my research, I am involved in various development projects. I work part-time for a company developing AI for creating meeting minutes, and I also have a part-time job in the AI division of a preparatory school. Personally, I develop according to my interests, and the projects listed below represent my journey in this field." 
            }
          </p>
        </section>

        <section id="projects" className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-6 text-center">Development Outputs History</h2>
          <ProjectTimeline projects={projects} language={language}/>
        </section>

        <section id="contact">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Contact</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Email: <a href="mailto:berry4jobs@gmail.com" className="text-indigo-600 hover:underline">berry4jobs@gmail.com</a></li>
            <li>GitHub: <a href="https://github.com/inarin18" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">@inarin18</a></li>
          </ul>
        </section>
      </main>

      <footer className="text-center mt-12 text-indigo-600">
        © {new Date().getFullYear()} Hinata Inaoka - ML developer and Data Scientist
      </footer>
    </div>
  );
};

export default PortfolioMain;