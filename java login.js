var userrs=[{username:"zeyad",pssword:"123456"}];
function zeyad()
{
    var Username=document.getElementById("username").value;
    var Password=document.getElementById("Password");

    if(Username==""||Password=="")
    {
        alert("please fill data");
    }
    else
    {
        for(let i=0;i<userrs.length;i++)
        {
            if(Username==userrs[i].username&&Password==userrs[i].pssword)
            {
                alert("login succesfully"+Username);
                return true;
            }
            alert("login fail");
            console.log(userrs);

        
        }
    }
}