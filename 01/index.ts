import input from './input.js';

const rows = input.trim().split('\n');

let left = [];
let right = [];

rows.forEach(row => {
    const [l, r] = row.split('   ');
    left.push(parseInt(l));
    right.push(parseInt(r));
})

left.sort();
right.sort();

const pairs = []

for (let i = 0; i < rows.length; i++) {
    pairs.push([left[i], right[i]]);
}

// Part 1
const total1 = pairs.reduce((acc, r) => {
    return acc + Math.abs(r[0] - r[1]);
}, 0);

console.log('Total part 1:', total1);

// Part 2
const total2 = left.reduce((acc, l) => {
    return acc + (l * right.filter(r => r === l).length);
}, 0);

console.log('Total part 2:', total2);