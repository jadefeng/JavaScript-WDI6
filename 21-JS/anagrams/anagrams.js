
// var list = ["enlists", "google", "inlets", "banana"]
// var word = "listen"

// var areAnagrams = function(word, list){
// 	var c = false;
// 	for (i=0; i<list.length; i++) {
// 		if (list[i].length != word.length) return c ;
// 		var hashMap = {};
// 		var char
// 		var j
// 		for (j = 0; j < word.length; j++) {
// 			char = word[j];
// 			hashMap[char] = hasMap[char] !== undefined ? hashMap[char]+1 : 1;
// 		}
// 		for (j=0; j<list[i].length; j++) {
// 			char = list[i][j];
// 			if (hashMap[char] !== undefined) {
// 				if (hashMap[char] > 1)
// 					hashMap[char]--;
// 				else
// 					delete hashMap[char];
// 			} else {
// 				return c;
// 			}
// 		}
		
// 	}
// 	if (Object.keys(hashMap).length === 0) c = true;
//   	return c;
// }

// areAnagrams(word, list);

////////////////////////////////

// Tanya's Solution - unfinished

var words = ['google', 'enlists', 'inlets', 'banana'];

var anagram = function(check_word){
  for (var i = 0; i < words.length; i++){
    var word = words[i];
    var sorted = word.split("").sort().join("");
    
    var sorted_check_word = check_word.split("").sort().join("");

    if (sorted === sorted_check_word){
      console.log(word);
    }
  }
}

anagram('listen');

