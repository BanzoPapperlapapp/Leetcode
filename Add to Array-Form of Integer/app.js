function arrToInt (num, k){
    let res = 0;
    let counter = 0
    let temp = [...'' + k].map(Number).reverse()
    const result = [...num].reverse().map((el,i) => { // [0] 1
        if(el + (temp[i] | 0)  + counter >= 10){
            if(counter !== 0) {

            } else {

            }
            res = (el + (temp[i] | 0)  + counter) % 10
            counter ? counter = 0 : counter = 1
            return res
        } else {
            res = el + (temp[i] | 0) + counter
            counter = 0
            return res
        }
    }).reverse()
    return counter ? [1,...result] : result
}

console.log(arrToInt([9,9,9,9,9,9,9,9,9,9],1))