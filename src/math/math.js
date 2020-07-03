import * as R from 'ramda'

// random from MIN to MAX //


const ONES = 'ONES';
const TWOES = 'TWOES';
const THREES = 'THREES';
const FOURS = 'FOURS';
const FIVES = 'FIVES';

const SIXES = 'SIXES';
const SUB_TOTAL = 'SUB_TOTAL';
const BONUS = 'BONUS';
const THREE_OF_A_KIND = 'THREE_OF_A_KIND';
const FOUR_OF_A_KIND = 'FOUR_OF_A_KIND';

const FULL_HOUSE = 'FULL_HOUSE';
const SMALL_STRAIGHT = 'SMALL_STRAIGHT';
const LARGE_STRAIGHT = 'LARGE_STRAIGHT';
const YACHT = 'YACHT';
const CHANCE = 'CHANCE';
const TOTAL_SCORE = 'TOTAL_SCORE';


export function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

export const makeNewDiceValue = (dicesValue) => {
    let newDicesValue = dicesValue;
    let newValue;
    for (let i = 1; i < 6; i++) {
        newValue = randomInteger(1, 6);
        if (newDicesValue[i].checked) {
            newDicesValue = R.assocPath(
                [i, 'value'],
                newValue,
                newDicesValue
            );
        } else {
            newDicesValue = R.assocPath(
                [i, 'value'],
                newDicesValue[i].value,
                newDicesValue
            );
        }
    }
    return newDicesValue;
}

export const getDiceValue = (dicesValue, diceNumber) => {
    return dicesValue[diceNumber+1].value
}

export const getDicesValues = (dicesValue) => {
    const dicesValuesAsArray = [];
    for (let i = 0; i < 5; i++) {
        dicesValuesAsArray.push(getDiceValue(dicesValue, i));
    }
    return dicesValuesAsArray;
}


// считает и пишет шанс
export const  getChance = (dicesValue) => {
    const dicesValues = getDicesValues(dicesValue);
    const result = dicesValues.reduce(((accumulator, currentValue) => accumulator + currentValue));
    return result
}

// считает суммы
export const getSum = (i, dicesValue) => {
    const dicesValues = getDicesValues(dicesValue);
    const result =  (i * dicesValues.reduce((amount, currentValue) => currentValue === i ? ++amount : amount, 0));
    let type;
    switch (i) {
        case 1: {
            return result
        }
        case 2: {
            return result
        }
        case 3: {
            return result
        }
        case 4: {
            return result
        }
        case 5: {
            return result
        }
        case 6: {
            return result
        }
        default:
            return;
    }

}

// сортировка по порядку
export const compareNumeric = (a, b) => {
    return a - b;
}

// оставляет только уникальные значения
export const unique = (arr) => {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        obj[str] = true; // запомнить строку в виде свойства объекта
    }
    return Object.keys(obj); // или собрать ключи перебором для IE8-
}

export const uniqueArray = (arr) => {
    let arrayCopy = [];
    for (let key in arr) {
        if (arr[key].includes) { }
    }
}


// функция сортирует и удаляет повторяющие элементы
export const uniq = (a) => {
    return a.sort().filter(function (item, pos, ary) {
        return !pos || item != ary[pos - 1];
    })
}
// summ повтор элементов

export const countSumOfRepeatElemensInDices = (repeatedAmount, dicesValue) => {
    let result = 0;
    let amount = 1;
    const dicesValueAsArray = getDicesValues(dicesValue).sort();

    dicesValueAsArray.reduce((prevValue, currValue) => {
        if (currValue === prevValue) { amount++; }
        else { amount = 1; }
        if (amount === repeatedAmount) { result = currValue * repeatedAmount; }
        return currValue;
    });
    return result
}

export const getSet = (repeatedAmount, dicesValue) => {

    let result = countSumOfRepeatElemensInDices(repeatedAmount, dicesValue)

    if (repeatedAmount === 3) {
        return result
    } else if (repeatedAmount === 4) {
        return result
    }

}

export const  getYacht = (repeatedAmount, dicesValue) => {
    let yachtAnswer = countSumOfRepeatElemensInDices(repeatedAmount, dicesValue);
    let result;
    if (yachtAnswer !== 0) {
         result = 50;
    } else {
        result = 0;
    }
    return result
}

export const getSmallStreet = (dicesValue) => {
    let dicesValues = getDicesValues(dicesValue);
    let i = 0; // для 1 2 3 4
    let result;
    dicesValues = uniq(dicesValues);

    if (dicesValues[i] === (dicesValues[i + 1] - 1) && dicesValues[i + 1] === (dicesValues[i + 2] - 1) && dicesValues[i + 2] === (dicesValues[i + 3] - 1)) {
        // console.log(dicesValues + 'стрит 1-4');
        result = 25;
    } else {
     result = 0;
    }
    return result
}

