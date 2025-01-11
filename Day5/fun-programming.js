function main(a)
{
    console.log(a);
    console.log(a());


}
main(function(){
    return "iam cbf1"
})

main(function(){
    return "iam cbf2"
})


function operation(task)
{
    console.log(task(10 ,20));

}
operation(function(a , b){
    return a + b;
})

operation(function(a , b){
    return a - b;
})

operation(function(a , b){
    return a * b;
})




let main1 = (task) => {
    console.log(task(10 , 10))
}
main1((a , b) => {
    return a + b
})

main1((a,b) => {
    return a - b
})