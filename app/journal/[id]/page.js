"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import SectionRenderer from "@/components/SectionRenderer"
import JournalSidebar from "@/components/JournalSidebar"

export default function JournalDetail() {
  const params = useParams()
  let id = Array.isArray(params.id) ? params.id[0] : params.id
  id = Number(id)

  const [post, setPost] = useState(null)

  // Simulated tags array
  const simulatedTags = [
    ["tech", "coding", "web"],
    ["travel", "adventure", "photography"],
    ["health", "fitness", "lifestyle"],
    ["science", "research", "innovation"],
    ["food", "cooking", "recipes"],
    ["business", "finance", "marketing"],
    ["education", "learning", "study"],
    ["art", "design", "creativity"],
    ["sports", "fitness", "outdoors"],
    ["music", "entertainment", "culture"]
  ]

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        const tags = simulatedTags[(id - 1) % simulatedTags.length] 
        setPost({
          ...data,
          sections: [
            { type: "hero", data: { title: data.title } },
            { type: "content", data: { body: data.body } },
            { type: "author", data: { userId: data.userId } },
            { type: "tags", data: { tags } }
          ]
        })
      })
  }, [id])

  if (!post) return <p>Loading...</p>

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <JournalSidebar current={id} />
      <main style={{ flex: 1 }}>
        {post.sections.map((section, i) => (
          <div
            key={i}
            style={{
              marginBottom: "24px",
              padding: "12px",
              borderBottom: "1px solid #eee"
            }}
          >
            <SectionRenderer section={section} />
          </div>
        ))}
      </main>
    </div>
  )
}
