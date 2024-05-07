// const promise = new Promise(
//     (resolve, reject)=> {

//         //do something

//         if (greatSuccess) {
//             resolve ('sucess')
//         } else {
//             reject ('failure')
//         }
//     }
// )
// promise
// .then(success => {
//     console.log('yes', success)
// })
// .catch(err => {
//     console.log('oops', err)
// })

//klases uzduotis su promis

// function performasynchOperatio() {
//     return new Promise((resolve, reject) => {setTimeout(() {const randomNumber = Math.flour(Math.random())*10});
// !!!!!!!!!!!!!!nesp4jau})
// }


//naujas uzdavinys

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
 
            const dogWalked = true;
 
            if(dogWalked){
                resolve("You walk the dog ");
            }
            else{
                reject("You DIDN'T walk the dog");
            }
        }, 1500);
    });
}
 
function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const kitchenCleaned = true;
 
            if(kitchenCleaned){
                resolve("You clean the kitchen ");
            }
            else{
                reject("You DIDN'T clean the kitchen");
            }
        }, 2500);
    });
}
 
function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
 
            const trashTakenOut = true;
 
            if(trashTakenOut){
                resolve("You take out the trash ");
            }
            else{
                reject("You DIDN'T take out the trash");
            }
 
        }, 500);
    });
}
 
async function doChores(){
 
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
        
        console.log("You finsihed all the chores!");
    }
    catch(error){
        console.error(error);
    }
}
 
doChores();
