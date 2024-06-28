// 1. Using Promises and try...catch
// a. Create a function fetchData that returns a Promise.
// b. Use fetch to get data from an API endpoint (e.g., JSONPlaceholder).
// c. If the fetch is successful, resolve the Promise with the data.
// d. If there&#39;s an error (network issue, invalid URL, etc.), reject the Promise with an
// appropriate error message.
// e. Call fetchData and handle the resolved data and errors using then, catch, and finally.


function fetchData(url){
    let promise = new Promise((resolve,reject)=>{
        fetch(url).then(response=>{
            if(!response.ok){
                throw new Error("Network Error")
            }
            return response.json();
        }).then(data=>{
            resolve(data);
        }).catch(error=>{
            reject('API Fectch error',error.message)
        })
    })
    return promise;
}
const url="https://jsonplaceholder.typicode.com/users";
fetchData(url).then(data=>{
    console.log("Fetch Success:",data)
}).catch(error=>{
    console.log("Fetch Error:",error)
}).finally(()=>{
    console.log("Fetch Completed")
})


// OUTPUT:
// Fetch Success: [
//     {
//       id: 1,
//       name: 'Leanne Graham',
//       username: 'Bret',
//       email: 'Sincere@april.biz',
//       address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: [Object]
//       },......






// 2. Advanced Closure with Configuration
// a. Create a function createCounter that takes an initial value and step size as parameters.
// b. The function should return an object with methods: increment, decrement, reset, and
// getValue.
// c. The increment method should increase the counter by the step size.
// d. The decrement method should decrease the counter by the step size.
// e. The reset method should reset the counter to the initial value.
// f. The getValue method should return the current value of the counter.
// g. Demonstrate the closure by creating a counter with an initial value of 10 and step size of
// 5.

function createCounter(value,step){
    let counter=value;
    return{
        increment:()=>{
            counter+=step;
        },
        decrement:()=>{
            counter-=step;
        },
        reset:()=>{
            counter=value;
        },
        getValue:()=>{
            return counter;
        }
    }
}

const counter=createCounter(10,5);
console.log(counter.getValue());
counter.increment();
counter.increment();
console.log(counter.getValue());
counter.decrement();
console.log(counter.getValue());


// OUTPUR:
// 10
// 20
// 15





// 3. Using bind Method with Event Listeners
// a. Create a class User with a constructor that takes a name parameter.
// b. The class should have a method greet that logs a greeting message including the user&#39;s
// name.
// c. Use the bind method to bind greet to the current instance within the constructor.
// d. Demonstrate the class by creating an instance and calling the greet method.

class User{
    constructor(name){
        this.name=name;
        this.greet=this.greet.bind(this);
    }
    greet(){
        console.log(`Hello ${this.name}`);
    }
}
const user=new User("Dev");
user.greet();
const button=document.getElementById("btn");
button.addEventListener("click",user.greet);


// OUTPUT:
// Hello Dev






// 4. Combining Promises and Closures
// a. Create a function createDataFetcher that returns an object with two methods: fetchData
// and getData.
// b. The fetchData method should fetch data from an API and store it in a closure variable.
// c. The getData method should return the fetched data.
// d. Demonstrate using the fetchData and getData methods.

function createDataFetcher(url){
    let data;
    return{
        fetchData:()=>{
            return fetch(url).then(response=>{
            if(!response.ok){
                throw new Error("Network Error")
            }
            return response.json();
        }).then(fetcgdata=>{
            data=fetcgdata;
            return data;
        })
        .catch(error=>{
            console.log(error.message);
        })
        },
        getData:()=>{
            return data;
        }
    }
}
url="https://jsonplaceholder.typicode.com/users"
const datafetch=createDataFetcher(url);
datafetch.fetchData().then(()=>{
    data=datafetch.getData();
    console.log("Fetched data:",data);
})


// OUTPUT:
// Fetched data: [
//     {
//       id: 1,
//       name: 'Leanne Graham',
//       username: 'Bret',
//       email: 'Sincere@april.biz',
//       address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: [Object]
//       },
//       phone: '1-770-736-8031 x56442',
//       website: 'hildegard.org',
//       company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//       }
//     },







// 5. Handling Asynchronous Operations with Error Handling
// a. Create a function fetchDataWithRetry that takes a URL and a maximum retry count as
// parameters.
// b. Use a closure to maintain the retry count and a private function fetchData that returns a
// Promise for fetching data from the URL.
// c. Implement the fetchData function with error handling to retry fetching the data up to the
// maximum retry count.
// d. Demonstrate the function by calling fetchDataWithRetry with a URL and handling the
// resolved data or errors.


function fetchDataWithRetry(url,retry){
    let retryCount=0;
    function fetchData(){
        return fetch(url).then(response=>{
            if(!response.ok){
                throw new Error("Network error");
            }
            return response.json();
        }).catch(error=>{
            if(retryCount<retry){
                retryCount++;
                console.log(`Retrying.. ${retryCount}`);
                return fetchData();
            }else{
                throw new Error(`fail. Retry ${retryCount}`)
            }

        })
    }
    return fetchData();
}
url="https://jsonplaceholder.typicode.com/userS";
const retry=3;
fetchDataWithRetry(url,retry).then(data=>{
    console.log(`Fetched data ${data}`)
}).catch(error=>{
    console.log(`Error ${error.message}`)
})


// OUTPUT:
// Retrying.. 1
// Retrying.. 2
// Retrying.. 3
// Error fail. Retry 3