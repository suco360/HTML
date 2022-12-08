// console.log("Hello world")

// const arr = [1, 2, 3, 4]
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

function addNum(x, y) {
    return x + y;
}

function subNum(x, y) {
    return x - y;
}

function mulNum(x, y) {
    return x * y;
}

function divNum(x, y) {
    return x / y;
}

function cal(odd, x, y) {
    let result;
    if(odd === 'add') {
        result = addNum(x, y)
        oper = '+'
    }
    else if(odd === 'sub') {
        result = subNum(x, y)
        oper = '-'
    }
    else if(odd === 'mul') {
        result = mulNum(x, y)
        oper = '*'
    }
    else if(odd === 'div') {
        result = divNum(x, y)
        oper = "/"
    }

    console.log(x + oper + y + '=' + result)
}
// console.log(cal(addNum, 1, 2))
// console.log(cal(subNum, 1, 2))
// console.log(cal(mulNum, 1, 2))
// console.log(cal(divNum, 1, 2))

// cal('add',1,2)
// cal('sub',1,2)
// cal('mul',1,2)
// cal('div',1,2)

// // console.log(x + '+' + y + '=' + cal(addNum, x, y));
// // console.log(x + '-' + y + '=' + cal(subNum, x, y));
// // console.log(x + '*' + y + '=' + cal(mulNum, x, y));
// // console.log(x + '/' + y + '=' + cal(divNum, x, y));

var odd = 'div', x = 1, y = 2
cal(odd, x, y)

function add(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}

function sub(...args) {
    let sub = args[0];
    for (let argsub of args.slice(1, )) {
        sub -= argsub;
    }
    return sub
}

function mul(...args) {
    let mul = 1;
    for (let argmul of args) {
        mul *= argmul;
    }
    return mul
}

function div(...args) {
    let div = args[0];
    for (let argdiv of args.slice(1, )){
        div /= argdiv;
    }
    return div
}
console.log(add(1, 2))
console.log(sub(1, 2))
console.log(mul(1, 2))
console.log(div(1, 2))

function cal2(odd, ...args) {
    let result;
    if(odd === 'add') {
        result = add(...args)
    }
    else if(odd === 'sub') {
        result = sub(...args)
    }
    else if(odd === 'mul') {
        result = mul(...args)
    }
    else if(odd === 'div') {
        result = div(...args)
    }

    console.log(result)
}

cal2('mul', 1, 2, 3, 4)
