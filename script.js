function calculate(){
    var ffmi;
    var result = document.getElementById("result");
    var weight = parseInt(document.getElementById("weigth").value);
    document.getElementById("weight-value").textContent = weight + " kg";
    var height = parseInt(document.getElementById("heigth").value);
    document.getElementById("height-value").textContent = weight + " cm";
    var bodyfat = parseInt(document.getElementById("bodyfat").value);
    document.getElementById("bodyfat-value").textContent = weight + " %";
    if(document.getElementById("option-1").checked){
        var gender = parseInt(document.getElementById("option-1").value);
        alert("men "+gender)
    }
    else{
        var gender = parseInt(document.getElementById("option-2").value);
        alert("women "+gender)
    }
    ffmi = ((weight*(1.0-bfp/100)) / Math.pow( (height/100), 2 )+ 6.1*(1.8-height/100)).toFixed(1);
    result.textContent = ffmi;
}