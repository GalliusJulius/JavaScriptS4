/**
 * Created by moreliere on 21/01/2019.
 */
'use strict'

console.log("Bienvenue sur l'exercice 1 - TD2, les méthodes possibles sont : range(a,b) qui va retourner tous les entiers entre a et b si a<b et inversement / sumFor(tab), sumForEach(tab), sumReduce(tab) qui vont réaliser la somme des éléments du tableau de 3 facons différentes / moyenneFor(tab), moyenneForEach(tab), moyenneReduce(tab) qui vont calculer la moyenne d'un tableau d'entier de trois facons différentes");
console.log("getPattern(t,pattern) qui va retourner un tableau avec tous les éléments de t qui contiennet le pattern / getPatternv2(t,testFonction, formatFonction) qui va faire comme avant mais selon la méthode de test mis en paramtres et la méthode de formatage en paramètre/ getPatterv2Creation(t,pattern) qui est une réécriture de l'ancienne avec des functions déclarés en dehors (voir le code) / getPatternModif(t, pattern) qui ferra la même chose mais avec les fonctions maps et filter");
console.log("getUrls(tab) qui va prendre un tableau contenant des références et les transformer en lien, getUrlsModif(tab) qui ferra pareil qu'avant mais avec un code html plus propre");

/* Question 1.1 */

function range (a,b){
    let res = [];
    if(a<=b){
        for(let temp = a ; temp<=b;temp++)
        res.push(temp);
    }
    else{
        for(let temp = b ; temp<=a;temp++)
        res.push(temp);
    }
    return res;
}

/* Question 1.2 */

function sumFor(tab){
    let res =0;
    for(let i = 0; i<tab.length;i++){
        res+=tab[i];
    }
    return res;
}

function sumForEach(tab){
    let res = 0;
    for(let temp of tab){
        res+=temp;
    }
    return res;
}

function sumReduce(tab){
    return tab.reduce((acc,elem) => acc+elem,0);
}

/* Question 1.3 */

function moyenneFor(tab){
    if(tab.length == 0){
        return 0;
    }
    else{
        return sumFor(tab) / tab.length
    }
}

function moyenneForEach(tab){
    if(tab.length == 0){
        return 0;
    }
    else{
        return sumForEach(tab) / tab.length
    }
}

function moyenneReduce(tab){
    if(tab.length == 0){
        return 0;
    }
    else{
        return sumReduce(tab) / tab.length
    }
}

/* Question 1.4  */

function getPattern(t, pattern){
    let res = [];
    for(let temp of t){
        if(temp.indexOf(pattern) !== -1){
            res.push(temp.toUpperCase());
        }
    }
    return res;
}

/* Question 1.5  */
function getPatternv2(t,testFnct,transFnct){
    let res = [];
    for(let temp of t){
        if(testFnct(temp)){
            res.push(transFnct(temp));
        }
    }
    return res;
}

/* Question 1.5 / modification => réécriture */

function getPatterv2Creation(t,pattern){
    return getPatternv2(t,testFonction(pattern),transFonction);
}

function testFonction(pattern){
    let pat = pattern;
    return (elem) =>{if(elem.indexOf(pat) !== -1) {return true}  
                    else {return false}};
}

function transFonction(elem){
    return elem.toUpperCase();
}

/* Question 1.6  */

function getPatternModif(t, pattern){
    let res = t.filter((elem) => elem.indexOf(pattern) !== -1);
    res = res.map((elem)=> elem.toUpperCase());
    return res;
}

/* Question 1.7  */

function getUrls(tab){
    return tab.map((elem) => "http://www.cata.log/products/"+elem);
}

/* Question 1.8  */

function getUrlsModif(tab){
    let urls = getUrls(tab);
    let res = "<div class = \"cata\" <ul>";
    let  i =0;
    for(let temp of urls){
        res+="<li><a href=\""+temp+"\">"+ tab[i]+"</a></li>";
        i++;
    }
    return res+="</ul></div>";
}