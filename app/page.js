"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Journals</h1>
      {posts.map(post => (
        <Link key={post.id} href={`/journal/${post.id}`}>
          <p style={{ cursor: "pointer", margin: "10px 0" }}>{post.title}</p>
        </Link>
      ))}
    </div>
  )
}
