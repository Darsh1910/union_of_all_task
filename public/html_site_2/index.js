var total_language = document.querySelectorAll('.language');


total_language.forEach((language)=>{

    for(let i=2;i<5;i++)
    {
        document.getElementById(i).style.display = "none";
    }

    language.addEventListener("focus",()=>{
        const current_id = language.getAttribute("data-id");

        for(let i=1;i<5;i++)
        {
            if(current_id == i)
            {
                document.getElementById(current_id).style.display ="";
            }

            else
            {
                document.getElementById(i).style.display = "none";
            }
        }
    })
    
})



// slider-btn
// backward-btn
// forward-btn

// review card

// card-r
const initSlider = () =>{
     const reviewList = document.querySelector(".review-cards");
     const sliderButton = document.querySelectorAll(".slider-button");

     sliderButton.forEach((button)=>{

        button.addEventListener("click",()=>{
            console.log(button);


            const direction  = button.id === "prev-btn" ? -1:1;
            const scrollAmount = reviewList.clientWidth * direction;


            reviewList.scrollBy({left:scrollAmount,behavior:"smooth"});
        });

       

     });

}



window.addEventListener('load',initSlider);










