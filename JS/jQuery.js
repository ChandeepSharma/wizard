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
    $("#form-1").keyup(function(){
        let  firstName = $("#firstName").val();
        let  lastName = $("#lastName").val();
        let  email = $("#inputEmail").val();
        let regex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        let  age = $("#inputAge").val();

    if (firstName.length < 3 || firstName.length > 10){
        $("#firstNameValidate").show();
        $("#checkField").prop("disabled","disabled")
    }
    else{
        $("#firstNameValidate").hide();
        $("#checkField").removeAttr("disabled","disabled")
    }
    if (lastName.length < 3 || lastName.length > 10){
        $("#lastNameValidate").show();
        $("#checkField").prop("disabled","disabled")
    }
    else{
        $("#lastNameValidate").hide();
        $("#checkField").removeAttr("disabled","disabled")
    }
    if (!regex.test(email)){
        $("#emailValidate").show();
        $("#checkField").prop("disabled","disabled")
    }
    else{
        $("#emailValidate").hide();
        $("#checkField").removeAttr("disabled","disabled")
    }
    if (age == ""){
        $("#ageValidate").show();
        $("#checkField").prop("disabled","disabled")
    }
    else{
        $("#ageValidate").hide();
        $("#checkField").removeAttr("disabled","disabled")
    }
    });
    $("#checkField").click(function(){
        let check = $("#checkField").val();
        let terms = $("#checkField").prop("checked","checked")
        if (check == terms){
            $("#checkValidate").show();
            $("#btnForward-1").prop("disabled","disabled")
        }
        else{
            $("#checkValidate").hide();
            $("#btnForward-1").removeAttr("disabled","disabled")
        }
    });
    
    // form-2 validation 
    $("#form-2").keyup(function(){
        let  address = $("#inputAddress").val();
        let  city = $("#inputCity").val();
    if (address.length < 3 || address.length > 10){
        $("#checkAddress").show();
        $("#inputCountry").prop("disabled","disabled")
    }
    else{
        $("#checkAddress").hide();
        $("#inputCountry").removeAttr("disabled","disabled")
    }
    if (city.length < 3 || city.length > 10){
        $("#checkCity").show();
        $("#inputCountry").prop("disabled","disabled")
    }
    else{
        $("#checkCity").hide();
        $("#inputCountry").removeAttr("disabled","disabled")
    }
    });
    $("#inputCountry").click(function(){
        let  country = $("#inputCountry").val();
        if (country == "Your Country"){
            $("#checkCountry").show();
            $("#btnForward-2").prop("disabled","disabled")
        }
        else{
            $("#checkCountry").hide();
            $("#btnForward-2").removeAttr("disabled","disabled")
        }
    })
    
}); 