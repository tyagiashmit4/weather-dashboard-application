import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const CommonSearchbar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
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
