import { useMemo, useState } from "react";
import { Icon } from "./Icon";

export function QuizPreview() {
  const [answer, setAnswer] = useState<number | null>(null);
  const options = ["O(n)", "O(1)", "O(log n)"];
  return (
    <div className="quiz-preview">
      <div className="window-chrome">
        <span className="window-dots">
          <i />
          <i />
          <i />
        </span>
        <span>AI Quiz Generator</span>
        <Icon name="sparkle" />
      </div>
      <div className="quiz-window">
        <img
          className="quiz-bow"
          src="/decor/pink-bow.webp"
          alt=""
          width="640"
          height="618"
          loading="lazy"
        />
        <p className="quiz-demo-title">Practice quiz</p>
        <div className="quiz-progress">
          <span>DATA STRUCTURES</span>
          <span>01 / 01</span>
        </div>
        <p className="quiz-question">
          What’s the average-case lookup time of a hash table?
        </p>
        <div className="quiz-options">
          {options.map((option, index) => (
            <button
              className={
                answer === index ? (index === 1 ? "correct" : "incorrect") : ""
              }
              onClick={() => setAnswer(index)}
              key={option}
              aria-pressed={answer === index}
            >
              <span>{String.fromCharCode(65 + index)}</span>
              {option}
              {answer === index && index === 1 && <Icon name="check" />}
            </button>
          ))}
        </div>
        <p className="quiz-feedback" aria-live="polite">
          {answer === null
            ? "Select an answer to check it."
            : answer === 1
              ? "Correct. A well-distributed hash table provides average-case O(1) lookup."
              : "Try O(1). Collisions can make the worst case slower."}
        </p>
        {answer !== null && (
          <button
            className="text-button reset-quiz"
            onClick={() => setAnswer(null)}
          >
            Try again <Icon name="arrow" />
          </button>
        )}
      </div>
      <span className="preview-label">Recreated interactive preview</span>
      <img
        className="quiz-preview-bunny"
        src="/decor/bunny-sitting.webp"
        alt=""
        width="510"
        height="640"
        loading="lazy"
      />
    </div>
  );
}

export function EmotionPreview() {
  const [temporal, setTemporal] = useState(true);
  return (
    <div className="emotion-preview">
      <div className="mini-label">
        <span className="small-dot" /> VIDEO CLASSIFICATION
      </div>
      <div
        className="sequence-frames"
        aria-label="Illustrative facial sequence, not dataset images"
      >
        {[0, 1, 2, 3].map((i) => (
          <div className="face-frame" key={i}>
            <svg viewBox="0 0 100 110" aria-hidden="true">
              <path d="M27 45c-4-33 51-36 48 0l3 29c-7 29-47 29-54 0z" />
              <path d="m32 55 10-2m16 0 10 2M50 59l-3 14h7" />
              <path d={`M36 83 Q50 ${87 + i * 4} 64 83`} />
            </svg>
            <span>FRAME 0{i + 1}</span>
          </div>
        ))}
      </div>
      <div className="pipeline">
        <span>MTCNN</span>
        <b>→</b>
        <span>ResNet-50</span>
        <b>→</b>
        <span>Temporal model</span>
      </div>
      <div className="model-comparison">
        <div>
          <span>TEST ACCURACY</span>
          <strong>
            {temporal ? "57.3" : "47.0"}
            <small>%</small>
          </strong>
          <p>{temporal ? "CNN+BiLSTM" : "ResNet-50 baseline"}</p>
        </div>
        <div className="chart-bars" aria-hidden="true">
          <div>
            <i style={{ height: "82%" }} />
            <span>47.0</span>
          </div>
          <div className={temporal ? "active-bar" : ""}>
            <i style={{ height: "100%" }} />
            <span>57.3</span>
          </div>
        </div>
      </div>
      <button
        className="model-toggle"
        onClick={() => setTemporal((t) => !t)}
        aria-pressed={temporal}
      >
        <span className="toggle-track">
          <i />
        </span>
        Include the sequence <Icon name="arrow" />
      </button>
      <p className="preview-label">RAVDESS · TEST SET RESULTS</p>
    </div>
  );
}

