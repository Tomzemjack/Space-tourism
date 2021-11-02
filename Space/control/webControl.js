//Contents :)
const welcomeContent = document.getElementById('welcome-content');
const destinationContent = document.getElementById('destination');
const crewContent = document.getElementById('crew');
const techContent = document.getElementById('technology');

var contents = [
    {
        content : welcomeContent,
        speCode : "#home",  
        background : {
            desktop : "./assets/home/background-home-desktop.jpg",
            mobile : "./assets/home/background-home-mobile.jpg",
            tablet : "./assets/home/background-home-tablet.jpg",
        },
    },
    {
        content : destinationContent,
        speCode : "#destination",
        background : {
            desktop : "./assets/destination/background-destination-desktop.jpg",
            mobile : "./assets/destination/background-destination-mobile.jpg",
            tablet : "./assets/destination/background-destination-tablet.jpg",
        },
    },
    {
        content : crewContent,
        speCode : "#crew",
        background : {
            desktop : "./assets/crew/background-crew-desktop.jpg",
            mobile : "./assets/crew/background-crew-mobile.jpg",
            tablet : "./assets/crew/background-crew-tablet.jpg",
        },
    },
    {
        content : techContent,
        speCode : "#tech",
        background : {
            desktop : "./assets/technology/background-technology-desktop.jpg",
            mobile : "./assets/technology/background-technology-mobile.jpg",
            tablet : "./assets/technology/background-technology-tablet.jpg",
        },
    },
];
//


// Links :)
const destination = document.querySelector('.destination');
const crew = document.querySelector('.crew');
const tech = document.querySelector('.tech');
const home = document.querySelector('.home');

const burger_home = document.getElementById('burger_home');
const burger_dest = document.getElementById('burger_dest');
const burger_crew = document.getElementById('burger_crew');
const burger_tech = document.getElementById('burger_tech');

var links = [destination , crew , tech , home];
var navLinks = [burger_dest , burger_crew , burger_tech , burger_home];

const body = document.getElementById('body');
// End


links.forEach((val , index) =>{
    val.addEventListener('click' , ()=> {
        if(val.classList[0] == "destination"){
            changeLinkActive(links[index]);
            changeContent("#destination" ,  "#links");
        }
        else if(val.classList[0] == "crew"){
            changeLinkActive(links[index]);
            changeContent("#crew" ,  "#links");
        }
        else if(val.classList[0] == "tech"){
            changeLinkActive(links[index]);
            changeContent("#tech" ,  "#links");
        }
        else{
            changeLinkActive(links[index]);
            changeContent("#home" ,  "#links");
        }
    })
});

navLinks.forEach((val , index) =>{
    val.addEventListener('click' , ()=> {
        mobileNav.classList.remove("mobile-nav-Active");
        if(val.id == "burger_dest"){
            changeContent("#destination" , "#mobile_links");
        }
        else if(val.id == "burger_crew"){
            changeContent("#crew" , "#mobile_links");
        }
        else if(val.id == "burger_tech"){
            changeContent("#tech" , "#mobile_links");
        }
        else{
            changeContent("#home" , "#mobile_links");
        }
    })
});

function changeContent(code , whichGroup){
    if(whichGroup == "#links"){
        contents.forEach((contentVal , index) => {
            if(code != contentVal.speCode){ 
                contentVal.content.classList.add('d-none');
            }
            else{
                if(contentVal.content.classList[0] == 'd-none'){
                    contentVal.content.classList.remove('d-none');
                }
    
                if(window.innerWidth < 680){
                    body.style.background = `url('${contentVal.background.mobile}')`;  
                    body.style.height = "100%";
                    body.style.backgroundSize = "100rem";
                    body.style.backgroundRepeat = "no-repeat";  
                }
                else if(window.innerWidth < 1200){
                    body.style.backgroundRepeat = "no-repeat";  
    
                    if(contentVal.speCode != "#destination"){
                        body.style.background = `url('${contentVal.background.tablet}')`;  
                        body.style.height = "100rem";
                        body.style.backgroundSize = "cover";
                    }
                    else{
                        body.style.background = `url('${contentVal.background.tablet}')`;  
                        body.style.width = "100vw";    
                        body.style.height = "100vh";    
                        body.style.backgroundSize = "cover";
                        body.style.backgroundPosition = "center center";
                        body.style.backgroundRepeat = "no-repeat";
                    }
                }
                else if(window.innerWidth > 1200){
                    body.style.background = `url('${contentVal.background.desktop}')`;  
                    body.style.height = "100%";
                    body.style.backgroundSize = "100rem";
                    body.style.backgroundRepeat = "no-repeat";  
                }
            }
        })
    }  
    else if(whichGroup == "#mobile_links"){
        contents.forEach((contentVal , index) => {
            //Mobile views!

            if(code != contentVal.speCode){ 
                contentVal.content.classList.add('d-none');
            }
            else{
                if(contentVal.content.classList[0] == 'd-none'){
                    contentVal.content.classList.remove('d-none');
                }
    
                if(window.innerWidth < 680){
                    // console.log(contentVal.background.mobile);
                    
                    if(contentVal.speCode != "#destination"){
                        body.style.background = `url('${contentVal.background.mobile}')`; 
                        body.style.height = "100%";
                        body.style.backgroundSize = "cover";
                        body.style.backgroundRepeat = "no-repeat"; 
                    }
                    else{
                        body.style.backgroundImage = `url('${contentVal.background.mobile}')`;  
                        body.style.width = "100vw";    
                        body.style.height = "65rem";    
                        body.style.backgroundSize = "cover";
                        body.style.backgroundPosition = "center";
                        body.style.backgroundRepeat = "repeate-y";
                    }
                }
            }
        })
    } 
}


function changeLinkActive(object){
    var object;
    links.filter((value) => {
        if(object == value){
            object = value;
        }

        if(value.id == "link-active"){
            value.id = "";
            object.id = "link-active";
            changeContent("#destination" ,  "#links");
        }
    });
}

var explore = document.getElementById('explore');

explore.addEventListener('click' , ()=>{
    if(window.innerWidth < 1200){
        $("body,html").animate({ scrollTop : 60 } , 200);
    }
    changeLinkActive(links[0]);
});

//Navbar
const mobileNav = document.querySelector('.mobile-nav');
const closeNav = document.getElementById('close_nav');

var button = document.getElementById('humberger_nav');

function setPoint(e){
    animation();
    button.setPointerCapture(e.pointerId);
}

function animation(){
    mobileNav.classList.add("mobile-nav-Active");    
}

function closeAnimation(){
    mobileNav.classList.remove("mobile-nav-Active");
}

button.onpointerdown = setPoint;
closeNav.onpointerdown = closeAnimation;



