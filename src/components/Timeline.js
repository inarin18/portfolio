import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectTimeline = ({ projects }) => (
    <div className="relative container mx-auto px-6 flex flex-col space-y-8">
        <div className="absolute z-0 w-2 h-full bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 shadow-lg inset-0 left-17 md:right-0 md:left-0">
            <div className="w-6 h-6 absolute top-0 -mt-3 rounded-full bg-blue-400 shadow left-1/2 -translate-x-1/2"></div>
            <div className="w-6 h-6 absolute bottom-0 -mb-3 rounded-full bg-pink-500 shadow left-1/2 -translate-x-1/2"></div>
        </div>
        {projects.map((project, index) => (
            <div key={index} className="relative z-10">
                <div className={`timeline-container ${index % 2 === 0 ? 'left' : 'right'}`}>
                    <div className="timeline-pointer" aria-hidden="true"></div>
                    <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <span className="font-bold text-indigo-600 text-sm tracking-wide">{project.date}</span>
                        <h3 className="text-lg font-semibold text-gray-800 pt-1">{project.title}</h3>
                        <p className="text-sm leading-snug tracking-wide text-gray-700 text-opacity-100 mt-2">{project.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                                <span key={i} className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center text-blue-600 hover:underline">
                                View Project <ExternalLink size={16} className="ml-1" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        ))}
        <div>
            {/* ここは空白行 */}
        </div>
    </div>
);

export default ProjectTimeline;