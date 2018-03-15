function catchThePirates (array){
//define checker functions to check the valid parts of the pirate's face
    const valid= {
        validEyes: function (eyes){
            if( eyes === ";"){
                return "valid";
            }else if(eyes ===  "8"){
                return "valid"; 
            }
            return "invalid";
        },
        validNose: function(nose){
            if(nose === "-")
            {
                return "valid";
            }else if(nose === "~"){
                return "valid";
            }
            return "invalid";
        },
        validMouth: function(mouth) {
            if(mouth === "|"){
                return "valid";
            }else if(mouth === ")"){
                return "valid";
            }
            return "invalid";               
        }
    };
//define the total variable to count the valid faces by sum them this var
    var total = 0;
//loop over the array
    for(var i = 0; i < array.length; i++)
    {
//check the length of the face if equal 2 so it is without nose so we will
//use just the eyes and mouth checkers to increase the total with 1
        if(array[i].length == 2)
        {
            if(valid.validEyes(array[i][0]) === "valid" && valid.validMouth(array[i][1]) === "valid")
            {
                valid.validEyes(array[i][0])
                total++;
            }
        }
//check if the face is valid by using the checkers in the valid object
        else if(array[i].length <= 3 && valid.validEyes(array[i][0]) === "valid" && valid.validNose(array[i][1]) === "valid" &&  valid.validMouth(array[i][2]) === "valid")
        {
            total ++;
        }
        console.log("Hi","\n",array[i][0]," ",valid.validEyes(array[i][0]),"\n",array[i][1]," ",valid.validNose(array[i][1]),"\n",
        array[i][2],valid.validMouth(array[i][2]))
    }

    return total;
}

// function catchThePirates (array){
//     var total=0;
//     array.forEach(element => {
//         var newElem= element.split('');
//         if(newElem.length == 2)
//         {
//             if(newElem[0] === ";" || "8")
//             {
//                 if(newElem[1] === "|" || ")")
//                 {
//                     console.log(newElem[1])
//                     total++
//                 }
                
//             }
//         }
//         else if(newElem[0] === ";"){

//             if(newElem[1] === "-")
//             {
//                 if(newElem[2] ===  "|")
//                 {
//                     total++
//                 }
//             }
            
//         }
//     });
//     return total;
// }

