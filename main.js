const allSdeMenu = document.querySelectorAll('#sidebar .side-menu li a');

allSdeMenu.forEach(item=> {
    const li = item.parentElement;

    item.addEventListener('click', function () {
        allSdeMenu.forEach(i=> {
            i.parentElement.classList.remove('active')
        })
        li.classList.add('active');
    })
});

//TOGGLE SIDEBAR

const menuBar = document.querySelector('.fa-bars');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
    sidebar.classList.toggle("hide"); 
});



const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .fa-solid');
const searchForm = document.querySelector('#content nav form');

    searchButton.addEventListener('click', function(e) {
        if(window.innerWidth < 576) {
            e.preventDefault();
            searchForm.classList.toggle('show');
            if(searchForm.classList.contains('show')) {
                searchButtonIcon.classList.replace('fa-magnifying-glass', 'fa-x');
            }else {
                searchButtonIcon.classList.replace('fa-x', 'fa-magnifying-glass', );
            }
        }
  
    })




    if (window.innerWidth < 780) {
        sidebar.classList.add("hide");
    }else if(window.innerWidth > 576){
        searchButtonIcon.classList.replace('fa-x', 'fa-magnifying-glass', );
        searchForm.classList.remove('show');
    }

window.addEventListener('resize', function() {
    if(this.innerWidth > 576){
        searchButtonIcon.classList.replace('fa-x', 'fa-magnifying-glass', );
        searchForm.classList.remove('show');
    }
})
    



document.querySelector("#overview > div:nth-child(2) > div.col-lg-8.d-flex.flex-column > div:nth-child(2) > div > div > div")


function toggleForm() {
    const formContainer = document.getElementById('add-driver-form');

    if (formContainer.style.display === 'none' || formContainer.style.display === '') {
        formContainer.style.display = 'block';
        console.log('Button pressed....')
    } else {
        formContainer.style.display = 'none';
    }
}





