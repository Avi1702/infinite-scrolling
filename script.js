var container=document.querySelector(".display")


var limit=25
var page=1
var postCount=1


const get_data=async()=>{
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${page}`)
    const data=await response.json()
    // console.log(data)
    data.map((ele)=>{
        const html_Data=`
        <div><p>${postCount++}</p><p>${ele.title}</p></div>`
     
        container.insertAdjacentHTML('beforeend',html_Data)
    })
}

get_data()

const showData=()=>{
    setTimeout(()=>{
        page++
        get_data()
    },1000)
}

window.addEventListener("scroll",()=>{
    const {scrollHeight, scrollTop, clientHeight}=document.documentElement;
     console.log(scrollTop,clientHeight,scrollHeight)
    if((scrollTop + clientHeight)===scrollHeight || (scrollTop+clientHeight)>scrollHeight ){
        console.log("at bottom");
        showData()
    }
   
})