const DefaultHeaders = {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
}

const makeRequest = (uploadData, method, path, headers = DefaultHeaders) => {
    if (method == 'GET') {
        return fetch(path, {
            method: method,
            headers: headers,
            credentials: 'include'
        })
    }
    else {
        return fetch(path, {
            method: method,
            headers: headers,
            credentials: 'include',
            body: JSON.stringify(uploadData),
        })
    }
}


const loginUser = (userCreds) => {
    return makeRequest(userCreds, 'POST', '/api/login').then(response => {
        return response.json()
    }).catch(error => {
        return error
    })
}

const registerUser = (newUser) => {
    const uploadData = {
        ...newUser
    }
    let data = cleanupData(uploadData)

    makeRequest(data, 'POST', '/api/user').then(response => {
        if (response.status == 422) {
            window.alert('Email ID already exist. Try Login')
            return response
        }
        else {
            window.alert('Successfully signed up')
            window.location.href = '/login'
            return response
        }
    }).catch(error => {
        window.alert('Error signing up')
        return error
    })
}

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        return makeRequest({}, 'GET', `/api/user/${id}`).then(response => {  
            return resolve(response.json())
        }).catch(error => {
            window.alert('Error retrieving user')
            console.log(error)
            return reject(error)
        })
    })
}
const getAllUsers = (id) => {
    return new Promise((resolve, reject) => {
        return makeRequest({}, 'GET', '/api/admin/users').then(response => {
            return resolve(response.json())
        }).catch(error => {
            window.alert('Error retrieving user')
            console.log(error)
            return reject(error)
        })
    })
}

const makeAdmin = (volunteerEmail) => {
    return new Promise((resolve, reject) => {
        return makeRequest(volunteerEmail, 'POST', '/api/admin/user/makeAdmin').then(response => {
            return resolve(response.json())
        }).catch(error => {
            window.alert('Error makeing  user admin', error)
            console.log(error)
            return reject(error)
        })
    })

}

const searchVolunteers = (searchQuery) => {
    return new Promise((resolve, reject) => {
        return makeRequest(searchQuery, 'POST', '/api/admin/search/users').then(response => {
            return resolve(response.json())
        }).catch(error => {
            window.alert('Error retrieving user')
            console.log(error)
            return reject(error)
        })
    })

}

const exportUserData  = () => {
    const headers = {
        'Content-Type': 'application/vnd.openxmlformats',
        'Content-Disposition': 'attachment; filename=UserData.xlsx'
    }
    return makeRequest({}, 'GET', '/api/admin/user/exportData', headers)
}

const cleanupData = (uploadData) => {
    delete uploadData.checkboxInterests
    delete uploadData.retypePassphrase
    delete uploadData.skillsInput
    return { ...uploadData }
}

const updateUser = (newUser) => {
    const uploadData = {
        ...newUser
    }
    let data = cleanupData(uploadData)
    return makeRequest(data, 'PUT', '/api/user').then(response => {
        return response.json()
    }).catch(error => {
        console.log(error)
        return console.log(error)
    })
}

const getReportsInRange = (range) => {
    return makeRequest(range, 'POST', '/api/reportsRange').then(response => {
        return response.json()
    }).catch(error => {
        console.log("error in api js", error)
        return console.log(error)
    })
}

const deleteReport = (filename) => {
    return makeRequest({}, 'GET', `/report/delete/${filename}`).then(response => {
        return {}
    }).catch(error => {
        console.log("error in api js", error)
        return console.log(error)
    })
}
const downloadPDF = (filename) => {
    window.location.href = `/report/${filename}`
    // easiest way I can think of to avoid a race condition while using window.location
    setTimeout(function() {
        deleteReport(filename)
    }, 5000)
}

const generateReport = (reports) => {
    return makeRequest(reports, 'POST', '/api/generateReport').then(response => {
        response.json().then( result => {
            downloadPDF(result.filename)
        })
        return {}
    }).catch(error => {
        console.log("error in api js", error)
        return console.log(error)
    })
}

const getLibraries = () => {
    return makeRequest({}, 'GET', '/api/libraries').then(response => {
        return response.json()
    }).catch(error => {
        console.log("error in api js", error)
        return console.log(error)
    })
}

const createMeal = (newMeal) => {
    return new Promise((resolve, reject) => {
        return makeRequest(newMeal, 'POST', '/api/meals').then(response => {
            return resolve(response.json())
        }).catch(error => {
            window.alert('Error creating meal please try again later.')
            console.log(error)
            return reject(error)
        })
    })
}

const editReport = (newMeal) => {
    return new Promise((resolve, reject) => {
        return makeRequest(newMeal, 'PUT', '/api/meals').then(response => {
            return resolve(response.json())
        }).catch(error => {
            window.alert('Error creating meal please try again later.')
            console.log(error)
            return reject(error)
        })
    })
}

export {
    loginUser,
    registerUser,
    getUser,
    updateUser,
    exportUserData,
    makeAdmin,
    getAllUsers,
    searchVolunteers,
    getReportsInRange,
    generateReport,
    getLibraries,
    createMeal,
    editReport,
}
