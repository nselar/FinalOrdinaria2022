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
    const [filter, setFilter] = useState<string>('');
    const [search, setSearch] = useState<string>('');

    const { loading, error, data } = useQuery(GET_CHARACTERS, {
        variables: {
            page: currentPage,
            filter: {
                status: filter,
                name: search
            },
            
        },
    });

    useEffect(() => {
        if (data) {
            setCharacters(data.characters.results);
            setTotalPages(data.characters.info.pages);
        }
    }, [data]);

    const handleFilter = (filter: string) => {
        setFilter(filter);
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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <>
            <title>Rick and Morty API</title>
            <Search onSearch={handleSearch} />
            <Filter onFilter={handleFilter} />
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
