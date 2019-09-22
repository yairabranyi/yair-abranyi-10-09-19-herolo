import React from 'react';
import styled from 'styled-components'

const BtnAddToFavorite = ({ handleFavorite }) => {
    return (
        <BtnWrapper >
            <button style={{ padding: "0.5rem" }} onClick={handleFavorite}>Add to favorite</button>
        </BtnWrapper>
    )
}
export default BtnAddToFavorite;

const BtnWrapper = styled.div`
display: flex;
justify-content: flex-end;
margin-right: 1rem;
`;


