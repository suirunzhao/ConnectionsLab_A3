//console.log("hello");

//click to scroll
// window.addEventListener('scroll', function(){
//     console.log(window.scrollY);
// });

// document.getElementById('btn-map').addEventListener('click',function(){
//     document.getElementById('map').scrollIntoView({behavior: 'smooth'});
// });
window.addEventListener('load', function () {
    console.log('page is loaded');
    //https://pokeapi.co/api/v2/pokemon?limit=151&offset=0
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data.results[0].name);
    })

    let button = document.getElementById('satellite_button');
    button.addEventListener('click', function() {
    let inputText = document.getElementById('satellite_name').value;
    
    let select_Satellite = 'data.json.name.' + inputText;
    fetch(select_Satellite)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
        //console.log("Button is Clicked!");
        //console.log(inputText);
    })
})