/* Bloomberg at COP31 — registration form behaviour
   ------------------------------------------------------------------
   - Client-side validation for required fields and required checkbox groups.
   - DEVELOPER: set the form's `action` attribute (and method) to your
     registration platform / endpoint. While action="#" the form shows the
     confirmation panel without sending anything, for preview only.
*/
(function () {
  var form = document.querySelector('form[data-reg-form]');
  if (!form) return;

  var confirmation = document.querySelector('.confirmation');

  function validateField(field) {
    var input = field.querySelector('input, select, textarea');
    if (!input) return true;
    var ok = input.checkValidity();
    field.classList.toggle('invalid', !ok);
    input.setAttribute('aria-invalid', ok ? 'false' : 'true');
    return ok;
  }

  function validateGroup(group) {
    var boxes = group.querySelectorAll('input[type="checkbox"]');
    var ok = Array.prototype.some.call(boxes, function (b) { return b.checked; });
    group.classList.toggle('invalid', !ok);
    return ok;
  }

  form.querySelectorAll('.field').forEach(function (field) {
    var input = field.querySelector('input, select, textarea');
    if (!input) return;
    input.addEventListener('blur', function () {
      if (input.value !== '') validateField(field);
    });
    input.addEventListener('input', function () {
      if (field.classList.contains('invalid')) validateField(field);
    });
  });

  form.querySelectorAll('[data-require-one]').forEach(function (group) {
    group.addEventListener('change', function () {
      if (group.classList.contains('invalid')) validateGroup(group);
    });
  });

  form.addEventListener('submit', function (e) {
    var ok = true;
    var firstBad = null;

    form.querySelectorAll('.field').forEach(function (field) {
      var input = field.querySelector('[required]');
      if (input && !validateField(field)) { ok = false; firstBad = firstBad || input; }
    });
    form.querySelectorAll('[data-require-one]').forEach(function (group) {
      if (!validateGroup(group)) { ok = false; firstBad = firstBad || group.querySelector('input'); }
    });
    form.querySelectorAll('.check input[required]').forEach(function (box) {
      var wrap = box.closest('.checks');
      if (!box.checked) { ok = false; if (wrap) wrap.classList.add('invalid'); firstBad = firstBad || box; }
      else if (wrap) wrap.classList.remove('invalid');
    });

    if (!ok) {
      e.preventDefault();
      if (firstBad) firstBad.focus();
      return;
    }

    // Preview mode: no endpoint configured yet.
    if (!form.getAttribute('action') || form.getAttribute('action') === '#') {
      e.preventDefault();
      form.hidden = true;
      if (confirmation) {
        confirmation.classList.add('show');
        confirmation.setAttribute('tabindex', '-1');
        confirmation.focus();
      }
    }
  });
})();
