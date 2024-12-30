import React, { useState, useEffect } from "react";
import checkAuth from "../auth/checkAuth";
import { useSelector } from "react-redux";

function Crud() {
  const user = useSelector((store) => store.auth.user);

  // Date and time constants
  const today = new Date()
    .toLocaleDateString("en-IN")
    .split("/")
    .reverse()
    .join("-");
  const time = new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  // State for form inputs
  const [currentWeight, setCurrentWeight] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // State for data management
  const [filteredData, setFilteredData] = useState([]);
  const [editingEntry, setEditingEntry] = useState(null);

  // Pagination state
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  // Error and result states
  const [error, setError] = useState("");
  const [searchError, setSearchError] = useState("");
  const [searchResult, setSearchResult] = useState("");

  // Main data state
  const [weightData, setWeightData] = useState([
    {
      id: 1,
      user: "usher4akshay@gmail.com",
      weight: 65.3,
      date: "2024-11-01",
      time: "08:12",
    },
    {
      id: 2,
      user: "usher4akshay@gmail.com",
      weight: 64.8,
      date: "2024-11-02",
      time: "09:34",
    },
    {
      id: 3,
      user: "usher4akshay@gmail.com",
      weight: 66.1,
      date: "2024-11-03",
      time: "12:45",
    },
    {
      id: 4,
      user: "usher4akshay@gmail.com",
      weight: 65.7,
      date: "2024-11-04",
      time: "07:59",
    },
    {
      id: 5,
      user: "usher4akshay@gmail.com",
      weight: 64.9,
      date: "2024-11-05",
      time: "05:22",
    },
    {
      id: 6,
      user: "usher4akshay@gmail.com",
      weight: 65.2,
      date: "2024-11-06",
      time: "03:14",
    },
    {
      id: 7,
      user: "usher4akshay@gmail.com",
      weight: 66.0,
      date: "2024-11-07",
      time: "10:20",
    },
    {
      id: 8,
      user: "usher4akshay@gmail.com",
      weight: 65.4,
      date: "2024-11-08",
      time: "02:45",
    },
    {
      id: 9,
      user: "usher4akshay@gmail.com",
      weight: 64.7,
      date: "2024-11-09",
      time: "09:12",
    },
    {
      id: 10,
      user: "usher4akshay@gmail.com",
      weight: 65.1,
      date: "2024-11-10",
      time: "06:32",
    },
    {
      id: 11,
      user: "sherinashraf013@gmail.com",
      weight: 75.5,
      date: "2024-11-01",
      time: "06:32",
    },
    {
      id: 12,
      user: "sherinashraf013@gmail.com",
      weight: 74.8,
      date: "2024-11-02",
      time: "08:50",
    },
    {
      id: 13,
      user: "sherinashraf013@gmail.com",
      weight: 75.3,
      date: "2024-11-03",
      time: "11:03",
    },
    {
      id: 14,
      user: "sherinashraf013@gmail.com",
      weight: 76.2,
      date: "2024-11-04",
      time: "02:28",
    },
    {
      id: 15,
      user: "sherinashraf013@gmail.com",
      weight: 74.9,
      date: "2024-11-05",
      time: "09:15",
    },
    {
      id: 16,
      user: "sherinashraf013@gmail.com",
      weight: 75.1,
      date: "2024-11-06",
      time: "04:10",
    },
    {
      id: 17,
      user: "sherinashraf013@gmail.com",
      weight: 75.4,
      date: "2024-11-07",
      time: "07:40",
    },
    {
      id: 18,
      user: "sherinashraf013@gmail.com",
      weight: 74.7,
      date: "2024-11-08",
      time: "01:25",
    },
    {
      id: 19,
      user: "sherinashraf013@gmail.com",
      weight: 75.0,
      date: "2024-11-09",
      time: "22:00",
    },
    {
      id: 20,
      user: "sherinashraf013@gmail.com",
      weight: 75.6,
      date: "2024-11-10",
      time: "05:50",
    },
    {
      id: 21,
      user: "paaru@gmail.com",
      weight: 46.2,
      date: "2024-11-01",
      time: "10:45",
    },
    {
      id: 22,
      user: "paaru@gmail.com",
      weight: 46.5,
      date: "2024-11-02",
      time: "01:02",
    },
    {
      id: 23,
      user: "paaru@gmail.com",
      weight: 45.8,
      date: "2024-11-03",
      time: "17:22",
    },
    {
      id: 24,
      user: "paaru@gmail.com",
      weight: 46.1,
      date: "2024-11-04",
      time: "04:11",
    },
    {
      id: 25,
      user: "paaru@gmail.com",
      weight: 45.9,
      date: "2024-11-05",
      time: "06:50",
    },
    {
      id: 26,
      user: "paaru@gmail.com",
      weight: 46.0,
      date: "2024-11-06",
      time: "11:23",
    },
    {
      id: 27,
      user: "paaru@gmail.com",
      weight: 45.7,
      date: "2024-11-07",
      time: "08:02",
    },
    {
      id: 28,
      user: "paaru@gmail.com",
      weight: 46.3,
      date: "2024-11-08",
      time: "03:09",
    },
    {
      id: 29,
      user: "paaru@gmail.com",
      weight: 45.5,
      date: "2024-11-09",
      time: "12:11",
    },
    {
      id: 30,
      user: "paaru@gmail.com",
      weight: 46.2,
      date: "2024-11-10",
      time: "07:56",
    },
  ]);

  // Effects
  useEffect(() => {
    const sortedData = [...weightData].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setFilteredData(sortedData.filter((entry) => entry.user === user?.email));
  }, [weightData, user]);

  // Form submission handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    const alreadyLogged = weightData.some((entry) => entry.date === today);
    if (alreadyLogged) {
      setError("Weight for today is already logged.");
      return;
    }
    if (currentWeight.trim() === "") {
      setError("Weight cannot be empty");
      return;
    }
    if (isNaN(currentWeight)) {
      setError("Please enter a valid number");
      return;
    }
    const newEntry = {
      id: weightData.length + 1,
      user: user.email,
      weight: parseFloat(currentWeight),
      date: today,
      time: time,
    };
    setWeightData((prevData) => [...prevData, newEntry]);
    setError("");
    setCurrentWeight("");
    setCurrentPage(1);
    setEditingEntry(null);
  };

  // Search functionality
  const handleSearch = () => {
    if (!startDate || !endDate) {
      setSearchError("Please select both start and end dates.");
      return;
    }
    const searchFilter = weightData.filter((entry) => {
      const entryDate = new Date(entry.date);
      const start = new Date(startDate);
      const end = new Date(endDate);
      return (
        entryDate >= start && entryDate <= end && entry.user === user?.email
      );
    });
    const sortedData = searchFilter.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    if (sortedData.length > 0) {
      const lastEntry = sortedData[0];
      const firstEntry = sortedData[sortedData.length - 1];
      const weightLoss = firstEntry.weight - lastEntry.weight;

      if (weightLoss > 0) {
        setSearchResult(`You have lost ${weightLoss.toFixed(2)} kg.`);
      } else if (weightLoss < 0) {
        setSearchResult(
          `You have gained ${Math.abs(weightLoss).toFixed(2)} kg.`
        );
      } else {
        setSearchResult("No weight change between selected dates.");
      }
    } else {
      setSearchResult("No data found for the selected dates.");
    }

    setFilteredData(sortedData);
    setSearchError("");
    setCurrentPage(1);
    setEditingEntry(null);
  };

  const handleClear = () => {
    setStartDate("");
    setEndDate("");
    const sortedData = weightData
      .filter((entry) => entry.user === user?.email)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
    setFilteredData(sortedData);
    setError("");
    setSearchError("");
    setSearchResult("");
    setCurrentPage(1);
    setEditingEntry(null);
  };

  // Pagination handlers
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // CRUD operations
  const handleDelete = (id) => {
    const updatedData = weightData.filter(
      (entry) => entry.id !== id || entry.user !== user?.email
    );
    setWeightData(updatedData);
    setFilteredData(updatedData.filter((entry) => entry.user === user?.email));
  };

  const handleEdit = (entry) => {
    setEditingEntry(entry);
  };

  const handleCancelEdit = () => {
    setEditingEntry(null);
    setError("");
    setSearchError("");
    setSearchResult("");
  };

  const handleSaveEdit = (entry, newWeight) => {
    const updatedData = weightData.map((data) =>
      data.id === entry.id ? { ...data, weight: newWeight } : data
    );
    setWeightData(updatedData);
    setEditingEntry(null);
    setError("");
    setSearchError("");
    setSearchResult("");
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <div className="card mb-4">
              <h5 className="text-center text-secondary mt-4 mb-4">
                Add Weight
              </h5>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Current Weight"
                      value={currentWeight}
                      onChange={(e) => setCurrentWeight(e.target.value)}
                    />
                  </div>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                  <button type="submit" className="btn btn-primary w-100">
                    Add Weight
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card mb-4">
              <h5 className="text-center text-secondary mt-4 mb-4">Search</h5>
              <div className="card-body">
                <div className="mb-3">
                  <input
                    type="date"
                    className="form-control"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    max={today}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="date"
                    className="form-control"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    max={today}
                    min={startDate}
                  />
                </div>
                {searchError && <p style={{ color: "red" }}>{searchError}</p>}
                {searchResult && (
                  <p style={{ color: "green" }}>{searchResult}</p>
                )}
                <button
                  className="btn btn-primary w-100 mb-3"
                  onClick={handleSearch}
                >
                  Search
                </button>
                <button className="btn btn-danger w-100" onClick={handleClear}>
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Weight (In kg)</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((entry, index) => (
                  <tr key={index}>
                    <td>
                      {editingEntry?.id === entry.id ? (
                        <input
                          type="number"
                          defaultValue={entry.weight}
                          onChange={(e) => (entry.weight = e.target.value)}
                        />
                      ) : (
                        entry.weight
                      )}
                    </td>
                    <td>{entry.date}</td>
                    <td>{entry.time}</td>
                    <td>
                      {editingEntry?.id === entry.id ? (
                        <button
                          className="btn btn-success btn-sm"
                          onClick={() => handleSaveEdit(entry, entry.weight)}
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          className="btn btn-warning btn-sm"
                          onClick={() => handleEdit(entry)}
                        >
                          Edit
                        </button>
                      )}
                    </td>
                    <td>
                      {editingEntry?.id === entry.id ? (
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={handleCancelEdit}
                        >
                          Cancel
                        </button>
                      ) : (
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(entry.id)}
                        >
                          Delete
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-secondary"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <div>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    className={`btn btn-outline-primary mx-1 ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                    onClick={() => handlePageClick(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <button
                className="btn btn-secondary"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default checkAuth(Crud);
