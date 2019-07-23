document.getElementById('generate-names').addEventListener('submit', generateName);


function generateName(e) {
    e.preventDefault();

    let url = "https://uinames.com/api/?"

    const origin = document.getElementById('country').value;
    const gender = document.getElementById('gender').value;
    const amount = document.getElementById('quantity').value;

    if (origin != "") {
        url += `region=${origin}&`
    }
    if (gender != "") {
        url += `gender=${gender}&`
    }
    if (amount != "") {
        url += `amount=${amount}&`
    }

    // FETCH API PROMISES

    getNames(url)
    .then((data) => {
        let datas = (data.name);
      
            let html = `<h2>Generated Names</h2>`;
            html += `<ul class="list">`;
           datas.forEach(name => {
                html += `<li>${name.name}</li>`
            })
            html += `</ul>`
            document.getElementById('result').innerHTML = html;
    })
      

    

    // AJAX CALL
    // const xhr = new XMLHttpRequest();

    // xhr.open("GET",url,true);

    // xhr.onreadystatechange = function () {
    //     if(this.status == 200 && this.readyState == 4) {
    //         let names = JSON.parse(this.responseText);

    //        
    //         
    //        
    //     }

    // }

    // xhr.send();
    // // console.log(url);

}

async function getNames(url) {
    const response = await fetch(url);
    const name = await response.json();
    return {name};
}