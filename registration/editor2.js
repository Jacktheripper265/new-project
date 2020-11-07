





$(document).ready(()=>{
       
         var likes=new Array();
        
         $.ajax({
            type: "GET",
            url: "http://localhost:3000/likes",
           
            success: function(data, status, xhr){
                console.log('success'+status);
                alert('success'+status);
                likes=JSON.parse(data);
                console.log(likes);
                
            },
            
            error:function(jqXhr, textStatus, errorMessage){
                console.log('error'+errorMessage);
            },
            dataType: "text",
            contentType : "application/json",
            
            
          });  
          var commentarray=new Array();
          $.ajax({
            type: "GET",
            url: "http://localhost:3000/comments",
           
            success: function(data, status, xhr){
                console.log('success'+status);
                alert('success'+status);
                commentarray=JSON.parse(data);
                console.log(commentarray);
                
            },
            
            error:function(jqXhr, textStatus, errorMessage){
                console.log('error'+errorMessage);
            },
            dataType: "text",
            contentType : "application/json",
            
            
          });  



 





    $('.button1').click(function(){
        console.log('reach');
        $('#home').css('display','none');
        $('#contain1').css('display','block');
        $('#myForm1').css('display','block');
        // $('#myForm').addClass('invisible');
        // $('#myForm1').addClass('visible');
        $('#display').css('display','none');
        $('footer').addClass('foot2');
    })
    
    $('.button2').click(function(){
        console.log('reach');
        $('#contain1').css('display','none');
        $('#home').css('display','block');
        // $('#myForm').addClass('visible');
        // $('#myForm1').addClass('invisible');
        $('#display').css('display','none');
        $('footer').removeClass('foot2');
    })  

var user=JSON.parse(sessionStorage.getItem('user'));
  
$('form').submit((a)=>{
  a.preventDefault();

console.log(user[0].name);
  var o = new Object();
var title=$('#title').val();
var content=tinymce.activeEditor.getContent();
var category=$( "#Category option:selected" ).text();
o.author=user[0].name;
  o.title=title;
  o.category=category;
  o.content=content;

  console.log(JSON.stringify(o))
  $.ajax({
      type: "POST",
      url: "http://localhost:3000/blogs",
      data: JSON.stringify(o),
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


$('.button3').on('click',function(){
    sessionStorage.removeItem('user');
    window.location.replace('login.html');
})





var blog=new Array();
$.ajax({
    type:"GET",
    dataType:"json",
    url:"http://localhost:3000/blogs",

    success:(data)=>{
        console.log(data);
        blog=data;
        
        
    },
    error:(e)=>{
        alert("error");
    }
})

var cate="";
$('.buttonz').on('click',function(){
    var cat=$(this).attr('data-filter');
    cate=cat;
    $('.wrapperblog').html("");
    for(var i=0;i<blog.length;i++)
    {       
      
        
        
        if(cat==blog[i].category)
        {
          

        
            $('.wrapperblog').append('<div class="sub"><h4><small>RECENT POSTS</small></h4><hr><h3>Author: '+blog[i].author+'</h3><br><h3>Category: '+blog[i].category+'</h3><br><h3>Title: '+blog[i].title+'</h3><br><p>'+blog[i].content+'</p><br><button class="but3 btn btn-primary" id='+blog[i].id+'>Continue Reading</button><hr></div><br><br>');
        }
        if(cat=="all")
        {
            $('.wrapperblog').append('<div class="sub"><h4><small>RECENT POSTS</small></h4><hr><h3>Author: '+blog[i].author+'</h3><br><h3>Category: '+blog[i].category+'</h3><br><h3>Title: '+blog[i].title+'</h3><br><p>'+blog[i].content+'</p><br><button class="but3 btn btn-primary" id='+blog[i].id+'>Continue Reading</button><hr></div><br><br>');
        }
    }
})

$('#sea').on('keyup',()=>{
    var search =$('#sea').val();
    $('.wrapperblog').html("");
    for(var i=0;i<blog.length;i++)
    {
        
        if(cate==blog[i].category)
        {
            if(blog[i].title.includes(search))
            {
            
            $('.wrapperblog').append('<div class="sub"><h4><small>RECENT POSTS</small></h4><hr><h3>Author: '+blog[i].author+'</h3><br><h3>Category: '+blog[i].category+'</h3><br><h3>Title: '+blog[i].title+'</h3><br><p>'+blog[i].content+'</p><br><button class="but3 btn btn-primary" id='+blog[i].id+'>Continue Reading</button><hr></div><br><br>');
            }
        }
        if(cate=="all")
        {
            if(blog[i].title.includes(search))
            {
            
            $('.wrapperblog').append('<div class="sub"><h4><small>RECENT POSTS</small></h4><hr><h3>Author: '+blog[i].author+'</h3><br><h3>Category: '+blog[i].category+'</h3><br><h3>Title: '+blog[i].title+'</h3><br><p>'+blog[i].content+'</p><br><button class="but3 btn btn-primary" id='+blog[i].id+'>Continue Reading</button><hr></div><br><br>');
            }
        }
    }


  })



$('body').on('click','.but3',function(){
    var id=$(this).attr('id');
    console.log(id);
    $('#display').html("");
    $('.app').html("");
    $('#home').css('display','none');
    $('#contain1').css('display','none');
    $('#display').css('display','block');

    for(var i=0;i<blog.length;i++)
    {
        if(blog[i].id==id)
        {
            $('#display').append('<div class="fullblog"><h4></h4><hr><h3>Author: '+blog[i].author+'</h3><br><h3>Category: '
            +blog[i].category+'</h3><br><h3>Title: '+blog[i].title+'</h3><br><p>'+blog[i].content+'</p> <button type="button" id='+
            blog[i].id+' class="btn btn-default btn-sm like"><span class="glyphicon glyphicon-thumbs-up" ></span> Like</button><span class="text-muted nlike">'
            +''+'</span><span class="text-muted lwarn"></span><hr><br>'+
            '<div class="container">'+
'<div class="row bootstrap snippets bootdeys">'+
    '<div class="col-md-8 col-sm-12">'+
        '<div class="comment-wrapper">'+
            '<div class="panel panel-info">'+
                '<div class="panel-heading">'+
                   'Comment panel'+
                '</div>'+
                '<div class="panel-body">'+
                    '<textarea class="form-control" id="comarea" placeholder="write a comment..." rows="3"></textarea>'+
                    '<br>'+
                    '<button type="button" class="btn btn-info pull-right com" id='+blog[i].id+'>Post</button>'+
                    '<div class="clearfix"></div>'+
                    '<hr>'+
                    '<ul class="media-list app">'+                         
                    '</ul>'+
               '</div>'+
            '</div>'+
        '</div>'+

   '</div>'+
'</div>'+
'</div>'+
            
            
            
            '</div><br><br>');
            break;
        }
    }
    for(var i=0;i<commentarray.length;i++)
{
    if(commentarray[i].blogid==id)
    {
        $('.app').append('<li class="media">'+
                            '<a href="#" class="pull-left">'+
                                '<img src="https://bootdey.com/img/Content/user_1.jpg" alt="" class="img-circle">'+
                            '</a>'+
                            '<div class="media-body">'+
                                '<span class="text-muted pull-right">'+
                                '<strong class="text-success">@'+commentarray[i].name+'</strong>'+
                                '<p>'+
                                    commentarray[i].content+
                                '</p>'+
                            '</div>'+
                        '</li>');
    }
}
  
})

function check1(name,id)
{
    
    var flag=0;
    
    console.log(likes);
        for(var i=0;i<likes.length;i++)
        {
            console.log(likes.length);
            if(likes[i].name==name && likes[i].blogid==id)
          {
              console.log(likes[i].name,name);
              console.log(likes[i].blogid,id);
                // $('.nlike').html(likes.length);
                // $('.like').attr('disabled','true');
                // $('.nlike').css('color','red');
                
                flag=1;
                break;


            }
        }
        if(flag==1)
        {
           
            return 'false';

        }
        else{
            
            return'true';
        }
}

       

       
    $('body').on('click','.like',function(a){
        var blogid=$(this).attr('id');
        a.preventDefault();
        var uname=user[0].name;
        let Obj=new Object();
        Obj.blogid=blogid;
        Obj.name=uname;
        
        
        let cnt=0;

        $.each(likes,function(i,v){
            if(v.blogid==blogid)
            {
                cnt+=1;

            }
        });
        
        if(check1(uname,blogid)=='true')
        {
    
        
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/likes",
            
            data: JSON.stringify(Obj),
            success: function(data, status, xhr){
                console.log('success'+status);
                alert('success'+status);
                $('.nlike').html(cnt);
                $('.lwarn').css('color','green');
                $('.lwarn').html("  liked successfully");
                $(this).removeAttr('disabled');
             
                a.preventDefault();
            },
            
            error:function(jqXhr, textStatus, errorMessage){
                console.log('error'+errorMessage);
            },
            dataType: "text",
            
            
            contentType : "application/json",
            
          });
        }
        else{ 
            $('.nlike').html(" "+cnt);
            $('.lwarn').html("  already done");
            $('.lwarn').css('color','red');
            $(this).attr('disabled','true');
           
            
        }
        

    })

    $('body').on('click','.com',function(){
        let content=$('#comarea').val();
        let blogid=$(this).attr('id');
        var name=user[0].name;
        let obj=new Object();
        obj.content=content;
        obj.blogid=blogid;
        obj.name=name;

        $.ajax({
            type: "POST",
            url: "http://localhost:3000/comments",
            
            data: JSON.stringify(obj),
            success: function(data, status, xhr){
                console.log('success'+status);
                alert('success'+status);
                $('.nlike').html(cnt);
                $('.lwarn').css('color','green');
                $('.lwarn').html("  liked successfully");
                $(this).removeAttr('disabled');
             
                a.preventDefault();
            },
            
            error:function(jqXhr, textStatus, errorMessage){
                console.log('error'+errorMessage);
            },
            dataType: "text",
            
            
            contentType : "application/json",
            
          });

    })



























})


