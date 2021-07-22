import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.color};
    height: calc(100vh - 60px);

    position: relative;
`;

export const Counter = styled.p`
    text-align: center;
    color: ${props => props.color};

    padding-top: 25px;
    font-size: 26px;
`;
