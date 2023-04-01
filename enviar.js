const formulario = document.querySelector("#form");
formulario.addEventListener('submit', (e) =>{
    e.preventDefault()
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    fetch("https://formsubmit.co/ajax/noemi_morales@outlook.cl", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
        formulario.reset();
    })


    