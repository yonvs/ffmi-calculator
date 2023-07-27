var result = document.getElementById("result");
var displayffmi = document.getElementById("ffmi-value");

function calculate(){
  var height = parseInt(document.getElementById("height").value);
  document.getElementById("height-value").textContent = height + " cm";
  var weight = parseInt(document.getElementById("weight").value);
  document.getElementById("weight-value").textContent = weight + " kg";
  var bf = parseInt(document.getElementById("bf").value);
  document.getElementById("bf-value").textContent = bf + " %";
  //FFMI = (Masse maigre en kg / 2.2) * 2.20462 / (Taille en m)^2
  const leanmass = (weight - bf); 
  const ffmi = ((leanmass/2.2)* 2.20462 /( Math.pow(height / 100, 2))).toFixed(1) ;
  if(document.getElementById("men").checked){
    var gender = parseInt(document.getElementById("men").value);
  }
  else{
    var gender = parseInt(document.getElementById("women").value);
  };

  
  displayffmi.textContent = ffmi;

  
  if (gender==1){
    if(ffmi < 18.0){
        category = `Peu de muscle ou maigre 😥`;
        result.style.color = "#ffc44d";
    }
    else if( ffmi >= 18.0 && ffmi <= 19.9 ){
        category = "Physique moyen 😁";
        result.style.color = "#cbe80b";
    }
    else if( ffmi >= 20 && ffmi <= 21.9 ){
        category = "Au dessus de la moyenne et athlétique 😆";
        result.style.color = "#b4e80b";
    }
    else if( ffmi >= 22 && ffmi <= 23.9 ){
        category = "Pratiquant avancé 🏋️‍♂️ ";
        result.style.color = "#0be881";
    }
    else if( ffmi >= 24 && ffmi <= 25.9 ){
        category = "Supérieur et corps impréssionant 🦍";
        result.style.color = "#0ba2e8";
    }
    else if( ffmi >= 26 && ffmi <= 27.9 ){
        category = "Athlète de force d'élite 💪";
        result.style.color = "#ff884d";
    }
    else{
        category = "Physique de dieux probalement dopé 💉";
        result.style.color = "#ff5e57";
    }}

    else {
      if(ffmi < 15.0){
        category = `Peu de muscle ou maigre 😥`;
        result.style.color = "#ffc44d";
    }
    else if( ffmi >= 15.0 && ffmi <= 15.9 ){
        category = "Physique moyen 😁";
        result.style.color = "#cbe80b";
    }
    else if( ffmi >= 16.0 && ffmi <= 17.9 ){
        category = "Au dessus de la moyenne et athlétique 😆";
        result.style.color = "#b4e80b";
    }
    else if( ffmi >= 18 && ffmi <= 18.9 ){
        category = "Pratiquant avancé 🏋️‍♂️ ";
        result.style.color = "#0be881";
    }
    else if( ffmi >= 19 && ffmi <= 20.9 ){
        category = "Supérieur et corps impréssionant 🦍";
        result.style.color = "#0ba2e8";
    }
    else if( ffmi >= 21 && ffmi <= 22.5 ){
        category = "Athlète de force d'élite 💪";
        result.style.color = "#ff884d";
    }
    else{
        category = "Physique de dieux probalement dopé 💉";
        result.style.color = "#ff5e57";
    }

  }
  result.textContent = category;

};






