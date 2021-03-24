let regions = [
    {
        name: "Europe",
        countries: ["Russia", "Ukraine", "France", "Spain",
        "Sweden", "Norway", "Germany", "Finland", "Poland", "Italy", "UK", "Romania", "Belarus", "Kazakhstan",
        "Greece", "Bulgaria", "Iceland", "Hungary", "Portugal", "Austria", "Czech Republic", "Serbia", "Ireland",
        "Lithuania", "Latvia", "Croatia", "Bosnia and Herzegovina", "Slovakia", "Estonia", "Denmark", "Switzerland",
        "Netherlands", "Moldova", "Belgium", "Armenia", "Albania", "North Macedonia", "Turkey", "Slovenia", "Montenegro",
        "Kosovo", "Azerbaijan", "Cyprus", "Luxembourg", "Georgia", "Andorra", "Malta", "Liechtenstein", "San Marino",
        "Monaco", "Vatican City"]
    },
    {
        name: "Middle East",
        countries: ["Akotiri and Dhekelia", "Bahrain", "Cyprus", "Egypt", "Iran",
        "Iraq", "Israel", "Jordan", "Kuwait", "Lebanon", "Oman", "Palestine", "Qatar",
        "Saudi Arabia", "Syria", "United Arab States", "Yemen"]
    },
    {
        name: "Asia-Pacific",
        countries: ["Australia", "Bangladesh", "Bhutan", "Brunei", "Burma(Myanmar)",
        "Cambodia", "Canada", "China", "Chile", "Cook Islands", "Fiji", "India", "Indonesia",
        "Japan", "Kiribati", "Laos", "Malaysia", "Maldives", "Marshall Islands", "Micronesia",
        "Mongolia", "Nauru", "Nepal", "New Zeland", "Niue", "North Korea", "Pakistan",
        "Palau", "Papua New Guinea", "Peru", "Philippines", "Russia", "Samoa", "Singapure", "Solomon Islands",
        "South Korea", "Sri Lanka", "Thailand", "Timor-Leste", "Tonga", "Tuvalu", "Vanuatu", "Vietnam", "US"]
    },
    {
        name: "Africa",
        countries: ["Nigeria", "Ethiopia", "Congo", "Egypt", "South Africa", "Tanzania", "Kenya", "Uganda",
        "Algeria", "Sudan", "Morocco", "Mozambique", "Ghana", "Angola", "Somalia", "Ivory Coast", "Madagascar",
        "Cameroon", "Burkina Faso", "Niger", "Malawi", "Zambia", "Mali", "Senegal", "Zimbabwe", "Chad", "Tunisia",
        "Guinea", "Rwanda", "Benin", "Burundi", "South Sudan", "Eritrea", "Sierra Leone", "Togo", "Libya", 
        "Central African Republic", "Mauritania", "Republic of the Congo", "Liberia", "Namibia",
        "Botswana", "Lesotho", "Gambia", "Gabon", "Guinea-Bissau", "Mauritius", "Equatorial Guinea", "Eswatini",
        "Djibouti", "Comoros", "Cape Verde", "Sao Tome and Principe", "Seychelles"]
    },
    {
        name: "North and Central America",
        countries: ["Belize", "Costa Rica", "El Salvador", "Guatemala", "Honduras", "Mexico",
        "Nicaragua", "Panama"]
    },
    {
        name: "South America",
        countries: ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "French Guiana",
        "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"]
    },
    {
        name: "Carriebean",
        countries: ["Cuba", "Dominican Republic", "Haiti"]
    }
]

let selectOptions = "";

regions.forEach(region => {
    selectOptions += `<optgroup label="${region.name}"`
    region.countries.forEach(country =>{
        selectOptions += `<option value="${country}">${country}</option>`
    })
    selectOptions +=  "</optgroup>"
})


let selectCountry = document.getElementById('country');
selectCountry.innerHTML = selectOptions


let thankYouDiv = document.getElementById('done-thanks');
let emailInput = document.getElementById('email');
let emailError = document.getElementById('email-error');

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

document.getElementById('submit').addEventListener('click', () => {
    
    let email = emailInput.value;
    let country = selectCountry.value;

    if(!validateEmail(email)){
        thankYouDiv.classList.remove('shown')
        emailError.classList.add('shown')
        return
    }

    emailError.classList.remove('shown')
    
    fetch("http://bosniaventure.com/email", {
        method: "POST", 
        body: JSON.stringify({email: email, country: country})
      }).then(res => {
        thankYouDiv.classList.add('shown')
      }).catch(err => {
          return
      });

})
