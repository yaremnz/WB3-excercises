
s = "abc" // in memory array list ['a', 'b', 'c', '\0']

console.log(s.length) // length 3 (size might be ) 2 bytest per letter plust 1 for null string terminator

console.log(s.indexOf("c")) // 2

console.log(s.indexOf("x")) // -1

console.log(s.slice(1,3)) // bc startIndex, stopIndex (upto but not including the stop position)
console.log
