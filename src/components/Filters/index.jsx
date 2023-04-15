import React, { useState, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Filters = ({ filters }) => {
  const [checkedFilters, setCheckedFilters] = useState({});

  useEffect(() => {
    const object = {};
    filters.forEach((filter) => {
      object[filter] = false;
    });
    setCheckedFilters(object);
    console.log(object);
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    setCheckedFilters({
      ...checkedFilters,
      [name]: !checkedFilters[name],
    });
  };
  return (
    <FormGroup>
      {filters.map((filter, idx) => (
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedFilters[filter]}
              onChange={handleChange}
              name={filter}
            />
          }
          label={filter}
          key={idx}
        />
      ))}
    </FormGroup>
  );
};

export default Filters;
