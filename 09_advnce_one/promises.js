const promiseOne = new Promise((resolve, reject)=>{
    // Do an async task
    // DB calls , cryptography, network
    setTimeout(()=>{
        console.log("Async is complite")
        resolve()
    }, 1000)
})

promiseOne.then(()=>{
    console.log("promise consume")
})

new Promise((resolve, reject)=>{
setTimeout(()=>{
    console.log("Async task 2")
    resolve()
}, 2000)
}).then(()=>{
    console.log("Async 2 resolve")
})

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({usename: "nabina", email: "nabinamallik@gamil.com"})
    }, 1000)
})

promiseThree.then((user)=>{
    console.log(user)
})


const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: "nabina", password: "123"})
        } else{
            reject('ERROR: Something went wrong....')
        }
    }, 1000);
})

promiseFour
.then((user) => {
    console.log(user); // exicute when the api fetct the data succesfully either if there is no error
    return user.username
})
.then((username)=>{
    console.log(username) // exicute when the api fetching data unsuccessful either if there is an error
})
.catch((err)=>{
    console.log(err)
})
.finally(()=>{
    console.log("the promsie is either resoleve or rejected") // it exicute aftr the then or the catch
})


const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(() => {
            let error = false
        if(!error){
            resolve({username: "mallik", password: "123"})
        } else{
            reject('ERROR: Something went wrong....')
        }
    }, 1000);
}) 

async function consumePromiseFive(){
   try{
    const response = await promiseFive
    console.log(response);
   }
   catch(error){
    console.log(error)
   }
}
consumePromiseFive()

async function getAllusers(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        // console.log(response)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("E:", error)
    }
}
getAllusers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})