function solution(s) {
    var answer = ''
    slist = s.split(' ')
    console.log(slist)
    for (word of slist) {
        console.log(word.length)
        for (i = 0; i < word.length; i++) {
            if (i % 2 == 1) {
                answer += word[i].toLowerCase()
            }
            else if (i % 2 == 0) {
                answer += word[i].toUpperCase()            
            }
        }

        
    answer += ' '
    }
    answer = answer.slice(0, -1)
    console.log(answer)
}
s = "try hello   world";
solution(s)
// var slist = s.split(' ')
// console.log(slist)
