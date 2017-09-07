import React from 'react';
import Span from '../common/Span';

const Header = () => {
  return (
    <div>
      <h1>
        <br/>
        <Span>Hotels.com - </Span>
        <Span color = "gray" fontSize = "h2">wake up happy</Span>
      </h1>
      <br/>
      <p>
        <Span color = "grayDark" fontSize = "large">With over </Span>
        <Span color = "grayDark" fontSize = "large" fontWeight = "bold">140,000 hotels </Span>
        <Span color = "grayDark" fontSize = "large">worldwide, </Span>
        <Span color = "grayDark" fontSize = "large" fontWeight = "bold">price matched guaranteed </Span>
        <Span color = "grayDark" fontSize = "large">and </Span>
        <Span color = "grayDark" fontSize = "large" fontWeight = "bold">1.2 million </Span>
        <Span color = "grayDark" fontSize = "large">reviews, why look elsewhere for your next hotel booking.</Span>
      </p>
    </div>
  );
};

export default Header;
