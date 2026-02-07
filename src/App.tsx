import { useState } from 'react';
import Button from './components/Button';
import Option from "./components/Option";
import Input from "./components/Input";
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    accepted: null,
    activity: '',
    date: ''
  });

  const goToStep = (n) => setStep(n);

  const answer = (yes) => {
    //if (yes) setStep(2);
    //else window.location.replace("https://google.com");
    if (yes) {
      setAnswers(prev => ({ ...prev, accepted: true }));
      setStep(2);
    } else {
      setAnswers(prev => ({ ...prev, accepted: false }));
      window.location.replace("https://google.com");
    }
  };

  const sendToApi = async () => {
    const message = `
Réponse pour la Saint-Valentin :
- Activité : ${answers.activity}
- Date : ${answers.date}
`.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/33695321191?text=${encodedMessage}`;
    window.location.replace(whatsappLink);
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#ffdde1,#ee9ca7)] text-center overflow-hidden">

      <div className="max-w-3xl mx-auto px-5 py-16 relative z-10">
        <h1 className="italic text-5xl text-red-700 mb-4 font-display font-bold">
          Bonne Saint-Valentin
        </h1>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="flex flex-col items-center animate-fade">
            <h2 className="text-red-900 mb-10 font-bold text-2xl">
              La Saint-Valentin arrive vite.<br />
              Je voulais vérifier si ton cœur était déjà pris
            </h2>

            <p className="text-2xl text-red-700 mb-6">
              Est-ce que tu accepterais d’être ma Valentine ?
            </p>

            <div className="flex gap-5">
              <Button onClick={() => answer(true)}>Oui</Button>
              <Button variant="secondary" onClick={() => answer(false)}>Non</Button>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="flex flex-col items-center animate-fade">
            <p className="text-red-700 text-xl mb-5">
              Qu’est-ce qu’on fait ensemble ?
            </p>

            <div className="flex flex-col gap-4 max-w-md w-full">
              <Option name="activity" label="Un bon repas devant un film" onClick={() => setAnswers(prev => ({ ...prev, activity: "Un bon repas devant un film" }))} />
              <Option name="activity" label="Bowling + Ciné" onClick={() => setAnswers(prev => ({ ...prev, activity: "Bowling + Ciné" }))} />
              <Option name="activity" label="Resto + Balade" onClick={() => setAnswers(prev => ({ ...prev, activity: "Resto + Balade" }))} />
              <Input placeholder="Propose une idée" onChange={(e) => setAnswers(prev => ({ ...prev, activity: e.target.value }))} />
            </div>

            <Button onClick={() => goToStep(3)}>Continuer</Button>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="flex flex-col items-center animate-fade">
            <p className="text-red-700 text-xl mt-6 mb-5">
              Quand est-ce qu’on se voit ?
            </p>

            <div className="flex flex-col gap-4 max-w-md w-full">
              <Option name="activity" label="Mardi 10 février - 19h30" onClick={() => setAnswers(prev => ({ ...prev, date: "Mardi 10 février - 19h30" }))} />
              <Option name="activity" label="Mercredi 11 février - 19h30" onClick={() => setAnswers(prev => ({ ...prev, date: "Mercredi 11 février - 19h30" }))} />
              <Option name="activity" label="Vendredi 13 février - 19h30" onClick={() => setAnswers(prev => ({ ...prev, date: "Vendredi 13 février - 19h30" }))} />
              <Input placeholder="Ton idée" onChange={(e) => setAnswers(prev => ({ ...prev, date: e.target.value }))} />
            </div>

            <Button onClick={sendToApi}>Valider</Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
