import React, { useState, useEffect, FC } from 'react';
import { useQuery } from '@apollo/client';
import  CharacterCard   from '@/components/CharacterCard';
import  CharacterList  from '@/components/CharacterList';
import  Filter  from '@/components/Filter';
import  Pagination  from '@/components/Pagination';
import  Search  from '@/components/Search';
import { Character } from '@/types';
import client from '@/lib/client';
import { gql } from '@apollo/client';
import styled from 'styled-components';

const GET_CHARACTERS = gql`
    query getCharacters($page: Int, $filter: FilterCharacter) {
        characters(page: $page, filter: $filter) {
            info {
                pages
                next
                prev
            }
            results {
              id
              name
              status
              gender
              origin {
                name
              }
              image
            }
          }
    
    }
`;

const Application : FC = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [GenderFilter, setGenderFilter] = useState("");
    const [StatusFilter, setStatusFilter] = useState("");
    const [search, setSearch] = useState("");

    const { loading, error, data } = useQuery(GET_CHARACTERS, {
        variables: {
            page: currentPage,
            filter: {
                status: StatusFilter,
                gender: GenderFilter,
                name: search
            },
            
        },
    });

    useEffect(() => {
        if (data) {
            setCharacters(data.characters.results);
            setTotalPages(data.characters.info.pages);
        }
    }, [data]); // este array es para que se ejecute solo una vez

    const handleGenderFilter = (filter: string) => {
        setGenderFilter(filter);
    };

    const handleStatusFilter = (filter: string) => {
        setStatusFilter(filter);
    };

    const handleSearch = (search: string) => {
        setSearch(search);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    if (loading) return <Spinner />;
    if (error) return <p>Error :(</p>;

    return (
        <>
            <title>Rick and Morty API</title>
            <Search onSearch={handleSearch} />
            <Filter onFilter={handleStatusFilter} />
            <Filter onFilter={handleGenderFilter} />
            {characters.length > 0 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onNextPage={handleNextPage}
                    onPreviousPage={handlePreviousPage}
                />
            )}
           
            {characters.length <= 0 ? (
                <p>No characters found</p>
            ) : (
                
                <CharacterList characters={characters} />
            )}
        </>
    );
}

export default Application;

const StyledP = styled.p`
    color: red;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
`;

const Spinner = styled.div`
    border: 5px solid #f3f3f3;
    border-top: 5px solid #16d47b;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    margin: 0 auto;
    margin-top: 2rem;
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg)
        }
    }
`;

