import { ferResults } from "../data/portfolio";
import { Icon } from "./Icon";

const figures = [
  {
    file: "transformer-architecture",
    width: 3467,
    height: 856,
    title: "CNN + Transformer architecture",
    alt: "Original poster diagram showing input frames, shared ResNet-50 encoding, 2,048-dimensional embeddings, Transformer attention, and an illustrative prediction.",
    caption:
      "Original architecture schematic from our poster. The “Happy 94%” output illustrates a prediction; it is not an evaluation result.",
  },
  {
    file: "per-class-accuracy",
    width: 1062,
    height: 518,
    title: "Per-class accuracy",
    alt: "Original grouped bar chart comparing baseline CNN, CNN+BiLSTM, and both Transformer variants across eight RAVDESS emotion classes.",
    caption:
      "Figure 1 from the poster: model performance differs across emotion classes.",
  },
  {
    file: "cnn-confusion",
    width: 675,
    height: 712,
    title: "Baseline CNN confusion matrix",
    alt: "Original normalized baseline CNN confusion matrix. Several emotions are classified as calm.",
    caption: "Figure 2: true labels are rows; predicted labels are columns.",
  },
  {
    file: "bilstm-confusion",
    width: 685,
    height: 712,
    title: "CNN+BiLSTM confusion matrix",
    alt: "Original normalized CNN+BiLSTM confusion matrix across eight emotion classes.",
    caption:
      "Figure 3: CNN+BiLSTM predictions on the project’s evaluation data.",
  },
  {
    file: "transformer-confusion",
    width: 752,
    height: 712,
    title: "CNN+Transformer confusion matrix",
    alt: "Original normalized CNN+Transformer confusion matrix across eight emotion classes.",
    caption:
      "Figure 4: Transformer predictions. The poster does not identify this matrix’s positional-encoding variant.",
  },
];

export function FERMaterials() {
  return (
    <>
      <section
        className="case-section fer-materials"
        aria-labelledby="fer-results-heading"
      >
        <h3 id="fer-results-heading">The results</h3>
        <p>
          Temporal variants outperformed the frame-averaged baseline on the
          held-out test set. CNN+BiLSTM had the highest test accuracy, while the
          Transformer without positional encoding performed better than the
          version with it.
        </p>
        <div className="fer-table-wrap">
          <table className="fer-table">
            <caption>Table 1 from our poster · accuracy (%)</caption>
            <thead>
              <tr>
                <th scope="col">Model</th>
                <th scope="col">Validation</th>
                <th scope="col">Test</th>
              </tr>
            </thead>
            <tbody>
              {ferResults.map((result) => (
                <tr key={result.model}>
                  <th scope="row">{result.model}</th>
                  <td>{result.validation.toFixed(1)}%</td>
                  <td>{result.test.toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="fer-result-note">
          Validation accuracy was higher than test accuracy for all four models.
          Held-out test results provide a separate measure of how the models
          generalize to unseen actors.
        </p>
        <a
          className="text-button"
          href="/projects/fer/FER-Poster.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Open our full project poster <Icon name="diagonal" />
        </a>
      </section>
      <section
        className="case-section fer-materials"
        aria-labelledby="fer-figures-heading"
      >
        <h3 id="fer-figures-heading">A closer look at the project</h3>
        <p>
          Facial expressions develop through onset, apex, and offset. Comparing
          the same 15 frames across models lets us examine the value of
          multi-frame context without giving sequence models more visual input.
        </p>
        <div className="fer-figures">
          {figures.map((figure) => (
            <figure key={figure.file}>
              <h4>{figure.title}</h4>
              <a
                href={`/projects/fer/${figure.file}.webp`}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open full-size ${figure.title}`}
              >
                <img
                  src={`/projects/fer/${figure.file}.webp`}
                  alt={figure.alt}
                  width={figure.width}
                  height={figure.height}
                  loading="lazy"
                />
              </a>
              <figcaption>
                {figure.caption}{" "}
                <a
                  href={`/projects/fer/${figure.file}.webp`}
                  target="_blank"
                  rel="noreferrer"
                >
                  View full size <span aria-hidden="true">↗</span>
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
