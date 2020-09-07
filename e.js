function sum2(x, total) {
    if (x === 1) {
        return x + total;
    }
    return sum2(x - 1, 1 + total);
}
sum2(1000000, 0)