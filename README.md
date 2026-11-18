
# 💼 Freelance Task Marketplace

A dynamic freelance task marketplace that connects task owners with skilled freelancers. Users can post small freelance tasks, explore available opportunities, and submit bids based on their skills, budget, and deadlines.

The platform provides an interactive and responsive environment for managing freelance tasks efficiently, making it easier for users to connect and collaborate.

---

## 🌐 Live Website

🔗 **Live Demo:** [Freelance Task Marketplace](https://ass10-freelance-task.web.app)

## 📸 Project Preview

<p align="center">
  <img
    src="https://i.ibb.co.com/XfWWbnQM/Worknest.png"
    width="90%"
    alt="Freelance Task Marketplace Screenshot"
  />
</p>

---

## 🎯 Project Purpose

The goal of this platform is to create a simple and accessible marketplace where individuals can publish freelance tasks and freelancers can discover opportunities that match their skills and interests.

It aims to simplify task posting, bidding, and task management through a user-friendly interface.

---

## ✨ Key Features

- 🔐 **Secure Authentication:** Firebase authentication with Email/Password and Google login.
- 📝 **Task Management:** Create, update, and delete freelance tasks using CRUD operations.
- 🔍 **Browse Tasks:** Explore available freelance opportunities.
- 📩 **Bidding System:** Submit bids on tasks based on skills, budget, and deadlines.
- 📊 **Bid Tracking:** Track bidding activities and task details.
- 🔒 **Protected Routes:** Secure private pages with persistent authentication after page reload.
- 🌓 **Dark & Light Mode:** Switch between themes with smooth transitions.
- 📅 **Dynamic Task Filtering:** Display tasks with the nearest deadlines first.
- 📱 **Responsive UI:** Modern and responsive design for desktop, tablet, and mobile devices.
- 🔔 **Interactive Notifications:** User feedback through SweetAlert2 and React Toastify.

---

## 🛠️ Technology Stack

### 🎨 Frontend

- React.js
- React Router DOM
- Tailwind CSS
- Firebase Authentication
- JavaScript

### ⚙️ Backend

- Node.js
- Express.js
- MongoDB Atlas

### 🔧 Tools & Deployment

- Git & GitHub
- Firebase Hosting
- Netlify
- Vercel
- npm

---

## 📦 Dependencies

The following libraries and tools are used in the project:

### Frontend Dependencies

| Package | Purpose |
|---|---|
| `react` | Building reusable UI components |
| `react-dom` | Rendering React components |
| `react-router-dom` | Managing application routing |
| `firebase` | User authentication |
| `tailwindcss` | Styling and responsive UI |
| `sweetalert2` | Interactive alert dialogs |
| `react-toastify` | Toast notifications |

### Backend Dependencies

| Package | Purpose |
|---|---|
| `express` | Creating backend APIs |
| `mongodb` | Connecting and working with MongoDB |
| `cors` | Handling cross-origin requests |
| `dotenv` | Managing environment variables |

**Note:** Verify these package names against your actual `package.json` files. Keep only the dependencies installed in your project.

---

## 💡 Why I Used These Technologies

- **React.js:** Used to build reusable components and create an interactive user interface.
- **React Router DOM:** Used to navigate between pages without reloading the entire application.
- **Tailwind CSS:** Used to build a responsive and consistent design efficiently.
- **Firebase Authentication:** Used to provide Email/Password and Google login functionality.
- **Node.js:** Used as the JavaScript runtime for the backend.
- **Express.js:** Used to create and manage REST API endpoints.
- **MongoDB Atlas:** Used to store and manage task and application data.
- **SweetAlert2 & React Toastify:** Used to provide clear feedback for user actions.

---

## 🔒 Authentication & Security

- Firebase-based user authentication.
- Email/Password and Google login.
- Protected routes for authenticated users.
- Persistent login sessions.
- Secure communication with backend APIs.

---

## 🧩 Challenges Faced During Development

While developing this project, some important technical challenges included:

- **Authentication Persistence:** Maintaining the user's login state when refreshing the browser.
- **Protected Routing:** Restricting private pages to authenticated users.
- **Task CRUD Operations:** Managing task creation, updating, and deletion while keeping the UI synchronized with the backend.
- **Bidding Management:** Connecting user bidding activities with the corresponding freelance tasks.
- **Deadline-Based Sorting:** Displaying tasks according to their nearest deadlines.
- **Responsive Design:** Making the application usable across desktop, tablet, and mobile screens.

---

## ✅ Problems Solved Through This Project

- Created a centralized platform for posting and discovering freelance tasks.
- Made it easier for freelancers to find opportunities that match their skills.
- Introduced a bidding system for expressing interest in available tasks.
- Simplified task management through CRUD functionality.
- Improved access control through authentication and protected routes.
- Made task discovery easier through deadline-based sorting.
- Provided a more accessible experience with responsive design and theme switching.

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the Client Repository

```bash
git clone https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-sharminakter0.git

cd b11a10-client-side-sharminakter0

npm install
```

### 2. Clone the Server Repository

Open another terminal:

```bash
git clone https://github.com/Programming-Hero-Web-Course4/b11a10-server-side-sharminakter0.git

cd b11a10-server-side-sharminakter0

npm install
```

### 3. Configure Environment Variables

Create `.env` files in the appropriate client and server directories.

Configure the required credentials for:

- Firebase Authentication
- MongoDB Atlas

Keep sensitive credentials private. Do not upload `.env` files to GitHub.

### 4. Run the Backend Server

Open the server directory and run the development script configured in its `package.json`.

```bash
npm run dev
```

### 5. Run the Frontend Application

Open another terminal, navigate to the client directory, and run:

```bash
npm run dev
```

The application should now be available at the local URL shown in your terminal.

---

## 🔗 Project Repositories

| Resource | Link |
|---|---|
| 🌐 Live Website | [Freelance Task Marketplace](https://ass10-freelance-task.web.app) |
| 💻 Client Repository | [GitHub Client](https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-sharminakter0) |
| ⚙️ Server Repository | [GitHub Server](https://github.com/Programming-Hero-Web-Course4/b11a10-server-side-sharminakter0/tree/master) |

---

## 🚀 Future Improvements

- Advanced search and filtering options.
- Improved freelancer profiles.
- Enhanced bid management system.
- Task completion and review system.
- Real-time notifications.
- Improved dashboard and analytics.

---

## 👩‍💻 Developer

**Sharmin Akter**

Full-Stack Web Developer

- GitHub: [sharminakter0](https://github.com/sharminakter0)
- LinkedIn: [Connect with me](https://www.linkedin.com/in/sharmin-akter0s/)
- Portfolio: [Visit My Portfolio](https://sharminaktercode.netlify.app/)

---

<p align="center">
  🚀 Connecting Skills with Opportunities!
</p>

<p align="center">
  ⭐ Thank you for visiting this project!
</p>
