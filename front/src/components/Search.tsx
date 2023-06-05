import { CharacterAPI, Character } from "@/types";
import {FC, useEffect, useState} from "react";
import styled from "styled-components";
import React from "react";
import client from "@/lib/client";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

const Search = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleSearchChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setSearchQuery(event.target.value);
    };
  
    const handleSearchSubmit = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      onSearch(searchQuery);
    };
  
    return (
      <StyledForm onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </StyledForm>
    );
  };
  
  export default Search;

const StyledForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
    input {
        padding: 0.5rem 1rem;
        border-radius: 10px;
        border: none;
        background-color: #f5f5f5;
        color: #333;
        margin-right: 1rem;
    }
    button {
        padding: 0.5rem 1rem;
        border-radius: 10px;
        border: none;
        background-color: #333;
        color: #fff;
        cursor: pointer;
    }
`;