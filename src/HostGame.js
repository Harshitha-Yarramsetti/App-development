import { useState } from "react";

function HostGame({
  title,
  questions,
  pin,
  onBack,
  onStart,
}) {
  const [players, setPlayers] = useState([
    "Alex",
    "Sam",
    "Priya",
  ]);

  function addDemoPlayer() {
    const names = [
      "Rahul",
      "Anu",
      "John",
      "Meena",
      "David",
    ];

    const nextName = names[players.length - 3];

    if (nextName && !players.includes(nextName)) {
      setPlayers([...players, nextName]);
    }
  }

  return (
    <div className="game-page">

      <div className="game-navbar">

        <button
          className="back-button white-back"
          onClick={onBack}
        >
          ← Back
        </button>

        <div className="game-pin">
          GAME PIN:
          <strong>{pin}</strong>
        </div>

      </div>

      <div className="game-content">

        <div className="result-card">

          <div className="trophy">
            🎮
          </div>

          <span className="result-label">
            HOST LIVE GAME
          </span>

          <h1>{title}</h1>

          <p>
            Share this Game PIN with your players.
          </p>

          <div className="final-score">
            {pin}
          </div>

          <p>
            {players.length} players joined
          </p>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {players.map((player, index) => (
              <div
                key={index}
                style={{
                  background: "#f1f1f1",
                  color: "#333",
                  padding: "12px",
                  borderRadius: "8px",
                  fontWeight: "700",
                }}
              >
                👤 {player}
              </div>
            ))}
          </div>

          <button
            className="start-quiz"
            onClick={addDemoPlayer}
            style={{ marginTop: "20px" }}
          >
            + Add Demo Player
          </button>

          <button
            className="start-quiz"
            onClick={onStart}
            disabled={!questions || questions.length === 0}
          >
            Start Game 🚀
          </button>

        </div>

      </div>

    </div>
  );
}

export default HostGame;