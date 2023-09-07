jQuery(document).ready(function(){
    $("#btnForward-1").click(function(){
        $("#card-1").removeClass("active");
        $("#card-2").addClass("active");
    })
    $("#btnForward-2").click(function(){
        $("#card-1").removeClass("active");
        $("#card-2").removeClass("active");
        $("#card-3").addClass("active");
    })
    $("#btnBackward-1").click(function(){
        $("#card-2").removeClass("active");
        $("#card-1").addClass("active");
    })
    $("#btnBackward-2").click(function(){
        $("#card-3").removeClass("active");
        $("#card-2").addClass("active");
    });
     
    // form-1 validation 
    
    $("#form-1").keyup(function(e){
        let  firstName = $("#firstName").val();
        let  lastName = $("#lastName").val();
        let  email = $("#inputEmail").val();
        let regex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        let  age = $("#inputAge").val();

        
    if (firstName.length > 3 && firstName.length < 10){
        $("#firstNameValidate").hide(); 
        $("#btnForward-1".prop("disabled","disabled"))       
    }
    else{
        $("#firstNameValidate").show();        
    }
    if (lastName.length > 3 && lastName.length < 10){
        $("#lastNameValidate").hide(); 
    }
    else{
        $("#lastNameValidate").show();
    }
    if (regex.test(email)){
        $("#emailValidate").hide();
    }
    else{
        $("#emailValidate").show();
    }
    if (age !== ""){
        $("#ageValidate").hide();
    }
    else{
        $("#ageValidate").show();
    }
    if (firstName.length > 3 && firstName.length < 10){
        $("#firstNameValidate").hide();
        $("#btnForward-1").removeAttr("disabled","disabled") 
        if (lastName.length > 3 && lastName.length < 10){
            $("#lastNameValidate").hide(); 
            $("#btnForward-1").removeAttr("disabled","disabled")
            if (regex.test(email)){
                $("#emailValidate").hide();
                $("#btnForward-1").removeAttr("disabled","disabled")
                if (age !== ""){
                    $("#ageValidate").hide();
                    $("#btnForward-1").removeAttr("disabled","disabled")
                }
                else{
                    $("#ageValidate").show();
                }
            }
            else{
                $("#emailValidate").show();
            }
        }
        else{
            $("#lastNameValidate").show();
        }       
    }
    else{
        $("#firstNameValidate").show();        
    }
    
    
    
    });
    
    $("#btnForward-1").click(function(e){
        e.preventDefault();
    })
    



    // form-2 validation 
    $("#inputCountry").click(function(){
        let country = $("#inputCountry").val();
        if (country !== "Your Country"){
            $("#checkCountry").hide();
        }
        else{
            $("#checkCountry").show(); 
        }
    $("#form-2").keyup(function(e){
        let  address = $("#inputAddress").val();
        let  city = $("#inputCity").val();
        
    if (address.length > 2 && address.length < 10){
        $("#checkAddress").hide();
        
    }
    else{
        $("#checkAddress").show();
    }
    if (city.length > 3 && city.length < 10){
        $("#checkCity").hide();
        
    }
    else{
        $("#checkCity").show();
    }
    // $("#inputCountry").click(function(){
    //     let country = $("#inputCountry").val();
    //     if (country !== "Your Country"){
    //         $("#checkCountry").hide();
    //         $("#btnForward-2").removeAttr("disabled","disabled")
    //     }
    //     else{
    //         $("#checkCountry").show(); 
    //     }
    
    });
    

    
    if (address.length > 2 && address.length < 10){
        $("#checkAddress").hide();
        if (city.length > 3 && city.length < 10){
            $("#checkCity").hide();
        }
        else{
            $("#checkCity").show();
            
        }
    }
    else{
        $("#checkAddress").show();
    }
    
    
    });
    $("#btnForward-2").click(function(e){
        e.preventDefault();
    })


    
}); 