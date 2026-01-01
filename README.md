📘 NextJournal – Next.js Practical Assignment

This project is a journal-style content page built using Next.js App Router as part of a practical technical assignment.

It simulates a real-world public content platform where journal articles are loaded dynamically from public APIs and rendered with SEO, performance, and error handling considerations.

🚀 Features

Dynamic journal detail pages (/journal/[id])

Real API integration using DummyJSON & JSONPlaceholder

Sidebar navigation with scroll interaction

SEO optimized pages with dynamic metadata

Loading and error states

Server & Client Components usage

ISR (Incremental Static Regeneration)

🛠 Tech Stack

Next.js 14 (App Router)

React

DummyJSON API

JSONPlaceholder API

▶️ How to Run Locally
git clone https://github.com/Souvik9775/JournalApp.git
cd JournalApp
npm install
npm run dev


Open in browser:

http://localhost:3000/journal/1

📂 Project Structure
app/journal/[id]/     → Dynamic journal page
components/          → UI components
lib/                 → API fetch logic
docs/                → Explanation markdown files

📝 Documentation
File	Description
docs/decisions.md	Technical decisions
docs/tradeoffs.md	Shortcuts & limitations
docs/future.md	Future improvements
📌 Notes

This project focuses on architecture, SEO, performance optimization, and error handling rather than UI design.

👤 Author

Souvik Pal
B.Tech CSE – Chitkara University
MERN Stack Developer
