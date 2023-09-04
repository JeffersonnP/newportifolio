
const sbm = document.getElementById("class-sbm");
const exp = document.getElementById("card-exp");
const edu = document.getElementById("card-edu");
const hab = document.getElementById("card-hab");

function openfun(){
    const edu = document.getElementById("card-edu");
    const exp = document.getElementById("card-exp");
    const sbm = document.getElementById("card-you");
    const hab = document.getElementById("card-hab");

    edu.style.display ="none";
    exp.style.display ="none";
    sbm.style.display ="flex";
    hab.style.display ="none";


}


function openexp(){
    const edu = document.getElementById("card-edu");
    const exp = document.getElementById("card-exp");
    const sbm = document.getElementById("card-you");
    const hab = document.getElementById("card-hab");

    edu.style.display ="none";
    exp.style.display ="flex";
    sbm.style.display ="none";
    hab.style.display ="none";


}
function openedu(){
    const edu = document.getElementById("card-edu");
    const exp = document.getElementById("card-exp");
    const sbm = document.getElementById("card-you");
    const hab = document.getElementById("card-hab");

    edu.style.display ="flex";
    exp.style.display ="none";
    sbm.style.display ="none";
    hab.style.display ="none";

}

function openhab(){
    const edu = document.getElementById("card-edu");
    const exp = document.getElementById("card-exp");
    const sbm = document.getElementById("card-you");
    const hab = document.getElementById("card-hab");

    edu.style.display ="none";
    exp.style.display ="none";
    sbm.style.display ="none";
    hab.style.display ="flex";
}