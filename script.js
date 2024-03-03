const postsData = [
    {
        username: "Sarthak",
        dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: 56
        
    },
    {
        username: "Akarsh",
        dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: 125,
        
    },
    {
        username: "Sarthak",
        dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: 789
        
    },
    {
        username: "vedant",
        dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: 23,
        
    },
    {
        username: "HARSHITA",
        dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: 58,
        
    },
    // Add more posts as needed
];


var main=document.querySelector("#postsContainer");
// write your code here to create card
var clutter='';

postsData.forEach(function(e,index)
{   

    clutter+=`
    <div class="post-container">
    <img
    src="${e.dp}"
    alt="Display Picture">
    <h3>${e.username}</h3>
    <span class="like-icon">❤</span>
    <button class='btn' id='${index}'   class='ind'> Like</button>
    <p id="like-count-0" class="like-count">${e.likes} <span>likes</span></p> 
</div>
`

})
main.innerHTML=clutter;

var flag=0;

var postContainer=document.querySelector("#postsContainer")

postContainer.addEventListener('click',function(val){
   var isClick=val.target.classList.contains('btn')? 1:0;
   val.target.parentNode.childNodes[9].innerHTML
   if(isClick)
   {
    if(flag==0){
        var l=parseInt(val.target.parentNode.childNodes[9].innerHTML)
        val.target.parentNode.childNodes[9].innerHTML=`${l+1} likes`
        flag=1;
    }
    else if(flag==1){
        var l=parseInt(val.target.parentNode.childNodes[9].innerHTML)
        val.target.parentNode.childNodes[9].innerHTML=`${l-1} likes`
        flag=0;
    }
   }
})
