import React from 'react';
import { FaPython } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy } from 'react-icons/si';

const TechStack = () => (
    <div className="flex justify-center my-6">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 max-w-2xl">
            <div className="flex justify-center items-center">
                <FaPython className="h-10 w-10 text-blue-500" />
            </div>
            <div className="flex justify-center items-center">
                <SiTensorflow className="h-10 w-10 text-orange-500" />
            </div>
            <div className="flex justify-center items-center">
                <SiPytorch className="h-10 w-10 text-red-500" />
            </div>
            <div className="flex justify-center items-center">
                <SiScikitlearn className="h-10 w-10 text-yellow-500" />
            </div>
            <div className="flex justify-center items-center">
                <SiPandas className="h-10 w-10 text-purple-500" />
            </div>
            <div className="flex justify-center items-center">
                <SiNumpy className="h-10 w-10 text-blue-400" />
            </div>
        </div>
        {/* <img src="/api/placeholder/50/50" alt="Python logo" className="h-12" />
        <img src="/api/placeholder/50/50" alt="TensorFlow logo" className="h-10" />
        <img src="/api/placeholder/50/50" alt="PyTorch logo" className="h-10" />
        <img src="/api/placeholder/50/50" alt="Scikit-learn logo" className="h-10" />
        <img src="/api/placeholder/50/50" alt="Pandas logo" className="h-10" />
        <img src="/api/placeholder/50/50" alt="NumPy logo" className="h-10" /> */}
    </div>
);

export default TechStack;