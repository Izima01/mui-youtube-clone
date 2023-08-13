import { useState } from 'react';
import { Box, Button, IconButton, InputBase, Paper } from "@mui/material"
import { flexAlignCenter, searchBar } from "../../Styles/style";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

const SearchBar = ({ handleSearch, search }) => {
  const [term, setTerm] = useState("");
  return (
    <Box sx={flexAlignCenter}>
      <Paper component='form' sx={searchBar}>
        <InputBase value={term || search} onChange={(e) => setTerm(e.target.value)} sx={{ ml: 1, flex: 1, pl: 1 }} placeholder="Search" />
        <IconButton
          type='button'
          onClick={() => handleSearch(term)}
          sx={{
            backgroundColor: '#eee',
            borderRadius: 0
          }}
          aria-label="search"
        >
          <AiOutlineSearch />
        </IconButton>
      </Paper>
      <Button sx={{ minWidth: 'auto' }}>
        <BsFillMicFill size={18} />
      </Button>
    </Box>
  )
}

export default SearchBar