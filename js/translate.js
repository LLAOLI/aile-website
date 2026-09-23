var LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'it', label: 'Italiano' },
  { code: 'ja', label: '日本語' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'da', label: 'Dansk' },
  { code: 'sv', label: 'Svenska' },
  { code: 'pt', label: 'Português' }
];

function getCurrentLang() {
  var match = document.cookie.match(/googtrans=\/en\/([a-z]{2})/);
  return match ? match[1] : 'en';
}

function setLanguage(lang) {
  var host = location.hostname;
  var domainParts = host.split('.');
  var domain = '';
  if (domainParts.length > 2) {
    domain = '.' + domainParts.slice(-2).join('.');
  } else {
    domain = '.' + host;
  }

  if (lang === 'en') {
    document.cookie = 'googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie = 'googtrans=; path=/; domain=' + domain + '; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie = 'googtrans=; path=/; domain=.' + host + '; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
  } else {
    var value = '/en/' + lang;
    document.cookie = 'googtrans=' + value + '; path=/';
    document.cookie = 'googtrans=' + value + '; path=/; domain=' + domain;
    document.cookie = 'googtrans=' + value + '; path=/; domain=.' + host;
  }

  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('aile_lang', lang);
  }

  location.reload();
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'de,fr,es,it,ja,nl,da,sv,pt',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false
  }, 'google_translate_element');
}

function restoreLanguage() {
  var saved = null;
  try { saved = localStorage.getItem('aile_lang'); } catch(e) {}
  if (saved && saved !== 'en') {
    var hasCookie = document.cookie.indexOf('googtrans=/en/' + saved) !== -1;
    if (!hasCookie) {
      var host = location.hostname;
      var domainParts = host.split('.');
      var domain = '';
      if (domainParts.length > 2) {
        domain = '.' + domainParts.slice(-2).join('.');
      } else {
        domain = '.' + host;
      }
      var value = '/en/' + saved;
      document.cookie = 'googtrans=' + value + '; path=/';
      document.cookie = 'googtrans=' + value + '; path=/; domain=' + domain;
      document.cookie = 'googtrans=' + value + '; path=/; domain=.' + host;
    }
  }
}

restoreLanguage();

function buildLangSwitcher() {
  var current = getCurrentLang();
  var saved = null;
  try { saved = localStorage.getItem('aile_lang'); } catch(e) {}
  if (saved) current = saved;

  var currentLabel = 'English';
  for (var i = 0; i < LANGUAGES.length; i++) {
    if (LANGUAGES[i].code === current) {
      currentLabel = LANGUAGES[i].label;
      break;
    }
  }

  var switchers = document.querySelectorAll('.lang-switch');
  for (var s = 0; s < switchers.length; s++) {
    var switcher = switchers[s];
    var btn = switcher.querySelector('.lang-switch__btn');
    var dropdown = switcher.querySelector('.lang-switch__dropdown');

    if (btn) {
      btn.querySelector('.lang-switch__label').textContent = currentLabel;
    }

    if (dropdown) {
      var html = '';
      for (var j = 0; j < LANGUAGES.length; j++) {
        var lang = LANGUAGES[j];
        var isActive = lang.code === current ? ' lang-switch__item--active' : '';
        html += '<button type="button" class="lang-switch__item' + isActive + '" data-lang="' + lang.code + '">' + lang.label + '</button>';
      }
      dropdown.innerHTML = html;

      var items = dropdown.querySelectorAll('.lang-switch__item');
      for (var k = 0; k < items.length; k++) {
        items[k].addEventListener('click', function() {
          setLanguage(this.getAttribute('data-lang'));
        });
      }
    }
  }

  document.addEventListener('click', function(e) {
    var switchers2 = document.querySelectorAll('.lang-switch');
    for (var m = 0; m < switchers2.length; m++) {
      if (!switchers2[m].contains(e.target)) {
        switchers2[m].classList.remove('lang-switch--open');
      }
    }
  });

  var btns = document.querySelectorAll('.lang-switch__btn');
  for (var n = 0; n < btns.length; n++) {
    btns[n].addEventListener('click', function(e) {
      e.stopPropagation();
      var parent = this.closest('.lang-switch');
      parent.classList.toggle('lang-switch--open');
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', buildLangSwitcher);
} else {
  buildLangSwitcher();
}
