// (1) Given a string, use your favourite javascript loop to 
//capitalise the first letter of each word, whilst making each other letter lowercase


str = "tESTING testing";


function capitalize(str)
{
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

console.log(capitalize(str));


//   /\w\S*/g
// returns individual words
//   ########################
//  / Begin expression grouping
// \w  all letters
// \S* exclude 0 or more white space
// / ends expression grouping
// g *global* repeats the previous group until finished
//   ########################