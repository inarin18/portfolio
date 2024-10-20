import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { Brain, Calendar, ExternalLink } from 'lucide-react';

const TechStack = () => (
  <div className="flex flex-wrap justify-center items-center gap-4 my-6">
    <img src="/api/placeholder/50/50" alt="Python logo" className="h-12" />
    <img src="/api/placeholder/50/50" alt="TensorFlow logo" className="h-10" />
    <img src="/api/placeholder/50/50" alt="PyTorch logo" className="h-10" />
    <img src="/api/placeholder/50/50" alt="Scikit-learn logo" className="h-10" />
    <img src="/api/placeholder/50/50" alt="Pandas logo" className="h-10" />
    <img src="/api/placeholder/50/50" alt="NumPy logo" className="h-10" />
  </div>
);

const ProjectTimeline = ({ projects }) => (
  <div className="relative container mx-auto px-6 flex flex-col space-y-8">
    <div className="absolute z-0 w-2 h-full bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 shadow-lg inset-0 left-17 md:mx-auto md:right-0 md:left-0">
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
  </div>
);

const PortfolioMain = () => {
  const projects = [
    {
      title: "Advanced Neural Network for Image Recognition",
      description: "Developed a state-of-the-art neural network architecture for image recognition, achieving 98% accuracy on benchmark datasets.",
      date: "2023",
      link: "#",
      technologies: ["Python", "TensorFlow", "OpenCV"]
    },
    {
      title: "AI-powered Natural Language Processing System",
      description: "Created an NLP system capable of understanding and generating human-like text, with applications in chatbots and content generation.",
      date: "2022",
      link: "#",
      technologies: ["Python", "PyTorch", "NLTK", "Transformers"]
    },
    {
      title: "Deep Reinforcement Learning for Robotic Control",
      description: "Implemented a deep reinforcement learning algorithm to teach robots complex manipulation tasks in simulated environments.",
      date: "2021",
      link: "#",
      technologies: ["Python", "TensorFlow", "OpenAI Gym"]
    },
    {
      title: "Generative Adversarial Networks for Data Augmentation",
      description: "Developed a GAN-based system for generating synthetic training data, improving model performance in low-data scenarios.",
      date: "2020",
      link: "#",
      technologies: ["Python", "PyTorch", "NumPy", "Matplotlib"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-800 mb-2">Your Name</h1>
        <p className="text-xl text-indigo-600">AI and DNN Researcher</p>
        <TechStack />
      </header>

      <main className="max-w-4xl mx-auto bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg p-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4 flex items-center">
            <Brain className="mr-2 text-indigo-600" /> About Me
          </h2>
          <p className="text-gray-700">
            As a passionate AI and DNN researcher, I specialize in developing cutting-edge solutions using Python and various machine learning frameworks. My expertise spans from computer vision to natural language processing, always pushing the boundaries of what's possible in artificial intelligence.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-6 text-center">Research Projects</h2>
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
        © {new Date().getFullYear()} Your Name - AI and DNN Researcher
      </footer>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <PortfolioMain />
    </div>
  );
}

export default App;
