function validate (s) {
    const arr = [...s]
    const tempArr = [] // ( ( (
    const open = ['(','{','[']
    for(let i = 0; i < arr.length;i++) {
        if(open.includes(arr[i])) {
            tempArr.push(arr[i])
        } else {
            if(arr[i] === '}' && tempArr[tempArr.length - 1] !== '{') return false
            if(arr[i] === ')' && tempArr[tempArr.length - 1] !== '(') return false
            if(arr[i] === ']' && tempArr[tempArr.length - 1] !== '[') return false
            tempArr.length -= 1
        }
    }

    return !tempArr.length
}

console.log(validate('((({)))'))