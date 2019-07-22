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
    
    // XMLHTTP REQUEST
    // const xhr = new XMLHttpRequest();

    // xhr.open("GET",url,true);

    // xhr.onreadystatechange = function () {
    //     if(this.status == 200 && this.readyState == 4) {
    //         let names = JSON.parse(this.responseText);

    //         let html = `<h3>Generated Names</h3>`;
    //         html += `<ul class="list">`;
    //         names.forEach((name)=> {
    //             html += `<li>${name.name}</li>`
    //         })
    //         html += `</ul>`
    //         document.getElementById('result').innerHTML = html;
    // //     }
       
    // }

    // xhr.send();
    // console.log(url);


    // FETCH API WITH PROMISES

    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((names) => {
        console.log(names)
        let html =  `<h4>Generated Random Names</h4>`;
     
        html += `<ul class="list">`
        names.forEach((ele) => {
            html+= `<li>${ele.name}</li>`
        })
        html += `</ul>`
        document.getElementById('result').innerHTML = html;
    })
    
}