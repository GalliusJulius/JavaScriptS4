/**
 * Created by Victor Moreliere on 05/02/2019.
 */
    'use strict'

console.log("Bienvenue sur le TD3 : ");

var compteur = 0;

/*Chargement total*/
window.addEventListener("load", () => {
    let btnClique = document.getElementById("ex1");
    let btnClear = document.getElementById("ex3");
    let btnPlus = document.getElementById("ex4b");
    btnClique.addEventListener("click",logClick);
    
    btnClique.addEventListener("click",(e) =>updateButtonClass(e.target));
    
    btnClique.addEventListener("click",ajoutListe);
    
    btnClear.addEventListener("click",clearList);
    btnPlus.addEventListener("click",incrInputValue);
    
});

/* Question 1 */

function logClick(){
    console.log("click");
    compteur++;
}

/* Question 2 */

function updateButtonClass(elem){
    //Peut etre fait en deux instructions avec toggle
    if(elem.classList.contains("c1")){
        elem.classList.remove("c1");
        elem.classList.add("c2");
    }
    else{
        elem.classList.remove("c2");
        elem.classList.add("c1"); 
    }
}

/* Question 3 */

function ajoutListe(){
    let liste = document.getElementById("ex2");
    let p = document.createElement("LI");
    p.setAttribute("id",""+compteur);
    let texte = document.createTextNode("click boutton : "+compteur);
    p.appendChild(texte);
    liste.appendChild(p);
}

/* Question 4 */

function clearList(){
    let liste = document.getElementById("ex2");
    for(let  i =(liste.childElementCount-1) ; i> 0 ;i--){
        let noeud = document.getElementById(""+i);
        liste.removeChild(noeud);
    }
    compteur=0;
}

/* Question 5 */

function incrInputValue(){
    let texte = document.querySelector("#ex4i");
    texte.value = parseInt(texte.value)+1;
    
}