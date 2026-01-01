"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function JournalSidebar({ current }) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <aside style={{ width: "220px" }}>
      <h3>Other Journals</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map(p => (
          <li key={p.id}>
            <Link href={`/journal/${p.id}`}>
              <span
                style={{
                  color: current === p.id ? "red" : "#333",
                  cursor: "pointer",
                  display: "block",
                  margin: "6px 0",
                  fontSize: "14px",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  maxWidth: "200px"
                }}
                title={p.title}     
              >
                {p.title.length > 30 ? p.title.slice(0, 30) + "..." : p.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
