import React, { useState } from 'react';
import '../assets/scss/search-filters.scss';

const SearchFilters = () => {
  const [projectName, setProjectName] = useState('');
  const [department, setDepartment] = useState('');

  return (
    <div className="search-filters">
      <div className="filter-group">
        <label htmlFor="projectName">Project</label>
        <input
          type="text"
          id="projectName"
          placeholder="Search By Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="department">Department</label>
        <select
          id="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">Select Department</option>
          <option value="cse">CSE</option>
          <option value="eee">EEE</option>
          <option value="bba">BBA</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilters;
