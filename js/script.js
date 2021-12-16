const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

function generateID() {
    const arrOfNumber = [];

    function generateNumber() {
        const randomNum = getRandomNumber();

        if(arrOfNumber.length === 100) return arrOfNumber;

        if(arrOfNumber.includes(randomNum)) {
            return generateNumber();
        }

        arrOfNumber.push(randomNum);
        return arrOfNumber;
    }

    return generateNumber;
}
const idGenerator = generateID();

let result;

for (let i = 0; i <= 100; i++){
    result = idGenerator();
}
// result = result.sort((a,b) => a - b); - сортировка для проверки
console.log(result);