export const  getBigStreet =(dicesValue)  => {
    let dicesValues = getDicesValues(dicesValue);
    let i = 0; // для 1 2 3 4
    let result;

    dicesValues = uniq(dicesValues);

    if (dicesValues[i] === (dicesValues[i + 1] - 1) && dicesValues[i + 1] === (dicesValues[i + 2] - 1) && dicesValues[i + 2] === (dicesValues[i + 3] - 1) && dicesValues[i + 3] === (dicesValues[i + 4] - 1)) {
        // console.log(cubesValues + 'стрит 1-5');
        result = 30;
    } else {
        result = 0;
    }
    return result
}


export const  getFullHouse = (dicesValue) => {
    let repeatedAmount = 4;
    let dicesValues = getDicesValues(dicesValue);
    let result;
    let oneAnswer = countSumOfRepeatElemensInDices(repeatedAmount, dicesValue); // проверим, есть ли сет в массиве костей
    let dubleAnswer = countSumOfRepeatElemensInDices(repeatedAmount-1, dicesValue);
    if (oneAnswer === 0 && uniq(dicesValues).length === 2) {
        result= 40;
    } else {
        result = 0;
    }
    return result
}



export const getBonus = (combinations) =>{
    let answer = getSubTotal(combinations)
    let result = 0;
    if (answer >62) {
        result = 35;
        return result
    }
    return result

}

export const getSubTotal = (combinations) => {
    let result = 0;
    for (let i = 1; i < 7; i++) {
        let answer = combinations[i].value;
        result = result + answer;
    }
    return result
}

export const getTotal = (combinations) =>{
    let result = 0;
    for (let i = 1; i < 15; i++) {
        let answer = combinations[i].value
        result = result + answer;
    }

    return result
}



// функция проверяет на число и если число, то возвращает 0
export const noNan = (el) => {
    if (Number.isNaN(el) === false) {
        return el;
    } else {
        return el = 0;
    }
}



export const getResultForCurrentCombination = (currentCombinationdType, dicesValue = {}, combinations) => {
    switch(currentCombinationdType) {
        case ONES: {
            return getSum(1, dicesValue)
        }
        case TWOES: {
            return getSum(2, dicesValue)
        }
        case THREES: {
            return getSum(3, dicesValue)
        }
        case FOURS: {
            return getSum(4, dicesValue)
        }
        case FIVES: {
            return getSum(5, dicesValue)
        }
        case SIXES: {
            return getSum(6, dicesValue)
        }
        case SUB_TOTAL: {
            return getSubTotal(combinations)
        }
        case BONUS: {
            return getBonus(combinations)
        }
        case THREE_OF_A_KIND: {
            return getSet(3, dicesValue)
        }
        case FOUR_OF_A_KIND: {
            return getSet(4, dicesValue)
        }
        case FULL_HOUSE: {
            return getFullHouse(dicesValue)
        }
        case SMALL_STRAIGHT: {
            return getSmallStreet(dicesValue)
        }
        case LARGE_STRAIGHT: {
            return getBigStreet(dicesValue)
        }
        case YACHT: {
            return getYacht(5, dicesValue)
        }
        case CHANCE: {
            return getChance(dicesValue)
        }
        case TOTAL_SCORE: {
            return getTotal( combinations)
        }

        default:
            return 0;
    }
}

export const getResultForAllCombination = (dicesValue = {}, combinations) => {

    let possibleCombinations = combinations;
    // debugger
    for (let i =1; i <17; i++) {
        if (possibleCombinations[i].canChange) {
            let result = null

            switch(i) {
                case 1: {
                    result= getSum(1, dicesValue)
                    break;

                }
                case 2: {
                     result = getSum(2, dicesValue)
                    break
                }
                case 3: {
                     result = getSum(3, dicesValue)
                    break
                }
                case 4: {
                     result = getSum(4, dicesValue)
                    break
                }
                case 5: {
                     result = getSum(5, dicesValue)
                    break
                }
                case 6: {
                     result =  getSum(6, dicesValue)
                    break
                }
                case 8: {
                     result = getSet(3, dicesValue)
                    break
                }
                case 9: {
                     result = getSet(4, dicesValue)
                    break
                }
                case 10: {
                     result = getFullHouse(dicesValue)
                    break
                }
                case 11: {
                     result = getSmallStreet(dicesValue)
                    break
                }
                case 12: {
                     result = getBigStreet(dicesValue)
                    break
                }
                case 13: {
                     result = getYacht(5, dicesValue)
                    break
                }
                case 14: {
                     result = getChance(dicesValue)
                    break
                }
                default:
                     result = 0;
            }
            possibleCombinations = R.assocPath(
                [i, 'possibleValue'],
                result,
                possibleCombinations
            );

        } else {
            let result = 0;
            possibleCombinations =R.assocPath(
                [i, 'possibleValue'],
                result,
                possibleCombinations
            );
        }
    }

    return possibleCombinations;

}

