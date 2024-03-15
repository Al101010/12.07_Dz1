export default function orderByProps(obiect) {
    const arr = Object.entries(obiect);
    return [{key: arr[0][0], value: arr[0][1]}, {key: arr[2][0], value: arr[2][1]}, {key: arr[3][0], value: arr[3][1]},{key: arr[4][0], value: arr[4][1]}, {key: arr[1][0], value: arr[1][1]}]
}