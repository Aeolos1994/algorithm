
const TEST_SIZE1 = 10000000000;
const TEST_SIZE2 = 100000000;
let count1 = 0;
let count2 = 0;

console.time('once-cycle')
for (let i=0; i < TEST_SIZE1; i++) {
  count1 = count1 + 1;
}
console.timeEnd('once-cycle')


console.time('multiple-cycle')
for (let i=0; i < TEST_SIZE2; i++) {
  for( let j=0;j<100;j++) 
  count2 = count2 + 1;
}
console.timeEnd('multiple-cycle')
console.log(count1);
console.log(count2);