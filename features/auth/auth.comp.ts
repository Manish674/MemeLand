import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Heading = styled.h1``;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  background: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 0.2rem;
  outline: none;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-weight: medium;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.2rem;
  background-color: #92cbf7;
`;

export const LinkButton = styled(Link)`
  border: 2px solid white;
`;
