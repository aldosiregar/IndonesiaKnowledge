function fetchData(option){
    let content = document.getElementById("material");
    rewrite(content);
    fetchAPI('/data/material/TWK.json', content, option);
}

function rewrite(document){
    document.innerHTML = "";
}