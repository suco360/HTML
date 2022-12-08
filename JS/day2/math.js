function solution(answers) {
    var answer = [];
    n1 = [1, 2, 3, 4, 5]*2000
    n2 = [2, 1, 2, 3, 2, 4, 2, 5]
    n3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    train = [n1, n2, n3]
    score = []

    for (j = 0; j < train.length; j++) {
        // console.log(j)
        s = 0
        for (i = 0; i < answers.length; i++) {
            // console.log(i)
            // console.log(train[j][i])
            if (answers[i] == train[j][i]) {
                s += 1
            }
        }
        // console.log(s)
        score.push(s)
    }
    // console.log(score)

// return answer;
}
answers = [1, 2, 3, 4, 5]
// solution(answers)

n1 = [1, 2, 3, 4, 5]
n2 = [2, 1, 2, 3, 2, 4, 2, 5]
n3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
train = [n1, n2, n3]
score = []
for (j = 0; j < train.length; j++) {
    // console.log(j)
    s = 0
    for (i = 0; i < answers.length; i++) {
        if (answers[i] == train[j][i % train[j].length]) {
            s += 1
        }
    }
    score.push(s)
}
// console.log(score)
console(score.max())