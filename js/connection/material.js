/**
 * show materials into website
 * @param {string} location
 * @param {interger} option 
 */
function fetchAPI(location, content, option){
    fetch(location).then(res => {
        if(!res.ok){
            throw new Error(`HTTP status error : ${res.status}`);
        }
        return res.json();
    }).then((data) => {
        content.innerHTML += "<h1>" + data["Bab_" + option].Judul + "</h1>";
        
        for(let materials of data["Bab_" + option].Materi){
            let tempString = "";
            tempString += "<h4>" + materials.Subbab + "</h4>";
            for(let [key, value] of materials.Materi.entries()){
                if(value instanceof Array){
                    tempString += gridOpeningTemplate;
                    for(let [key, points] of value.entries()){
                        if(points.Text instanceof Array){
                            if(points.Text.length > 5){
                                tempString += cardTemplateOpen3() + cardBodyTemplate()
                                + cardTitleTemplate() + points.Title + cardTemplateClosed()
                                + cardTextTemplate();
                                for(let [key, sections] of points.Text.entries()){
                                    if(sections instanceof Array){
                                        tempString += listTemplateOpen();
                                        for(let [key, bulletPoints] of sections.entries()){
                                            tempString += listItemOpen() + bulletPoints + listItemclosed();
                                        }
                                        tempString += listTemplateClosed();
                                    }
                                    else{
                                        tempString += "<p>" + sections + "</p>";
                                    }
                                }
                                tempString += cardTemplateClosed() + cardTemplateClosed() + 
                                cardTemplateClosed();
                                continue;
                            }
                            else{
                                tempString += cardTemplateOpen2() + cardBodyTemplate()
                                + cardTitleTemplate() + points.Title + cardTemplateClosed()
                                + cardTextTemplate();
                                for(let [key, sections] of points.Text.entries()){
                                    if(sections instanceof Array){
                                        tempString += listTemplateOpen();
                                        for(let [key, bulletPoints] of sections.entries()){
                                            tempString += listItemOpen() + bulletPoints + listItemclosed();
                                        }
                                        tempString += listTemplateClosed();
                                    }
                                    else{
                                        tempString += "<p>" + sections + "</p>";
                                    }
                                }
                                tempString += cardTemplateClosed() + cardTemplateClosed() + 
                                cardTemplateClosed();
                                continue;
                            }
                        }
                        tempString += cardTemplateOpen() + cardBodyTemplate() 
                        + cardTitleTemplate() + points.Title + cardTemplateClosed()
                        + cardTextTemplate() + points.Text + cardTemplateClosed()
                        + cardTemplateClosed() + cardTemplateClosed();
                    }
                    tempString += gridClosedTemplate;
                    continue;
                }
                tempString += "<p>" + value + "</p>";
            }
            content.innerHTML += tempString;
        }
    }).catch((err) =>{
        console.error("unable to fetch data : ", err);
    })
}