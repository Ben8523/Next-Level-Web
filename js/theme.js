var body = document.body;
var btn = document.getElementById('theme-toggle');

if (!btn) {
    console.warn('theme-toggle button not found');
}
else {

    // מאתחלים את האתר למצב דארק כי זה נראה יותר טוב לדעתי
    body.classList.add('dark-theme');
    btn.textContent =  '☀️';

    // מאזינים ללחיצה על הכפתור – מחליפים מצב
    btn.addEventListener('click', function () {
        // אם כרגע במצב כהה – נעבור לבהיר, ולהפך
        var nowDark = body.classList.contains('dark-theme');

        body.classList.toggle('dark-theme', !nowDark); // הופך ל-dark אם היינו ב-light
        body.classList.toggle('light-theme', nowDark); // הופך ל-light אם היינו ב-dark

        // מעדכנים אייקון בכפתור
        btn.textContent = (nowDark) ? '🌙' : '☀️';
    });
}