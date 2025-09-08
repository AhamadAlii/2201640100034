# 🔗 URL Shortener (React + TypeScript)

A demo **URL shortener** built with **React + TypeScript (Vite)**.  
Data is stored in `localStorage` to simulate a backend.  

---

##  Features
- Generate short URLs (custom alias or auto-generated)
- Expiry date handling
- Track click events:
  - Timestamp  
  - Referrer  
  - User agent  
- Statistics dashboard with click history
- Client-side redirection for demo purposes

---

##  Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/AhamadAlii/2201640100034.git
   cd 2201640100034
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run dev server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:5173` (Vite default) — the app expects to run on `http://localhost:3000` per spec; to use 3000 you can run:
   ```bash
   PORT=3000 npm run dev
   ```

## Notes
- This is a frontend-only demo.

- Redirection is handled client-side.

- For a production-ready version:

- Add a backend to handle redirects

- Persist data in a database (instead of localStorage)

- Add authentication for link management