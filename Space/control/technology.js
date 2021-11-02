const firstButton = document.getElementById('tech-first');
const secondButton = document.getElementById('tech-second');
const thirdButton = document.getElementById('tech-third');

var buttons = [firstButton , secondButton , thirdButton];

//Requirements :)
const techName = document.getElementById('tech-name');
const techDesc = document.getElementById('tech-desc');
const techImg = document.getElementById('tech-image');

buttons.forEach((button) => {
    button.addEventListener('click' , ()=>{
        changeButtonActive(button); 
        
        fetch('data.json').then(function(response){
            return response.json();
        })
        .then((data) => {
            var object = data.technology;


            object.forEach((tech) => {
                if(window.innerWidth < 1200){
                    $("body,html").animate({ scrollTop : 1000 } , 100);
                    setTimeout(() => {
                        $("body,html").animate({ scrollTop : 100 } , 100);
                    }, 800);
                }

                if(button.id == "tech-first" && tech.name == "Launch vehicle"){
                    // console.log(tech.name);
                    techName.textContent = tech.name;
                    techDesc.textContent = tech.description;

                    if(window.innerWidth < 680 || window.innerWidth < 380){
                        techImg.src = tech.images.landscape;
                    }
                    else{
                        techImg.src = tech.images.portrait;
                    }
                }
                else if(button.id == "tech-second" && tech.name == "Spaceport"){
                    // console.log(tech.name);
                    techName.textContent = tech.name;
                    techDesc.textContent = tech.description;

                    if(window.innerWidth < 680 || window.innerWidth < 380){
                        techImg.src = tech.images.landscape;
                    }
                    else{
                        techImg.src = tech.images.portrait;
                    }
                }
                else if(button.id == "tech-third" && tech.name == "Space capsule"){
                    // console.log(tech.name);
                    techName.textContent = tech.name;
                    techDesc.textContent = tech.description;

                    if(window.innerWidth < 380 || window.innerWidth > 1200){
                        techImg.src = tech.images.portrait;    
                    }
                    else if(window.innerWidth < 680 || window.innerWidth < 1200){
                        techImg.src = tech.images.landscape;
                    }
                }
            })
        })
    })
})

var changeButtonActive = function (curr_btn){
    buttons.forEach((btn) => {
        btn.classList.remove('tech-button-active');
        curr_btn.classList.add('tech-button-active');
    })
}
