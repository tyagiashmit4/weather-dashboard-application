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
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query); //* Update searchQuery state
    
    onSearch(query);  //* Call onSearch callback with the new query
  };

  return (
    <TextField
      label="Search"
      variant="outlined"
      fullWidth
      size="small" 
      value={searchQuery}
      onChange={handleSearch}
      style={{
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 20, 
        backgroundColor: 'white',
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" aria-label="search">
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
