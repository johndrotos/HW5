fetch("https://randomuser.me/api/?results=5").then((data)=>{
    //console.log(data);  json format
    return data.json(); ///converted to object
}).then((objectData)=>{
    return objectData.results;
}).then((parsedData)=>{
    console.log(parsedData);
    let tableData='';
    parsedData.map((values)=>{
        tableData += 
        `<tr>
            <td>${values.name.first}</td>
            <td>${values.location.city}</td>
        </tr>`;
    })
    console.log(tableData);
    document.getElementById("table_body").innerHTML=tableData;
})