const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const normalize = (str) => {
  const key = `${str.toUpperCase()}*`;
  return removeAccents(key)
}

const apiURL = 'https://sheetdb.io/api/v1/to3oeys9kfrh0'

const onSearch = () => {
  document.getElementById('pass').textContent = 'Buscando tus pases...';
  
  const name = document.getElementById("fname").value;
  if(name && name.trim().length == 0) return;

  const key = normalize(name);
  SheetDB.read(apiURL, { search: { Nombre:  key} }).then(function(result){
    console.log(result);

    if(result && result.length === 1) {
      const { Id, Pases, Confirm } = result[0]

      if(Confirm && Confirm == 1 ){
        document.getElementById('pass').textContent = 'Ya haz confirmado'
      } 
      else {
        document.getElementById('pass').textContent = Pases
      }
    } else if(result && result.length > 0 ){
      document.getElementById('pass').textContent = 'Ingresa tu nombre y apellido!'
    } 
    else {
      document.getElementById('pass').textContent = 'Invitado no encontrado'
    }

  }, function(error){
    console.log(error);
  });
}

const onConfirm = (confirm) => {
  const id = document.getElementById('guestId').value
  if (id) {
    fetch(`${apiURL}/Id/${id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: 
          {
            Confirm: confirm
          }
      })
    })
    .then((response) => {
      // TODO: eliminar el valor de guestId
      response.json()
    })
    .then((data) => console.log(data))
  }
}