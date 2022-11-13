// AOS.INIT
AOS.init({
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
  });
  const toggleSwitch = document.querySelector('input[type="checkbox"]');
  toggleSwitch.addEventListener("change", function (){
  document.body.classList.toggle("dark");
})
// Switch Theme Dynamically
// function switchTheme(event) {
//   if (event.target.checked) {
//     document.documentElement.setAttribute('data-theme', 'dark');
//     localStorage.setItem('theme', 'dark');
    
//   } else {
//     document.documentElement.setAttribute('data-theme', 'light'); 
//   }
// }

// Event Listener
// toggleSwitch.addEventListener('change', switchTheme);