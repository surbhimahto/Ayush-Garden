import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import ashwagandhaImage from '../assets/images/Ashwagandha image.jpg';
import brahmiImage from '../assets/images/Brahmi image.jpg';
import AmlaImage from '../assets/images/Amla Image.jpeg';
import GuavaImage from '../assets/images/guava image.jpg';
import BelladonnaImage from '../assets/images/Belladonna image.jpeg';
// Plant Data
const plantSubData = {
  1: [
    {
      title: "Ashwagandha",
      description: "Scientific Name - Withania somnifera",
      description2: "It is a small woody plant native to India and North Africa. Its root and berries are used to produce a very popular Ayurvedic remedy.",
      image: ashwagandhaImage,
      videoUrl: "https://youtu.be/vqzNWVVo5Is?si=MLU3Vsnw1HMS-0qF", // Video link or path to video file
    },
    {
      title: "Brahmi",
      description: "Scientific Name - Bacopa monieri",
      description2: "Brahmi is a staple herb in Ayurvedic medicine. It appears to have strong anti-inflammatory properties.",
      image: brahmiImage,
      videoUrl: "#",
    },
  ],
  2: [
    {
      title: "Amla",
      description: "Scientific Name- Emblica officinalis Gaertn",
      description2: "‘AMLA’ is found both wild and cultivated in India, Sri Lanka and China. Its temperament is cold in the first degree and dry in the second degree. Amla is astringent and sedative.",
      image: AmlaImage,
      videoUrl: "#",
    },
    {
      title: "AMROOD(Guava)",
      description: "Scientific Name- Psidium guajava Linn",
      description2: "‘AMROOD’ is cultivated in India, Pakistan and Bangladesh. Its temperament is hot and moist in the first degree. Its fruits and leaves are used as medicine.",
      image: GuavaImage,
      videoUrl: "#",
    },
  ],
  3:[
  {
    title: "Belladonna",
    description: "Scientific Name- Atropa belladonna",
    description2: "It is used for fever, inflammation, and headaches",
    image: BelladonnaImage,
    videoUrl: "#",
  },
]
};

// PlantDetails Component
const PlantDetails = ({ bookmarkedItems, setBookmarkedItems }) => {
  const { plantId } = useParams();
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const subcards = plantSubData[plantId] || [];
  const queryParams = new URLSearchParams(location.search);
  const systemType = queryParams.get("system") || "Herbs";

  const handleBookmark = (subcard) => {
    setBookmarkedItems((prevBookmarks) => [...prevBookmarks, subcard]);
  };

  const handleViewMore = (subcard) => {
    setSelectedPlant(subcard);
    setShowModal(true);
  };

  // Text-to-speech function
  const handleTextToSpeech = (text) => {
    if (isSpeaking) {
      window.speechSynthesis.cancel(); // Stop audio
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false); // Reset when speech ends
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">{systemType}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {subcards.map((subcard, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={subcard.image}
              alt={subcard.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{subcard.title}</h2>
              <p className="text-gray-600 mb-4">{subcard.description}</p>
              <p className="text-gray-600 mb-4">{subcard.description2}</p>
              <div className="flex justify-between">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  onClick={() => handleViewMore(subcard)}
                >
                  View More
                </button>
                <button
                  onClick={() => handleBookmark(subcard)}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Bookmark
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedPlant && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-lg max-w-lg">
            <h2 className="text-2xl font-bold mb-4">{selectedPlant.title}</h2>
            <p className="mb-4">{selectedPlant.description}</p>
            <p className="mb-4">{selectedPlant.description2}</p>

            {/* Text-to-Speech Button */}
            <button
              onClick={() => handleTextToSpeech(`${selectedPlant.description} ${selectedPlant.description2}`)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              {isSpeaking ? "Stop Audio" : "Read Aloud"}
            </button>

            {/* Video Button */}
            <button
              onClick={() => window.open(selectedPlant.videoUrl, "_blank")}
              className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
            >
              View Video
            </button>

            {/* Close Modal */}
            <button
              onClick={() => setShowModal(false)}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mt-4 block"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlantDetails;