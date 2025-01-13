function myFunction() {
    const x = document.getElementById("responsive-menu");
    
    x.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        // You can adjust this value based on when you want the change to happen
        // This example uses the window height as the trigger point
        const triggerHeight = window.innerHeight;
        
        if (window.scrollY > triggerHeight) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}); 

