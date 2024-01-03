function signup()
{
    var username=document.getElementById("username");
    var password=document.getElementById("pass");
    var age=document.getElementById("age");
    var mail=document.getElementById("mail");
    var fmail=document.getElementById("Fmail");
    var phone=document.getElementById("phone");
    var regexpattern=/^(?=.*[-\#\$\.\%\&\@\!\+\=\\*])(?=.*[a-zA-Z])(?=.*\d).{5,12}$/;

    if(username==""&&password==""&&age==""&&mail==""&&fmail==""&&phone=="")
    {
        alert("please fill data");
    }
    else if(username.length<=5&&username.length>=10)
    {
        alert("the username must 5 to 10 char");
    }
    else if(age<18&&age>=25)
    {
        alert("the age must be 18 to 25");
    }
    else if(password.matches(regexpattern))
    {
        alert("the password must get spicail char");
    }
    
    else if(phone.length==11)
    {
        alert("the phone must be 11 digit");
    }
    else
    {
        alert("sign up succesfully");
        var obj={username:username,password:password,age:age,mail:mail,femail:fmail,phone:phone};
        console.log(userrs);
        console.push(userrs);
      
    }
}



var userrs=[{username:"user1",password:"pass123@#",age:"25",mail:"mail",phone:"01100645564"},{username:"user2",password:"abc123@",age:"30",femail:"femail",phone:"01111111111"}];

function login()
{
    var Username=document.getElementById("name");
    var Password=document.getElementById("password");

    if(Username==""&&Password=="")
    {
        alert("please fill data");
        return false;
    }
    for(var x=0;x<userrs.length;x++)
    {
        if(userrs[x].username==Username.value&&userrs[x].password==Password.value)
        {
            alert("login successful");

            
        }
        else{
            alert("login faild");
            

        }
    }
}

function foreget()
{
    var newuser=document.getElementById("newuser").value;
    var newpass=document.getElementById("newpass").value;
    for(var i=0;i<userrs.length;i++)
    {
        if(userrs[i].username==newuser)
        {
            alert("update succesfully");
            return true;
        }
        else{
            alert("update fail");
            return false;
        }
    }
}

function review()
{
    var yes=0;
    var no=0;
    for(var i=0;i<3;i++)
    {
        try{
            var radio = document.querySelector(`input[name = "q${i+1}"]:checked`);
            if(radio.value=="yes")
            {
                yes++;
            }
            else
            {
                no++;
            }
        }
            catch{
                alert("answer all question");
                return false;
            }
            alert(`yes:${yes} no:${no}`)
        }
    }