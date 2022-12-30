let features = document.getElementById('features-dropdown-items');
let company = document.getElementById('company-dropdown-items');
let featuresDisplayer = document.getElementById('features-displayer');
let companyDisplayer = document.getElementById('company-displayer');
let featuresHider = document.getElementById('features-hider');
let companyHider = document.getElementById('company-hider');



featuresDisplayer.addEventListener('click',function(){
    features.style.display = 'block';
    featuresDisplayer.style.display = 'none'
    featuresHider.style.display = 'block';
})

featuresHider.addEventListener('click',function(){
    features.style.display = 'none'
    featuresHider.style.display = 'none';
    featuresDisplayer.style.display = 'block';
})

companyDisplayer.addEventListener('click',function(){
    company.style.display = 'block';
    companyDisplayer.style.display = 'none';
    companyHider.style.display = 'block';
})

companyHider.addEventListener('click',function(){
    company.style.display = 'none'
    companyHider.style.display = 'none';
    companyDisplayer.style.display = 'block';
})


// on mobile
let header_items = document.getElementById('header-items');
let header_items_displayer = document.getElementById('header-items-displayer');
let closing = document.getElementById('closing');

//main items
let main_items = document.getElementById('main-items');
main_items.style.display = 'flex';


//displaying items
header_items_displayer.addEventListener('click',function(){
main_items.style.display = 'flex';
header_items.style.display = 'block';
header_items_displayer.style.display = 'none';
closing.style.display = 'block';

})


closing.addEventListener('click',function(){
    main_items.style.display = 'flex';
document.getElementById('header-items').style.display = 'none';
header_items_displayer.style.display = 'block';
})