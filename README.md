# PULSR — Experimental Clothing E-Commerce

PULSR (formerly Hypnagogia) is a fully functional, brutalist e-commerce platform built for a streetwear brand. The architecture focuses on performance, scalability, and a resilient database connection pattern.

## Tech Stack
- **Frontend:** Next.js 16 (App Router), React, Vanilla CSS (CSS Modules)
- **Backend:** Next.js API Routes, Node.js
- **Database:** PostgreSQL (Dockerized)
- **Architecture:** Resilient Connection Pooling with JSON Fallback

## Key Architectural Features

### Resilient Database Fallback
The platform uses a custom `db.js` utility that attempts to connect to the PostgreSQL instance. If the database is offline (e.g., during local UI development without Docker), it automatically falls back to reading from local JSON files (`data/drops.json`, `data/shipping.json`). This ensures zero downtime during frontend iteration and allows the app to run in constrained environments.

### Brutalist / Y2K Aesthetic
The UI eschews standard frameworks like Tailwind in favor of highly optimized Vanilla CSS to achieve a specific Y2K streetwear aesthetic. It features a custom cursor logic, minimal navigation, and high-contrast typography.

## Vision & Direction
The brand operates on a drop model, initially conceptualized to bridge the gap between high-fashion aesthetics and trap music culture. Inspired by niche fabric innovators, the product strategy focuses on rare/specialty materials (thermochrome, textured knits) and custom constructions (appliqué patches) over generic prints, acting as a premium merchandising arm for music projects.

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Database Setup (Optional)
To run the full PostgreSQL database:
1. Ensure Docker is running.
2. Run `docker-compose up -d`.
3. The app will automatically connect and seed the initial tables if they are empty.
