import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
    font-size: 1rem;
    border: none;
    font-weight: 500;
    padding: 1rem; 
    border-radius: ${({ rounded }) => rounded ? '4px' : '0'};
    ${({ state }) => {
        switch (state) {
            case 'primary':
                return css`
                    background-color: #90caf9;
                    color: #fff;
                `;
            case 'error':
                return css`
                    background-color: #CC0000;
                    color: #fff;
                `;
            case 'success':
                return css`
                    background-color: #007E33;
                    color: #fff;
                `;
            default:
                return '#e0e0e0';
        }
    }};

    &:hover {
        opacity: .9;
    }
`;