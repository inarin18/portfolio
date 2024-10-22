import React from 'react';
import { useParams } from 'react-router-dom';
import projects from './Projects';
import NotHomeHamburgerMenu from './NotHomeHamburgerMenu';

const ProjectDetail = ({ language }) => {
    const { id } = useParams();
    const project = projects[id];

    if (!project) {
        return <div>There are no Projects.</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
            <NotHomeHamburgerMenu />
            <main className="max-w-4xl mx-auto bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg p-8">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-4">
                        {language === 'ja' ? project.titleJa : project.title}
                    </h1>
                    <p className="text-gray-600 mb-4">{project.date}</p>
                    <p className="mb-4">
                        {language === 'ja' ? project.descriptionJa : project.description}
                    </p>
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">
                            {language === 'ja' ? '使用技術' : 'Technologies Used'}
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="prose max-w-none">
                        {React.createElement(
                            language === 'ja' ? project.articleJa : project.article 
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProjectDetail;