let Services=document.querySelector(".services")
async function fetchJSONData() {
    let result = await fetch('./data.json').then((res)=>res.json())
    console.log(result.data.services);
    let services = result.data.services
    for(let service of services){
        console.log(service)
        let newService =document.createElement("div")
        newService.classList.add("newservice")
        newService.innerHTML = `
        <div class="service">
            <h2>${service.title_en}</h2>
            <div class="description">
                <img src="image 1019.png" alt="">
                <p>Starts from 10$/h</p>
            </div>
        </div>
        `
        Services.appendChild(newService)

        for (let subService of service.subServices) {
            let newSubService = document.createElement("div");
            newSubService.classList.add("subService");
            newSubService.innerHTML = `
                <p>${subService.title_en}</p>
            `;
            newService.appendChild(newSubService);
        }
}
}
fetchJSONData();





// fetch("./data.json")
//     .then((res) => {
//         if (!res.ok) {
//             throw new Error
//                 (`HTTP error! Status: ${res.status}`);
//         }
//         return res.json();
//     })
//     .then((data) => 
//           console.log(data))
//     .catch((error) => 
//            console.error("Unable to fetch data:", error));
// console.log(result.data);
// fetch('JSONFilePath').then().then().catch();
// console.log(result)
// Async / Await
// async function fetchJSONData() {
//     let result = await fetch('"./data.json"').then((res)=>res.json())
// }
