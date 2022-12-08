moves = [1, 5, 3, 5, 1, 2, 1, 4]
board = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]]
box = []
n = 0
// console.log(typeof moves)    
for (m of moves) {
    // console.log(m)
    for (i = 0; i < board.length; i++) {
        // console.log(i)
        // console.log(board[i][m-1])
        if (board[i][m-1] > 0) {
            last = box.pop()
            // console.log(last)
            if (board[i][m-1] == last) {
                n += 1
            }
            else {
                box.push(last, board[i][m-1])
            }
            board[i][m-1] = 0
            break  
        }
    }
    // console.log(box)
}
console.log(box)
console.log(board)
console.log(n*2)
