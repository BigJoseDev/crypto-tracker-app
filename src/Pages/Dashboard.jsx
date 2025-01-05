import { useState, useEffect } from "react";

import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import TokenDetailsModal from "../Components/TokenDetailsModal";

// Register Chart.js components
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Handle opening the modal and setting the selected token
  const handleViewDetails = (token) => {
    setSelectedToken(token);
    setIsModalO(true);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setIsModalO(false);
    setSelectedToken(null);
  };
  const [tokens, setTokens] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTokens, setFilteredTokens] = useState([]);
  const [isModalO, setIsModalO] = useState(false);

  const [selectedToken, setSelectedToken] = useState(null);

  useEffect(() => {
    const fetchTokens = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      );
      const data = await response.json();
      setTokens(data.slice(0, 100)); // Initially display 100 tokens
      setFilteredTokens(data.slice(0, 100)); // Set filtered tokens to display initially
    };
    fetchTokens();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const filtered = tokens.filter((token) =>
      token.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredTokens(filtered.slice(0, 6));
  };

  const generateChartData = (token) => ({
    labels: ["24h Low", "24h High"],
    datasets: [
      {
        label: `${token.name} Price`,
        data: [token.low_24h, token.high_24h],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        pointRadius: 3,
        borderWidth: 2,
        fill: true,
      },
    ],
  });

  return (
    <>
      <div className="dashboard-container flex">
        {/* Main Content */}
        <div
          className={`main-content ${
            isSidebarOpen ? "shrink" : "expand"
          } ml-64 transition-all duration-300 p-6 bg-gray-200 min-h-screen`}
        >
          <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-6 font-serif transition-transform ">
            Available Tokens
          </h1>

          <div className="mb-6">
            <input
              type="text"
              className="border border-gray-300 p-3 rounded-lg w-full mb-6 text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="Search for a token..."
              value={searchQuery}
              onChange={handleSearch}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredTokens.map((token) => (
                <div
                  key={token.id}
                  className="bg-gray-100 border border-gray-200 rounded-xl shadow-sm p-5 hover:shadow-md transition-all duration-300"
                >
                  {/* Token Header with Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {/* Token Icon */}
                      <img
                        src={token.image} // Ensure you have `icon` as a property in the `token` object
                        alt={token.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <h3 className="font-semibold text-lg text-gray-800">
                        {token.name}
                      </h3>
                    </div>

                    {/* Arrow Icon */}
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Token Price */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600 text-sm">Price:</span>
                    <span className="font-bold text-gray-900">
                      ${token.current_price.toLocaleString()}
                    </span>
                  </div>

                  {/* 24-Hour Change */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600 text-sm">24h Change:</span>
                    <span
                      className={`font-bold ${
                        token.price_change_percentage_24h > 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {token.price_change_percentage_24h.toFixed(2)}%
                    </span>
                  </div>

                  {/* Action Button */}
                  <button
                    className="w-full bg-blue-600 text-white text-sm py-2 rounded-md hover:bg-blue-700 transition-all"
                    onClick={() => handleViewDetails(token)} // Trigger view details
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>

            {/* Token Details Modal */}
            {isModalO && (
              <TokenDetailsModal
                token={selectedToken}
                show={isModalO}
                onClose={handleCloseModal}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
