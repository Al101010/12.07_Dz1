import orderByProps from '../myFunction';

test('теститруем orderByProps', () => {
    const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}

    expect(orderByProps(obj, ['name', 'level'])).toEqual(
        [
            {key: "name", value: "мечник"}, // порядок взят из массива с ключами
            {key: "level", value: 2}, // порядок взят из массива с ключами
            {key: "attack", value: 80}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
            {key: "defence", value: 40}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
            {key: "health", value: 10} // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
        ]
    );
});

test('теститруем orderByProps-Error', () => {
    const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}

    expect(() => orderByProps(obj, ['name', 'НЕТ в объекте'])).toThrow('в объекте НЕТ такого элемента'); // работает(вставил "() => " и всё заработало)
    // expect(orderByProps(obj, ['name', 'НЕТ в объекте'])).toThrow('в объекте НЕТ такого элемента');    // не работает 
});