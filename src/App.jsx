import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// --- Helper & UI Components ---

const Spinner = () => (
  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
);

const StatCard = ({ title, value, icon }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
    <div className="bg-indigo-100 text-indigo-600 rounded-full p-3">{icon}</div>
    <div>
      <p className="text-sm text-gray-500 font-medium">{title}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

const Icons = {
  Store: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.21 15.89-1.21-6.05L18.42 5h-12.8l-1.58 4.84-1.21 6.05A1 1 0 0 0 4 17h16a1 1 0 0 0 1.21-1.11Z" />
      <path d="M6 5v.01" />
      <path d="M6 8v.01" />
      <path d="M18 5v.01" />
      <path d="M18 8v.01" />
      <path d="M12 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
    </svg>
  ),
  Dollar: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  ShoppingCart: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  ),
  Users: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Warning: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="text-yellow-500"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  ),
};

// --- Main Application Components ---

function LoginPage({ onLogin, isLoading, error }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            to access your Shopify Analytics Hub
          </p>
        </div>
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg"
            role="alert"
          >
            {error}
          </div>
        )}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
            >
              {isLoading ? <Spinner /> : "Sign in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function AnalyticsDashboard({ store, onBack, authUser }) {
  const [analytics, setAnalytics] = React.useState(null);
  const [ordersByDate, setOrdersByDate] = React.useState(null);
  const [totalDetails, setTotalDetails] = React.useState(null);
  const [top5Customers, setTop5Customers] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const getFirstDayOfMonth = () => {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth(), 1)
      .toISOString()
      .split("T")[0];
  };

  const getToday = () => {
    return new Date().toISOString().split("T")[0];
  };

  const [startDate, setStartDate] = React.useState(getFirstDayOfMonth());
  const [endDate, setEndDate] = React.useState(getToday());

  React.useEffect(() => {
    const loadAnalytics = async () => {
      if (!store || !store.storeId) {
        setError("Store data is missing. Cannot fetch analytics.");
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);
      try {
        const headers = new Headers();
        const credentials = btoa(`${authUser.email}:${authUser.password}`);
        headers.append("Authorization", `Basic ${credentials}`);
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

        //analytics fetch block start
        const url = `${API_BASE_URL}/store/${store.storeId}/ordersByDate?startDate=${startDate}&endDate=${endDate}`;
        const response = await fetch(url, { method: "GET", headers: headers });

        if (response.status === 401)
          throw new Error("Authentication failed. Please check your credentials.");
        if (!response.ok)throw new Error(`Failed to fetch analytics. Server responded with status: ${response.status}`);
        const data = await response.json();
        setAnalytics(data);
        setOrdersByDate(data);
        //analytics fetch block start


        //top 5 customer fetch block start
        const topCustomerUrl =`${API_BASE_URL}/store/${store.storeId}/topCustomers`;
        const customerResponse = await fetch(topCustomerUrl,{method: "GET", headers: headers})

        if(customerResponse.status===404)throw new Error("Not Found.");
        if (!response.ok)throw new Error(`Failed to fetch analytics. Server responded with status: ${response.status}`);
        const customersData = await customerResponse.json();
        setTop5Customers(customersData);
        //top 5 customer fetch block finish


        //all time data fetch block start
        const totalDetailsUrl = `${API_BASE_URL}/store/${store.storeId}/totalDetails`;
        const detailsResponse = await fetch(totalDetailsUrl,{method: "GET", headers: headers})

        if(detailsResponse.status===404)throw new Error("Not Found.");
        if (!response.ok)throw new Error(`Failed to fetch analytics. Server responded with status: ${response.status}`);
        const totalData = await detailsResponse.json();
        setTotalDetails(totalData);
        //all time data fetch block end






      } catch (err) {
        console.error("Error fetching analytics:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadAnalytics();
  }, [store, authUser, startDate, endDate]);

  const ordersForChart = ordersByDate ? ordersByDate : [];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold">Loading Dashboard...</div>
      </div>
    );
  }
  if (error) {
    return <div className="text-center text-red-500 p-8">Error: {error}</div>;
  }
  if (!ordersByDate) {
    return (
      <div className="text-center p-8">
        No orders available for the selected period.
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <button
        onClick={onBack}
        className="mb-6 bg-white text-gray-700 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-50 transition flex items-center space-x-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        <span>Back to Stores</span>
      </button>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
        Analytics Dashboard
      </h1>
      <p className="text-lg text-indigo-700 font-semibold mb-8">
        {store.domain}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Total Revenue (All-Time)"
          value={new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(totalDetails.totalRevenue)}
          icon={Icons.Dollar}
        />
        <StatCard
          title="Total Orders (All-Time)"
          value={totalDetails.totalOrders.toLocaleString()}
          icon={Icons.ShoppingCart}
        />
        <StatCard
          title="Total Customers (All-Time)"
          value={totalDetails.totalCustomers.toLocaleString()}
          icon={Icons.Users}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-800">Orders by Date</h3>
            <div className="flex items-center space-x-2 text-sm">
              <label htmlFor="start-date">From:</label>
              <input
                type="date"
                id="start-date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="border rounded px-2 py-1"
              />
              <label htmlFor="end-date">To:</label>
              <input
                type="date"
                id="end-date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="border rounded px-2 py-1"
              />
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={ordersForChart}
              margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="orders"
                stroke="#4f46e5"
                strokeWidth={2}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Top 5 Customers by Spend (All-Time)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={top5Customers}
              layout="vertical"
              margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" dataKey="spend" />
              <YAxis type="category" dataKey="name" width={100} />
              <Tooltip
                formatter={(value) =>
                  new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(value)
                }
              />
              <Legend />
              <Bar dataKey="spend" name="Total Spend" fill="#6366f1" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function DashboardPage({ authUser }) {
  const [view, setView] = React.useState("list");
  const [stores, setStores] = React.useState([]);
  const [selectedStore, setSelectedStore] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const loadStores = async () => {
      if (!authUser) return;
      setIsLoading(true);
      setError(null);
      try {
        const headers = new Headers();
        const credentials = btoa(`${authUser.email}:${authUser.password}`);
        headers.append("Authorization", `Basic ${credentials}`);

        // For production, this URL should come from an environment variable.
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
        const response = await fetch(
          `${API_BASE_URL}/user/${authUser.email}/stores`,
          {
            method: "GET",
            headers: headers,
          }
        );

        if (response.status === 401) throw new Error("Authentication failed.");
        if (!response.ok) throw new Error("Failed to fetch stores.");

        const fetchedStores = await response.json();
        console.log("Data received from backend:", fetchedStores);
        setStores(fetchedStores);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadStores();
  }, [authUser]);

  const handleSelectStore = (store) => {
    setSelectedStore(store);
    setView("dashboard");
  };

  const handleBackToList = () => {
    setSelectedStore(null);
    setView("list");
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-indigo-600">{Icons.Store}</div>
            <h1 className="text-2xl font-bold text-gray-900">
              Shopify Analytics Hub
            </h1>
          </div>
          <div className="text-sm text-gray-500">
            Signed in as{" "}
            <span className="font-medium text-gray-800">{authUser.email}</span>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {view === "list" && (
          <div className="px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Connected Stores
            </h2>
            {isLoading && <p>Loading stores...</p>}
            {error && (
              <div className="bg-red-100 text-red-700 px-4 py-2 rounded">
                {error}
              </div>
            )}
            <div className="space-y-4">
              {stores.map((store) => (
                <div
                  key={store.storeId || store.domain}
                  className="bg-white rounded-xl shadow p-5 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="font-bold text-gray-900">
                        {store.storeName || "Unnamed Store"}
                      </p>
                      <p className="text-sm text-gray-500">{store.domain}</p>
                    </div>
                    {!store.storeId && (
                      <div
                        className="group relative flex items-center"
                        title="Store ID is missing from API response. Please check backend DTO."
                      >
                        {Icons.Warning}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => handleSelectStore(store)}
                    className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={!store.storeId}
                  >
                    View Analytics
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        {view === "dashboard" && selectedStore && (
          <AnalyticsDashboard
            store={selectedStore}
            onBack={handleBackToList}
            authUser={authUser}
          />
        )}
      </main>
    </div>
  );
}

// --- App Container ---

export default function App() {
  const [authUser, setAuthUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleLogin = async (email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const headers = new Headers();
      const credentials = btoa(`${email}:${password}`);
      headers.append("Authorization", `Basic ${credentials}`);

      // For production, this URL should come from an environment variable.
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${API_BASE_URL}/user/${email}/stores`, {
        method: "GET",
        headers: headers,
      });

      if (response.status === 401) {
        throw new Error("Invalid email or password.");
      }
      if (!response.ok) {
        throw new Error(
          `Network response was not ok, status: ${response.status}`
        );
      }

      setAuthUser({ email, password });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (!authUser) {
    return (
      <LoginPage onLogin={handleLogin} isLoading={isLoading} error={error} />
    );
  }

  return <DashboardPage authUser={authUser} />;
}
