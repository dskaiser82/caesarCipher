
console.log("Hi Danny")


function userInput(encodedString) {  //when user hits submit
  x = document.getElementById('myText')

      console.log(x.value)
      encodedString = x.value.toLowerCase();
      console.log(encodedString +"This is the encodedString")

 rot14(encodedString)
  //  $('.answer').append("YO")

}



function rot14(encodedString){

    var codedArr = encodedString.split(""); //string to array, Ivar's puzzle
    var decodedArr = []; //The Answer to Ivar's Puzzle
    // var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"
    // ,"q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j"
    // ,"k","l","m","n"];

    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"
    ,"q","r","s","t","u","v","w","x","y","z"];

        for (var i = 0; i < codedArr.length; i++) {
          if(alphabet.indexOf(codedArr[i])===-1){
            decodedArr.push(codedArr[i]);
          }
          else{
            for (var j = 0; j < alphabet.length; j++) {
              if(codedArr[i]===alphabet[j]){
                decodedArr.push(alphabet[(j+14)%26])
              }
            }
          }

        }
    // return decodedArr.join("");
    var joined = decodedArr.join("");
       $('.answer').append(joined)


}




// console.log(rot14("Pmz ftq vagdzqk ue ftq pqefuzmfuaz.  ymk kagd vagdzqk fa nqoayuzs m bdasdmyyqd nq rdgufrgx mzp abqz kagd qkqe fa m zqi imk ar ftuzwuzs."))
