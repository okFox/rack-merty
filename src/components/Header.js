import React from 'react';
import { useParams } from 'react-router-dom';

const Header = () => {
  const { name } = useParams();
  return <h1> Rick and Morty and {name}</h1>;
};

export default Header;
