# Shopify Data Analytics - Frontend

![Static Badge](https://img.shields.io/badge/React-blue?style=plastic&logo=react&logoColor=white&link=https%3A%2F%2Freact.dev%2F)
![Static Badge](https://img.shields.io/badge/Vite-purple?style=plastic&logo=vite&logoColor=white&labelColor=%23960F79&link=https%3A%2F%2Fvitejs.dev%2F)
![npm](https://img.shields.io/badge/Node-green?style=plastic&logo=node.js&logoColor=white&link=https%3A%2F%2Fnodejs.org%2Fen%2Fdownload)

This is the frontend for the Shopify Data Analytics application. It's a single-page application (SPA) built with React and Vite that provides a user-friendly interface for visualizing Shopify store data. It communicates with the backend API to fetch and display analytics.

- **Deployed Frontend Link:** [https://shopify-analytics-app.vercel.app](https://shopify-analytics-app.vercel.app)
- **Backend Repository:** [https://github.com/LavaCandy1/StoreDataAPI](https://github.com/LavaCandy1/StoreDataAPI)
- **Deployed Link for backend** (swagger docs): [https://storedataapi-production.up.railway.app/api](https://storedataapi-production.up.railway.app/api)
  - (all endpoints are secured by simple auth except register so you try them using a api testing tool)

---

### Key Features

- **User Authentication:** Clean forms for user login and registration.
- **Multi-Store Dashboard:** A central place to view all connected Shopify stores.
- **Interactive Charts:** Uses charts to visualize order trends over selected date ranges.
- **KPI Display:** Clearly shows key metrics like total revenue and order counts.
- **Data Tables:** Displays lists of top customers.
- **Responsive Design:** The layout is designed to work on different screen sizes.

---

### Tech Stack

- **[React](https://react.dev/)**
- **[Vite](https://vitejs.dev/)**
- **[Recharts](https://recharts.org/)**
- **[Tailwind CSS](https://tailwindcss.com/)**

---

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

You need to have these tools installed on your machine:

- [Node.js](https://nodejs.org/) (version 18.x or higher is recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/LavaCandy1/ShopifyAnalyticsApp
    ```

2.  **Install NPM packages:**

    ```sh
    npm install
    ```

3.  **Set up Environment Variables:**
    The frontend needs to know where the backend API is running.

    - In the root of the project, create a new file named `.env`.

    - Add this in the file and add URL to point to your running backend server, or if you dont have a backend you can use mine hosted [here](https://storedataapi-production.up.railway.app/api)

    ```env
    # The base URL of your Spring Boot backend API
    VITE_API_BASE_URL=http://localhost:8080/api
    ```

4.  **Run the Backend:**
    For the frontend to work, your **Spring Boot backend application must be running**.

---

### Available Scripts

In the project directory, you can run:

- **`npm run dev`**

  - Starts the app in development mode.
  - Open [http://localhost:7000](http://localhost:7000) (or you can change port in vite.config.js) to view it in your browser.
  - The page will reload if you make edits.

---

### 🧑‍💻 Contact

Ayush Garg – [linkedin](https://www.linkedin.com/in/ayushgarg-17lc) – `[aayush.garg.1793@gmail.com]`
