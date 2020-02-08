function validation(){
    
    var fname=document.getElementById('fname').value;
    var lname=document.getElementById('lname').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('pswd').value;
    
    var special=/[!@#$%^&*]/;
    var number=/[0-9]/;
    
    if(fname==""||fname==null){
       alert("First name cant b empty");
        return false;
    }
    
    else if(fname.match(special)){
        alert("First name cant contains special characters");
        return false;
    }
    else if(fname.match(number)){
       alert("First name cant contains number");
        return false;
    }
    else if(fname.length<4 ){
       alert("First name length should b greater than 3  ");
        return false;
    }
    
    else if(lname==""||lname==null){
       alert("last name cant b empty");
        return false;
    }
    else if(lname.match(special)){
       alert("Last name cant contains special character");
        return false;
    }
     else if(lname.match(number)){
       alert("Last name cant contains number");
        return false;
    }
    else if(email==""||email==null){
       alert("Email cant b empty ");
        return false;
    }
  else if (password==""||password==null){  
  alert("Password can't be blank");  
  return false;  
    }
    else if(password.length<=8 && password.length>20){
        alert("Password length should b between 8 to 20 characters");
        return false;
    }
    
}