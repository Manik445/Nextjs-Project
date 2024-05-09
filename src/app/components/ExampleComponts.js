import styled from 'styled-components'

const styledContainer = styled.div `
    background-color : red ; 
    padding : 20px ; 
    border-radius : 20px ; 
`

const StyledTitle = styled.div `
 color : #333; 
 front-size : 24px 
`

const StyledPara = styled.p `
 color : blue ; 
 font-size : 50px ; 
`


const StyledComponent = () => {
    return (
        <styledContainer>
            <StyledTitle>Hello</StyledTitle>
        </styledContainer>
    )
}