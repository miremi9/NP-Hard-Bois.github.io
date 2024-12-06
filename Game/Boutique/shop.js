let a = 100; b = 100; c = 100; d = 100; e = 100;
const A = {
   Item1: 3,
   Item2: 8,
   Item3: 10,
};
const B = {
   Item1: 5,
   Item2: 11,
   Item3: 12,
};
const C = {
    Item1: 7,
    Item2: 7,
    Item3: 18,
 };
 const D = {
    Item1: 9,
    Item2: 4,
    Item3: 3,
 };
 const E = {
    Item1: 11,
    Item2: 10,
    Item3: 8,
 };

function afficherCreature() {
document.getElementById("a").textContent = a;
document.getElementById("b").textContent = b;
document.getElementById("c").textContent = c;
document.getElementById("d").textContent = d;
document.getElementById("e").textContent = e;
}

function acheterItem(item){
    if (a >= A[item] && b >= B[item] && c>= C[item] && d >= D[item] && e>= E[item]) {
        a -= A[item];
        b -= B[item];
        c -= C[item];
        d -= D[item];
        e -= E[item];
    } 
    afficherCreature();
}
afficherCreature();