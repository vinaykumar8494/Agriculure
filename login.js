document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        state: document.getElementById('state').value,
        district: document.getElementById('district').value,
        taluk: document.getElementById('taluk').value,
        village: document.getElementById('village').value
    };
    
    console.log('Form Data Submitted:', formData);

    // Perform any further actions here, such as sending the data to a server
});