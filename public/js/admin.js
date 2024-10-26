async function getUsers(){
    try{
        let res = await axios.get("/users")
        let users = res.data
        users.forEach(function (user) {
            $('#users').append(`<tr>
                                    <td>${user.id}</td>
                                    <td>${user.firstName}</td>
                                    <td>${user.lastName}</td>
                                    <td>${user.email}</td>
                                </tr>`);
          });
    }
    catch(err){
        $('#error').append(`<p>Cannot get users:${err}</p>`)
    }
}
getUsers();