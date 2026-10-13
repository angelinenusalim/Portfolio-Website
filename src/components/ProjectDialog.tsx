import { useEffect, useRef } from "react";
import type { Project } from "../data/portfolio";
import { Icon } from "./Icon";
import { FERMaterials } from "./FERMaterials";

export function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!project || !dialog.current) return;
    const node = dialog.current;
    const previousOverflow = document.body.style.overflow;
    node.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      node.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);
  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      aria-labelledby="dialog-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {project && (
        <div className="dialog-inner">
          <div className="dialog-top">
            <span className="eyebrow">PROJECT NOTES / {project.number}</span>
            <button
              className="icon-button"
              autoFocus
              aria-label="Close project details"
              onClick={onClose}
            >
              <Icon name="close" />
            </button>
          </div>
          <p className="mini-label">{project.category}</p>
          <h2 id="dialog-title">{project.title}</h2>
          <p className="dialog-description">{project.description}</p>
          <div className="tag-list">
            {project.technologies.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <div className="case-section">
            <h3>My contribution</h3>
            <p>{project.role}</p>
          </div>
          <div className="case-section">
            <h3>Project overview</h3>
            <p>{project.problem}</p>
          </div>
          <div className="case-section">
            <h3>Implementation</h3>
            <ul>
              {project.decisions.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
          <div className="case-section">
            <h3>Technical considerations</h3>
            <p>{project.challenge}</p>
          </div>
          {project.id === "emotion" && <FERMaterials />}
          <div className="dialog-links">
            {project.live && (
              <a
                className="button primary"
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                Visit live project <Icon name="diagonal" />
              </a>
            )}
            {project.github && (
              <a
                className="button secondary"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                View source <Icon name="diagonal" />
              </a>
            )}
          </div>
          {!project.github && (
            <p className="missing-link-note">
              {project.id === "emotion"
                ? "Project source code will be linked here when a public repository is available."
                : "Project repository and screenshots will be added here when available."}
            </p>
          )}
        </div>
      )}
    </dialog>
  );
}
