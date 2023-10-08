for (let i = 0; i < 100; i++) {

    const n = i + 1;

    const gridDOMElement = document.querySelector('.grid');

    if (n % 3 === 0 && n % 5 === 0){
        console.log('FizzBuzz');

        let divFizzBuzz = document.createElement('div');
        divFizzBuzz.className = 'fizzbuzz';
        divFizzBuzz.textContent = 'FizzBuzz';

        gridDOMElement.append(divFizzBuzz);

    } else if (n % 3 === 0){
        console.log('Fizz');

        let divFizz = document.createElement('div');
        divFizz.className = 'fizz';
        divFizz.textContent = 'Fizz';

        gridDOMElement.append(divFizz);

    } else if (n % 5 === 0){
        console.log('Buzz');

        let divBuzz = document.createElement('div');
        divBuzz.className = 'buzz';
        divBuzz.textContent = 'Buzz';

        gridDOMElement.append(divBuzz);

    } else {
        console.log(n);

        let divN = document.createElement('div');
        divN.className = 'box';
        divN.textContent = n;

        gridDOMElement.append(divN);
    }
}