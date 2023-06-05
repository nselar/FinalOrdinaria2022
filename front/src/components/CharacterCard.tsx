import {Character} from "@/types";
import {FC} from "react";
import styled from "styled-components";
import React from "react";
import client from "@/lib/client";
import { GetStaticProps, GetStaticPaths } from "next";
import { gql } from "@apollo/client";

const CharacterCard = ({ character }: { character: Character }) => {
    const { name, status, gender, origin, image } = character;

    return (
        <StyledCharacter>
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <h2>{status}</h2>
            <p>{gender}</p>
            <p>{origin?.name}</p>
        </StyledCharacter>
    )
}

export default CharacterCard;

const StyledCharacter = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    img {
        width: 70%;
        height: 70%;
        margin: 0 auto;
        display: block;
        border-radius: 10px;
    }
    h1 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
        text-align: center;
    }
    h2 {
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
        text-align: center;
    }
    p {
        font-size: 1rem;
        margin-bottom: 0.5rem;
        text-align: center;
    }
`;