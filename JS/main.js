(function () {
    window.addEventListener('load', function() {
        const loadTime = performance.now();
        const footer = document.querySelector('footer');

        if (footer) {
            const stats = document.createElement('div');
            stats.style.fontSize = '12px';
            stats.style.color = 'gray';
            stats.innerText = `Page Load Time: ${loadTime.toPrecision(2)} ms`;
            footer.appendChild(stats);
        }

        console.log(`Page loaded in ${loadTime} ms`);
    });
})();
