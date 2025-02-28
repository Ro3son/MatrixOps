import { addition, multiplyByScalar } from "./operations.js";

export const InputsForAddition = () => {

    const input_ma = document.getElementsByClassName('input-ma');
    const input_mb = document.getElementsByClassName('input-mb');

    const [a11, a12, a21, a22] = input_ma;
    const [b11, b12, b21, b22] = input_mb;

    let matrix_a = [
        [a11.value, a12.value],
        [a21.value, a22.value]
    ];

    let matrix_b = [
        [b11.value, b12.value],
        [b21.value, b22.value]
    ];

    const matricesCombined = [...matrix_a, ...matrix_b];

    const valuesForAddition = [];

    for (let array of matricesCombined) {

        for (let value of array) {

            if (value === '') {

                throw new Error('Empty Input Field.');

            } else {

                valuesForAddition.push(parseInt(value));
            };
        };
    };

    document.getElementById('ma11').textContent = matrix_a[0][0];
    document.getElementById('ma12').textContent = matrix_a[0][1];
    document.getElementById('ma21').textContent = matrix_a[1][0];
    document.getElementById('ma22').textContent = matrix_a[1][1];

    document.getElementById('mb11').textContent = matrix_b[0][0];
    document.getElementById('mb12').textContent = matrix_b[0][1];
    document.getElementById('mb21').textContent = matrix_b[1][0];
    document.getElementById('mb22').textContent = matrix_b[1][1];

    addition(valuesForAddition);
};

export const InputsForMultiplyByScalar = () => {

    const input_multiply_by_scalar = document.getElementsByClassName('input-mbs-a');

    const [mta11, mta12, mta21, mta22, mta31, mta32] = input_multiply_by_scalar;

    let matrix_a_multiply_by_scalar = [
        [mta11.value, mta12.value],
        [mta21.value, mta22.value],
        [mta31.value, mta32.value]
    ];

    const valuesForMultiplyByScalar = [];

    for (let array of matrix_a_multiply_by_scalar) {

        for (let value of array) {

            if (value === '') {

                throw new Error('Empty Input Field.');

            } else {

                valuesForMultiplyByScalar.push(parseInt(value));
            };
        };
    };

    document.getElementById('mas11').textContent = matrix_a_multiply_by_scalar[0][0];
    document.getElementById('mas12').textContent = matrix_a_multiply_by_scalar[0][1];
    document.getElementById('mas21').textContent = matrix_a_multiply_by_scalar[1][0];
    document.getElementById('mas22').textContent = matrix_a_multiply_by_scalar[1][1];
    document.getElementById('mas31').textContent = matrix_a_multiply_by_scalar[2][0];
    document.getElementById('mas32').textContent = matrix_a_multiply_by_scalar[2][1];

    multiplyByScalar(valuesForMultiplyByScalar);
};