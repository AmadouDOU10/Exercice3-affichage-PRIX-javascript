
 const products = [
    {
      id: 500,
      nom: "Mélange original 200g",
      prix: "500"
    },
    {
      id: 900,
      nom: "Mélange original 500g",
      prix: "900"
    },
    {
      id: 700,
      nom: "Mélange spécial 200g",
      prix: "700"
    },
    {
      id: 1200,
      nom: "Mélange spécial 500g",
      prix: "1200"
    }]


const prixElement= document.getElementById("produits");
const numéroElement=document.getElementById("number");
let historique = [] ;

function addition(){
    
    const prix= products.find(e => e.id === parseInt(prixElement.value)).prix;
    const numéro=numéroElement.value;
    const nom= products.find(e=> e.id===parseInt(prixElement.value)).nom;

    let ajout={
        prix:parseInt(prix),
        numéro:parseInt(numéro),
        nom:nom
    };
    const newajout = historique.findIndex((item) => item.prix === ajout.prix) // --1
    if(historique.length < 1 || newajout === -1) { //--2
        historique.push(ajout);
    }
    else {
        historique[newajout].numéro += ajout.numéro; //--3
    }
    
    window.alert(`${info()}\n Le sous-total est ${sous_total()} Yens`);
    prixElement.value="";
    numéroElement.value="";

}

function sous_total(){
    let sum=0;
    for(let i=0 ; i <historique.length;i++){
        sum+=historique[i].prix * historique[i].numéro;
    }
    return sum;
}


function tot() {
    const sum=sous_total();
    const exp= expedition(sum);
    window.alert(`Le sous-total est ${sum} Yens, le frais d'expédition est ${exp} Yen ,et le total est ${sum+exp} Yen `);
    historique=[];
    prixElement.value=0;
    numéroElement.value=0;
 }


function info(){
    let string="";
    for (let i=0; i< historique.length;i++){
        string+= `${historique[i].nom} au prix de ${historique[i].prix}Yens,  à la quantité ${historique[i].numéro} \n`;
    }
    return string ;
}

function expedition(sum) {
    if (sum == 0 || sum >= 3000) {
      return 0;
    } else if (sum < 1000){
     return 500;
    } else {
     return 250;
     }
}     
