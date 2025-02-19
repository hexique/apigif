

async function fetchData(){
    try{

        const req = document.getElementById("req").value.toLowerCase();

        const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${req}&api_key=skLZ6kvyuouf1IcCBNNGeuC4dt5OShAr`)
        if(!response.ok){
            throw new Error(`HTTP error ${response.status}`);
        }
        let data = await response.json();
        data = data["data"];
        console.log(data);
        console.log(Object.keys(data).length);
        const gifs = document.getElementById("gifs");
        gifs.innerHTML = '';

        if(data.length == 0){
            document.getElementById("gifs").innerHTML = "<p>No GIFs found</p>";
            return;
        }

        for (let i = 0; i < data.length; i++) {
            console.log(data);

            const img = document.createElement("img");

            img.src = data[i].images.fixed_height.url;
            img.style.display = "inline-block";
            gifs.appendChild(img);
        }

    }
    catch(error){
        console.error("Error fetching data: ", error);
    }
}



// fetch(`https://api.nasa.gov/planetary/apod?api_key=RdkCnkWJfnp30vrS8rsF7oeojSzzX5lqbaRwJ6fl`)
//   .then(response => {
//     if(!response.ok){
//         throw new Error(`HTTP error ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => console.log(data)); 