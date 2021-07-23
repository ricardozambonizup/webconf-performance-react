import styled from 'styled-components';

export const Container = styled.div`
    width: 50vw;
    background-color: ${props => props.bgColor};
    color: ${props => props.textColor};
    margin: 0 auto;
    padding: 20px 25px;
    border-radius: 5px;

    display: flex;
    
    a {
        color: ${props => props.textColor};
    }

    @media(max-width: 950px){
        flex-direction: column;
    }
`;
export const Left = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin-bottom: 20px;
    }

    @media(max-width: 950px){
        width: 100%;

        img {
            margin: 20px auto;
        }
    }
`;
export const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    a {
        color: ${props => props.colorT};
        text-decoration: none;
        border-radius: 6px;
        padding: 15px 20px;
        background-color: #32CD32;
        margin-top: 25px;


    }

    @media(max-width: 950px){
        width: 100%;
        margin-top: 20px;

    }
`;
export const Socials = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 15px;
`;

export const ButtonContainer = styled.button`
    width: 55px;
    height: 55px;
    background-color: #fde65c;
    padding: 15px;
    border-radius: 50%;
    border: none;
    font-size: 20px;
    cursor: pointer;
    position: absolute;
    bottom: 90px;
    right: 20px;
    span {
        display: block;
        transform: translateY(-4px);
    }
    &:active {
        opacity: .7;
    }
`;