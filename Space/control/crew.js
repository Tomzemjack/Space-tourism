//Requirements

const crewHurley = document.getElementById('crew-hurley');
const crewShutt = document.getElementById('crew-shutt');
const crewGlover = document.getElementById('crew-glover');
const crewAnsari = document.getElementById('crew-ansari');

const crewMembers = [crewHurley , crewShutt , crewGlover , crewAnsari]

const crewRole = document.getElementById('crew-role');
const crewName = document.getElementById('crew-name');
const crewDesc = document.getElementById('crew-desc');
const crewImg = document.getElementById('crew-img');

crewMembers.forEach((member) => {
    member.addEventListener('click' , ()=> {
        changeCrewAcitve(member);

        fetch('data.json').then((response) => {
            return response.json();
        })
        .then((obj) => {
            var crew = obj.crew;

            if(window.innerWidth < 1200){
                $("body,html").animate({ scrollTop : 60 } , 500);
            }

            crew.forEach((crewContent) => {
                if(member.id == "crew-hurley" && crewContent.name == "Douglas Hurley"){
                    crewRole.innerText = crewContent.role;
                    crewName.innerText = crewContent.name;
                    crewDesc.innerText = crewContent.bio;
                    crewImg.src = crewContent.images.webp;
                }
                else if(member.id == "crew-shutt" && crewContent.name == "Mark Shuttleworth"){
                    crewRole.innerText = crewContent.role;
                    crewName.innerText = crewContent.name;
                    crewDesc.innerText = crewContent.bio;
                    crewImg.src = crewContent.images.webp;
                }
                else if(member.id == "crew-glover" && crewContent.name == "Victor Glover"){
                    crewRole.innerText = crewContent.role;
                    crewName.innerText = crewContent.name;
                    crewDesc.innerText = crewContent.bio;
                    crewImg.src = crewContent.images.webp;
                }
                else if(member.id == "crew-ansari" && crewContent.name == "Anousheh Ansari"){
                    crewRole.innerText = crewContent.role;
                    crewName.innerText = crewContent.name;
                    crewDesc.innerText = crewContent.bio;
                    crewImg.src = crewContent.images.webp;
                }
            })
        })
    })
});

function changeCrewAcitve(curr_member){
    crewMembers.forEach((members) => {
        members.classList.remove('dotsActive');

        if(members.classList[0] != "dotsActive"){
            curr_member.classList.add('dotsActive');
        }
    })
}
