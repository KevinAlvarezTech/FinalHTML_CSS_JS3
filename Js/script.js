let elementosDesplegar = document.getElementsByClassName("desplegar");
for(i = 0; i<elementosDesplegar.length; i++){
    elementosDesplegar[i].addEventListener("click",function(){
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if(panel.style.display == "block"){
                panel.style.display = "none";
        }else{
            panel.style.display = "block";
        } 
    });
}


function cambiarFondo(x){
    console.log(x.value);
    if (x.value=="1")
    {
        var color1 = "red";
        var color2 = "blue";
    }
    if (x.value=="2")
    {
        var color1 = "red";
        var color2 = "green";
    }
    if (x.value=="3")
    {
        var color1 = "orange";
        var color2 = "yellow";
    }
    if (x.value=="none")
    {
        var color1 = "#f3e9d2";
        var color2 = "#f3e9d2";
    }
    var body1 = document.getElementById("body1");
    var body2 = document.getElementById("body2");
    body1.style.backgroundColor = color1;
    body2.style.backgroundColor = color2;  
}
