import React, { useState } from 'react';

const QuizModal = ({ onClose }) => {
  const questions = [
    {
      question: 'Which of the following is a commonly used Ayurvedic herb known for its rejuvenating properties?',
      options: ['Ashwagandha','Turmeric','Ginger','Aloe Vera'],
      correctAnswer: 'Ashwagandha',
    },
    {
      question: 'Which plant is known for producing oxygen at night?',
      options: ['Aloe Vera', 'Cactus', 'Snake Plant', 'Bamboo'],
      correctAnswer: 'Aloe Vera',
    },
    {
      question: 'What is the largest flower in the world?',
      options: ['Rafflesia', 'Sunflower', 'Rose', 'Orchid'],
      correctAnswer: 'Rafflesia',
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(''); // Reset selected option when moving to next question
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(''); // Reset selected option when moving to previous question
    }
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Quiz</h2>
        <p className="text-gray-700 mb-6">{questions[currentQuestion].question}</p>

        {/* Render Answer Options */}
        <div className="mb-4">
          {questions[currentQuestion].options.map((option, index) => (
            <label key={index} className="block text-gray-700 mb-2">
              <input
                type="checkbox"
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <button
            onClick={nextQuestion}
            disabled={currentQuestion === questions.length - 1}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default QuizModal;
