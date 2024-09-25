import React from "react";
import { useNavigate } from "react-router-dom";

const plantsData = [
  {
    id: 1,
    title: "AYURVEDA",
    description: "Ayurveda is a traditional Indian medical system that aims to restore balance to the body, mind, and spirit.",
    image: "src/ayurveda image.jpg",
    system: "Ayurvedic Herbs",
  },
  {
    id: 2,
    title: "UNANI",
    description: "Unani medicine, also known as Yunani medicine, is a traditional system of healing and health maintenance that originated in ancient Greece and later developed in the Middle East and South Asia.",
    image: "src/unani image.jpeg",
    system: "Unani Herbs",
  },
  {
    id: 3,
    title: "HOMOEOPATHY",
    description: "Homeopathy is a system of alternative medicine that is based on the principle of meaning that a substance that causes symptoms in a healthy person can, in very small doses, treat similar symptoms in a sick person.",
    image: "src/Homeopathy image.jpeg",
    system: "Homeopathic Herbs",
  },
];

const Plant = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Explore Our Plants</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {plantsData.map((plant) => (
          <div key={plant.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={plant.image}
              alt={plant.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{plant.title}</h2>
              <p className="text-gray-600 mb-4">{plant.description}</p>
              <button
                onClick={() => navigate(`/plants/${plant.id}?system=${plant.system}`)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plant;
