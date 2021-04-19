import React, { useState } from "react";
import "./Search__Box.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const [input,setInput]=useState('')
  const history=useHistory()
  const dispatch=useDispatch()

  const searchHandler=(e)=>{
    e.preventDefault()
    dispatch({type:"SET_SEARCH", payload: input})
    history.push('/search')
    

  }
  
  return (
    <form onSubmit={searchHandler} className="search__box">
      <div className="search__input__box">
        <SearchIcon />
        <input onChange={(e)=>setInput(e.target.value)}  type="text" />
        <MicIcon />
      </div>
      <div className="search__box__button text-center mt-4">
      <Button variant='outlined' className='mx-2'>
          Google Search
      </Button>
      <Button variant='outlined'  className='mx-2'>
          I'm Felling Lucky
      </Button>
      </div>
      
    </form>
  );
};

export default SearchBox;
