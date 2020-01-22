export async function callService(url, method, params, callbackSuccess, callbackError) {
    console.log('start ....');
    setTimeout(() => {
        if (params && typeof params === "string") {
            params = JSON.parse(params);
        }
        return (
            fetch(url, {
                method: method,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then((response) => response.json())
            .then((response) => {
                if (response) {
                    callbackSuccess()
                } else {
                    callbackError()
                }
            })
            .catch((error => console.log(error)))
        )
    }, 2000)
    console.log('done ....');
}