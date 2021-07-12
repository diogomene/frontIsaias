
const idAutor = window.location.search.match(/id=(.*)/)[1];


start();

async function loadAutorPre(lastText){
    return new Promise((resolve, reject)=>{
        fetch(`${host}/obras?id=${idAutor}&last=${lastText}`).then(res=>res.json().then(response=>{
            resolve(response);
        }))
    })

}
async function start(){
    const ls = localStorage.getItem('last') || -1;
    const res = await loadAutorPre(ls);
    console.log(res)
    document.querySelector('.longText h1').innerText=res.titulo;
    document.querySelector('.longText p').innerText=res.conteudo;
    document.querySelector('.longText .autor').innerText=res.nome;
    console.log(res.idi)
    localStorage.setItem('last', res.idi);
    if(res.link){
        const btnPdf = document.getElementById('openPdf')
        btnPdf.style.display="inline-block";
        btnPdf.addEventListener('click',(e)=>{
            e.preventDefault();
            window.location.href=res.link;
        })
    }
    document.getElementById('mainBtn').addEventListener('click',(e)=>{
        e.preventDefault();
        window.location.href=`/texto.html?id=${idAutor}`;
    })
    const trDiv= document.querySelector('.transition');
    trDiv.classList.remove('active-transition');
}
function addLink(){

}