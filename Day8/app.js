//Synchronous behavior

function main(m,n)
{   
    
    setTimeout(() => {
    for(let i=m; i<=n; i++)
    {
        console.log(i);
    }
    
    } , 5000)
}
main(1,"10a")

function simple()
{
    console.log("no's printed")
}
simple()

function main(m, n) {   
    new Promise(resolve , reject) => {
        setTimeout(() => {
            if(isNaN(m) || isNaN(n))
            {
                return reject()
            }
            for(let i = m; i <= n; i++) {
                console.log(i);
            }
            return resolve();
        }, 5000);
    };
    .then(() => console.log("promise is resolved"))
    .catch(() => console.log("error occured"))
}

main(1, "10a").then(()) => {
function simple()
{
 console.log("no's printed")
}
simple()
}
      