
let euro = true;

function myFunction(){
    //document = greift aus html seite zu
    //getElementById = greift auf die benannte Id zu
    
    console.log("es funkioniert");
    console.log(euro);
    euro = !euro;
     
    if (euro) { document.getElementById("wert").innerHTML = ("$")}
    
    else { document.getElementById("wert").innerHTML = ("€");
    }

    if (euro) { document.getElementById("wert1").innerHTML = ("$")}
    
    else { document.getElementById("wert1").innerHTML = ("€")
    }

    if (euro) { document.getElementById("wert2").innerHTML = ("$")}
    
    else { document.getElementById("wert2").innerHTML = ("€")
    }

    if (euro) { document.getElementById("wert3").innerHTML = ("$")}
    
    else { document.getElementById("wert3").innerHTML = ("€")
    }

    if (euro) { document.getElementById("wert4").innerHTML = ("$")}
    
    else { document.getElementById("wert4").innerHTML = ("€")
    }

    if (euro) { document.getElementById("wert5").innerHTML = ("$")}
    
    else { document.getElementById("wert5").innerHTML = ("€")
    }

    if (euro) { document.getElementById("wert6").innerHTML = ("$")}
    
    else { document.getElementById("wert6").innerHTML = ("€")
    }

    if (euro) { document.getElementById("wert7").innerHTML = ("$")}
    
    else { document.getElementById("wert7").innerHTML = ("€")
    }

    if (euro) { document.getElementById("wert8").innerHTML = ("$")}
    
    else { document.getElementById("wert8").innerHTML = ("€")
    }
    if (euro) { document.getElementById("wert9").innerHTML = ("$")}
    
    else { document.getElementById("wert9").innerHTML = ("€")
    }
     
    if (euro){ document.getElementById("preis").innerHTML = (document.getElementById("preis").innerHTML * 1.14).toFixed(2)  ;
             }
    else { document.getElementById("preis").innerHTML = (document.getElementById("preis").innerHTML / 1.14).toFixed(2);
         }

         if (euro){ document.getElementById("preis1").innerHTML = (document.getElementById("preis1").innerHTML * 1.14).toFixed(2)  ;
             }
    else { document.getElementById("preis1").innerHTML = (document.getElementById("preis1").innerHTML / 1.14).toFixed(2);
         }

         if (euro){ document.getElementById("preis2").innerHTML = (document.getElementById("preis2").innerHTML * 1.14).toFixed(2)  ;
             }
    else { document.getElementById("preis2").innerHTML = (document.getElementById("preis2").innerHTML / 1.14).toFixed(2);
         }

         if (euro){ document.getElementById("preis3").innerHTML = (document.getElementById("preis3").innerHTML * 1.14).toFixed(2)  ;
             }
    else { document.getElementById("preis3").innerHTML = (document.getElementById("preis3").innerHTML / 1.14).toFixed(2);
         }

         if (euro){ document.getElementById("preis4").innerHTML = (document.getElementById("preis4").innerHTML * 1.14).toFixed(2)  ;
             }
    else { document.getElementById("preis4").innerHTML = (document.getElementById("preis4").innerHTML / 1.14).toFixed(2);
         }

         if (euro){ document.getElementById("preis5").innerHTML = (document.getElementById("preis5").innerHTML * 1.14).toFixed(2)  ;
             }
    else { document.getElementById("preis5").innerHTML = (document.getElementById("preis5").innerHTML / 1.14).toFixed(2);
         }

         if (euro){ document.getElementById("preis6").innerHTML = (document.getElementById("preis6").innerHTML * 1.14).toFixed(2)  ;
             }
    else { document.getElementById("preis6").innerHTML = (document.getElementById("preis6").innerHTML / 1.14).toFixed(2);
         }

         if (euro){ document.getElementById("preis7").innerHTML = (document.getElementById("preis7").innerHTML * 1.14).toFixed(2)  ;
             }
    else { document.getElementById("preis7").innerHTML = (document.getElementById("preis7").innerHTML / 1.14).toFixed(2);
         }
         
         if (euro){ document.getElementById("preis8").innerHTML = (document.getElementById("preis8").innerHTML * 1.14).toFixed(2)  ;
        }
    else { document.getElementById("preis8").innerHTML = (document.getElementById("preis8").innerHTML / 1.14).toFixed(2);
    }
    if (euro){ document.getElementById("preis9").innerHTML = (document.getElementById("preis9").innerHTML * 1.14).toFixed(2)  ;
}
else { document.getElementById("preis9").innerHTML = (document.getElementById("preis9").innerHTML / 1.14).toFixed(2);
}
}

