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

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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
const StatCard2 = ({ title, value, icon }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
    <div className="bg-indigo-100 text-indigo-600 rounded-full p-2">{icon}</div>
    <div>
      <p className="text-sm text-gray-500 font-medium">{title}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

const Icons = {
  Store: (
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      id="magicoon-Filled"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>store</title>
      <g id="store-Filled">
        <path
          style={{ fill: "#4338ca" }}
          id="store-Filled-2"
          data-name="store-Filled"
          className="cls-1"
          d="M20.5,18A3.5,3.5,0,0,1,17,21.5H14.53V19a2.5,2.5,0,0,0-5,0v2.5H7A3.5,3.5,0,0,1,3.5, 
           18V13.35A5.634,5.634,0,0,0,5.99,14,4.409,4.409,0,0,0,9,12.78a4.3,4.3,0,0,0,6,0A4.409, 
           4.409,0,0,0,18.01,14a5.634,5.634,0,0,0,2.49-.65Zm.974-9.158L20.386,5.577A4.494,4.494,0,0,0,16.117,2.5H7.883A4.494,4.494,0,0,0,3.614,5.577L2.526,8.842A.5.5,0,0,0,2.5,9a3.5,3.5,0,0,0,3.49,3.5A3.853,3.853,0,0,0,9,11.034a3.809,3.809,0,0,0,6.006,0A3.854,3.854,0,0,0,18.01,12.5,3.5,3.5,0,0,0,21.5,9,.5.5,0,0,0,21.474,8.842Z"
        />
      </g>
    </svg>
  ),
  Dollar: (
    <svg
      height="35"
      width="35"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 511.999 511.999"
      xmlSpace="preserve"
    >
      <g>
        <path
          style={{ fill: "#4f46e5" }}
          d="M255.999,0c-7.663,0-13.877,6.213-13.877,13.877s6.214,13.877,13.877,13.877
		c57.945,0,110.905,21.716,151.199,57.422l-32.782,32.781c-32.95-28.356-74.49-43.824-118.416-43.824
		c-45.157,0-86.517,16.548-118.35,43.892L95.044,75.42c-0.074-0.074-0.155-0.136-0.23-0.208c-0.072-0.075-0.135-0.157-0.208-0.23
		c-5.42-5.419-14.204-5.419-19.626,0C26.628,123.334,0,187.622,0,255.999c0,141.159,114.842,255.999,255.999,255.999
		c68.38,0,132.668-26.628,181.02-74.981s74.98-112.64,74.98-181.018C512,114.842,397.158,0,255.999,0z M365.043,147.093
		c5.415,5.422,14.2,5.429,19.624,0.011c0.402-0.402,0.766-0.828,1.109-1.264c0.029-0.029,0.061-0.053,0.09-0.082l40.958-40.957
		c32.834,37.053,53.823,84.82,56.987,137.322h-15.439c-7.663,0-13.877,6.213-13.877,13.877s6.214,13.877,13.877,13.877h15.445
		c-3.047,51.144-22.905,99.081-56.914,137.401l-32.929-32.929c27.344-31.833,43.892-73.192,43.892-118.35
		c0-7.664-6.214-13.877-13.877-13.877s-13.877,6.213-13.877,13.877c0,84.978-69.135,154.114-154.114,154.114
		s-154.114-69.135-154.114-154.114s69.135-154.114,154.114-154.114C297.201,101.887,335.926,117.942,365.043,147.093z
		 M255.999,453.157c-7.663,0-13.877,6.213-13.877,13.877v16.777c-52.502-3.165-100.27-24.154-137.322-56.987l32.85-32.849
		c31.833,27.344,73.192,43.892,118.35,43.892s86.517-16.548,118.35-43.892l32.929,32.929
		c-38.319,34.009-86.257,53.866-137.402,56.914v-16.782C269.876,459.37,263.663,453.157,255.999,453.157z M28.188,269.876h46.47
		c3.011,39.73,18.85,75.932,43.367,104.473l-32.85,32.85C52.341,370.146,31.353,322.38,28.188,269.876z M85.096,104.722
		l32.929,32.929c-24.516,28.542-40.355,64.743-43.367,104.473H28.182C31.229,190.98,51.087,143.042,85.096,104.722z"
        />
        <path
          style={{ fill: "#4f46e5" }}
          d="M317.288,205.312c-0.871-0.871-1.989-1.309-3.351-1.309h-22.117
		c-1.651-8.053-4.756-15.052-9.32-20.966h31.139c1.363,0,2.48-0.438,3.351-1.309c0.873-0.873,1.309-1.99,1.309-3.351v-14.855
		c0-1.36-0.436-2.477-1.309-3.351c-0.871-0.871-1.989-1.309-3.351-1.309H198.063c-1.36,0-2.477,0.439-3.351,1.309
		c-0.873,0.873-1.309,1.99-1.309,3.351v19.363c0,1.267,0.462,2.356,1.388,3.282c0.916,0.916,2.008,1.378,3.272,1.378h18.331
		c20.479,0,33.49,5.48,39.023,16.448h-57.354c-1.36,0-2.477,0.438-3.351,1.318c-0.873,0.873-1.309,1.982-1.309,3.342v14.852
		c0,1.36,0.436,2.477,1.309,3.351c0.873,0.871,1.99,1.309,3.351,1.309h59.395c-2.138,7.965-7.113,14.031-14.931,18.201
		c-7.81,4.171-18.123,6.265-30.932,6.265h-13.533c-1.264,0-2.356,0.454-3.272,1.378c-0.924,0.924-1.388,2.015-1.388,3.282v15.282
		c0,2.07,0.74,4.073,2.084,5.646l60.513,73.169c0.873,1.161,2.084,1.747,3.638,1.747h28.394c2.033,0,3.447-0.873,4.213-2.627
		c0.978-1.744,0.787-3.396-0.574-4.948c-28.343-34.747-42.174-50.032-58.385-67.309c16.499-1.939,29.893-7.278,40.183-16.012
		c10.287-8.737,16.552-20.098,18.786-34.066h21.681c1.363,0,2.48-0.438,3.351-1.318c0.873-0.873,1.309-1.99,1.309-3.342v-14.852
		C318.597,207.302,318.161,206.185,317.288,205.312L317.288,205.312z"
        />
      </g>
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-yellow-500"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  ),
};

// --- Main Application Components ---

function LoginPage({
  onLogin,
  onSwitchToRegister,
  isLoading,
  error,
  successMessage,
}) {
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
        {successMessage && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg"
            role="alert"
          >
            {successMessage}
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
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <button
            onClick={onSwitchToRegister}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}

function RegistrationPage({ onRegister, onSwitchToLogin, isLoading, error }) {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(username, email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Create a new account
          </h2>
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
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
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
              {isLoading ? <Spinner /> : "Create Account"}
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <button
            onClick={onSwitchToLogin}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}

function AnalyticsDashboard({ store, onBack, authUser }) {
  const [syncStatus, setSyncStatus] = React.useState("idle");
  const [syncMessage, setSyncMessage] = React.useState("");

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

  // store data sync
  React.useEffect(() => {
    const syncStoreData = async () => {
      if (!store || !store.storeId || !authUser) return;

      setIsLoading(true);
      setSyncStatus("syncing");
      setSyncMessage("Syncing latest data with Shopify...");
      setError(null);

      try {
        const headers = new Headers();
        const credentials = btoa(`${authUser.email}:${authUser.password}`);
        headers.append("Authorization", `Basic ${credentials}`);

        const response = await fetch(
          `${API_BASE_URL}/store/${store.storeId}/sync`,
          {
            method: "POST",
            headers: headers,
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.message || `Sync failed with status: ${response.status}`
          );
        }

        const result = await response.json();

        setSyncStatus("success");
        setSyncMessage(
          result.message || "Sync complete. Fetching analytics..."
        );
      } catch (err) {
        console.error("Sync Error:", err);
        setSyncStatus("error");
        setSyncMessage(err.message);
        setError(err.message);
        setIsLoading(false);
      }
    };
    syncStoreData();
  }, [store, authUser]);

  // store analytics data load
  React.useEffect(() => {
    const loadAnalyticsData = async () => {
      if (syncStatus !== "success" || !store || !store.storeId) return;

      try {
        const headers = new Headers();
        const credentials = btoa(`${authUser.email}:${authUser.password}`);
        headers.append("Authorization", `Basic ${credentials}`);

        const [customerResponse, detailsResponse, ordersResponse] =
          await Promise.all([
            fetch(`${API_BASE_URL}/store/${store.storeId}/topCustomers`, {
              headers,
            }),
            fetch(`${API_BASE_URL}/store/${store.storeId}/totalDetails`, {
              headers,
            }),
            fetch(
              `${API_BASE_URL}/store/${store.storeId}/ordersByDate?startDate=${startDate}&endDate=${endDate}`,
              { headers }
            ),
          ]);

        if (!customerResponse.ok || !detailsResponse.ok || !ordersResponse.ok) {
          throw new Error("Failed to fetch analytics data after sync.");
        }

        const customersData = await customerResponse.json();
        const totalData = await detailsResponse.json();
        const ordersData = await ordersResponse.json();

        setTop5Customers(customersData);
        setTotalDetails(totalData);
        setOrdersByDate(ordersData);
      } catch (err) {
        console.error("Analytics Fetch Error:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadAnalyticsData();
  }, [syncStatus, store, authUser, startDate, endDate]);

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen space-y-4">
        <Spinner />
        <div className="text-xl font-semibold text-gray-700">
          {syncMessage || "Initializing..."}
        </div>
      </div>
    );
  }

  if (error && syncStatus === "error") {
    return <div className="text-center text-red-500 p-8">Error: {error}</div>;
  }

  if (!ordersByDate || !totalDetails || !top5Customers) {
    return (
      <div className="text-center p-8">
        Could not load all analytics data. Please try refreshing.
      </div>
    );
  }

  const syncStatusStyles = {
    syncing: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
    idle: "hidden",
  };

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
      <p className="text-lg text-indigo-700 font-semibold mb-4">
        {store.domain}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatCard2
          title="Total Revenue (All-Time)"
          value={new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "INR",
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
              data={ordersByDate}
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
          <h3 className="text-xl font-bold text-gray-800 mb-4 ">
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

function AddStoreModal({ isOpen, onClose, onSubmit, isLoading, error }) {
  const [domain, setDomain] = React.useState("");
  const [accessToken, setAccessToken] = React.useState("");
  if (!isOpen) return null;
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(domain, accessToken);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Add New Store</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
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
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="domain"
                className="block text-sm font-medium text-gray-700"
              >
                Store Domain
              </label>
              <input
                type="text"
                id="domain"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="example.myshopify.com"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="accessToken"
                className="block text-sm font-medium text-gray-700"
              >
                Admin API Access Token
              </label>
              <input
                type="password"
                id="accessToken"
                value={accessToken}
                onChange={(e) => setAccessToken(e.target.value)}
                placeholder="shpat_xxxxxxxxxxxxxxxxxxxx"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mt-8 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none disabled:bg-indigo-400"
            >
              {isLoading ? "Adding..." : "Add Store"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function DashboardPage({ authUser, onLogout }) {
  const [view, setView] = React.useState("list");
  const [stores, setStores] = React.useState([]);
  const [selectedStore, setSelectedStore] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formError, setFormError] = React.useState(null);
  const [userDetails, setUserDetails] = React.useState(null);

  React.useEffect(() => {
    const fetchUserDetails = async () => {
      if (!authUser) return;
      try {
        const headers = new Headers();
        const credentials = btoa(`${authUser.email}:${authUser.password}`);
        headers.append("Authorization", `Basic ${credentials}`);

        const response = await fetch(`${API_BASE_URL}/user/${authUser.email}`, {
          headers: headers,
        });

        if (!response.ok) {
          throw new Error("Could not fetch user details.");
        }

        const data = await response.json();
        setUserDetails(data);
      } catch (err) {
        console.error("Failed to fetch user details:", err);
      }
    };

    fetchUserDetails();
  }, [authUser]);

  const loadStores = React.useCallback(async () => {
    if (!authUser) return;
    setIsLoading(true);
    setError(null);
    try {
      const headers = new Headers();
      const credentials = btoa(`${authUser.email}:${authUser.password}`);
      headers.append("Authorization", `Basic ${credentials}`);
      const response = await fetch(
        `${API_BASE_URL}/user/${authUser.email}/stores`,
        { method: "GET", headers: headers }
      );
      if (response.status === 401) throw new Error("Authentication failed.");
      if (!response.ok) throw new Error("Failed to fetch stores.");
      const fetchedStores = await response.json();
      setStores(fetchedStores);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [authUser]);

  React.useEffect(() => {
    loadStores();
  }, [loadStores]);

  const handleAddStore = async (domain, accessToken) => {
    setIsSubmitting(true);
    setFormError(null);
    try {
      const headers = new Headers();
      const credentials = btoa(`${authUser.email}:${authUser.password}`);
      headers.append("Authorization", `Basic ${credentials}`);
      headers.append("Content-Type", "application/json");
      const response = await fetch(
        `${API_BASE_URL}/user/${authUser.email}/addStore`,
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify({ domain, accessToken }),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add the store.");
      }
      setIsModalOpen(false);
      await loadStores();
    } catch (err) {
      setFormError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div className="flex items-center space-x-4">
            <div className="text-lg text-gray-500">
              {userDetails ? "Welcome, " : "Signed in as "}
              <span className="font-medium text-gray-800">
                {userDetails ? userDetails.username : authUser.email}
              </span>
            </div>
            <button
              onClick={onLogout}
              className="text-sm font-sm py-1 px-2 outline hover:outline-red-600 rounded-lg text-indigo-600 hover:text-red-500"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {view === "list" && (
          <div className="px-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                Connected Stores
              </h2>
              <button
                onClick={() => {
                  setFormError(null);
                  setIsModalOpen(true);
                }}
                className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition flex items-center space-x-2"
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
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                <span>Add New Store</span>
              </button>
            </div>
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
      <AddStoreModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddStore}
        isLoading={isSubmitting}
        error={formError}
      />
    </div>
  );
}

export default function App() {
  const [authUser, setAuthUser] = React.useState(() => {
    const savedUser = localStorage.getItem("authUser");
    if (savedUser) {
      try {
        return JSON.parse(savedUser);
      } catch (error) {
        console.error("Error parsing authUser from localStorage", error);
        return null;
      }
    }
    return null;
  });

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [successMessage, setSuccessMessage] = React.useState(null);
  const [authView, setAuthView] = React.useState("login");

  const handleLogin = async (email, password) => {
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);
    try {
      const headers = new Headers();
      const credentials = btoa(`${email}:${password}`);
      headers.append("Authorization", `Basic ${credentials}`);
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
      const user = { email, password };
      setAuthUser(user);
      localStorage.setItem("authUser", JSON.stringify(user));
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setAuthUser(null);
    localStorage.removeItem("authUser");
  };

  const handleRegister = async (username, email, password) => {
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message ||
            `Registration failed with status: ${response.status}`
        );
      }

      setSuccessMessage("Registration successful! Please sign in.");
      setAuthView("login");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const switchToRegister = () => {
    setError(null);
    setSuccessMessage(null);
    setAuthView("register");
  };

  const switchToLogin = () => {
    setError(null);
    setAuthView("login");
  };

  if (!authUser) {
    if (authView === "login") {
      return (
        <LoginPage
          onLogin={handleLogin}
          onSwitchToRegister={switchToRegister}
          isLoading={isLoading}
          error={error}
          successMessage={successMessage}
        />
      );
    }
    return (
      <RegistrationPage
        onRegister={handleRegister}
        onSwitchToLogin={switchToLogin}
        isLoading={isLoading}
        error={error}
      />
    );
  }

  return <DashboardPage authUser={authUser} onLogout={handleLogout} />;
}
