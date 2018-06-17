let number = prompt('Введите число');
number = parseInt(number);

(number >= 0) ? document.body.innerHTML = number : document.body.innerHTML = -number;