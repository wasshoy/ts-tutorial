// Number: JSと同様に浮動小数点やBigIntegerもある
// BigIntegerはbigint型、他はnumber型
// 16進数や10進数に加え、ECMAScript2015から導入された2進数と8進数もサポートしている
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;
console.log(decimal, hex, octal, big);