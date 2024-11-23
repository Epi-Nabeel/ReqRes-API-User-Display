---

# Quiz 2: ReqRes API User Display

This project is part of **Quiz 2** and demonstrates a full-stack application that interacts with the **ReqRes API** to fetch and display user data dynamically.

## Features

- **Frontend**: A form to select a page number (1 or 2) to fetch user data.
- **Backend**: Node.js with Express to handle form submissions and fetch data from the ReqRes API.
- **Dynamic Rendering**: Uses EJS templates to render the user details (name, email, and avatar) based on the selected page.

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Epi-Nabeel/ReqRes-API-User-Display
cd ReqRes-API-User-Display
```

### 2. Install Dependencies
Ensure you have **Node.js** installed. Run:
```bash
npm install
```

### 3. Run the Application
Start the server with:
```bash
node server.js
```

### 4. Access the Application
- Open your browser and navigate to: [http://localhost:3000](http://localhost:3000)
- Select a page (1 or 2) and click **Submit** to view user data.

---

## File Structure

```plaintext
project/
├── views/                # Contains EJS templates for frontend
│   ├── index.ejs         # Form for selecting page number
│   └── result.ejs        # Displays fetched user data
├── server.js             # Backend logic to handle requests
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
```

---

## Expected Output

### **Page Selection Form**
When you load the app, you will see the following page:

```
+-------------------------------------------------+
| A hosted REST-API ready to respond to your AJAX |
| requests                                        |
+-------------------------------------------------+
| [ ] Page 1                                      |
| [ ] Page 2                                      |
| [Submit]                                        |
+-------------------------------------------------+
```

### **User Data Display**
After selecting a page, you will see:
- **User avatars**
- **User names**
- **User emails**

Example:
```
Hello ReqRes Users!

+------------+-------------+-------------+
| Avatar     | Name        | Email       |
+------------+-------------+-------------+
| [Image]    | George Bluth| george...   |
| [Image]    | Janet Weaver| janet...    |
| ...        | ...         | ...         |
+------------+-------------+-------------+
```

---

## Technologies Used

- **Node.js**: Backend framework.
- **Express**: Web server framework.
- **Axios**: For API calls.
- **EJS**: For dynamic HTML rendering.
- **HTML & CSS**: Frontend structure and styling.

---

## API Used

This project interacts with the [ReqRes API](https://reqres.in/) to fetch mock user data. Specifically:
- Endpoint: `https://reqres.in/api/users?page={page}`

---

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Epi-Nabeel/Epi-Nabeel/blob/main/LICENSE) file for details.

---
