export default function SectionRenderer({ section }) {
  if (section.type === "hero")
    return <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>{section.data.title}</h1>

  if (section.type === "content")
    return <p style={{ fontSize: "16px", lineHeight: "1.5" }}>{section.data.body}</p>

  if (section.type === "author")
    return <p style={{ fontStyle: "italic" }}>Author ID: {section.data.userId}</p>

  if (section.type === "tags")
    return (
      <p style={{ color: "#555" }}>
        Tags: {(section.data.tags || []).join(", ") || "No tags"}
      </p>
    )

  return null
}
