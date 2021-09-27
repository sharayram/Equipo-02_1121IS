var continentes = {
    "america" : {
         "pais:mexico" : {
            "capital:CDMX" : {
                "presidente:AMLO" : {
                    "habitantes" : "128,970,000"
                }
            }
        }
    },
    "asia" : {
        "pais:japon" : {
            "capital:tokyo" : {
                "presidente:Yoshihide_suga" : {
                    "habitantes" : "126,190,000"         
                }
            }
        }
    },
    "oceania" : {  
        "pais:australia" : {
            "capital:camberra" : {
                "presidente:Scott_morrison" : {
                    "habitantes" : "25,550,000"
                }
            }
        }
    },
    "europa" : {
        "pais:alemania" : {
            "capital:berlin" : {
                "presidente:frank_walter" : {
                    "habitantes" : "83,000,000"
                }
            }
        }
    },
    "africa" : {
        "pais:sudafrica" : {
            "capital:ciudaddelcabo" :{
                "presidente:Cyril_ramaphosa" : {
                    "habitantes" : "59,622,000"
                }
            }
        }
    }
}
var eleccion = parseInt(prompt("Que continente deseas consultar?"+ "Presiona 1 = america, 2 = asia, 3 = oceania, 4 = europa, 5 = africa"));
var n = eleccion;
switch(n){
    case 1:
        console.log(continentes["america"]);
        break;
    case 2:
        console.log(continentes["asia"]);
        break;
    case 3:
        console.log(continentes["oceania"]);   
        break;
    case 4 :
        console.log(continentes["europa"]);
        break;
    case 5:
        console.log(continentes["africa"]);
        break;
}