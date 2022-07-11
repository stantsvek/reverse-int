module.exports = function reverse (n) {
	n = Math.abs(n);
	const reverseDigits =  n.toString().split("").reverse().join("");
	return +reverseDigits;
}
