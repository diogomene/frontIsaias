
start();
document.getElementById('randBtn').addEventListener('click',start)
async function loadAutorPre(last){
    return new Promise((resolve, reject)=>{
        fetch(`${host}/autor/rand?last=${last}`).then(res=>res.json().then(response=>{
            resolve(response);
        }))
    })

}
async function start(){
    const ls = localStorage.getItem('last_aut')
    const res = await loadAutorPre(ls);
    document.getElementById('nameAutor').innerText=res.nome;
    document.getElementById('frase').innerText=`${res.sucesso}`;
    document.querySelector('.bio').innerText=res.pDescricao;
    document.getElementById('informationBtn').href="/autor.html?id="+res.id;
    localStorage.setItem('last_aut', res.id)
    const trDiv= document.querySelector('.transition');
    trDiv.classList.remove('active-transition');
}