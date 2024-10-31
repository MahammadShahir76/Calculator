let string = "";
let buttons = document.querySelectorAll('.button');//in place of querySelectorAll we can also use getElemntByclassName as well.document.querySelectorAll('.button') selects all elements with the class name 'button' from the current HTML document. The returned value is a collection of elements, not an array.
Array.from(buttons).forEach((button) => {//Array.from(buttons) converts the collection of elements, 'buttons', into an array. 
    button.addEventListener('click', (e) => {//e is just a parameter declared here
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});
