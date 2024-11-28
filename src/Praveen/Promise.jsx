const data = new Promise((resolve ,reject)=>{
    setTimeout(()=>{
        const ans='praveen';
        if (ans){
            resolve (ans)

        }else{
            reject ('no data present');
        }
    },5000);

})
data
.then((name)=>{
    console.log(name)
})
.catch((error)=>{
    console.log()
})
.finally(()=>{})