export function RewardsPreview() {
  const [screen, setScreen] = useState("Overview");
  return (
    <div className="rewards-preview">
      <div className="phone">
        <div className="phone-notch" />
        <div className="phone-top">
          <span>9:41</span>
          <span>•••</span>
        </div>
        <p className="phone-greeting">Card rewards</p>
        <p className="phone-demo-title">
          {screen === "Overview" ? "Account\noverview" : "Saved\ncards"}
        </p>
        <div className="illustrative-credit-card">
          <span>Sample card</span>
          <svg width="27" height="23" viewBox="0 0 27 23" aria-hidden="true">
            <rect
              x="1"
              y="1"
              width="25"
              height="21"
              rx="4"
              fill="none"
              stroke="currentColor"
            />
            <path d="M9 1v21m9-21v21M1 8h25M1 15h25" stroke="currentColor" />
          </svg>
          <p>•••• &nbsp; •••• &nbsp; •••• &nbsp; 2027</p>
          <span>INTERFACE CONCEPT</span>
        </div>
        <div className="phone-list">
          <span>
            {screen === "Overview" ? "Account details" : "Card details"}
          </span>
          <Icon name="diagonal" />
          <span>
            {screen === "Overview" ? "Recent activity" : "Card settings"}
          </span>
          <Icon name="diagonal" />
        </div>
        <div className="phone-nav">
          {["Overview", "Cards"].map((s) => (
            <button
              key={s}
              onClick={() => setScreen(s)}
              aria-pressed={screen === s}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      <p className="preview-label">Illustrative interface concept</p>
    </div>
  );
}

const dictionary = [
  "hello",
  "world",
  "code",
  "curiosity",
  "computer",
  "software",
  "developer",
  "pink",
  "bunny",
  "hash",
  "table",
  "dictionary",
  "learning",
  "react",
  "data",
  "systems",
];
function hash(word: string) {
  return (
    [...word].reduce(
      (value, char) => (value * 31 + char.charCodeAt(0)) >>> 0,
      0,
    ) % 8
  );
}
function distance(a: string, b: string) {
  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let prev = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const old = row[j];
      row[j] = Math.min(
        row[j] + 1,
        row[j - 1] + 1,
        prev + Number(a[i - 1] !== b[j - 1]),
      );
      prev = old;
    }
  }
  return row[b.length];
}

export function SpellPreview() {
  const [word, setWord] = useState("software");
  const normalized = word.trim().toLowerCase();
  const bucket = hash(normalized);
  const match = dictionary.includes(normalized);
  const chain = dictionary.filter((w) => hash(w) === bucket);
  const suggestion = useMemo(
    () =>
      dictionary
        .map((w) => ({ word: w, distance: distance(normalized, w) }))
        .sort((a, b) => a.distance - b.distance)[0],
    [normalized],
  );
  return (
    <div className="spell-preview">
      <div className="terminal-title">
        <span className="window-dots">
          <i />
          <i />
          <i />
        </span>
        <span>dictionary.lookup()</span>
        <span>C++ / CONCEPT</span>
      </div>
      <div className="terminal-body">
        <label htmlFor="lookup-word">
          <span className="terminal-prompt">$</span> enter a word
        </label>
        <div className="terminal-input">
          <input
            id="lookup-word"
            value={word}
            maxLength={24}
            onChange={(e) => setWord(e.target.value)}
            autoComplete="off"
            spellCheck={false}
          />
          <Icon name="arrow" />
        </div>
        <div className="hash-flow">
          <span>word</span>
          <b>→</b>
          <span>hash()</span>
          <b>→</b>
          <span>bucket[{bucket}]</span>
        </div>
        <div
          className="bucket-grid"
          aria-label={`Hash selects bucket ${bucket}`}
        >
          {Array.from({ length: 8 }, (_, i) => (
            <div
              className={i === bucket && normalized ? "selected-bucket" : ""}
              key={i}
            >
              <span>{i}</span>
              <i />
            </div>
          ))}
        </div>
        <p className="collision-chain">
          chain: {normalized ? chain.join(" → ") || "(empty)" : "—"}
        </p>
        <div className="lookup-result" aria-live="polite">
          <span className={match ? "found" : "not-found"}>
            {!normalized
              ? "Waiting for a word…"
              : match
                ? "✓ Found in dictionary"
                : "Not in this small dictionary"}
          </span>
          {!match && normalized && suggestion.distance < 3 && (
            <button onClick={() => setWord(suggestion.word)}>
              Try “{suggestion.word}”
            </button>
          )}
          <span>Average O(1) · worst O(n)</span>
        </div>
        <p className="preview-label">
          JAVASCRIPT RECREATION · 16-WORD DEMO · CHAINING
        </p>
      </div>
    </div>
  );
}

export function ProjectPreview({
  id,
  screenshot,
}: {
  id: string;
  screenshot?: string | null;
}) {
  if (screenshot)
    return (
      <img
        className="project-screenshot"
        src={screenshot}
        alt="Project interface screenshot"
        loading="lazy"
      />
    );
  if (id === "quiz") return <QuizPreview />;
  if (id === "emotion") return <EmotionPreview />;
  if (id === "rewards") return <RewardsPreview />;
  if (id === "spell") return <SpellPreview />;
  return (
    <div className="generic-preview">
      <Icon name="sparkle" />
      <span>Project preview coming soon</span>
    </div>
  );
}
