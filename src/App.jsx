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

// --- In a real production environment, this URL should come from an environment variable. ---
// It is defined directly here to resolve a specific build environment issue.
const API_BASE_URL = "https://storedataapi-production-a63b.up.railway.app/api";

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

  // --- REFACTORED LOGIC ---
  // Effect for all-time data (runs only once)
  React.useEffect(() => {
    const loadAllTimeData = async () => {
      if (!store || !store.storeId) return;

      setIsLoading(true);
      setError(null);

      try {
        const headers = new Headers();
        const credentials = btoa(`${authUser.email}:${authUser.password}`);
        headers.append("Authorization", `Basic ${credentials}`);

        // Use Promise.all to fetch them in parallel for better performance
        const [customerResponse, detailsResponse] = await Promise.all([
          fetch(`${API_BASE_URL}/store/${store.storeId}/topCustomers`, {
            headers,
          }),
          fetch(`${API_BASE_URL}/store/${store.storeId}/totalDetails`, {
            headers,
          }),
        ]);

        if (!customerResponse.ok || !detailsResponse.ok) {
          throw new Error("Failed to fetch all-time analytics data.");
        }

        const customersData = await customerResponse.json();
        const totalData = await detailsResponse.json();

        setTop5Customers(customersData);
        setTotalDetails(totalData);
      } catch (err) {
        console.error("Error fetching all-time data:", err);
        setError(err.message);
      } finally {
        // We set loading to false only after all data is fetched in both effects
        // This is handled in the second effect
      }
    };

    loadAllTimeData();
  }, [store, authUser]); // Depends only on store and user

  // Effect for date-filtered data
  React.useEffect(() => {
    const loadDateFilteredData = async () => {
      if (!store || !store.storeId) return;

      // Don't show main loader again, but handle errors
      setError(null);

      try {
        const headers = new Headers();
        const credentials = btoa(`${authUser.email}:${authUser.password}`);
        headers.append("Authorization", `Basic ${credentials}`);

        const url = `${API_BASE_URL}/store/${store.storeId}/ordersByDate?startDate=${startDate}&endDate=${endDate}`;
        const response = await fetch(url, { headers });

        if (!response.ok) {
          throw new Error(
            `Failed to fetch orders by date. Status: ${response.status}`
          );
        }
        const data = await response.json();
        setOrdersByDate(data);
      } catch (err) {
        console.error("Error fetching date-filtered data:", err);
        setError(err.message); // This will show an error if the date fetch fails
      } finally {
        // This is the final step, so we can stop the main loading indicator
        setIsLoading(false);
      }
    };

    loadDateFilteredData();
  }, [store, authUser, startDate, endDate]); // Re-runs when dates change

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
  // Check that all data has been loaded before rendering
  if (!ordersByDate || !totalDetails || !top5Customers) {
    return (
      <div className="text-center p-8">
        Not all analytics data could be loaded. Please try again.
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

// --- NEW COMPONENT: AddStoreModal ---
function AddStoreModal({
  isOpen,
  onClose,
  onSubmit,
  isLoading,
  error,
}) {
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

function DashboardPage({ authUser }) {
  const [view, setView] = React.useState("list");
  const [stores, setStores] = React.useState([]);
  const [selectedStore, setSelectedStore] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  // --- NEW: State for the "Add Store" modal ---
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formError, setFormError] = React.useState(null);

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
  }, [authUser]);

  React.useEffect(() => {
    loadStores();
  }, [loadStores]);

  // --- NEW: Function to handle adding a store ---
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

      // Success!
      setIsModalOpen(false); // Close modal
      await loadStores(); // Refresh the list of stores
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
          <div className="text-sm text-gray-500">
            Signed in as{" "}
            <span className="font-medium text-gray-800">{authUser.email}</span>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {view === "list" && (
          <div className="px-4">
            {/* --- MODIFIED: Header with Add Store Button --- */}
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

      {/* --- NEW: Render the modal --- */}
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