import { requestAndFetchAdd, requestAndFetchScalar } from "./xmlRequest.js";
import { InputsForAddition, InputsForMultiplyByScalar } from "./inputs.js";

const createClearButton = (element) => {

    const clearButton = document.createElement('button');

    clearButton.textContent = 'Limpar';
    clearButton.style.padding = '5px';
    clearButton.style.cursor = 'pointer';

    clearButton.addEventListener('click', () => {

        element.remove();
        window.location.reload();
    });

    element.appendChild(clearButton);
};

const createAndAppendDiv = (element) => {

    const createDiv = document.createElement('div');

    createDiv.style.margin = '40px';
    createDiv.style.padding = '40px';
    createDiv.style.borderRadius = '10px';
    createDiv.style.backgroundColor = '#ffffff';
    createDiv.style.width = '25%';

    if (element.className == 'div__container__output-add') {

        createDiv.id = 'div__output-add';

        element.appendChild(createDiv);

    } else if (element.className == 'div__container__output-scalar') {

        createDiv.id = 'div__output-scalar';

        element.appendChild(createDiv);
    };
};

let disabled = true;

const buttonAdd = document.querySelector('.button__addition');
buttonAdd.addEventListener('click', (event) => {

    event.preventDefault();

    const element_div_add = document.querySelector('.div__container__output-add');

    if (disabled) {
        createAndAppendDiv(element_div_add);
        requestAndFetchAdd();
        InputsForAddition();
        createClearButton(element_div_add);
        event.target.disabled = true;
    };
});

const buttonScalar = document.querySelector('.button__multiply-by-scalar');
buttonScalar.addEventListener('click', (event) => {

    event.preventDefault();

    const element_div_scalar = document.querySelector('.div__container__output-scalar');

    if (disabled) {
        createAndAppendDiv(element_div_scalar);
        requestAndFetchScalar();
        InputsForMultiplyByScalar();
        createClearButton(element_div_scalar);
        event.target.disabled = true;
    };
});
