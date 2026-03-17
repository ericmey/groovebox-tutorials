const noteLinks = [
  {
    path: "docs/notes/chatgpt-session-2026-03-16.md",
    label: "Captured ChatGPT session",
  },
  {
    path: "docs/notes/project-scope-r1.md",
    label: "Project scope",
  },
  {
    path: "docs/notes/implementation-plan-r1.md",
    label: "Implementation plan",
  },
  {
    path: "docs/architecture.md",
    label: "Architecture",
  },
  {
    path: "docs/testing.md",
    label: "Testing",
  },
];

export default function DocsPage() {
  return (
    <div className="page">
      <section className="panel">
        <div className="panel__header">
          <p className="eyebrow">Project Documentation</p>
          <h1>Working notes stored in the repository</h1>
        </div>
        <p>
          These notes are part of the build process and keep future work aligned
          with the tutorial system vision.
        </p>
        <ul className="doc-list">
          {noteLinks.map((note) => (
            <li key={note.path}>
              <strong>{note.label}:</strong> <code>{note.path}</code>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
