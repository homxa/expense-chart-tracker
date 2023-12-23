 const gett =[
  {
    "day": "mon",
    "amount": 17.45,
    height: 30
  },
  {
    "day": "tue",
    "amount": 34.91,
    height: 45

  },
  {
    "day": "wed",
    "amount": 52.36,
    height: 70

  },
  {
    "day": "thu",
    "amount": 31.07,
    height: 40
    
  },
  {
    "day": "fri",
    "amount": 23.39,
    height: 35
    
  },
  {
    "day": "sat",
    "amount": 43.28,
    height: 55

  },
  {
    "day": "sun",
    "amount": 25.25,
    height: 35

  }
]
const box = gett
console.log(box)
let sumHTML = '';
box.forEach((getten, index) =>{
const name = index == 2? 'color': '';
 sumHTML += `<div class="cart">
  <p class="put">$${getten.amount}</p>
  <div class="rate ${name}" style="height: ${getten.height}px;" ></div>
  <div class="day">${getten.day}</div>
  
</div>`

})
console.log(sumHTML)
document.querySelector('.js-cat').innerHTML = sumHTML;