function magicMatrices(input) {
    let isMagic = true;
    let lastRowSum = 0;
    let lastColSum = 0;

    for (let i = 0; i < input.length; i++) {
        let currentRowSum = input[i].reduce((a, b) => a + b);
        lastRowSum = i == 0 ? currentRowSum : lastRowSum;
        let currentColSum = 0;
        for (let j = 0; j < input.length; j++) {
            currentColSum += input[j][i];
        }
        lastColSum = i == 0 ? currentColSum : lastColSum;
        if (lastRowSum != currentRowSum || lastColSum != currentColSum) {
            isMagic = false;
            break;
        }
    }
    console.log(isMagic);
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);