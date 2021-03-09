


function verifySpaces(){
    const nombre1 = document.getElementById("name1").value
    const edad1 = document.getElementById("age1").value
    const tiempo1 = document.getElementById("tempo1").value
    const nombre2 = document.getElementById("name2").value
    const edad2 = document.getElementById("age2").value
    const tiempo2 = document.getElementById("tempo2").value
    
    const array = [nombre1, edad1, tiempo1, nombre2, edad2, tiempo2,]

    let camposLlenos

    let ganador= true
    
        for(let contador = 0; contador < array.length; contador++){
    
            if (array[contador]=== ""){
                console.log(contador)
                console.log(array[contador])
                camposLlenos = false
            }
        }
          //alertas
          if (camposLlenos === false){
                        swal({
                title: "Error!",
                text: "Diligencie todos los campos!",
                icon: "error",
              });
 
       
            }else if (tiempo1 < tiempo2 && ganador === true){
                
                console.log(array[tiempo1, tiempo2])
                ganador=(document.getElementById(parseInt("tempo1")).value < document.getElementById(parseInt("tempo2")).value )
                      swal({
                          title: "",
                          text: "",
                          icon: "success",
                        });


            }
        
    

}


