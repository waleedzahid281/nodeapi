const Country_Link="https://solid-lamp-5g5jvg747wxghv9r7-5055.app.github.dev/country";

fetch(Country_Link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch");
    return response.json();
}).then(data=>{
    const tbody=document.querySelector("#countrytable tbody")
    data.forEach(c=>{
        const row=document.createElement("tr")
        row.innerHTML=`
        <td>${c.country_id}</td>
        <td>${c.country_name}</td>
        <td>${c.region_id}</td>
        `;
        tbody.appendChild(row);
    });
}).catch(err=>{
    Console.log(err.message);
});