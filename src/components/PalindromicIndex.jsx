import React, { useState } from 'react';

const PalindromicIndex = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);

    const findPalindromicIndex = (S) => {
        const n = S.length;
        
        for (let i = 0; i < n; i++) {
            let leftPart = S.substring(0, i);
            let rightPart = S.substring(i + 1);
            
            if (leftPart === rightPart.split('').reverse().join('')) {
                return i;
            }
        }
        
        return -1;
    };

    const handleCheck = () => {
        setResult(findPalindromicIndex(input));
    };

    return (
        <div>
            <h2>2. Find Palindromic Index</h2>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Enter a string" 
            />
            <button onClick={handleCheck}>Check</button>
            {result !== null && <p>Index: {result}</p>}
        </div>
    );
};

export default PalindromicIndex;
