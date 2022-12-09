let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    return cats.push(name);
}
function destructivelyPrependCat(name){
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    return cats.pop();
}
function destructivelyRemoveFirstCat(){
    return cats.shift();
} 
function appendCat(name){
    cats.push(name);
    let newCats = [...cats];
    cats.splice(-1,1);
    return newCats;
}  
function prependCat(name){
    cats.unshift(name);
    let newCats = [...cats];
    cats.splice(0,1);
    return newCats;
}
function removeLastCat(){
    let newCats = cats.slice(0,2);
    return newCats;
}
function removeFirstCat(){
    let newCats = cats.slice(1,3);
    return newCats;
}