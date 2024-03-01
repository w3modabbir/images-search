const accessKey = "Vce2GDeOStr2QyLXEGFeOtgcfr91LN4Y9LYBOuwkll0"

let searchFrom = document.querySelector("#search_form");
let searchBox = document.querySelector("#serach_box");
let searchResult = document.querySelector("#search_result");
let showBtn = document.querySelector("#show_btn");

let keycode = ""
let page = 1;

async function searchImg(){
    keycode = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=&{page}&query=${keycode}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchResult.innerHTML = "";
    }


    const results = data.results;

    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);

        searchResult.appendChild(imageLink);
    })
    
    showBtn.style.display = "block"
}

searchFrom.addEventListener("submit", (e)=>{
    e.preventDefault();
    page = 1;
    searchImg()
})

showBtn.addEventListener("click", ()=>{
    page++;
    searchImg();
})