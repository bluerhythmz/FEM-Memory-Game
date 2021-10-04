import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #152938;
`

export const MenuWrapper = styled.div`
    width: 90%;
    background-color: #FCFCFC;
    padding: 2.4rem;
    margin: 0 auto;
    border-radius: 1rem;
`

export const Title = styled.h1`
    color: #FCFCFC;
    font-size: 3.2rem;
    line-height: 1.2em;
    margin-top: 8rem;
`

export const Selection = styled.div`
    margin-bottom: 2.4rem;
`

export const SelectionText = styled.p`
    font-size: 1.5rem;
    line-height: 1.2em;
    color: #7191A5;
    margin-bottom: 1.1rem;
    font-weight: 700;
`
export const SelectionButtons = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat( auto-fit, minmax(20px, 1fr) );
`