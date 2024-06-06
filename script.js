function firstNonRepeatedChar(str) {
 // Write your code here
	      let frequencyMap = {}
 for(let i=0;i<str.length;i++){
     let char = str[i]
     if(frequencyMap[char]){
         frequencyMap[char]+=1
     }
     else{
         frequencyMap[char] = 1
     }
 }
 for(key in frequencyMap){
     if(frequencyMap[key]==1){
         return key
     }
 }
 return null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
