
export const setAuthToken = (result) => {
    const currentUser = {
        email: result.user.email
    }
    fetch(`https://genius-car-server-mu-eight.vercel.app/jwt`, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // local storage is not tha best place to store jwt
            localStorage.setItem('Token', data.token);
            alert('Log in successfull');
        })
}