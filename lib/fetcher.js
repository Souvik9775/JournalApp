export async function getPost(rawId) {
  let id = Array.isArray(rawId) ? rawId[0] : rawId
  id = Number(id)
  if (!id || id < 1 || id > 30) throw new Error("Invalid id")

  const res = await fetch(`https://dummyjson.com/posts/${id}`, {
    next: { revalidate: 0 }
  })

  if (!res.ok) throw new Error("Post not found")

  const post = await res.json()

  post.sections = [
    { type: "hero", data: { ...post } },
    { type: "content", data: { ...post } },
    { type: "author", data: { ...post } },
    { type: "tags", data: { ...post } }
  ]

  return post
}


export async function getAllPosts() {
  const res = await fetch("https://dummyjson.com/posts", { cache: "no-store" })
  const data = await res.json()
  return data
}
