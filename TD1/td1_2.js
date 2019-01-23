/**
 * Created by moreliere on 21/01/2019.
 */
'use strict'

console.log("Bienvenue sur l'exercice 2 - TD1, les méthodes possibles sont : creerMultiplicateur(n)(x) (retourne une fonction) / crer une séquence que vous tockez dans une variable (creerSequence(start,step) et rappellez sur cette derniere pour augmenter) ");
console.log("parcoursFibo(u1,u2) qui retourne une fonction qui a chaque appel vous donnera le therme +1 / creerMultiplicateur2(n,x) qui ferra n * x sauf si x n'est pas déclaré, il retourne alors une fonction donc le paramettre sera multiplié par n / power2(n,x) si x n'est pas rentré, retourne une function qui mettraà la puissance passé dans power2");
console.log("formater(n) où n est le numéro du premier message, la fonction retourné incrémentera le numéro de 1 en affichant la phrase qui lui est passé en parametre / write et writeAlert qui sont deux fonctions permettant d'écrire avec console.log ou alert / Logger(function format, function message) va retourner une function qui écrira le message passé en parametre avec le formatage et le mode d'écriture passé")

/* exercice 2.1 */
function creerMultiplicateur(n){
    return (x) => {return x*n};
}

/* exercice 2.2 */
function creerSequence(init,step){
    let i = 0;
    return () =>{i++
                 return step*i*init
                };
}

/* exercice 2.3 */
function parcoursFibo(a,b){
    let u1 = a;
    let u2 = b;
    return() => {
        let res = u1+u2;
        u1=u2;
        u2=res;
        console.log(u1 + " "+ u2);
        return res;
    };
}

/* exercice 2.4 */

function creerMultiplicateur2(n,x=NaN){
    // Si x n'est pas déclaré alors on entre ici
    if(!x){
        return (a) => {return n*a};
    }
    else{
        return n*x;
    }
    
}

/* exercice 2.5 */

function power2(n, ...args){
    if(args.length == 0){
        return (a) => {return power2(n,a)}; 
    }
    else if(args.length == 1){
            if(n == 0){
                return 1;
            }
            let i = 1;
            let resultat = args[0];
            while(i<n){
                resultat = resultat *args[0];
                i++;
            }
            return resultat;        
    }
}

/* exercice 2.6 */

function formater(n){
    let numero = n;
    return (phrase) => {return((numero++)+ " : " + phrase);};
}

/* exercice 2.7 */

function write(phrase){
    console.log(phrase);
}

function writeAlert(phrase){
    alert(phrase);
}

/* exercice 2.8 */

function logger(format, message){
    return (phrase) =>{message(format(phrase))}
}
