import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ContentDescription = styled.h1`
  display: flex;
  font-family: "Arial", sans-serif;
  font-size: 3.5rem;
  margin-top: 0px;
  color: #000;
  letter-spacing: 0.30rem;
  font-weight: 800;

  span {
    margin: 0 2.5px;
    display: block;
    overflow: hidden;
  }
`

export const ContentDescriptionPT = styled.h2`
  display: flex;
  font-family: "Arial", sans-serif;
  font-size: 1.5rem;
  color: #000;
  letter-spacing: 0.30rem;
  font-weight: 800;
  margin-top: -30px;

  label {
    margin: 0 2.5px;
    display: block;
    overflow: hidden;
  }
`

export const Content = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Href = styled.a`
  text-decoration: none;
  color: #000;
  font: normal normal bold 18px 'Arial', sans-serif;
  display: flex;
  align-items: center;
  transition: all .5s;

  svg {
    transform: scale(1.2);
    margin-right: 5px;
  }

  &:hover {
    color: #6C63FF;
  }
`

export const Strong = styled.strong`

`
