import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  svg {
    width: 100%;
    max-width: 710px;
  }
`

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

  @media (max-width: 600px) {
    font-size: 1.5rem;
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

  @media (max-width: 600px) {
    margin-top: -10px;
    font-size: 1.2rem;
  }
`

export const Content = styled.div`
  margin: 0 0 20px;
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
    width: 20px;
  }

  &:hover {
    color: #6C63FF;
  }
`

export const Strong = styled.strong`

`
