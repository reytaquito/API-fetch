

var contenido=document.querySelector("#contenido")
function traer(){
    fetch("https://reqres.in/api/users?delay=3")
        .then(res =>res.json())
        .then(data =>{
            //console.log(datos)
            tabla(data)
            usarLocalStorage(data.data)
            
        })
}
function tabla(data){
    console.log(data);
    
    contenido.innerHTML=``
    for(let valor of data.data){
        //console.log(valor.first_name)
        contenido.innerHTML += `
        <tr>
          <th>${valor.id}</th>
          <th>${valor.first_name}</th>
          <th>${valor.last_name}</th>
          <th>${valor.email}</th>
          <th> <img src="${valor.avatar}" class="rounded-circle" style="width: 50px" ></img></th>
        </tr>
        `
    }
    
}
const usarLocalStorage = data => {
    const users = {
        content: [...data],
        time: Date.now() + 60000
    }
    localStorage.setItem('users', JSON.stringify(users))
    
}
