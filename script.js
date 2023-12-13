function toCase(text) {
  // write your code here
	const upper = text.toUpperCase();
	const lower = text.toLowerCase();
	const ans = lower+"-"+upper;
	return ans ;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
