var body = document.body;
var btn = document.getElementById('theme-toggle');

if (!btn) {
    console.warn('theme-toggle button not found');
}
else {
    var saved = localStorage.getItem('theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var initial = saved ? saved : (prefersDark ? 'dark' : 'light');

    // מנקים קלאסים קודמים ומוסיפים את הקלאס הנכון
    body.classList.remove('light-theme', 'dark-theme');
    body.classList.add(initial + '-theme');

    // מעדכנים את הטקסט/האייקון בכפתור לפי המצב
    btn.textContent = (initial === 'dark') ? '☀️' : '🌙';

    // מאזינים ללחיצה על הכפתור – מחליפים מצב
    btn.addEventListener('click', function () {
        // אם כרגע במצב כהה – נעבור לבהיר, ולהפך
        var nowDark = body.classList.contains('dark-theme');

        body.classList.toggle('dark-theme', !nowDark); // הופך ל-dark אם היינו ב-light
        body.classList.toggle('light-theme', nowDark); // הופך ל-light אם היינו ב-dark

        // שומרים את ההעדפה כדי שתיזכר בריענון הבא
        var mode = body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', mode);

        // מעדכנים אייקון בכפתור
        btn.textContent = (mode === 'dark') ? '☀️' : '🌙';
    });
}