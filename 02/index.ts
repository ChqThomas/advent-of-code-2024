import input from './input.js';

const rows = input.trim().split('\n');


function isValid(data: number[]) {
    let ascending = null;
    let valid = true;
    for (let i = 1; i <= data.length; i++) {
        let diff = data[i] - data[i - 1];
        if (i === 1) {
            ascending = Math.sign(diff);
        }
        if (ascending === 0
            || (Math.abs(diff) < 1 || Math.abs(diff) > 3)
            || (ascending === 1 && data[i] < data[i - 1])
            || (ascending === -1 && data[i] > data[i - 1])
        ) {
            valid = false;
            break;
        }
    }

    return valid;
}

const valid = rows.filter(row => {
    const data: number[] = row.split(' ').map(c => parseInt(c));
    return isValid(data);
})

// Part 1
console.log('Total part 1:', valid.length);

// Part 2
const valid2 = rows.filter(row => {
    const data: number[] = row.split(' ').map(c => parseInt(c));
    let valid = isValid(data);

    if (!valid) {
        for (let i = 0; i < data.length; i++) {
            if (isValid(data.toSpliced(i, 1))) {
                valid = true;
                break;
            }
        }
    }

    return valid;
})

console.log('Total part 2:', valid2.length);