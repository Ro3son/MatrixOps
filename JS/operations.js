let element;

export const addition = (...args) => {

    element = args[0];

    const sum = [];

    for (let i = 0; i < 4; i++) {

        sum.push(element[i] + element[i + 4]);

    };

    document.getElementById('ma11_mb11').textContent = sum[0];
    document.getElementById('ma12_mb12').textContent = sum[1];
    document.getElementById('ma21_mb21').textContent = sum[2];
    document.getElementById('ma22_mb22').textContent = sum[3];
};

export const multiplyByScalar = (...args) => {

    const scalar = document.getElementById('scalar-k');

    let k = scalar.value;

    if (k == '' || k == null) {

        return false;

    } else {
        k = parseInt(k);
    }

    element = args[0];

    const product = [];

    for (let i = 0; i < 6; i++) {

        product.push(k * element[i]);

    };

    document.getElementById('k').textContent = k;

    document.getElementById('p11').textContent = product[0];
    document.getElementById('p12').textContent = product[1];
    document.getElementById('p21').textContent = product[2];
    document.getElementById('p22').textContent = product[3];
    document.getElementById('p31').textContent = product[4];
    document.getElementById('p32').textContent = product[5];
};
