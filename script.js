const max_places = 17;
let parkingPlaces = [];
let vehicle = [];
const modal = document.getElementById('modal');
const btn = document.getElementById('add');
const span = document.querySelector('.close');
const cards = document.getElementById('cards');
const mycard = document.getElementById('mycard');
const matrecule = document.getElementById('matrecule');
const submit = document.getElementById('submit');
var e = document.getElementById("options");
const listPlaces = document.querySelector('ul');


btn.onclick = ()=>{
    
    modal.style.display = 'block';
  
};


span.onclick = ()=>{
    modal.style.display = 'none';
};

window.onclick = (event)=>{
if(event.target == modal){
    modal.style.display = 'none';
}
};


function initParking(){
    for(let i = 0 ; i <= max_places ;i++){
        parkingPlaces.push({
            number:i,
            occupied:false
        });
    }
}
function initVehicles(){
    vehicle.forEach(v => {
    cards.insertAdjacentHTML('beforeend',`<div class="card rounded-md p-2 w-30 bg-blue-200 p-4 flex justify-between">
    <div>
<h1 class="text-2xl ">${v.v_type}<span id="zoneNumber" class="text-orange-500">1</span></h1>
<p class="text-lg ">${v.number}<span id="carNumber" class="text-orange-500">231241</span></p>
<p class="text-lg bg-yellow-300">${v.date_Enter}</p>
    </div>
    <div class="flex justify-between items-center">
<img class="w-10 h-10 " src="assests/car.png" alt="">
<div >
    <button  class="px-3 py-1 bg-red-400 rounded font-lg text-white hover:cursor-pointer hover:bg-red-500">Exit</button>
</div> 
    </div>
 
</div>`);
});

}

let datenow = new Date;
function generateDatabaseDateTime(date) {
  const p = new Intl.DateTimeFormat('en', {
    year:'numeric',
    month:'2-digit',
    day:'2-digit',
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit',
    hour12: false
  }).formatToParts(date).reduce((acc, part) => {
    acc[part.type] = part.value;
      return acc;
  }, {});

  return `${p.year}-${p.month}-${p.day} ${p.hour}:${p.minute}:${p.second}`;
}


function addVehicle(){
     

   let car_m = matrecule.value;
    let vehicleType = e.options[e.selectedIndex].text
        vehicle.push({
        car_number:car_m,
        v_type:vehicleType,
        date_Enter:generateDatabaseDateTime()     
        });
     
    modal.style.display = 'none';
  initVehicles();
}

initParking();

submit.addEventListener('click',()=>{
    addVehicle();
})



parkingPlaces.forEach(slot => {
    listPlaces.insertAdjacentHTML('beforeend',`<li class="w-35 h-35 cursor-pointer flex justify-center items-center bg-gray-200 border-l-4 border-r-4 border-gray-400 ">${slot.number}</li>`);
});

