# ⚛️ Quotes OOP Project (Client & Server)

This is a full-stack project divided into a client-side (Front-end) and server-side (Back-end) for managing quote objects.

---

## 🚀 Quick Start

To run the project, you need to start both parts (Client and Server) **simultaneously** in two different terminals.

---

### 1. Prerequisites

Make sure you have installed:

- **Node.js** (recommended version 18+)
- **npm** (or yarn/pnpm)
- **npx** (comes with Node.js)

---

### 2. Installing Dependencies

In the root directory of the project, run the command to install dependencies for both server and client parts:

```bash
# Install dependencies for server (Express.js) and development (nodemon)
npm install
```

---

### 3. Running the Project

Since the project consists of two separate parts, two terminals are required.

#### 🖥️ A. Running the Server (Back-end)

The server uses nodemon for automatic restart when files change.

1. Open the first terminal.

2. Navigate to the `server/` folder:

```bash
cd server
```

3. Start the server:

```bash
npm run start:dev
```

The server should start and listen on port `http://localhost:3000`.

#### 🌐 B. Running the Client (Front-end)

The client uses live-server to serve static files and automatically refresh the browser.

1. Open the second terminal.

2. Navigate to the client directory:

```bash
cd client
```

3. Start the client:

```bash
npx live-server
```

The client should automatically open in the browser at `http://127.0.0.1:8080`.

---

### 4. Project Structure

The project is divided into two main logical folders:

| Folder    | Purpose      | Technologies                            |
| --------- | ------------ | --------------------------------------- |
| `server/` | Back-end API | Node.js, Express (quotes logic)         |
| `client/` | Front-end UI | HTML, CSS, Vanilla JS (API interaction) |

---

### 5. Used Tools and Dependencies

#### Back-end (Server)

- **express**: Main web framework for creating REST API.
- **nodemon**: Monitors server file changes and automatically restarts.

#### Front-end (Client)

- **npx live-server**: Local HTTP server with Live Reload feature for rapid development.

---

## 📌 Note

This project was created to practice Object-Oriented Programming (OOP) in JavaScript and build client-server interaction through API.
