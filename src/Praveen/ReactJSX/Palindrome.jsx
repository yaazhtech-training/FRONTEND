import React, { useState } from 'react';

function Palindrome() {
  const [word, setWord] = useState('');
  const [message, setMessage] = useState ('');

  const checkPalindrome = () => {
    let letter = word.split('');

    let reversedLetter = letter.reverse();

    let reverseWord = reversedLetter.join('');

    if (word.toLowerCase() === reverseWord.toLowerCase()) {
      setMessage('It is a palindrome.');
    } else {
      setMessage('It is not a palindrome.');
    }
  };

  return (
    <div className="App" style={{fontSize:"40px",  fontFamily:'sans-serif', backgroundColor:' red',padding:'275px'}}>
      <h1 style={{fontFamily:'sans-serif'}}>Palindrome Checker</h1>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Enter a word"
      />
      <button onClick={checkPalindrome} style={{margin:'50px', color:'green'}}>Check</button>
      <p>{message}</p>
    </div>
  );
}

export default Palindrome;
