const host = "http://192.168.43.233:3000"
const idAutor = window.location.search.match(/id=(.*)/)[1];
const lastText = window.location.search.match(/last=(.*)/)[1];
start();

async function loadAutorPre(){
    return new Promise((resolve, reject)=>{
        fetch(`${host}/obras?id=${idAutor}&last=${lastText}`).then(res=>res.json().then(response=>{
            resolve(response);
        }))
    })

}
async function start(){
    const res = await loadAutorPre();
    console.log(res)
    if(res.link){
        window.location.href=res.link;
    }
    document.querySelector('.longText h1').innerText=res.titulo;
    document.querySelector('.longText p').innerText=res.conteudo;
    document.querySelector('.longText .autor').innerText=res.nome;
    console.log(res.id)
    document.getElementById('mainBtn').setAttribute('href',`/texto.html?id=${idAutor}&last=${res.idi}`);
    const trDiv= document.querySelector('.transition');
    trDiv.classList.remove('active-transition');
}