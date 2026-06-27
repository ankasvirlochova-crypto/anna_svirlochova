const translations = {
    sk: {
        "nav.home": "Úvod",
        "nav.about": "O mne",
        "nav.cv": "CV",
        "nav.gallery": "Koncerty & Súťaže",
        "nav.contact": "Kontakt",

        "hero.subtitle": "Fagotistka",
        "hero.subtitle2": "Klasická hudba • Fagot • Orchester",
        "hero.text": "Som študentka fagotu na Pražskej konzervatóriu pod vedením prof. Kořínka.",

        "about.title": "O mne",
        "cv.title": "Životopis",
        "contact.title": "Kontakt"
    },

    cz: {
        "nav.home": "Úvod",
        "nav.about": "O mně",
        "nav.cv": "CV",
        "nav.gallery": "Koncerty & Soutěže",
        "nav.contact": "Kontakt",

        "hero.subtitle": "Fagotistka",
        "hero.subtitle2": "Klasická hudba • Fagot • Orchestr",
        "hero.text": "Jsem studentka fagotu na Pražské konzervatoři pod vedením prof. Kořínka.",

        "about.title": "O mně",
        "cv.title": "Životopis",
        "contact.title": "Kontakt"
    },

    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.cv": "CV",
        "nav.gallery": "Concerts & Competitions",
        "nav.contact": "Contact",

        "hero.subtitle": "Bassoonist",
        "hero.subtitle2": "Classical Music • Bassoon • Orchestra",
        "hero.text": "I am a bassoon student at the Prague Conservatory under Prof. Kořínek.",

        "about.title": "About Me",
        "cv.title": "Curriculum Vitae",
        "contact.title": "Contact"
    }
};

// SET LANGUAGE
function setLang(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    localStorage.setItem("lang", lang);
}

// LOAD SAVED LANGUAGE
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "cz";
    setLang(savedLang);
});