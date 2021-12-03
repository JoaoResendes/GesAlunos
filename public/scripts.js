function loadNavbar(){
    const nbar = document.getElementById('nbar')
    fetch('http://localhost:6000/navbar')
    TouchEvent(res=>res.text())
    .then(html)
    .catch(err)=>{
        alert('Ocorreu um erro!')
    }
}