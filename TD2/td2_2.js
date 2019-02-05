/**
 * Created by moreliere on 28/01/2019.
 */
'use strict'

console.log("Bienvenue sur l'exercice 1 - TD2, les méthodes possibles sont : Question 1 : objetTab(tab) où tab est un tableau, cela va retourner sous forme d'un objet la taille, somme et la moyenne des éléments du tableau/ Question 2,3,4,5 sous forme littérale on a déclaré un objet Etudiant, on peut ainsi faire let e = Etudiant puis utiliser différentes méthodes sur e : age(), toString(), ajouterNote(note,matiere), calculerMoyenne()/ Question 6 => constructeur permettant d'instancier un étudiant avec new Etudiantv2(\"Jean\",\"dupont\", new Date(annee,mois,jour)) ");
console.log("Question 7 getAnnivMois(tab, numMois) où tab est un tableau détudiant, la fonction va retourner un tableau contenant tous les étudiants qui sont nées dans le mois numMois / Question 7 getAgeDonne(tab, age) où tab est un tableau d'étudiant, la fonction va retourner un tableau contenant les étudiants ayant l'age passé en paramètre");

/* Question 1 */

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

/* Question 2 */


var Etudiant = {
    numero : 5,
    nom: "Moreliere",
    prenom:"Victor",
    dateNaiss: new Date(1999,3,16),
    mail : "salut@gmail.com",
    note : [],
   
    age : function() {
        let mtn = new Date(); 
        if(mtn.getMonth()+1 < this.dateNaiss.getMonth()+1){
            return mtn.getYear() - this.dateNaiss.getYear()-1;
        }
        if(mtn.getMonth()+1 == this.dateNaiss.getMonth()+1){
             if(mtn.getDate() < this.dateNaiss.getDate()){
                  return mtn.getYear() - this.dateNaiss.getYear()-1;
             }
        }
        return mtn.getYear() - this.dateNaiss.getYear();
    },
    toString : function(){
        return this.nom.toUpperCase() + " " + this.prenom + " " +this.dateNaiss.getDate()+"/"+(this.dateNaiss.getMonth()+1)+"/"+this.dateNaiss.getYear();
    },
   
    
    ajouterNote(n,matiere) {
        let obj = {
            matiere : matiere,
            grade : n
        };
        this.note.push(obj)
    },
    
   
    
    calculerMoyenne(){
        let res = 0;
        for(let temp of this.note){
            res+=temp.grade;
        }
        return Math.round(res/this.note.length);
    }
}

/* Question 6 */

function Etudiantv2(nom,prenom,anniv){
    this.nom=nom;
    this.prenom=prenom;
    this.dateNaiss = anniv;
    this.note = [];
    this.mail="test@gmail.com";
    this.numero = 1;
}

/* Question 7 */

function getAnnivMois(tab,numMois){
    let res = [];
    for(let temp of tab){
        if(temp.dateNaiss.getMonth+1 == numMois){
            res.push(temp);
        }
    }
    return res;
}

/* Question 8 */

Etudiantv2.prototype.age(etu){
    let mtn = new Date(); 
        if(mtn.getMonth()+1 < etu.dateNaiss.getMonth()+1){
            return mtn.getYear() - etu.dateNaiss.getYear()-1;
        }
        if(mtn.getMonth()+1 == etu.dateNaiss.getMonth()+1){
             if(mtn.getDate() < etu.dateNaiss.getDate()){
                  return mtn.getYear() - etu.dateNaiss.getYear()-1;
             }
        }
        return mtn.getYear() - etu.dateNaiss.getYear();
}

function getAgeDonne(tab,age){
    let res = [];
    for(let temp of tab){
        if(age(temp)> age){
            res.push(temp);
        }
    }
    return res;
}

/* Question 9 */

function GroupeEtudiant(n,forma,a){
    this.nom = n;
    this.formation = forma;
    this.annee = a;
    this.liste=[];
}

/* Question 10 */

GroupeEtudiant.prototype.ajouterEtudiant = function(etu){
    this.liste.push(etu);
}

GroupeEtudiant.prototype.compterEtudiant = function (){
    return this.liste.length
}

GroupeEtudiant.prototype.calculMoyenne = function(){
    let res = 0;
    for(let temp of this.liste){
        res+=calculerMoyenne(temp)
    }
    return Math.round(res / this.leng.liste.length);
}

/* Question 11 */

GroupeEtudiant.prototype.bonusPts = function (mois,matiere){
    for(let i =0;i<this.liste.length;i++){
        if(groupe.liste[i].dateNaiss.getMonth+1 == mois){
            for(let mat of groupe.liste[i].note){
                if(mat.matiere==matiere){
                    mat.grade = mat.grade+2;
                }
            }
        }
    }
}