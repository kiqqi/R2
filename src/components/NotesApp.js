import { useState, useEffect } from 'react';

const NotesApp = () => {
  const [note, setNote] = useState('');
  const [savedNote, setSavedNote] = useState('');
  const [timeoutId, setTimeoutId] = useState(null);

  const handleChange = (e) => {
    setNote(e.target.value);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const id = setTimeout(() => {
      setSavedNote(note);
    }, 2000);

    setTimeoutId(id);
  };

  return (
    <div>
      <textarea value={note} onChange={handleChange} placeholder="Escribe tu nota aquí..." />
      <p>Nota guardada: {savedNote}</p>
    </div>
  );
};

export default NotesApp;
