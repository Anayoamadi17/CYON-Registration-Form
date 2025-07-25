// Signature preview and success
const signatureInput = document.getElementById('guarantorSign');
const signaturePreview = document.getElementById('signature-preview');
const signatureSuccess = document.getElementById('signature-success');
signatureInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && !['image/jpeg', 'image/png'].includes(file.type)) {
        alert('Kindly select .jpg or .png files');
        signatureInput.value = '';
        signaturePreview.classList.add('hidden');
        signatureSuccess.classList.add('hidden');
        return;
    }
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            signaturePreview.src = e.target.result;
            signaturePreview.classList.remove('hidden');
            signatureSuccess.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
    } else {
        signaturePreview.classList.add('hidden');
        signatureSuccess.classList.add('hidden');
    }
});
// Passport preview and success
const passportInput = document.getElementById('passport');
const passportPreview = document.getElementById('passport-preview');
const passportSuccess = document.getElementById('passport-success');
passportInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && !['image/jpeg', 'image/png'].includes(file.type)) {
        alert('Kindly select .jpg or .png files');
        passportInput.value = '';
        passportPreview.classList.add('hidden');
        passportSuccess.classList.add('hidden');
        return;
    }
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            passportPreview.src = e.target.result;
            passportPreview.classList.remove('hidden');
            passportSuccess.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
    } else {
        passportPreview.classList.add('hidden');
        passportSuccess.classList.add('hidden');
    }
});
// Limit class day selection to three checkboxes and show modal after three are selected
let classInfoShown = false;
const classInfoModal = document.getElementById('class-info-modal');
const closeClassInfoModal = document.getElementById('close-class-info-modal');
const dayCheckboxes = document.querySelectorAll('.select-class-days input[type="checkbox"]');
dayCheckboxes.forEach(cb => {
    cb.addEventListener('change', function() {
        const checked = document.querySelectorAll('.select-class-days input[type="checkbox"]:checked');
        if (checked.length > 3) {
            this.checked = false;
            alert('Please select only three days for your class.');
        } else if (checked.length === 3 && !classInfoShown) {
            classInfoModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            classInfoShown = true;
        }
    });
});
closeClassInfoModal.addEventListener('click', function() {
    classInfoModal.style.display = 'none';
    document.body.style.overflow = '';
}); 