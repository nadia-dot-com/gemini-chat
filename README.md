# Gemini Chat

A simple chat application built with Next.js and Google Gemini API.

## Tech Stack

- **Next.js 16** — framework (App Router)
- **TypeScript** — type safety
- **Google Gemini API** — AI model
- **Tailwind CSS** — styling

## Getting Started

# 1. Clone the repository

```bash
git clone https://github.com/nadia-dot-com/gemini-chat.git
cd gemini-chat
```

# 2. Install dependencies

```bash
npm install
```

# 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```
NEXT_GEMINI_API_KEY=yourkey
```

Get your API key at [aistudio.google.com](https://aistudio.google.com).  
⚠️ Free tier has request limits — consider setting up billing for development.

# 4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Preview

![Gemini Chat](public/screenshots/preview.gif)