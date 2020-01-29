// export async function callService(callBack) {
//     console.log('start ....', callBack.url);
//     setTimeout(() => {
//         if (callBack.params && typeof callBack.params === "string") {
//             callBack.params = JSON.parse(callBack.params);
//         }
//         return (
//             fetch(callBack.url, {
//                 method: callBack.method,
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'application/json',
//                 }
//             })
//             .then((response) => response.json())
//             .then((response) => {
//                 if (callBack.params.userId == response[0].userId) {
//                     console.log('done ....', response[0]);
//                     return response[0];
//                     resolve(response[0])
//                 } else {
//                     console.log('error ....');
//                     return callBack.callbackError();
//                 }
//             })
//             .catch((error => console.log(error.message)))
//         )
//     }, 500)
// }

function randomLongResolve(callBack) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (callBack.params && typeof callBack.params === "string") {
                callBack.params = JSON.parse(callBack.params);
            }
            return (
                fetch(callBack.url, {
                    method: callBack.method,
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    }
                })
                .then((response) => response.json())
                .then((response) => {
                    if (callBack.params.userId == response[0].userId) {
                        resolve(response[0])
                        return callBack.callbackSuccess()
                    } else {
                        console.log('error ....');
                        // reject(callBack.callbackError());
                        return callBack.callbackError()
                    }
                })
                .catch((error => console.log(error.message)))
            )
        }, 500)
    });
  }
  
  export async function callService(callBack) {
    console.log('start ....');
    const result = await randomLongResolve(callBack);
    console.log('done...');
    return result;
  }

  
export async function getAccountList() {
    return (
        fetch('https://reqres.in/api/users', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then((response) => response.json())
        .then((response) => {
            console.log("Response getAccount: ", response)
            return response;
        })
        .catch((error => console.log(error.message)))
    )
}

export async function loadMoreAccountList(current) {
    return (
        fetch('https://reqres.in/api/users?page='+current, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then((response) => response.json())
        .then((response) => {
            console.log("Response getMoreAccount: ", response)
            return response;
        })
        .catch((error => console.log(error.message)))
    )
}

export async function getAccountData(params){
    console.log('start ....', params.userId);
    return (
        fetch('http://102.27.1.1:3000/users?userId='+params.userId, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then((response) => response.json())
        .then((response) => {
            console.log(callBack.params.userId)
            console.log(response[0].userId)
            if (callBack.params.userId == response[0].userId) {
                console.log('done ....', response[0]);
                return callBack.callbackSuccess();
            } else {
                console.log('error ....');
                return callBack.callbackError();
            }
        })
        .catch((error => console.log(error.message)))
    )
}