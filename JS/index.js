//navigate page
const homeButton = document.getElementById('home-button');
if(homeButton){
    homeButton.addEventListener('click',function(){
        window.location.href = 'blog.html';
    })
}

const blogButton = document.getElementById('blog-button');
if(blogButton){
    blogButton.addEventListener('click',function(){
        window.location.href= 'index.html';
    })
}
