const destMoon = document.getElementById('dest-moon');
const destMars = document.getElementById('dest-mars');
const destEuropa = document.getElementById('dest-europa');
const destTitan = document.getElementById('dest-titan');

const destLinks = [destMoon , destMars , destEuropa , destTitan];

// Requirements

const InfoName = document.getElementById('curr-dest-space');
const InfoImage = document.getElementById('space-dest-image');
const InfoDesc = document.getElementById('dest-desc');
const InfoDistance = document.getElementById('dest-distance');
const InfoTravel = document.getElementById('dest-travel');

//End

destLinks.forEach(li => {
    li.addEventListener('click' , ()=> {
        
        if(window.innerWidth < 1200){
            $("body,html").animate({ scrollTop : 100 } , 200);
        }

        chnageDestActive(li);

        fetch('data.json').then(function (response) {
            return response.json();
        }).then(function(object) {
            var destContent = object.destinations;

            destContent.forEach((content) => {
                if(li.id == "dest-moon" && content.name == "Moon"){
                    InfoName.innerText = content.name;
                    InfoImage.src = content.images.webp;
                    InfoDesc.innerText = content.description;
                    InfoDistance.innerText = content.distance;
                    InfoTravel.innerText = content.travel;
                }
                else if(li.id == "dest-mars" && content.name == "Mars"){
                    InfoName.innerText = content.name;
                    InfoImage.src = content.images.webp;
                    InfoDesc.innerText = content.description;
                    InfoDistance.innerText = content.distance;
                    InfoTravel.innerText = content.travel;
                }
                else if(li.id == "dest-europa" && content.name == "Europa"){
                    InfoName.innerHTML = `<h1 style='font-size : 65px;' id="curr-dest-space" class="text-uppercase space-txt">${content.name}<h1>`;
                    InfoImage.src = content.images.webp;
                    InfoDesc.innerText = content.description;
                    InfoDistance.innerText = content.distance;
                    InfoTravel.innerText = content.travel;
                }
                else if(li.id == "dest-titan" && content.name == "Titan"){
                    InfoName.innerText = content.name;
                    InfoImage.src = content.images.webp;
                    InfoDesc.innerText = content.description;
                    InfoDistance.innerText = content.distance;
                    InfoTravel.innerText = content.travel;
                }
            })
        })
    })
});

function chnageDestActive(currentLink){
    destLinks.forEach((links) => {
        links.classList.remove('dest-info-links-active');

        if(links.classList[0] != "dest-info-links-active"){
            currentLink.classList.add('dest-info-links-active');
        }
    })

}