import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

//* Define props interface for SearchBar component
interface SearchBarProps {
  onSearch: (query: string) => void; //* Function to handle search
}

//* Define CommonSearchbar functional component with React.FC type and destructured props
const CommonSearchbar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');  //* State for search query


  //* Event handler for search input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value); //* Update searchQuery state as user types
  };

  //* Event handler for "Enter" key press
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(searchQuery);
    }
  };

  //* Event handler for search icon click
  const handleSearchClick = () => {
    onSearch(searchQuery);
  };

  return (
    <TextField
      label="Search"
      variant="outlined"
      fullWidth
      size="small" 
      value={searchQuery}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      style={{
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 20, 
        backgroundColor: 'white',
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" aria-label="search" onClick={handleSearchClick}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
        style: {
          borderRadius: '20px 20px 20px 20px', 
        },
      }}
    />
  );
};

export default CommonSearchbar;
