# mathcodes.org

**mathcodes.org** is an online platform for solving mathematics problems in a structured, leveled format — inspired by LeetCode, but built for math learners and problem solvers. Only Python submissions are accepted, and every problem ships with a deterministic validation harness.

## 🌟 Features

- 📚 Python notebooks on core courses and topics
- 🧠 A curated library of human-authored math problems across topics and difficulty levels
- 🔒 Python-only submissions validated by deterministic test harnesses
- 🧩 Daily client-side code-arrange challenges with precomputed outputs (no backend execution needed)
- 🧑‍🎓 User accounts, XP, badges, and solution history
- 💬 Problem discussions and community insights
- 🏆 Math contests and weekly challenges
- 🧰 Tools for symbolic computation and numerical verification
- 🧵 Open-source and extensible problem format that separates content from validation logic


## 🚧 Project Status

> Currently under active development. MVP features are being implemented.

### ✅ MVP Goals

- [x] Landing page with branding
- [ ] Basic problem library
- [ ] Problem filtering by tags
- [ ] Problem page with markdown rendering
- [ ] Python notebooks for problem solutions
- [ ] User account system (auth, profile, XP)

## 🧱 Tech Stack

- **Frontend**: Astro + React + Tailwind CSS
- **Backend**: FastAPI (or Express) + PostgreSQL
- **Auth**: Clerk or Firebase Auth
- **Math Rendering**: KaTeX or MathJax
- **Symbolic Math**: SymPy

## 📐 System Specification

The platform follows a transparent system prompt that documents identity, content structure, validation rules, and non-goals. Read the latest version in [`src/pages/system-spec.md`](src/pages/system-spec.md) to understand how MathCodes enforces Python-only, deterministic validation for every problem.

## 📜 License

Hi, if you're planning on making your own mathcodes, please contact me first. I would love to get involved. 

