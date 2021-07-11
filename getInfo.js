const host = "http://192.168.43.233:3000"
start();
document.getElementById('randBtn').addEventListener('click',start)
async function loadAutorPre(){
    return new Promise((resolve, reject)=>{
        fetch(`${host}/autor/rand`).then(res=>res.json().then(response=>{
            resolve(response);
        }))
    })

}
async function start(){
    const res = await loadAutorPre();
    document.getElementById('nameAutor').innerText=res.nome;
    document.getElementById('frase').innerText=`${res.sucesso}`;
    document.querySelector('.bio').innerText=res.pDescricao;
    document.getElementById('informationBtn').href="/autor.html?id="+res.id;
    const trDiv= document.querySelector('.transition');
    trDiv.classList.remove('active-transition');
}