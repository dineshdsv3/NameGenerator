document.getElementById('generate-names').addEventListener('submit',generateName);


function generateName(e) {
    e.preventDefault();

    let url = "https://uinames.com/api/?"

    const origin = document.getElementById('country').value;
    const gender = document.getElementById('gender').value;
    const amount = document.getElementById('quantity').value;

    if(origin != "") {
        url += `region=${origin}&`
    }
    if(gender != "") {
        url += `gender=${gender}&`
    }
    if(amount != "") {
        url += `amount=${amount}&`
    }
    
    const xhr = new XMLHttpRequest();

    xhr.open("GET",url,true);

    xhr.onreadystatechange = function () {
        if(this.status == 200 && this.readyState == 4) {
            let names = JSON.parse(this.responseText);

            let html = `<h2>Generated Names</h2>`;
            html += `<ul class="list">`;
            names.forEach((name)=> {
                html += `<li>${name.name}</li>`
            })
            html += `</ul>`
            document.getElementById('result').innerHTML = html;
        }
       
    }

    xhr.send();
    // console.log(url);
    
}