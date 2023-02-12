function declination(num, one, two, five) {
    let n = Math.abs(num);// натуральное число
    n %= 100; // модуль от 100.
    if(n >= 5 && n <= 20) return five // 5...19
    if(n === 1) return one // 1
    n %= 10; // модуль от 10
    if(n > 1 && n < 5 ) return two // 2..4
    return five
}

console.log('27 ' + declination(27,'бревно','бревна','брёвен'))