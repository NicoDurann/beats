function main(){
    setForm()
}
function setForm(){
    const sendForm = (e)=>{
        e.preventDefault()
        console.log('enviado')
    }
    const form = document.querySelector('#formContacto')
    form.addEventListener('submit',(e)=>sendForm(e))
}