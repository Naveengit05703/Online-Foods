const veg=()=>{
    const button=document.getElementById("ve")
    const categories=document.querySelectorAll(".container-list")
    const product=document.querySelectorAll("div")
    const img=document.querySelectorAll(".Veg")
    for(var i=0;i<img.length;i++){
        let match = product[i].querySelectorAll(".Veg")[0];
        if(match) {
            let textvalue=match.textContent|| match.innerHTML
            if(textvalue.toUpperCase().indexOf(button)>-1){
                product[i].style.display="";
            }else{
                product[i].style.display="none";
            }
            }
        }
    }
