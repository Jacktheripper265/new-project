

$(document).ready(()=>{
    //load header
    // $('header').load('header.html .anchor,.navbar',function(){
       
    // })

    //load footer
    $('footer').load('footer.html ',function(){
      
    })

    //password checking
    $('#pass,#cpass').on('keyup',function()
    {
    if($('#pass').val() === $('#cpass').val())
    {
        $('#out').html("Matching");
        $('#out').css('color','green');
        $('#but').removeAttr("disabled");
    }
    else{
        $('#out').html("Not Matching");
        $('#out').css('color','red');
        $('#but').attr("disabled","true");
    }
});


// //date checking
// $('#dat').on('change',function()
// {
//     var dat=$('#dat').val();
//     var today=new Date();
//     var dob=new Date(dat);
//     // if(today.toString()== dob.toString()) {
//     //     $('#but').attr("disabled","true");
//     // }
//     if(today > dob)
//     {
//         $('#but').removeAttr("disabled");
//     }
  
//     else  {
//         $('#but').attr("disabled","true");
//     }
// })

//gender validation

$('#but,.gen').on('click',function(){
    var radio=$('.gen');
    var flag=0;
    for(var i=0;i<radio.length;i++)
    {
        if(radio[i].checked==true)
        {
            flag=1;
            $('#but').removeAttr("disabled");
            break;

        }
    }
    if(flag==0)
    {
        $('#but').attr("disabled","true");
        alert("Choose Your Gender");
    }
})




//submit user
// $('#but').on('click',function(){
//     let name=$('#name').val();
//     let email=$('#email').val();
//     let password=$('#pass').val();
//     let cpassword=$('#cpass').val();
//     // let dob=$('#dat').val();
//     let phone=$('#phone').val();
//     let gender=$('input[name="gender"]:checked').val();
  

//     var user={"name":name,"email":email,"password":password,"cpassword":cpassword,"phone":phone,
//      "gender":gender};
    
//     $.ajax({
//         type: "POST",
//         url: "http://localhost:3000/users",
//         data: JSON.stringify(user),
//         success: function(data, status, xhr){
//             console.log('success'+status);
//             alert('success'+status);
            
//         },
        
//         error:function(jqXhr, textStatus, errorMessage){
//             console.log('error'+errorMessage);
//         },
//         dataType: "text",
//         contentType : "application/json",
        
//       });


$('#myForm').submit((a)=>{
    a.preventDefault();
    let name=$('#name').val();
    let email=$('#email').val();
    let password=$('#pass').val();
    // let cpassword=$('#cpass').val();
    // let dob=$('#dat').val();
    let phone=$('#phone').val();
    let gender=$('input[name="gender"]:checked').val();
  

    var user={"name":name,"email":email,"password":password,"phone":phone,
     "gender":gender};
    
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/users",
        data: JSON.stringify(user),
        success: function(data, status, xhr){
            console.log('success'+status);
            alert('success'+status);
            
        },
        
        error:function(jqXhr, textStatus, errorMessage){
            console.log('error'+errorMessage);
        },
        dataType: "text",
        contentType : "application/json",
        
      });
    
    


})
$('.button1').click(function(){
    console.log('reach');
    $('#myForm').css('display','none');
    $('#myForm1').css('display','block');
    // $('#myForm').addClass('invisible');
    // $('#myForm1').addClass('visible');
    $('footer').addClass('foot2');
})

$('.button2').click(function(){
    console.log('reach');
    $('#myForm1').css('display','none');
    $('#myForm').css('display','block');
    // $('#myForm').addClass('visible');
    // $('#myForm1').addClass('invisible');
    $('footer').removeClass('foot2');
})


$('#myForm1').submit((a)=>{
    a.preventDefault();
    let email=$('#email1').val();
    
    let password=$('#pass1').val();
  
  

    if(email==""&&password==""||email==""||password=="")
    {
        alert("name and password is incorrect")
    }
    else{
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/users",
        data: {"email":email,"password":password},
        success: function(data, status, xhr){
            console.log(data);
            alert(data);
            if(data!=='[]')
            {
            sessionStorage.setItem('user',data);
            window.location.replace('editor.html');
            }
            else
            {
            $('.text-muted').html('Wrong Email Id or Password');
            $('.text-muted').css('color','red');
            alert('error');
            }
        },
        
        error:function(jqXhr, textStatus, errorMessage){
            console.log('error'+errorMessage);
        },
        dataType: "text",
        contentType : "application/json",
        
      });
    }
    


})

}
)