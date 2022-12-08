// function solution(array, commands) {
//     // console.log(array, commands)
//     array2 = array.splice(commands[0]-1, commands[1]-(commands[0]-1))
//     // console.log(array2)
//     array2.sort()
//     // console.log(array2)
//     ret = array2[commands[2]-1]
//     console.log(ret)
// }

// solution([1, 5, 2, 6, 3, 7, 4], [2, 5, 3])
// solution([1, 5, 2, 6, 3, 7, 4], [4, 4, 1])
// solution([1, 5, 2, 6, 3, 7, 4], [1, 7, 3])

function solution2(array, commands) {
    answer = [];
    for (var command of commands) {
        // console.log(command)
        // console.log(array)
        array1 = array.slice()
        array2 = array1.splice(command[0]-1, (command[1]-(command[0]-1)))
        // console.log(array2)
        array2.sort((a, b) => a - b)
        // sort()는 유니코드 순서로 정렬되기 때문에 한 자리수는 상관 없으나 두 자리수가 되면 [1, 10, 3, 4, 8]과 같이 정렬된다
        // 그래서 compareFunction을 사용하여야 한다.
        // numbers.sort((a, b) => a - b)
        // numbers.sort((a, b) => b - a)

        // console.log(array2)
        ret = array2[command[2]-1]
        answer.push(ret)
        // console.log(ret)
    }
    console.log(answer)
}
solution2([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]);