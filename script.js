let menuButton = document.getElementById('toggle-button');

let menuItems = menuButton.nextElementSibling;
let homeButton = menuItems.children[0];
let redButton = menuItems.children[1];
let orangeButton = menuItems.children[2];
let greenButton = menuItems.children[3];
let purpleButton = menuItems.children[4];

menuButton.addEventListener('click',function(){
    menuItems.classList.toggle('menu-display');
    return;
});

homeButton.classList.add('home-background');
redButton.classList.add('red-background');
orangeButton.classList.add('orange-background');
greenButton.classList.add('green-background');
purpleButton.classList.add('purple-background');

//Button Colours

homeButton.addEventListener('click', function(){
    console.log("Background Gray")
    document.body.classList.add('home-background');
    document.body.classList.remove('red-background', 'orange-background', 'green-background', 'purple-background');

    menuItems.classList.toggle('menu-display');
    return;
});

redButton.addEventListener('click', function(){
    console.log("Background Red");
    document.body.classList.add('red-background');
    document.body.classList.remove('orange-background', 'green-background', 'purple-background');

    menuItems.classList.toggle('menu-display');
    return;
});

orangeButton.addEventListener('click', function(){
    console.log("Background Orange")
    document.body.classList.add('orange-background');
    document.body.classList.remove('green-background', 'purple-background');
    menuItems.classList.toggle('menu-display');
    return;
});

greenButton.addEventListener('click', function(){
    console.log("Background Green")
    document.body.classList.add('green-background');
    document.body.classList.remove('purple-background');
    menuItems.classList.toggle('menu-display');
    return;
});

purpleButton.addEventListener('click', function(){
    console.log("Background Purple")
    document.body.classList.add('purple-background');
    menuItems.classList.toggle('menu-display');
    return;
})


