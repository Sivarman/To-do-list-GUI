# 📝 To-Do List Web App

This is a simple, stylish To-Do List web application built using **HTML**, **CSS**, and **JavaScript**. It allows users to **add**, **delete**, and **display** tasks dynamically with real-time feedback.

---

## 📁 Project Files

- `index.html` – Contains the structure of the To-Do application.
- `todo.css` – Stylesheet for designing a modern glassmorphic UI.
- `todo.js` – JavaScript functionality for adding, deleting, and displaying tasks.

---

## 🚀 Features

- ✅ **Add Tasks**  
  Users can enter a task and click `Add` to store it in memory.

- ❌ **Delete Tasks**  
  Users can type a task name into the delete field and click `Delete` to remove it.

- 📃 **Display Tasks**  
  Clicking `Display` will list all currently stored tasks.

- 🔍 **Validation**  
  Prevents empty task input and handles non-existent deletion attempts.

- 🎨 **Modern UI**  
  - Glassmorphic form container  
  - Responsive button hover effects  
  - Clean typography using Google Fonts (Poppins)

---

## 🧑‍💻 How to Run

1. Make sure all files are in the same directory:
    ```
    /project-folder
    ├── index.html
    ├── todo.css
    ├── todo.js
    └── background.jpg  (optional for full design)
    ```

2. Open `index.html` in a browser.

3. Interact with the interface:
   - Type in a task and click **Add**
   - Type a task name and click **Delete**
   - Click **Display** to view all current tasks

---

## 🎨 Design

- **Font**: [Poppins](https://fonts.google.com/specimen/Poppins)
- **Background**: Optional image via `background.jpg` set in CSS.
- **Container**: Uses `backdrop-filter: blur(15px)` for a glass effect.

---

## 🔧 Future Enhancements (Suggestions)

- Store tasks in `localStorage` for persistence
- Add due dates or priority
- Add edit/update functionality
- Mobile responsiveness improvements

---

## 📌 Notes

- Ensure the background image path in `todo.css`:
  ```css
  background: url("/background.jpg");
