const hello = document.getElementById('hello'); 

const redp = document.createElement('p'); 
redp.textContent = 'Hey I\'m red!'; 
redp.style.color = 'red'; 
hello.appendChild(redp); 

const blueh3 = document.createElement('h3'); 
blueh3.textContent = 'I\'m a blue h3!'; 
blueh3.style.color = 'blue'; 
hello.appendChild(blueh3); 

const funDiv = document.createElement('div'); 
funDiv.style.border = 'dotted black';  
funDiv.style.backgroundColor = 'pink'; 
    const h1 = document.createElement('h1'); 
    h1.textContent = 'I\'m in a div!'; 
    funDiv.appendChild(h1); 

    const ptoo = document.createElement('p'); 
    ptoo.textContent = 'ME TOO!'; 
    funDiv.appendChild(ptoo); 
hello.appendChild(funDiv); 