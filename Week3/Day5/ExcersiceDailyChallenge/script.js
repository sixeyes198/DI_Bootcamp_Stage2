//stars daily challenge
// this is one way
let stars = "";
for(let i = 1; i<= 6; i++){
    stars += "*";
    console.log(stars);
}
 

//this is another way nested loops

for(let i=1;i<=6;i++){
    let stars ="";
    for(let j = 1;j <= i;j++){
        stars += "* ";
    }
    console.log(stars);
}