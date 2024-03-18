// scripts.js

const data = {
    lists: [
        ['first', [15, 11, 13, 7, 5]],
        ['second', [2, 6, 8, 4, 14, 12, 10]],
        ['third', [9, 3, 1]],
    ]
}

// Only edit below
//this puts everything in list in the result const
const result = []

//
const extractBiggest = () => {
    const lastFirst = data.lists[0][1][data.lists[0][1].length-1]
    const lastSecond = data.lists[1][1][data.lists[1][1].length-1]
    const lastThird = data.lists[2][1][data.lists[2][1].length-1]
console.log (lastFirst, lastSecond, lastThird)


    if (lastFirst >= lastSecond && lastFirst >= lastThird) {
        return data.lists[0][1].pop()

    } else if (lastSecond >= lastFirst && lastSecond >= lastThird) {
        return data.lists[1][1].pop()
    } else {
        return data.lists[2][1].pop()
    }
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)
