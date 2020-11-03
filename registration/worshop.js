

$(document).ready(()=>{
    $('header').load('header.html .anchor,.navbar',function(){
        alert('loaded');
    })
    $('footer').load('footer.html ',function(){
        alert('loaded');
    })
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

$('#dat').on('change',function()
{
    var dat=$('#dat').val();
    var today=new Date();
    var dob=new Date(dat);
    if(today > dob)
    {
        $('#but').removeAttr("disabled");
    }
    else if(today == dob) {
        $('#but').attr("disabled","true");
    }
    else  {
        $('#but').attr("disabled","true");
    }
})


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






})

function myFunction() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
       
        x.removeAttribute("style");
      
    } else {
      x.style.display = "block";
    }
  
  }