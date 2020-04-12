import React from 'react';

function getRandomColor() {
  const letters = '0123456789ABCDEF'.split('');
  let color = '#';

  for (let i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

export function ColorBlock() {
  const styles = {
    backgroundColor: getRandomColor(),
    padding: 0,
    margin: 0,
    height: "1em",
    width: "1em",
    display: "inline-block"
  };

  return (
      <span style={styles}></span>
  );
}
