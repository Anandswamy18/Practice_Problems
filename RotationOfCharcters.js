function rotn(str, N = 13) {
    const rotateChar = (char, base) => {
        return String.fromCharCode(((char.charCodeAt(0) - base + N) % 26) + base);
    };

    let result = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char >= 'a' && char <= 'z') {
            result += rotateChar(char, 'a'.charCodeAt(0));
        } else if (char >= 'A' && char <= 'Z') {
            result += rotateChar(char, 'A'.charCodeAt(0));
        } else {
            result += char;
        }
    }

    return result;
}


console.log(rotn("Lorem ipsum"));
console.log(rotn("test"));        
console.log(rotn("TesT"));
console.log(rotn("ANAND"));
