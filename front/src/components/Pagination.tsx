import { Character } from "@/types";
import {FC, useEffect, useState} from "react";
import styled from "styled-components";
import React from "react";
import client from "@/lib/client";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

const Pagination = ({ currentPage, totalPages, onNextPage, onPreviousPage }) => {
    return (
      <StyledDiv>
        {currentPage > 1 && (
          <button onClick={onPreviousPage}>
            &lt;&lt; Previous
          </button>
        )}
  
        <span>{`${currentPage}/${totalPages}`}</span>
  
        {currentPage < totalPages && (
          <button onClick={onNextPage}>
            Next &gt;&gt;
          </button>
        )}
      </StyledDiv>
    );
  };
  
  export default Pagination; 

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
    span {
        margin: 0 1rem;
        font-size: 1.2rem;
        font-weight: bold;
        font-family: sans-serif;
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