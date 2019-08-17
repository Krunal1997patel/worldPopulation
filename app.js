const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('input', color =>{
    const changeColor = color.target.checked;

    if(changeColor){
        body.classList.add('dark-theme');
    }else{
        body.classList.remove('dark-theme');
    }
})