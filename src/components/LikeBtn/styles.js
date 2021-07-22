import styled from 'styled-components';

export const ButtonContainer = styled.button`
    background-color: ${props => props.color};
    padding: 15px;
    border-radius: 50%;
    border: none;

    font-size: 20px;
    cursor: pointer;

    position: absolute;
    bottom: 20px;
    right: 20px;

    span {
        transform: translateY(-4px);
        display: block;
    }

    &:active {
        opacity: .7;
    }
`;