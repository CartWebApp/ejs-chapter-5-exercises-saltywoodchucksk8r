require('./includes/scripts.js') // include the scripts used by the chapter

function dominantDirection(text) {
    let counted = countBy(text, char =>{
      let script = charecterScript(char.codePointAt(0))
      return script = ? script.direction: "none";
    }).filter(({name}=> name != "none");
    if (counted.length==0)return"itr";
    return counted.reduce(a,b)=> a.count > b.count?a:b).name;

  }
  
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl