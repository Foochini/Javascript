let para = "Computer sciense is the study of computation, algorithms, and how computers process information. It encompasses a wide range of topics, from the theoretical foundations of programming languages and algorithms to practical applications in software engineering and artificial intelligence. One key area in computer sciense is data structures, which are used to store and organize data efficiently, allowing for faster processing and retrieval. Another vital aspect is algorithms, which are sets of instructions that enable computers to solve complex problems quickly and effectively. In recent years, advancements in machine learning and artificial intelligence have revolutionized the field, allowing computers to learn from data and make predictions or decisions without explicit programming. Computer sciense also plays a critical role in cybersecurity, helping protect sensitive information from unauthorized access. As technology continues to evolve, the demand for skilled computer scientists grows, with applications in almost every industry. From healthcare to finance, entertainment, and beyond, computer sciense is essential in driving innovation, solving global challenges, and shaping the future of human progress. Its a field that requires logical thinking, problem solving skills, and a deep understanding of how technology can be leveraged to make the world more connected and efficient.";

let arr = para.split(' ');
console.log("Number of words: " + arr.length);


//remove "and"
let arr1 = arr.filter(word => word.toLowerCase() !== "and");
 
 //change "sciense" to "science"
 let arr2 = arr1.map(function(word){
	 if(word.toLowerCase() === "sciense"){
		 return "science"
	 }else{
		 return word;
	 }
 });
 
 //Find index of "healthcare"
 let index = arr2.findIndex(word => word.toLowerCase() === "healthcare");
 console.log("The index of 'healthcare' is: " + index);
 
 //Check if all word length < 10
let lessThan = arr2.every(word => word.length < 10);
if(lessThan){
	console.log("Every word has less than 10 characters.");
}else{
	console.log("Every word does not have less than 10 characters.");
}

//Check if any words characters = 14
let has14 = arr2.some(word => word.length === 14);
if(has14){
	console.log("There is a word with exactly 14 characters.");
}else{
	console.log("No word has exactly 14 characters.");
}

//Change information to info
let arr3 = arr2.map(function(word){
	 if(word.toLowerCase().includes("information")){
		 if(word.includes(".")){
			return "info."
		 }
		 return "info";
	 }else{
		 return word;
	 }
 });

//Final output
console.log(arr3.join(' '));