function kaufen() {
    document.getElementById("list").innerHTML =
        document.getElementById("list").innerHTML + "<li>" + "Laptops - 720 €" + "</li>";
    // Gesamtsumme
    document.getElementById("gesamtbetrag").innerHTML =
        // gesamtbetrag + neues Produkt
        Number(document.getElementById("gesamtbetrag").innerHTML)+ Number(document.getElementById("preis").innerHTML);}
 function kaufen1() {
        document.getElementById("list").innerHTML =
        document.getElementById("list").innerHTML + "<li>" + "Kopfhörer - 32 €" + "</li>";
    // Gesamtsumme
    document.getElementById("gesamtbetrag").innerHTML =
        // gesamtbetrag + neues Produkt
        Number(document.getElementById("gesamtbetrag").innerHTML)+ Number(document.getElementById("preis1").innerHTML);}


  function kaufen2() {
            document.getElementById("list").innerHTML =
            document.getElementById("list").innerHTML + "<li>" + "Laptops - 1120 €" + "</li>";
        // Gesamtsumme
    document.getElementById("gesamtbetrag").innerHTML =
    // gesamtbetrag + neues Produkt
    Number(document.getElementById("gesamtbetrag").innerHTML)+ Number(document.getElementById("preis2").innerHTML);}

     function kaufen3() {
      document.getElementById("list").innerHTML =
      document.getElementById("list").innerHTML + "<li>" + "iPd - 560 €" + "</li>";
      document.getElementById("gesamtbetrag").innerHTML =
                // gesamtbetrag + neues Produkt
      Number(document.getElementById("gesamtbetrag").innerHTML)+ Number(document.getElementById("preis3").innerHTML);}

                
     function kaufen4() {
      document.getElementById("list").innerHTML =
      document.getElementById("list").innerHTML + "<li>" + "Kopfhörer - 216 €" + "</li>";
      document.getElementById("gesamtbetrag").innerHTML =
                    // gesamtbetrag + neues Produkt
      Number(document.getElementById("gesamtbetrag").innerHTML)+ Number(document.getElementById("preis4").innerHTML);}

                    
     function kaufen5() {
      document.getElementById("list").innerHTML =
      document.getElementById("list").innerHTML + "<li>" + "Laptops - 690 €" + "</li>";
      document.getElementById("gesamtbetrag").innerHTML =
                        // gesamtbetrag + neues Produkt
      Number(document.getElementById("gesamtbetrag").innerHTML)+ Number(document.getElementById("preis5").innerHTML);}

                        
     function kaufen6() {
      document.getElementById("list").innerHTML =
      document.getElementById("list").innerHTML + "<li>" + "Handy - 415.4 €" + "</li>";
      document.getElementById("gesamtbetrag").innerHTML =
                            // gesamtbetrag + neues Produkt
      Number(document.getElementById("gesamtbetrag").innerHTML)+ Number(document.getElementById("preis6").innerHTML);}

                            
      function kaufen7() {
       document.getElementById("list").innerHTML =
       document.getElementById("list").innerHTML + "<li>" + "Laptops - 960 €" + "</li>";
       document.getElementById("gesamtbetrag").innerHTML =
                                // gesamtbetrag + neues Produkt
       Number(document.getElementById("gesamtbetrag").innerHTML)+ Number(document.getElementById("preis7").innerHTML);}

                                
     function kaufen8() {
       document.getElementById("list").innerHTML =
       document.getElementById("list").innerHTML + "<li>" + "Handy - 560 €" + "</li>";
       document.getElementById("gesamtbetrag").innerHTML =
                                    // gesamtbetrag + neues Produkt
      Number(document.getElementById("gesamtbetrag").innerHTML)+ Number(document.getElementById("preis8").innerHTML);}

     function kaufen9() {
       document.getElementById("list").innerHTML =
       document.getElementById("list").innerHTML + "<li>" + "Digital Kamera - 96 €" + "</li>";
       document.getElementById("gesamtbetrag").innerHTML =
                                        // gesamtbetrag + neues Produkt
    Number(document.getElementById("gesamtbetrag").innerHTML)+ Number(document.getElementById("preis9").innerHTML);}
                                
                            
  


        