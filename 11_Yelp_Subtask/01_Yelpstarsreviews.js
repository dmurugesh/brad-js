document.addEventListener('DOMContentLoaded', getDays());
document.addEventListener('DOMContentLoaded', getReviews());
document.addEventListener('DOMContentLoaded', getStars())

// Function to print No of reviews
function getReviews(e) {
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'data.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            const review = JSON.parse(this.responseText);
            let output = '';
            review.forEach(function(review){
                output = `
                ${review.reviews} Reviews
                `;
                let id = `#reviews${review.id}`;
                document.querySelector(id).innerHTML = output;
                output= ''; 
            });          
        } 
    } 
    xhr.send();
}
// // Function to print No of days
function getDays(e) {
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'data.json', true);

    xhr.onload = function(){
        if(this.status === 200){

            const day = JSON.parse(this.responseText);
            let output = '';
            day.forEach(function(day){
                output = `
                <span> <i class="fa fa-fire"></i>
                Opened ${day.days} weeks ago </span>
                `;
                let id = `#finalw${day.id}`;
                document.querySelector(id).innerHTML = output;
                output= ''; 
            });          
        } 
    } 
    xhr.send();
}

// Function to print star rating
function getStars(e) {
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'data.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            const star = JSON.parse(this.responseText);
            let output = '';
            star.forEach(function(star){
             let starTotal = 5;
            const starPercentage = ((star.stars) / starTotal) * 100;
            // console.log(starPercentage);
            //round
            const starPercentageRounded = `${(starPercentage / 10) * 10}%`;
            // console.log(starPercentageRounded);
            let id = `#rating-img${star.id}`;
            let st = `.${star.stars}`;
            // console.log(starPercentageRounded);
            //Set width of stars-inner to percentage
            document.querySelector(id).style.width = starPercentageRounded;
            // console.log(starPercentageRounded);
            });         
        } 
    } 
    xhr.send();
}

// Function to rotate
function imageShuffle(businessImage) {
    const orderNum = Math.floor(Math.random() * (3 - 1 + 1) ) + 1;
    const imageParentElement = document.getElementById(businessImage);
    imageParentElement.style.order = orderNum;
}

