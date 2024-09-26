import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          Welcome to the Virtual Herbal Garden, an innovative platform designed to bring the timeless wisdom of traditional medicinal plants into the digital age. Our mission is to make the rich knowledge of Ayurveda, Unani, and other traditional healing systems accessible to everyone, regardless of geographical boundaries.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          We envision a world where the benefits of medicinal plants are known and embraced by all, supporting a holistic approach to health and wellness. By combining cutting-edge technology with ancient knowledge, we aim to educate, inspire, and promote the sustainable use of herbal resources
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          We aim to be the go-to platform for students, researchers, practitioners, and enthusiasts of the AYUSH sector, fostering a deeper understanding of traditional herbal medicine. Whether you’re a learner seeking to expand your knowledge or a practitioner looking for detailed plant information, the Virtual Herbal Garden is here to guide you.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg">
          Learn More About Our Mission
        </button>
      </div>
    </div>
  );
};

export default About;
