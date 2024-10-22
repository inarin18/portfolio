import React from 'react';

const LanguageSwitcher = ({ setLanguage, currentLanguage }) => {

    const changeLanguage = (lang) => {
        setLanguage(lang);
        // navigate(`/${lang}`);
    };

    return (
        <div className="fixed top-6 right-6 flex space-x-2">
            <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                    currentLanguage === 'en' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
                EN
            </button>
            <button
                onClick={() => changeLanguage('ja')}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                    currentLanguage === 'ja' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
                日本語
            </button>
        </div>
    );
};

export default LanguageSwitcher;