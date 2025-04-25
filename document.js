document.addEventListener('DOMContentLoaded',function(){
    setTimeout(()=>document.getElementById('popup').style.display='flex',3000);
    document.querySelector('.close-btn').onclick=()=>document.getElementById('popup').style.display='none';
});
