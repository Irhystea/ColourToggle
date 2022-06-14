const menuButton = document.getElementById('toggle-button');
const menuItems = menuButton.nextElementSibling;

menuButton.addEventListener('mouseover',function(){
    console.log("Mouse hovered")
    menuItems.classList.toggle('menu-display');
    return;
});

console.log(menuItems)


// const homeButton = menuItems.children[0];
// const redButton = menuItems.children[1];
// const orangeButton = menuItems.children[2];
// const greenButton = menuItems.children[3];
// const purpleButton = menuItems.children[4];



// //Button Colours

// homeButton.addEventListener('click', function(){
//     console.log("Background Gray")
//     document.body.classList.add('home-background');
//     document.body.classList.remove('red-background', 'orange-background', 'green-background', 'purple-background');

//     menuItems.classList.toggle('menu-display');
//     return;
// });

// redButton.addEventListener('click', function(){
//     console.log("Background Red");
//     document.body.classList.add('red-background');
//     document.body.classList.remove('orange-background', 'green-background', 'purple-background');

//     menuItems.classList.toggle('menu-display');
//     return;
// });

// orangeButton.addEventListener('click', function(){
//     console.log("Background Orange")
//     document.body.classList.add('orange-background');
//     document.body.classList.remove('green-background', 'purple-background');

//     menuItems.classList.toggle('menu-display');
//     return;
// });

// greenButton.addEventListener('click', function(){
//     console.log("Background Green")
//     document.body.classList.add('green-background');
//     document.body.classList.remove('purple-background');

//     menuItems.classList.toggle('menu-display');
//     return;
// });

// purpleButton.addEventListener('click', function(){
//     console.log("Background Purple")
//     document.body.classList.add('purple-background');

//     menuItems.classList.toggle('menu-display');
//     return;
// });




