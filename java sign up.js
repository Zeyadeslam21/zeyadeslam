var users=[{username:"zeyad",Password:"123456"}];
function signup()
{
    var Username=document.getElementById("username");
    var password=document.getElementById("Password");
    var confirmpassword=document.getElementById("conpass");
    var phonenumber=document.getElementById("Phone");
    var email=document.getElementById("email");
    var regexpattern=/^(?=.*[-\#\$\.\%\&\@\!\+\=\\*])(?=.*[a-zA-Z])(?=.*\d).{5,12}$/;

    if(Username==""&&password==""&&confirmpassword==""&&phonenumber==""&&email=="")
    {
        alert("please fill data");
    }
    else if(Username.length<5||Username.length>15)
    {
        alert("please enter the password at lest 5 to 15");
    }
    else if(password.matche(regexpattern))
    {
        document.getElementById("Password").innerHTML="password must be storng and contanis special charactar";
    }
    //check password match confiram password
    else if(password!==confirmpassword)
    {
        document.getElementById("conpass").innerHTML="passsword must be same";
    }
    else
    {
        var obj={username:Username,Password:password}
        console.log(obj);
        users.push(obj);
        alert("resgitation sucessful");
    }

}
