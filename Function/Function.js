const n1=maha; //scoped globally
var n3=lakshmi;

function myfunction()
{
    let n4=devi;
    var n2=lakshmi;//scoped locally
}
console.log(n2); //Error:not defined 
                   