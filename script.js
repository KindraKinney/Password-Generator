const userPassEl = document.querySelector('#userPass');
const lengthEl = document.querySelector('#passwordLength');
const lowercaseEl = document.querySelector('#lowercase');
const uppercaseEl = document.querySelector('#uppercase');
const numbersEl = document.querySelector('#numbers');
const symbolsEl = document.querySelector('#symbols');
    
// functions generate random with return strings of browser characters sets
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
        
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
        
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);        
}
        
function getRandomSymbol() {
    const symbols = ' !"#$%&()*+,-./:;<=>?@[]^_`{|}~'
    return symbols[Math.floor(Math.random() * symbols.length)];
}
    
//set array with keys to each getRandom functions
    const randomChar = {
        lower: getRandomLower,
        upper: getRandomUpper,
        numbers: getRandomNumber,
        symbols: getRandomSymbol,
    };
  
generateButton.addEventListener('click', () => {
        //set password length
        const passwordLength = +lengthEl.value;
        //assign 'checked' values
        const checkedLower = lowercaseEl.checked;
	    const checkedUpper = uppercaseEl.checked;
	    const checkedNumbers = numbersEl.checked;
        const checkedSymbols = symbolsEl.checked;
        //get the return value or password from the function generatePassword
        userPassEl.innerText = generatePassword(passwordLength, checkedLower, checkedUpper, checkedNumbers, checkedSymbols);
    });
    
        
        function generatePassword(passwordLength, lower, upper, numbers, symbols) { 
            
            let password = '';
            // set types for random pull loop
            const typesChar = lower + upper + numbers + symbols;
            //set up array for checked or not checked filter
            const typesCharArr = [{lower}, {upper}, {numbers}, {symbols}].filter(
                //filter true boolean from false
                item => Object.values(item)[0]);
                //check if no types were selected
                if(typesChar === 0) {
                    alert("Must select at least one type of character!")
                }
                
                //loop through the types and pull random character from each type
                for(let i = 0; i < passwordLength; i += typesChar){
                    typesCharArr.forEach(type => {
                        const charKey = Object.keys(type)[0];
                        console.log("charkey :" +charKey)
                        password += randomChar[charKey]();
                        
                    });
                }
                    
                    const userPassword = password
                    
                    return userPassword;
                    //console.log(userPassword)
            
            }  
            

    //function that copies passwor to clipboard after click copy button
copyButton.addEventListener('click', () => {
    
    const textarea = document.createElement("textarea");
    const copiedPass = userPassEl.innerText;
    
    textarea.value = copiedPass;
    
    document.body.appendChild(textarea);
    
    textarea.select();
    
    document.execCommand('copy');
    
    textarea.remove();
    
    alert("Password copied");
});