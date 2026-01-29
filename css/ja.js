document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product.appear');

    if (products.length === 0) {
        console.log("No elements with class '.product.appear' found to observe.");
        return;
    }

    // تنظیمات برای Intersection Observer
    const options = {
        root: null, // ناظر کل پنجره مرورگر (Viewport) است
        rootMargin: '0px',
        threshold: 0.1 // زمانی فعال شود که 10% المان در صفحه دیده شود
    };

    // تابع callback که زمانی که المان دیده شود یا پنهان شود، اجرا می‌شود
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // زمانی که المان وارد صفحه شد، کلاس 'active' را اضافه کن
                entry.target.classList.add('active');
                // پس از فعال شدن، دیگر نیازی به مشاهده آن نیست
                observer.unobserve(entry.target);
            }
            // اگر نمی‌خواهید آیتم پس از خروج مجدد پنهان شود (که معمولا انیمیشن‌های ورود همینطور هستند)، نیازی به کد else نیست.
        });
    };

    // ایجاد آبجکت Intersection Observer
    const observer = new IntersectionObserver(observerCallback, options);

    // مشاهده تمام محصولات
    products.forEach(product => {
        observer.observe(product);
    });
});
