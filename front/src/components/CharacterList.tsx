import CharacterCard from "@/components/CharacterCard";
import { Character } from "@/types";
import {FC, useEffect, useState} from "react";
import styled from "styled-components";
import React from "react";
import client from "@/lib/client";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

const CharacterList = ({characters}: {characters: Character[]}) => {
    return (
        <Container>
            {characters.map((character: Character) => (
                <CharacterCard key={character.id} character={character} />
            ))}
        </Container>
    );
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    margin: 1rem 0;
    background-color: #f5f5f5;
    color: #333;
`;

export default CharacterList;


