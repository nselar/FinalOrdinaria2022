import { Character } from "@/types";
import {FC, useEffect, useState} from "react";
import styled from "styled-components";
import React from "react";
import client from "@/lib/client";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

const Filter = ({onFilter}: {onFilter: (filter: string) => void}) => {
    const [statusFilter, setStatusFilter] = useState("");
    const [genderFilter, setGenderFilter] = useState("");

    const handleStatusFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStatusFilter(e.target.value);
        onFilter(e.target.value);
    };

    const handleGenderFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGenderFilter(e.target.value);
        onFilter(e.target.value);
    };

    return (
        <StyledDiv>
        <label htmlFor="status-filter">Status:</label>
        <select id="status-filter" value={statusFilter} onChange={handleStatusFilter}>
          <option value="">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
        </select>
  
        <label htmlFor="gender-filter">Gender:</label>
        <select id="gender-filter" value={genderFilter} onChange={handleGenderFilter}>
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="unknown">Unknown</option>
        </select>
      </StyledDiv>
    )
}

export default Filter;

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    padding: 1rem;
    background-color: #f5f5f5;
    color: #333;
    border-radius: 10px;
    select {
        margin-left: 1rem;
        padding: 0.5rem 1rem;
        border-radius: 10px;
        border: none;
        background-color: #fff;
        color: #333;
    }
    option {
        color: #333;
        background-color: #fff;
        border-radius: 10px;
    }
    label {
        font-weight: bold;
        font-family: sans-serif;
    }
`;


