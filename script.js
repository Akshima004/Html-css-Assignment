 
    
function validateform(){  
    
     
var name=document.myform.name.value; 
    var price=document.myform.price.value;
    var pattern=/^[a-zA-Z]+$/;
     var number=/^[0-9]+$/;
    
 if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;  
    
       
}
 else if(name.length<2 || name.length>65){
        alert("Name length should b between 2 to 30 characters");
        return false;
    }
    else if(!name.match(pattern)){
        
        alert("Name cannot special character");
        return false;
    }
    
    else if(name.match(number)){
        alert("Name cannot contain numeric character");
        return false;
    }
    else if(price==null ||price==""){
        alert("Price cannot b empty");
        return false;
    }
    else if(price.match(number)){
        return true;
    }
    else{
        alert("Price should be in numeric format");
        return false;
    }
    
}  



    