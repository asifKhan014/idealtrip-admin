import { useState, useEffect } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import axios from "axios";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function UsersDetailCard() {
  const [last30DaysStats, setLast30DaysStats] = useState([]);
  const [allTimeStats, setAllTimeStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const token = localStorage.getItem("token");
        const headers = { Authorization: `Bearer ${token}` };

        // Concurrently fetch both endpoints using axios.all
        const [last30DaysResponse, allTimeResponse] = await axios.all([
          axios.get("https://localhost:7216/api/administration/stats/last-30-days", { headers }),
          axios.get("https://localhost:7216/api/administration/stats/all-time", { headers }),
        ]);

        // Handle last 30 days stats
        if (!last30DaysResponse.data.isSuccess) {
          throw new Error("Failed to fetch last 30 days stats.");
        }
        const last30DaysFormattedStats = last30DaysResponse.data.data.map((item) => ({
          name: item.role === "Tourist" ? "Tourists (Last 30 Days)" : `${item.role} (Last 30 Days)`,
          stat: `${item.count}`,
          previousStat: `${item.previousCount || 0}`, // Default to 0 if no previous data
          change: `${item.count - (item.previousCount || 0)}`, // Calculate change
          changeType: item.count >= (item.previousCount || 0) ? "increase" : "decrease", // Determine change type
        }));

        // Handle all-time stats
        if (!allTimeResponse.data.isSuccess) {
          throw new Error("Failed to fetch all-time stats.");
        }
        const allTimeFormattedStats = allTimeResponse.data.data.map((item) => ({
          name: item.role === "Tourist" ? "Tourists (All Time)" : `${item.role} (All Time)`,
          stat: `${item.count}`,
          previousStat: `${item.previousCount || 0}`,
          change: `${item.change}`,
          changeType: item.change >= 0 ? "increase" : "decrease",
        }));

        setLast30DaysStats(last30DaysFormattedStats);
        setAllTimeStats(allTimeFormattedStats);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  const combinedStats = [...last30DaysStats, ...allTimeStats];

  return (
    <div className="my-9">
      <h3 className="text-base font-semibold text-gray-900">User Statistics</h3>
      <dl className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
        {combinedStats.map((item) => (
          <div key={item.name} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <dt className="text-base font-normal text-gray-900">{item.name}</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                {item.stat}
                <span className="ml-2 text-sm font-medium text-gray-500">
                  from {item.previousStat}
                </span>
              </div>
              <div
                className={classNames(
                  item.changeType === "increase"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800",
                  "inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0"
                )}
              >
                {item.changeType === "increase" ? (
                  <ArrowUpIcon
                    aria-hidden="true"
                    className="-ml-1 mr-0.5 h-5 w-5 shrink-0 self-center text-green-500"
                  />
                ) : (
                  <ArrowDownIcon
                    aria-hidden="true"
                    className="-ml-1 mr-0.5 h-5 w-5 shrink-0 self-center text-red-500"
                  />
                )}
                <span className="sr-only">
                  {item.changeType === "increase" ? "Increased" : "Decreased"} by{" "}
                </span>
                {item.change}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
