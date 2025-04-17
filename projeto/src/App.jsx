import { useState } from "react";
import beemo from "../public/bemo.png";

function App() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  const handleChange = (e, key) => {
    if (!submitted) {
      setAnswers({ ...answers, [key]: e.target.value });
    }
  };

  const correctAnswers = {
    present1: "advanced programming",
    present2: "artificial intelligence",
    present3: "no",

    past1: "designed BMO's core system",
    past2: "play music",
    past3: "no",

    cond1: "voice recognition",
    cond2: "help BMO understand the world",

    future1: "assist people with daily tasks",
    future2: "common",
    future3: "a real BMO",

    tf1: "false",
    tf2: "true",
  };

  const questions = {
    present: [
      { q: "What does creating a robot like BMO require?", key: "present1" },
      { q: "What technologies do engineers use to design systems for BMO?", key: "present2" },
      { q: "Does BMO act only like a machine?", key: "present3" },
    ],
    past: [
      {
        q: "What did developers design in the early stages?",
        key: "past1",
        options: [
          "a video game",
          "BMO's core system",
          "emotional AI",
        ],
      },
      {
        q: "What tasks could BMO perform?",
        key: "past2",
        options: [
          "build robots",
          "teach programming",
          "play music",
        ],
      },
      {
        q: "Did they program BMO using JavaScript?",
        key: "past3",
        options: [
          "Yes",
          "No",
        ],
      },
    ],
    conditional: [
      {
        q: "What would someone need to include if they were to build BMO today?",
        key: "cond1",
        options: [
          "Wi-Fi only",
          "Voice recognition",
          "Extra batteries",
        ],
      },
      {
        q: "Why would these technologies be important?",
        key: "cond2",
        options: [
          "To decorate BMO",
          "To help BMO understand the world",
          "To entertain engineers",
        ],
      },
    ],
    future: [
      {
        q: "What will BMO-like robots do in the future?",
        key: "future1",
        options: [
          "Assist people with daily tasks",
          "Replace phones",
          "Just play music",
        ],
      },
      {
        q: "Will BMO-like robots become rare or common?",
        key: "future2",
        options: [
          "Rare",
          "Common",
          "Unknown",
        ],
      },
      {
        q: "What might we have one day?",
        key: "future3",
        options: [
          "A real BMO",
          "Flying robots",
          "Robot animals",
        ],
      },
    ],
    trueFalse: [
      {
        q: "Simple Present is used for completed actions in the past.",
        key: "tf1",
        options: ["True", "False"],
      },
      {
        q: "Second Conditional is used for hypothetical situations.",
        key: "tf2",
        options: ["True", "False"],
      },
    ],
  };

  const handleSubmit = () => {
    let correct = 0;
    for (let key in correctAnswers) {
      const userAnswer = (answers[key] || "").trim().toLowerCase();
      const correctAnswer = correctAnswers[key].toLowerCase();
      if (userAnswer === correctAnswer) correct++;
    }

    setScore(correct);
    setSubmitted(true);
    alert(`Você acertou ${correct} de ${Object.keys(correctAnswers).length} perguntas!`);
  };

  return (
    <div className="bg-teal-600 min-h-screen">
      <div className="flex text-center justify-center bg-lime-100">
        <img src={beemo} className="h-24 w-auto" />
        <h1 className="text-black font-bold pt-8 text-xl">
          <span className="text-teal-600 font-bold">Programming BMO:</span> The Brain Behind the Bot
        </h1>
      </div>

      <div className="bg-teal-800 h-1"></div>

      <div className="flex flex-wrap text-center justify-center p-4">
        <h2 className="font-bold text-white text-3xl">BMO <span className="text-lime-200">CREATE</span></h2>
        <p className="font-semibold text-white text-xl max-w-4xl">
          Creating a robot like BMO requires advanced programming and a combination of hardware and software components.
          Engineers use artificial intelligence, robotics, and machine learning to design systems that allow BMO to move, speak,
          and respond to emotions. BMO is not just a machine — it acts like a friend and sometimes like a parent or child.
          <br /><br />
          In the early stages, developers designed BMO's core system to handle multitasking, such as playing music,
          recording videos, and interacting with humans. They programmed BMO in languages like Python and C++ to control
          its sensors and personality features.
          <br /><br />
          If someone were to build BMO today, they would need to include voice recognition, facial tracking, and emotional AI.
          These technologies would help BMO understand the world and respond naturally.
          <br /><br />
          In the future, BMO-like robots will become more common in homes. They will assist people with daily tasks, just like in the show.
          Maybe one day, we will have a real BMO playing games and giving life advice!
        </p>
      </div>

      <div className="bg-teal-800 h-1 my-1"></div>

      <div className="border-8 border-teal-600">
        <div className="bg-gray-200 py-8 px-4 text-center border-8 border-lime-100">
          <h2 className="font-bold text-teal-600 text-3xl">
            <span className="text-teal-800 ">BMO</span> Questions
          </h2>

          <div className="text-left text-teal-600 mt-6 max-w-4xl mx-auto space-y-6">
            {Object.entries(questions).map(([section, items]) => (
              <div key={section}>
                <h3 className="text-xl font-bold capitalize">{section.replace(/([a-z])([A-Z])/g, '$1 $2')}</h3>
                <ul className="space-y-4">
                  {items.map(({ q, key, options }) => (
                    <li key={key}>
                      <label className="block font-semibold mb-1">{q}</label>
                      {options ? (
                        <select
                          className={`w-full p-2 border rounded-xl
                            ${submitted && (answers[key] || "").trim().toLowerCase() === correctAnswers[key].toLowerCase() ? "bg-green-100 border-green-400" : ""}
                            ${submitted && (answers[key] || "").trim().toLowerCase() !== correctAnswers[key].toLowerCase() ? "bg-red-100 border-red-400" : ""}
                          `}
                          value={answers[key] || ""}
                          onChange={(e) => handleChange(e, key)}
                          disabled={submitted}
                        >
                          <option value="">Choose an option</option>
                          {options.map((opt, idx) => (
                            <option key={idx} value={opt}>{opt}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type="text"
                          className={`w-full p-2 border rounded-xl
                            ${submitted && (answers[key] || "").trim().toLowerCase() === correctAnswers[key].toLowerCase() ? "bg-green-100 border-green-400" : ""}
                            ${submitted && (answers[key] || "").trim().toLowerCase() !== correctAnswers[key].toLowerCase() ? "bg-red-100 border-red-400" : ""}
                          `}
                          value={answers[key] || ""}
                          onChange={(e) => handleChange(e, key)}
                          placeholder="Your answer..."
                          disabled={submitted}
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="text-center pt-6">
              <button
                className={`font-bold py-2 px-6 rounded-xl transition
                  ${submitted ? "bg-gray-400 cursor-not-allowed" : "bg-teal-700 hover:bg-teal-800 text-white"}
                `}
                onClick={handleSubmit}
                disabled={submitted}
              >
                Enviar respostas
              </button>
              {score !== null && (
                <p className="mt-4 text-xl font-bold text-teal-900">
                  Você acertou {score} de {Object.keys(correctAnswers).length} perguntas!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
