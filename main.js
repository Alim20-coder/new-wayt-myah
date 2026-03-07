document.addEventListener("DOMContentLoaded", function() {
    // تحديد كل العناصر اللي واخدة كلاس reveal
    const reveals = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2 
    });

    reveals.forEach(el => revealObserver.observe(el));
});



// last section 

document.addEventListener("DOMContentLoaded", function() {
    // 1. تفعيل السلايدر وتحديد السرعة (كل 5 ثواني يقلب لوحده)
    const myCarousel = document.querySelector('#testimonialCarousel');
    const carousel = new bootstrap.Carousel(myCarousel, {
        interval: 5000,
        wrap: true,
        pause: 'hover' // يوقف لو المستخدم واقف بالماوس على الكلام
    });

    // 2. تفعيل خاصية الظهور (Reveal) عند السكرول لآراء العملاء
    const reveals = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(el => revealObserver.observe(el));
});