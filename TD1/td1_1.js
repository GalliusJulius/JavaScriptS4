/**
 * Created by canals on 25/01/2017.
 */
'use strict'

console.log("Bienvenue sur l'exercice 1, les méthodes possibles sont : min(a,b) / max (a,b) / compteur() / power(x,n) / powerRecur(x,n) ");

/* exercice 1.1 */

function min(a,b) {
    if(a > b){
        return b;
    }
    else{
        return a;
    }
}

let max = (a,b) => {
    if(a > b){
        return a;
    }
    else{
        return b;
    }
}

/* exercice 1.2 */

function compteur(){
    for (let i = 1; i <= 100; i++) {
        if(i%3==0){
            console.log(i+ " woueee");
        }
        else if(i%5 ==0){
            console.log(i+ " yoooooo");  
        }
        else if(i == 73){
            console.log(i+ " BINGO!");
        }
        else{
            console.log(i); 
        }
    }
}

/* exercice 1.3 */

function power(x,n){
    //gestion du cas dans lequel n =0
    if(n == 0){
        return 1;
    }
    let i = 1;
    let resultat = x;
    while(i<n){
        resultat = resultat *x;
        i++;
    }
    return resultat;
}

/* exercice 1.3 */

function powerRecur(x,n){
    //gestion du cas où n = 0
    if(n == 0){
        return 1;
    }
    //cas trivial : on retourne directement x
    if(n == 1){
        return x;
    }
    //on rappel avec n-1
    else{
        let res = x * powerRecur(x,n-1);
        return res;
    }
}

