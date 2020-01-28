export async function callService(callBack) {
    console.log('start ....', callBack.url);
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
                if (response) {
                    console.log('done ....', response);
                    return callBack.callbackSuccess();
                } else {
                    console.log('error ....', response);
                    return callBack.callbackError();
                }
            })
            .catch((error => console.log(error.message)))
        )
    }, 500)
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