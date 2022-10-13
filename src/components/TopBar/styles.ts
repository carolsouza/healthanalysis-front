import styled from "styled-components";

export const TopContainer = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 1;
    background-color: var(--orange);
    width: 100vw;
    height: 50px;
`;

export const CentralizeContainer = styled.div`
    display: flex;
    width: 95%;
    height: 60px;
    margin: 10px;
    justify-content: space-between;

    a{
        text-decoration: none;
        color: #FFF;
    }
`
