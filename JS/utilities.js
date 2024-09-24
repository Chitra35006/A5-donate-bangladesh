function getInputValueById(id){
    return parseFloat(document.getElementById(id).value);
}

function getTextBalance(id){
    return parseFloat(document.getElementById(id).innerText);
}
function getCardTitle(id){
    return (document.getElementById(id).innerText);
}

function NavigateSection(id1, id2) {
    id1.classList.add(
        'text-orange-100',
        'font-semibold',
        'bg-violet-500'  
    );
    id1.classList.remove(
        'bg-gray-300',
        'text-gray-600',
        'font-normal'
    );
    id2.classList.remove(
        'text-orange-100',
        'font-semibold',
        'bg-violet-500'
    );
    id2.classList.add(
        'bg-gray-300',
        'text-gray-600',
        'font-normal'
    );
}

function showModal(){
    document.getElementById('myModal').classList.remove('hidden');
}
function closeModal(){
    document.getElementById('myModal').classList.add('hidden');
}

window.addEventListener('scroll',function(){
    const blurHeight = 100;
    const backGround = document.getElementById('nav-bg');
    const navBg = document.getElementById('nav-bg-2')
    const scrollPosition = window.scrollY;

    if(scrollPosition > blurHeight){
        backGround.classList.add('filter','backdrop-blur-sm','bg-white/30');
        navBg.classList.remove('bg-pink-50');
    }
    else{
        backGround.classList.remove('filter','backdrop-blur-sm','bg-white/30');
        navBg.classList.add('bg-pink-50');
    }
})