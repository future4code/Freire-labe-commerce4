import styled from 'styled-components';

export const CartContainer = styled.section`
    width: ${({ open }) => (open ? '20%' : '6%')};
    min-height: ${({ open }) => (open ? '50%' : '15px')};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid black;
    font-size: 14px;
    border-radius: ${({ open }) => (open ? '0' : '10%')};
    padding:  ${({ open }) => (open ? '10px' : '0')};
    position: relative;
    transition: all 0.3s ease;
    scroll-behavior: smooth;
    position: absolute;
    right: ${({ open }) => (open ? '0' : '10px')};
    top: ${({ open }) => (open ? '0' : '-4.5rem')};
    z-index: 2;
    background-color:${({ open }) => (open ? '#FFFFFF' : '#8a0057')};
    color: ${({ open }) => (open ? '#0e0e0e' : '#edf0f1')};

    h3 {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin: 0;
        padding: ${({ open }) => (open ? '0 0 10px' : '0')};
        border-bottom: ${({ open }) => (open ? '1px solid #0e0e0e' : 'none')};

        svg {
            max-height: 50px;
            max-width: 40px;

            :last-child {
                height: 25px;
                visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
                position: absolute;
                right: 20px;
                transition: all 0.1s ease;
            }
        }
    }

    section {
        width: 100%;
        height: auto;
        max-height: 530px;
        overflow: auto;

        h2 {
            text-align: center;
            margin: 20px 0 0;
        }
        
        ::-webkit-scrollbar {
            display: none;
        }
    }

    p {
        width: 100%;
        display: flex;
        justify-content: center;
        position: absolute;
        bottom: 10px;
        font-size: 20px;

        b {
            font-size: 20px;
            margin: 0 20px 0 0;
        }
    }
`

export const CartProduct = styled.div `
    width: 100%;
    height:40px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;

    button {
        background-color: transparent;
        border: none;
    }
    svg {
        cursor: pointer;
        transition: all 0.3s ease;

        :hover {
            fill: red;
        }
    }
`