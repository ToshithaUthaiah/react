import React, { useState } from 'react'
import "../css/header.css";
import { Link } from "react-router-dom";
import profileImg from '../assets/profileimg.png';
import { IoSearchSharp } from "react-icons/io5";

const Header = ({ search, setSearch, handleSearch }) => {

    return (
        <div className="main-header">
            <div className="header_buttons">
                <h1 id="netflix_title">Netflix</h1>
                <Link to="/"><button id="home">Home</button></Link>
                <Link to="/addToList"><button id="mynetflxi">My Netflix</button></Link>
            </div >
            <div className="header_search">
                <form className="form" onSubmit={handleSearch}>
                    <input placeholder="Search for content" type="text" value={search} onChange={(e) => setSearch(e.target.value)}></input>
                    <button type="submit" id="searchIcon"><IoSearchSharp color="white" size={30} /></button>
                </form>
                <img id="profileImg" src={profileImg}></img>
            </div>

        </div >
    )
}

export default Header
