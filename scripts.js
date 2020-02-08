function validation(){
    
    var fname=document.getElementById('fname').value;
    var lname=document.getElementById('lname').value;
    var email=document.getElementById('email').value;
    var areacode=document.getElementById('areacode').value;
     var phoneno=document.getElementById('pno').value;
     var amount=document.getElementById('amount').value;
   
    
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
     else if(areacode==""||areacode==null){
       alert("Please enter the areacode");
        return false;
    }
     else if(!areacode.match(number)){
       alert("Areacode must b in number format");
        return false;
    }
     else if(phoneno==""||phoneno==null){
       alert("please enter the phone no");
        return false;
    }
     else if(!phoneno.match(number)){
       alert("phone no. must b in number format");
        return false;
    }
    
    
     else if(amount==""||amount==null){
       alert("please enter the Amount");
        return false;
    }
    
     else if(!amount.match(number)){
       alert("Amount must b in number format");
        return false;
    }
    
}