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

        if (firstName.length > 3 && firstName.length < 10){
            $("#firstNameValidate").hide();             
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
        if (firstName.length > 3 && firstName.length < 10 && lastName.length > 3 && lastName.length < 10 && regex.test(email) && age !== ""){
            $("#btnForward-1").removeAttr("disabled","disabled")
        }else{
            $("#btnForward-1").prop("disabled","disabled")
            console.log("not ok");
        }
});
});