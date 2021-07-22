import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;

    padding: 20px 15px;

    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 20px;
    }

    .switch input { 
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #808080;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 0px;
        bottom: -3px;
        background-color: white;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #212121;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #212121;
    }

    input:checked + .slider:before {
        transform: translateX(36px);
    }

    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
`;