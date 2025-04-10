# 📁 GitHub Projects Manager UI

🎬 DEMO - https://drive.google.com/file/d/1dbluzNh6tGRxcUD7fqUOkMS8J-ZpaU3h/view?usp=sharing

A lightweight CRM system for managing public GitHub repositories, built with **React**, **TypeScript**, and a **custom backend** using **Node.js** and **SQLite**.
![image](https://github.com/user-attachments/assets/b298313e-f138-43e2-ac77-881efecac309)
![image](https://github.com/user-attachments/assets/802b2b31-2fdf-4bc6-b768-01e362354cca)


🚩🚩🚩 Please note that the backend is hosted on a free server, so it's recommended to run it locally at http://localhost:3001 for better performance.
Since this is a demo version, Congo auth is configured to work only on [localhost:5173](http://localhost:5173). Please make sure to run the project on this address.
Also, keep in mind that GitHub’s API has a request limit. To avoid issues, please add your own GitHub token to the .env file as VITE_GH_TOKEN.
🚩🚩🚩 
> Full backend source: [gh-projects-manager-api](https://github.com/Ostrynska/gh-projects-manager-api)

🔐 Auth via Amazon Cognito | ⚙️ GitHub API integration | 🧠 Express + SQLite backend
![image](https://github.com/user-attachments/assets/0d1c55f6-8e3a-4927-9ee3-4d3ab5bcdb54)
![image](https://github.com/user-attachments/assets/8946e678-c32d-4670-bd9a-0a0906d1183f)

## 📋 Assignment Summary

This application was developed as a solution to a test task requiring a basic project management system (CRM) for GitHub repositories.

### ✅ Functional Requirements Implemented:

- **Authentication**
  - Sign in using **email and password** via **Amazon Cognito**.
- **Projects Dashboard**
  - After login, user is redirected to a dashboard listing their added projects.
  - Each project displays:
    
| Owner      | Project  | URL    | Stars      | Forks    | Issues   | Release date | Actions                         |
|------------|----------|--------|------------|----------|----------|--------------|---------------------------------|
| `facebook` | `react`  | `https//..`  | `...`      | `...`    | `...`    | `...`        | ` 🔁 Update & 🗑️ Delete buttons` |

- **Repository Add Workflow**
  - Add a new repository using a GitHub path like `facebook/react`.
  - System fetches repository data using GitHub API and saves it to the database.
- **Bonus Features**
  - GitHub autocomplete (shows top 5 matches)
  - Responsive layout & visual feedback via `react-toastify`
  - Data is persisted per user using their email
  - Sorting support for each column
 


## 🧰 Tech Stack

| Layer       | Tools                                 |
|-------------|---------------------------------------|
| Frontend    | React, TypeScript, Vite, react-select |
| Backend     | Node.js, Express, SQLite              |
| Auth        | Amazon Cognito + `react-oidc-context` |
| Database    | SQLite (PostgreSQL-ready)             |
| API         | GitHub REST API v3                    |
| Styling     | CSS Modules                           |



## 🧠 Backend Overview

> Full source: [gh-projects-manager-api](https://github.com/Ostrynska/gh-projects-manager-api)

Data is persisted per user (by email). Backend uses an `SQLite` database (simple switch to PostgreSQL possible).

### Database Schema

| Field      | Type    | Description                  |
|------------|---------|------------------------------|
| id         | integer | Primary key                  |
| email      | text    | User's email                 |
| owner      | text    | GitHub repo owner            |
| name       | text    | GitHub repo name             |
| url        | text    | GitHub repo URL              |
| stars      | number  | Stargazers count             |
| forks      | number  | Forks count                  |
| issues     | number  | Open issues count            |
| createdAt  | number  | Repository creation date (ms)|



### 📡 API Endpoints

####  `GET /api/user-projects?email=...`
Returns all GitHub repositories associated with the given user's email.

#### `PATCH /api/save-projects`
Saves or updates GitHub repositories for a given user.

####  `DELETE /api/delete-project`
Deletes a specific repository from the user's project list.

## ⚙️ Running the Project

### 1. Clone & install

```bash
git clone https://github.com/Ostrynska/gh-projects-manager-ui.git
cd gh-projects-manager-ui
npm install
```

### 2. Create .env
```bash
VITE_API_URL=''
VITE_COGNITO_CLIENT_ID=your-client-id
VITE_COGNITO_DOMAIN=https://your-cognito-domain
VITE_DOMAIN=https://your-cognito
VITE_LOGOUT_URI=http://localhost:5173/
```

### 3. Run server
```bash
npm run dev
```

The app will be available at http://localhost:5173

### 🚀 Planned Improvements
- 🔄 Add pagination for long project lists (already in progress)
- 🧩 Introduce modular sections into the CRM for better navigation
- ✅ Add checkboxes to table rows for bulk actions
- 🐳 Docker and Docker Compose support for easier deployment
- 🔍 Search and filtering capabilities
- 🧪 Add tests using React Testing Library and Jest

### 💡 Notes
- Backend is live on Render (free plan), but can be dockerized for local use.
- Frontend is optimized for usability and quick access to GitHub data.
- Code is modular, documented, and follows best practices.

## 🧑‍💻 Author

**Kateryna Ostrynska**  
[GitHub](https://github.com/Ostrynska) | [Portfolio](https://ostrynska-kateryna.netlify.app)
