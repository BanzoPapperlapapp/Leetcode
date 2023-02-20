function arrToInt (num, k){
    let i = num.length
    let res = []
    while(i-- > 0 || k){ // 1 > 0 || 997
        if(i >= 0) k += num[i] // пока есть массив
        res = [(k % 10),...res] //
        k = Math.floor(k / 10)
    }
    return res
    // let tempK = [...'' + k].map(Number).reverse()
    // let tempNum = [...num].reverse()
    // let counter = 0
    // let i = 0;
    // while(tempK.length > i || counter){ //
    //     if(((tempNum[i] | 0)  + (tempK[i] | 0) + counter) >= 10){
    //         if(!tempNum[i] && !tempK[i]) tempNum = counter
    //         tempNum[i] = ((tempNum[i] | 0)  + (tempK[i] | 0) + counter) % 10
    //         counter = 1
    //         i += 1
    //     } else {
    //         tempNum[i] = (tempNum[i] | 0) + (tempK[i] | 0) + counter
    //         counter = 0
    //         i += 1
    //     }
    //
    // }
    // return tempNum.reverse()
    // const result = [...num].reverse().map((el,i) => {
    //     if(el + (temp[i] | 0)  + counter >= 10){
    //         res = (el + (temp[i] | 0)  + counter) % 10
    //         counter = 1
    //         return res
    //     } else {
    //         res = el + (temp[i] | 0) + counter
    //         counter = 0
    //         return res
    //     }
    // }).reverse()
    // return counter ? [1,...result] : result
}

console.log(arrToInt([7],993))