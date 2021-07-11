const host = "http://192.168.43.233:3000"
const idAutor = window.location.search.match(/id=(.*)/)[1];
start();

async function loadAutorPre(){
    return new Promise((resolve, reject)=>{
        fetch(`${host}/bio/search?id=${idAutor}`).then(res=>res.json().then(response=>{
            resolve(response);
        }))
    })

}
async function start(){
    const res = await loadAutorPre();
    console.log(res)
    document.getElementById('imagemAutor').src=res.urlFoto;
    document.querySelector('.longText h1').innerText=res.nome;
    document.querySelector('.longText p').innerText=res.bio;
    document.getElementById('mainBtn').href="/texto.html?id="+idAutor;
    const trDiv= document.querySelector('.transition');
    trDiv.classList.remove('active-transition');
}