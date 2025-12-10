function switchLang(lang) {
    document.querySelectorAll('.ru').forEach(el => el.style.display = (lang === 'ru') ? 'block' : 'none');
    document.querySelectorAll('.en').forEach(el => el.style.display = (lang === 'en') ? 'block' : 'none');
}
