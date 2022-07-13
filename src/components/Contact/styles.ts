import styled, { css, keyframes }from "styled-components";
// @ts-ignore
import Tooltip from "../Tooltip";

interface ContactProps {
  isFocused: boolean;
 }
export const ContactForm = styled.div`
  margin : 0.5rem;
  .message{
    height: 5rem;
  }

  `;
export const TextareForm = styled.textarea<ContactProps>`
  border: #929d9d 2px solid;
  border-radius: 0.5rem;
  padding: 0.3rem;
  width: 100%;
  margin: 0.1rem;
  display: flex;
  height: 3rem;
  font-family: Roboto,serif;
  font-size: 12px;
  @media screen and (max-width: 768px){
    height: 6rem;
  }
  ${props => props.isFocused && css`
    border: red 2px solid;
  `};
  `;
export const InputForms = styled.input<ContactProps>`
  border: #929d9d 2px solid;
  border-radius: 0.5rem;
  padding: 0.3rem;
  width: 100%;
  margin: 0.1rem;
  display: flex;
  font-family: Roboto,serif;
  font-size: 12px;
  @media screen and (max-width: 768px){
    padding: 0.6rem;
  }
  ${props => props.isFocused && css`
    border: red 2px solid;
  `};
`;
export const ButtonForms = styled.button`
  color: white;
  font-size: 1rem;
  background-color: #000;
  padding: 0.5rem;
  width: 100%;
  border-radius: 1rem;
  border: 0;
`;
export const Error = styled.i`
  height: 1rem;
  margin: 0 1rem;
  padding: 0.1rem;
  display: flex;
  svg {
    margin: 0;
  }

  span {
    color: #ff0000;
    font-size: 11px;
    font-style: normal;
    margin:0 0.2rem;
  }
`;
