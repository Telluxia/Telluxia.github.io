// スクロールアニメーション
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("#game-rules .row div, #down-rules .row div");

    function animateOnScroll() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }
        });
    }

    animateOnScroll();

    // スクロール時のアニメーションをトリガー
    window.addEventListener("scroll", animateOnScroll);
});
