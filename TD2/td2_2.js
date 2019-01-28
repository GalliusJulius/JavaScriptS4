/**
 * Created by moreliere on 28/01/2019.
 */
'use strict'

console.log("Bienvenue sur l'exercice 1 - TD2, les méthodes possibles sont : ");

/* Exercice 1 */

function objetTab(tab){
    let n = tab.length;
    let sum = 0;
    for(let temp of tab){
        sum += temp;
    }
    let res = {
        taille : n,
        somme : sum,
        moyenne : sum/n
    }    
    return res;
}

var etudiant = {
    numero : 5,
    nom: "Moreliere",
    prenom:"Victor",
    dateNaiss: new Date('1999-04-16T03:24:00'),
    mail : "salut@gmail.com",
    note : [],
    
    age : function() {
        let mtn = new Date(); 
        if(mtn.getMonth() < this.dateNaiss.getMonth()){
            return mtn.getYear() - this.dateNaiss.getYear()-1;
        }
        if(mtn.getMonth() == this.dateNaiss.getMonth()){
             if(mtn.getDay() < this.dateNaiss.getDay()){
                  return mtn.getYear() - this.dateNaiss.getYear()-1;
             }
        }
        return mtn.getYear() - this.dateNaiss.getYear();
    },
    toString : function(){
        return this.nom.toUpperCase() + " " + this.prenom + " " +this.dateNaiss.getUTCDay()+"/"+this.dateNaiss.getMonth()+"/"+this.dateNaiss.getYear();
    }
}