const ClickButtons = () => {
    const handleClick = () => {
      alert('Clic simple');
    };
  
    const handleDoubleClick = () => {
      alert('Doble clic');
    };
  
    return (
      <div>
        <button onClick={handleClick} onDoubleClick={handleDoubleClick}>
          Haz clic o doble clic
        </button>
      </div>
    );
  };
  
  export default ClickButtons;
  