var finalresult = []
var btn = document.querySelectorAll(".nav-link");
function display() {
    var cartona = ""
    for (var i= 0; i<finalresult.length; i++) {
    cartona+= `<div class="col-md-3">
                <div class="card">
                    <img src="${finalresult[i].image_url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">${finalresult[i].title}</p>
                    </div>
                </div>
            </div>`;
    
}
document.getElementById("row").innerHTML = cartona
}
async function getMeals(mealName = "pizza") {
    var response =await fetch(
        `https://forkify-api.herokuapp.com/api/search?q=${mealName}`
    );
   
    
    var data = await response.json();
    finalresult = data.recipes;
    console.log(finalresult);
    
    display();   
}
for (var i = 0; i < btn.length; i++){
    btn[i].addEventListener('click',function(e){
var foodName=e.target.innerHTML
        getMeals(foodName);
    })
        }
getMeals()