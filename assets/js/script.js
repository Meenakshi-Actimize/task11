function validation(){
    
    if(usernamevalid()){        
        if(emailvalid()){
            if(numbervalid()){
                if(dobvalid()){
                    if(pwdvalid()){
                        if(pwdvalidconfir()){
                            console.log("testttt");
                            if(countryvalid()){
                                if(gendervalid()){
                                    if(boxvalidation()){
                                    console.log("tettttttttt");
                                    result();
                                    }
                                }   
                            }
                        }
                    }

                }
            }
        }
    }
    
    //  Modal and reset function


     function result(){
        var modal = new bootstrap.Modal($("#exampleModal"));
                                    modal.show();
        
         setTimeout(function() {
             
             $("#myform").trigger("reset");
             $('.modal').css("display", "none");       
    
     }, 10000);
    
    
    }
    }  
     

// username validation

function usernamevalid(){
    var name = $('#username').val();
    let pattern = /^[A-Z][a-z]*[!@#$%^&*]?(\d{1,4}|[a-z]*)$/;
        if(name==''){
            output = false;
            $('#nameerror').text("please fill the field");
            $('#username').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });
            
        }
        else if((!pattern.test(name))){
            output = false; 
            $('#nameerror').text("please give proper name")
            $('#username').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });

        }

        else if(name.length < 5){
            output = false; 
            $('#nameerror').text("please fill more than 5 characters");  
            $('#username').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });

                     
        }

        else{
            output = true;
            $("#nameerror").css("display", "none");
            $('#username').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px green' });
            
             
       }
       return output;


}




// email validation

function emailvalid(){
    var emailid = $('#emailids').val();
    let veremail = /^[\w.-]+@([\w-]+\.)+(com|in)$/;
    if(emailid==''){
        output = false;
        $('#emailerror').text("please fill the field");
        $('#emailids').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });

    }
    else if((!veremail.test(emailid))){
        output = false;
        $('#emailerror').text("please give proper mailid");
        $('#emailids').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });

    }
    else{
        output = true;

        $('#emailerror').css("display", "none");
        $('#emailids').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px green' });


    }
    return output;
}



// number validation 

function numbervalid(){
    var mnum = $('#num').val();
    if(mnum==''){
        output = false;
        $('#phoneerror').text("please fill the number");
        $('#num').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });

    }
    else if(mnum.length < 10){
        output = false;

        $('#phoneerror').text("please fill 10 digit number");
        $('#num').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });

    }
    else if(mnum.length > 10){
        output = false;

        $('#phoneerror').text("please fill 10 digit number");
        $('#num').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });

    }
    else if(!/^[789]\d{9}$/.test(mnum)){
        output = false;
        $('#phoneerror').text("please fill proper number");
        $('#num').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });

    }
    else{
        output = true;

        $('#phoneerror').css("display", "none");
        $('#num').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px green' });


    }
    return output;
}

// date of birth validation

function dobvalid(){
    var DOB = $('#dateOfBirth').val();
    if(DOB==''){
        output = false;
        $('#dateofBirthErr').text("please fill the field");
        $('#dateOfBirth').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });

    }
    else{
        output = true;

        $('#dateofBirthErr').css("display", "none");
        $('#dateOfBirth').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px green' });


    }
    return output;
}
// password validation

function pwdvalid(){
    var pwd = $('#passwrd').val();
    if(pwd == ''){
        output = false;
        $('#passwrdErr').text("Please fill the field")
        $('#passwrd').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });

    }
    else if(!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(pwd)){
        output = false;
        $('#passwrdErr').text("Please give proper password")
        $('#passwrd').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });

    }
    else{
        output = true;
        $('#passwrdErr').css("display", "none");
        $('#passwrd').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px green' });

    }
    return output;
}

// confirmpassword validation

function pwdvalidconfir(){
    var pwd = $('#passwrd').val();
    var confirpwd = $('#confirpasswrd').val();
    if(confirpwd == ''){
        output = false;
        $('#confirpasswrdErr').text("Please fill the field")
        $('#confirpasswrd').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });

    }
    else if(confirpwd != pwd){
        output = false;
        $('#confirpasswrdErr').text("password mismatch")
        $('#confirpasswrd').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });
        
    }
    else{
        output = true;
        $('#confirpasswrdErr').css("display", "none");
        $('#confirpasswrd').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px green' });

    }
    return output;
}

// country validation

function countryvalid(){
    var country = $('#countryname').val();
    if(country=='Select Your country'){
        output = false;
        $('#droperror').text("please fill the field");
        $('#countryname').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });

    }
    else{
        output = true;

        $('#droperror').css("display", "none");
        $('#countryname').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px green' });

    }
    return output;
}

// gender validation

function gendervalid(){
    var genderM = $('#optradio1').prop("checked");
    var genderF = $('#optradio2').prop("checked");
    var gendero = $('#optradio3').prop("checked");
    if(genderM == false & genderF == false & gendero == false){
        output = false;
        $('#genderError').text("please fill the field");
        $('#genderError').css({ 'color':'red' });

    }
    else{
        output = true;

        $('#genderError').css("display", "none");
        $('#genders').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px green' });

        
    }
    return output;
}

// check box validation

function boxvalidation(){
    var checkbox = $('#defaultcheck1').prop("checked");
    if(checkbox){
        output = true;
        $('#checkerror').css("display", "none");
        $('#defaultcheck1').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px green' });


    }
    else{   
        output = false;
        $('#checkerror').text("please tick the checkbox");
        $('#defaultcheck1').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });

    }
    return output;

    
}

// star rating

$(document).ready(function() {  
    $("#st1").click(function() {  
        $(".fa-star").css("color", "black");  
        $("#st1").css("color", "yellow");
        $("#com").text("Thanks for giving 1 star");          

    });  
    $("#st2").click(function() {  
        $(".fa-star").css("color", "black");  
        $("#st1, #st2").css("color", "yellow");
        $("#com").text("Thanks for giving 2 stars");          
  

    });  
    $("#st3").click(function() {  
        $(".fa fa-star").css("color", "black")  
        $("#st1, #st2, #st3").css("color", "yellow");
        $("#com").text("Thanks for giving 3 stars");          
  

    });  
    $("#st4").click(function() {  
        $(".fa-star").css("color", "black");  
        $("#st1, #st2, #st3, #st4").css("color", "yellow");
        $("#com").text("Thanks for giving 4 stars");          
  

    });  
    $("#st5").click(function() {  
        $(".fa-star").css("color", "black");  
        $("#st1, #st2, #st3, #st4, #st5").css("color", "yellow");  
        $("#com").text("Thanks for giving 5 stars");          


    });  
  });  