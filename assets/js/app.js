// Benifites of Arrow functions are it is shorter way to write Function efficient..
// we can not use this keyword in Arrow function...
//Array.from() is a static property which returns Array from Object/DOM Token List...






const changeImg = document.getElementById("changeImg");
const allDivs = Array.from(document.querySelectorAll(".all"));




const onColorChange = (e) => {
	
	// console.log(e.target.value);
	
	let getClass = "." + e.target.value;
	console.log(getClass);
	
	allDivs.forEach(div => div.classList.add('d-none'))
	
	let selectedDivs = Array.from(document.querySelectorAll(getClass));
	console.log(selectedDivs);
	selectedDivs.forEach(div => div.classList.remove('d-none'))
}



changeImg.addEventListener("change", onColorChange);



