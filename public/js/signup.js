async function createUser(e){
    e.preventDefault();

    const userData = {
        email: $('#email').val(),
        firstName: $('#fname').val(),
        lastName: $('#lname').val()
    }

    try{
        let res = await axios.post("/users", userData)
        let user = res.data
        if (user){
            window.location.href = 'admin.html';
        }
    }
    catch(err){
        $('#error').append(`<p>Cannot create user:${err}</p>`)
    }
}

$("#submit").on("click", createUser)