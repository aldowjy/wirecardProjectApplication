const wirecardRequest = {
    request: (url, parameters, callbackSuccess, callbackError) => {
        if (parameters && typeof parameters === "string") {
            parameters = JSON.parse(parameters);
        }
        return (
            fetch(url + parameters.id, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then((response) => response.json())
            .then((response) => {
                if (response.companyId === parameters.company.companyId) {
                    callbackSuccess()
                } else {
                    callbackError()
                }
            })
        )
    }
}

export default wirecardRequest