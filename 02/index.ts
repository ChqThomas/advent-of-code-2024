import input from './input.js';

const rows = input.trim().split('\n');

const valid = rows.filter(row => {
    const data: number[] = row.split(' ').map(c => parseInt(c));
    // console.log(data);
    let ascending = null;
    let valid = true;
    for (let i = 1; i <= data.length; i++) {
        let diff = data[i] - data[i - 1];
        if (i === 1) {
            ascending = Math.sign(diff);
            // console.log(ascending)
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
})

// Part 1
console.log('Total part 1:', valid.length);