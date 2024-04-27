import React from 'react'
import { TextField,IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import styles from './searchbar.module.css'; 
const Searchbar = () => {
  return (
    <>
    <TextField
      id="search"
    //   label="Search"
    //   variant="outlined"
      className={styles.searchbarcss}
      placeholder='search a song of your choice'
      inputProps={
<IconButton
    
        
      >
        <SearchIcon />
      </IconButton>
      }
    />
   
    
      </>
  )
}

export default Searchbar