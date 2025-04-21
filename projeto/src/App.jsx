import { useState } from "react";
import beemo from "../public/bemo.png";

function App() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState([]);

  const handleChange = (e, key) => {
    if (!submitted) {
      setAnswers({ ...answers, [key]: e.target.value });
    }
  };

  const correctAnswers = {
    tobe1: "was",
    tobe2: "was",
    tobe3: "Were",
    
    pastCont1: "were working",
    pastCont2: "were testing",
    pastCont3: "was",
  
    past1: "designed",
    past2: "programmed",
    past3: "designed",
  
    presentPerf1: "have developed",  // "have" + "developed"
    presentPerf2: "have given",  // "have" + "not given"
    presentPerf3: "have created",   // "have" + "created"
    presentPerf4: "has tested",     // "has" + "tested"
  };
  
  const questions = {
    toBePast: [
      {
        q: "BMO ___ not just a machine — it acts like a friend.",
        key: "tobe1",
      },
      {
        q: "It ___ like a parent or child in some situations.",
        key: "tobe2",
      },
      {
        q: "___ the developers responsible for designing BMO's core system? ",
        key: "tobe3",
      },
    ],
    pastContinuous: [
      {
        q: "While engineers ______ on BMO's system, they studied its emotional responses. (use: work)",
        key: "pastCont1",
      },
      {
        q: "While engineers were working on BMO's system, they ______ its emotional responses. (use: test)",
        key: "pastCont2",
      },
      {
        q: "BMO ______ not interacting with humans during the early stages.",
        key: "pastCont3",
      },
    ],
    simplePast: [
      {
        q: "They ______ BMO’s core system in the early stages.",
        key: "past1",
      },
      {
        q: "They ______ it using Python and C++. ",
        key: "past2",
      },
      {
        q: "Who ______ BMO’s core system?",
        key: "past3",
      },
    ],
    presentPerfect: [
      {
        q: "Engineers ___  ___ BMO to speak and respond to emotions. (use: develop)",
        key: "presentPerf1",
      },
      {
        q: "But they ___ not ___ it full human behavior. (use: give)",
        key: "presentPerf2",
      },
      {
        q: "______ you ever ______ a robot like BMO? (use: create)",
        key: "presentPerf3",
      },
      {
        q: "______ she ever ______ the emotional responses of BMO? (use: test)",
        key: "presentPerf4",
      },
    ],
  };

  // Função para verificar as respostas e fornecer feedback
  const checkAnswers = (userAnswers) => {
    let feedbackArr = [];
    for (let key in correctAnswers) {
      const userAnswer = (userAnswers[key] || "").trim().toLowerCase();
      const correctAnswer = correctAnswers[key].toLowerCase();

      if (userAnswer === correctAnswer) {
        feedbackArr.push({ key, correct: true, message: "Correto!" });
      } else {
        feedbackArr.push({ key, correct: false, message: `Errado! A resposta correta é: ${correctAnswers[key]}` });
      }
    }
    return feedbackArr;
  };

  const handleSubmit = () => {
    // Verificar as respostas e gerar feedback
    const feedbackArr = checkAnswers(answers);
    setFeedback(feedbackArr);

    // Contar as respostas corretas
    let correct = feedbackArr.filter(item => item.correct).length;
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
            <span className="text-teal-800">BMO</span> Questions
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
              {submitted && (
                <div className="mt-4">
                  {feedback.map((item) => (
                    <p key={item.key} className={`text-xl font-semibold ${item.correct ? "text-green-500" : "text-red-500"}`}>
                      {item.message}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
 