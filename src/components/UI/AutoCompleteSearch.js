import React, { useState, useEffect } from "react";

const AutoCompleteSearch = ({ sendData }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    if (query.length > 1) {
      const delaySearch = setTimeout(() => {
        fetchSearchResults(query);
      }, 300); // Debounce API calls

      return () => clearTimeout(delaySearch);
    } else {
      setSuggestions([]); // Clear suggestions when input is empty
    }
  }, [query]);

  const fetchSearchResults = async (searchText) => {
    try {
      const response = await fetch(`http://localhost:5040/api/Visitor/Search/${searchText}`);
      if (!response.ok) throw new Error("Error fetching results");

      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Search error:", error);
      setSuggestions([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      setQuery(suggestions[selectedIndex].firstName + " " + suggestions[selectedIndex].lastName);
      setSuggestions([]);
    }
  };

  const handleSendVisitor = (visitor) => {
    setQuery("");
    sendData(visitor);
    setSuggestions([]);
  };
  return (
    <div className="relative w-140">
      {/* Search Input */}
      <input
        type="text"
        autoComplete="off"
        placeholder="Search by name, email, mobile, or ID..."
        className="w-full p-2 border border-gray-300 rounded"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      {/* Dropdown Suggestions */}
      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 overflow-y-auto rounded shadow-lg">
          {suggestions.map((visitor, index) => (
            <li
              key={visitor.id}
              className={`p-2 ${
                index === selectedIndex ? "bg-blue-500" : "hover:bg-gray-200"
              }`}
              onMouseEnter={() => setSelectedIndex(index)}
              // onClick={() => {
              //   setQuery(visitor.firstName + " " + visitor.lastName);
              //   setSuggestions([]);
              // }}
              onClick={() => handleSendVisitor(visitor)}
            >
              {visitor.visitorID} - {visitor.firstName} {visitor.midName} {visitor.lastName} ({visitor.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoCompleteSearch;
