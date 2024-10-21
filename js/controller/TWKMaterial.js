function fetchData(option){
    let content = document.getElementById("material");
    rewrite(content);  
    recievedPromise(fetchAPI('/data/material/TWK.json', "materials", option), content);
}

function rewrite(document){
    document.innerHTML = "";
}

function recievedPromise(promise, content){
    const results = async () => {
        const a = await promise;
        content.classList.add('pre-animation');
        content.innerHTML += a;
        setTimeout(() => {
            content.classList.remove('pre-animation');
        },100);
    }
    results();
}