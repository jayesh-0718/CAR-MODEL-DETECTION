
let opDiv = document.getElementById('d1')

document.querySelector('button').addEventListener('click', function () {

    let number = document.querySelector('input').value
    let username = "abhi-123"
    let url = encodeURI(`http://www.regcheck.org.uk/api/reg.asmx/CheckIndia?RegistrationNumber=${number}&username=${username}`);
    let request = new XMLHttpRequest();
    console.log(url);

    request.open("GET", url)

    request.send()

    request.onload = () => {

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(request.response, "text/xml");
        const jsondata = JSON.parse(xmlDoc.getElementsByTagName("vehicleJson")[0].textContent)

        opDiv.innerHTML = `Model:  ${jsondata.CarModel.CurrentTextValue}<br>Owner: ${jsondata.Owner}<br>Location: ${jsondata.Location}<br>Reg Date: ${jsondata.RegistrationDate}<br>Variant: ${jsondata.Variant}<br>Vehicle type:${jsondata.VehicleType}`


    }


})




