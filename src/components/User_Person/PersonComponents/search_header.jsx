import React from "react";

export default function SearchHeader() {
  return (
    <header className="manage-header search-header">
      <div className="search-page-title-container">Search vacancy</div>
      <div className="search-inputs-container">
        <div className="search-input-box">
          <label htmlFor="search_inp">Keywords</label>
          <input
            type="text"
            placeholder="Front-end, Back-end,..Javascript, PHP,..."
            id="search_inp"
          />
        </div>
        {window.localStorage.user_type === "person" && (
          <div className="search-input-box">
            <label htmlFor="level_inp">Level</label>
            <select id="level_inp">
              <option value="Intern">Intern</option>
              <option value="Junior">Junior</option>
              <option value="Middle">Middle</option>
              <option value="Senior">Senior</option>
            </select>
          </div>
        )}
        <div className="search-btn">Search</div>
      </div>
    </header>
  );
}
