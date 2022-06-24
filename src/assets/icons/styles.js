import styled from 'styled-components';

export const BagIconContainer = styled.svg `
    .cls-1,.cls-2 {
        fill:none;
    }
    
    .cls-2 {
        stroke: ${({ open }) => (open ? '#0e0e0e' : '#edf0f1')};
        stroke-linecap:round;
        stroke-linejoin:round;
    }
`