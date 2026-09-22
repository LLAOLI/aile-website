/* ============================================
   AiLE — Form Validation & RFQ Logic
   Handles contact form, RFQ form, file upload
   ============================================ */

(function() {
  'use strict';

  /* ---- Helpers ---- */
  function showError(field, msg) {
    var group = field.closest('.form-group');
    if (!group) return;
    var error = group.querySelector('.form-error');
    if (error) { error.textContent = msg; error.classList.add('show'); }
    field.style.borderColor = '#FF6B6B';
  }
  function clearError(field) {
    var group = field.closest('.form-group');
    if (!group) return;
    var error = group.querySelector('.form-error');
    if (error) { error.classList.remove('show'); }
    field.style.borderColor = '';
  }
  function isEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  }
  function isPhone(v) {
    if (!v) return true;
    return /^[+]?[\d\s()\-]{6,}$/.test(v.trim());
  }

  /* ---- Contact form ---- */
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var valid = true;
      var fields = {
        name: contactForm.querySelector('[name="name"]'),
        company: contactForm.querySelector('[name="company"]'),
        email: contactForm.querySelector('[name="email"]'),
        phone: contactForm.querySelector('[name="phone"]'),
        message: contactForm.querySelector('[name="message"]')
      };

      Object.keys(fields).forEach(function(key) {
        var f = fields[key];
        if (!f) return;
        clearError(f);
        if (!f.value.trim()) {
          showError(f, 'This field is required.');
          valid = false;
        } else if (key === 'email' && !isEmail(f.value)) {
          showError(f, 'Please enter a valid email address.');
          valid = false;
        } else if (key === 'phone' && !isPhone(f.value)) {
          showError(f, 'Please enter a valid phone number.');
          valid = false;
        }
      });

      if (valid) {
        var success = contactForm.querySelector('.form-success');
        if (success) { success.classList.add('show'); }
        contactForm.reset();
        setTimeout(function() {
          if (success) { success.classList.remove('show'); }
        }, 6000);
      }
    });

    contactForm.querySelectorAll('input, textarea, select').forEach(function(f) {
      f.addEventListener('input', function() { clearError(f); });
    });
  }

  /* ---- RFQ form ---- */
  var rfqForm = document.getElementById('rfqForm');
  if (rfqForm) {
    rfqForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var valid = true;
      var required = rfqForm.querySelectorAll('[required]');
      required.forEach(function(f) {
        clearError(f);
        if (!f.value.trim()) {
          showError(f, 'This field is required.');
          valid = false;
        } else if (f.type === 'email' && !isEmail(f.value)) {
          showError(f, 'Please enter a valid email address.');
          valid = false;
        }
      });

      var checks = rfqForm.querySelectorAll('.form-check input[type="checkbox"]');
      var atLeastOne = Array.from(checks).some(function(c) { return c.checked; });
      var checkError = rfqForm.querySelector('.rfq-check-error');
      if (checkError) {
        checkError.style.display = atLeastOne ? 'none' : 'block';
      }
      if (!atLeastOne) valid = false;

      if (valid) {
        var success = rfqForm.querySelector('.form-success');
        if (success) { success.classList.add('show'); }
        rfqForm.reset();
        setTimeout(function() {
          if (success) { success.classList.remove('show'); }
        }, 6000);
      }
    });

    rfqForm.querySelectorAll('input, textarea, select').forEach(function(f) {
      f.addEventListener('input', function() { clearError(f); });
    });
  }

  /* ---- File upload ---- */
  var fileInputs = document.querySelectorAll('.form-upload input[type="file"]');
  fileInputs.forEach(function(input) {
    var label = input.closest('.form-upload').querySelector('.form-upload__files');
    input.addEventListener('change', function() {
      if (label) {
        if (input.files.length > 0) {
          var names = Array.from(input.files).map(function(f) { return f.name; });
          label.textContent = names.join(', ');
          label.style.color = 'var(--c-accent)';
        } else {
          label.textContent = '';
        }
      }
    });
  });

  /* ---- File upload click ---- */
  document.querySelectorAll('.form-upload').forEach(function(box) {
    box.addEventListener('click', function(e) {
      if (e.target.tagName !== 'INPUT') {
        var input = box.querySelector('input[type="file"]');
        if (input) input.click();
      }
    });
    box.addEventListener('dragover', function(e) {
      e.preventDefault();
      box.style.borderColor = 'var(--c-accent)';
    });
    box.addEventListener('dragleave', function() {
      box.style.borderColor = '';
    });
    box.addEventListener('drop', function(e) {
      e.preventDefault();
      box.style.borderColor = '';
      var input = box.querySelector('input[type="file"]');
      var label = box.querySelector('.form-upload__files');
      if (input && label && e.dataTransfer.files.length > 0) {
        input.files = e.dataTransfer.files;
        var names = Array.from(e.dataTransfer.files).map(function(f) { return f.name; });
        label.textContent = names.join(', ');
        label.style.color = 'var(--c-accent)';
      }
    });
  });

})();
