import styled from 'styled-components';

export const ItemReviewStyled = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-evenly; 
    flex-direction: row-reverse;
    margin: 100px auto;
    box-shadow: 0 0 5px #ccc;
    @media screen and (max-width: 800px) {
        flex-direction: column;
        width: unset;
        align-items: center;
        > *:first-child {
            margin-bottom: 50px;
        }
    }
`;

export const ItemCommentSec = styled.div`
    display:flex;
    flex-direction:column;
`
