import styled, { css } from 'styled-components';

const STATES = {
    'primary': css`
        background-color: #90caf9;
        color: #fff;
    `,
    'error': css`
        background-color: #CC0000;
        color: #fff;
    `,
    'success': css`
        background-color: #007E33;
        color: #fff;
    `
}

export const StyledButton = styled.button`
    font-size: 1rem;
    border: none;
    font-weight: 500;
    padding: 1rem; 
    border-radius: ${({ rounded }) => rounded ? '4px' : '0'};
    ${({ state }) => STATES[state]}};

    &:hover {
        opacity: .9;
    }
`;