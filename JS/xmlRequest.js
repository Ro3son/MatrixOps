let xmlSerialize;

const serializer = new XMLSerializer();

const xmlSerializeAdd = (xml) => {

    const output_add = document.querySelector('#div__output-add');
    const mathML_elements_add = xml.querySelector('addition math');

    xmlSerialize = serializer.serializeToString(mathML_elements_add);

    output_add.innerHTML = xmlSerialize;

};

const xmlSerializeScalar = (xml) => {

    const output_scalar = document.querySelector('#div__output-scalar');
    const mathML_elements_scalar = xml.querySelector('scalar math');

    xmlSerialize = serializer.serializeToString(mathML_elements_scalar);

    output_scalar.innerHTML = xmlSerialize;

};

let xmlDoc;

const parser = new DOMParser();

const xmlRequest = new Request('math.xml');

const response = await fetch(xmlRequest);

const data = await response.text();

export const requestAndFetchAdd = async () => {

    xmlDoc = parser.parseFromString(data, "application/xml");

    xmlSerializeAdd(xmlDoc);
};

export const requestAndFetchScalar = async () => {

    xmlDoc = parser.parseFromString(data, "application/xml");

    xmlSerializeScalar(xmlDoc);
};
