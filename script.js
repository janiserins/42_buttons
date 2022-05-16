for (let number = 1; number <= 42; number++) {
    let button = document.createElement('button');
    button.textContent = number;

    if (number % 5 == 0) {
        button.onclick = function (event) {
            this.textContent = Number(this.textContent) + 1;
        };
    }
    output(button);
}

/*
6 / 5 = 5/5 + 1/5
6 % 5 == 1;

8 % 3 = 2;
9 % 10 = 9;
9 % 5 = 4

9 / 5 = (5+4) / 5 = 5/5 + 4/5

2020 % 4 = 0

*/


/**
 * Pieveino elementu iekš elementa ar klasi "output"
 * @param DOMElement element 
 */
 function output (element) {
    document.querySelector('.output').append(element);
}
