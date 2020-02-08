function validate(){
    var email=document.myform.email.value;
    var password=document.myform.password.value;
    
    var pat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var pattern= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/;
    
    
    if (email==null || email==""){  
  alert("Email can't be blank");  
  return false;  
    }
    else if(!email.match(pat)){
        alert("Required email is not valid");
        return false;
    }
    
else if (password==null || password==""){  
  alert("Password can't be blank");  
  return false;  
    }
    else if(password.length<=8 && password.length>20){
        alert("Password length should b between 8 to 20 characters");
        return false;
    }
    
    else if(!password.match(pattern)){
        alert("Password must b strong ,must contain special character and numbrer");
        return false;
    
    }
    

   
}