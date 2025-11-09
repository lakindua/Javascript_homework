const number = parseInt(prompt('Enter your number'));
const list = []

for (i = 2; i <= number; i++)
    if (number % i == 0 ){
        list.push(i)
        if (list.length === 1){
            document.querySelector('#prime').innerHTML = `${number} is a prime number!`
        }
        else {
            document.querySelector('#prime').innerHTML = `${number} is not a prime number!`
        }
    }
