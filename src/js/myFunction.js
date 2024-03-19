export default function orderByProps(object, sortirovka) {
    const result = [];

    sortirovka.forEach((elem) => {
        if (elem in object) {
            result.push({key: elem, value: object[elem]});
        } else {
            throw new Error('нет такого элемента');
        }
        
    });

    Object.keys(object).sort().forEach((elem) => {
        if (!sortirovka.includes(elem)) {
            result.push({key: elem, value: object[elem]});
        }
    });

return result;
}
