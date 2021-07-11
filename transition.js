const animationTime = 400;
window.onload= ()=>{
    const trDiv= document.querySelector('.transition');

    setTimeout(()=>{
        trDiv.classList.remove('active-transition');
    }, animationTime);

    const anch=  document.querySelectorAll('a');
    anch.forEach(e=>{
        e.addEventListener('click', evento=>{
            evento.preventDefault();
            const target = evento.target.href;
            trDiv.classList.add('active-transition');
            console.log(target);
            setTimeout(()=>{
                window.location.href=target;
            },animationTime);
        })
    })
}