import { useState } from 'react';

const GuessNumberGame = () => {
  const [randomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const numGuess = parseInt(guess, 10);
    if (numGuess > randomNumber) {
      setMessage('Más bajo');
    } else if (numGuess < randomNumber) {
      setMessage('Más alto');
    } else {
      setMessage('¡Correcto!');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" value={guess} onChange={(e) => setGuess(e.target.value)} />
        <button type="submit">Adivinar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default GuessNumberGame;
