import styled from 'styled-components';

export const ItemContain = styled.div `
    max-width: 1200px;
    width: 100%;
    margin: 100px auto;
    box-shadow: 0 0 5px #ccc;
`
export const ItemDetails = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 30px 0;
`
export const ItemBigImage = styled.div`
    max-width: 500px;
    min-width: 290px;
    overflow: hidden;
    margin: 25px;

    img {
        width: 100%;
        height: 100%;
        max-height: 400px;
        display: block;
        object-fit: cover;
    }
`
export const ItemBox = styled.div`
    max-width: 500px;
    min-width: 290px;
    margin: 25px;
    
    p {
        line-height: 1.5;
        margin: 15px 0;
    }

    .colors button{
    width: 30px;
    height: 30px;
    border: 1px solid #333;
    outline: none;
    margin-right: 5px;
    cursor: pointer;
    }

    .thumb{
    width: 100%;
    height: 100px;
    display: flex;
    cursor: pointer;
    margin: 10px 0;
    }
    .thumb img{
    width: 90px;
    height: 100%;
    display: block;
    object-fit: cover;
    border: 1px solid #ddd;
    margin-right: 5px;
    opacity: 0.7;
    border-radius: 5px;
    }
    .thumb img.active{
    opacity: 1;
    border: 1px solid black;
    }

    @media (max-width: 500px){
    .thumb{
        height: 50px;
    }
    .thumb img{
        width: 50px;
    }
    }
`
export const BoxRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;

    h2 {
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    span {
        color: crimson;
    }
`