import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_KEY, CONTEX__KEY } from "../../keys";
import "./search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import ChatIcon from "@material-ui/icons/Chat";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import xyz from "./sss";

const Search = () => {
  const { term } = useSelector((state) => state.search);

  const dispatch = useDispatch();
  const dt=xyz
  console.log(dt)

  const [data, setData] = useState();

  const [input, setInput] = useState("");
  const [about, setAbout] = useState("");

  useEffect(()=>{
      fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEX__KEY}&q=${term}`)
      .then(res=>res.json())
      .then(result=>{
          console.log(result)
          setAbout(result.searchInformation)

          setData(result.items);
      })
      .catch(err=>console.log(err))
  },[term])

  const searchResultHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_SEARCH", payload: input });
  }

 

   console.log(term);
  return (
    <div className="search__result">
      <div className="search__header__section">
        <div className="search__section">
            <Link className="image__style" to='/'>
          <img
            className="image__style"
            alt=""
            src="https://openthread.google.cn/images/ot-contrib-google.png"
          /></Link>
          <form onSubmit={searchResultHandler} className="search__input__style">
            <SearchIcon />
            <input onChange={(e) => setInput(e.target.value)}  />
            <MicIcon />
          </form>
        </div>

        <div className="item__search">
          <div className="item">
            <SearchIcon />
            All
          </div>
          <div className="item">
            <ChatIcon />
            News
          </div>
          <div className="item">
            <ImageIcon />
            Images
          </div>
          <div className="item">
            <LocalOfferIcon />
            Shopping
          </div>
          <div className="item">
            <RoomIcon />
            Maps
          </div>
          <div className="item">
            <MoreVertIcon />
            More
          </div>
        </div>
      </div>
      <div className="search__body__section">
        <Container>
          <div className="search__result__info col-8 mx-auto">
            <p>
              About {about.totalResults} results ({about.formattedSearchTime}{" "}
              seconds){" "}
            </p>
          </div>
        </Container>
        <div className='container'>
            <div className="row">
                <div className="col-8 mx-auto">
                {data ?
            data.map((val) => {
              return (
                <div key={val.displayLink} className="search__results my-5">
                    
                  <a target='_blank' href={val.formattedUrl}>
                      <Typography variant='subtitle1' >
                          {val.formattedUrl}
                      </Typography>
                      <Typography variant='h6'>
                      {val.title}
                      </Typography>
                    
                  </a>
                  <Typography variant='subtitle2' >
                  {val.snippet}
                  </Typography>
                
                </div> 
              );
            }) : 
            <Spinner/>}
                </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Search;
