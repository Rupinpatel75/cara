document.getElementById('addProductForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const productName = document.getElementById('productName').value;
    const productImage = document.getElementById('productImage').files[0];
    const productSize = Array.from(document.querySelectorAll('input[name="productSize"]:checked')).map(input => input.value);
    const customRemarks = document.getElementById('customRemarks').value;
    const productDescription = document.getElementById('productDescription').value;

    // Process the form data here, e.g., send to the server or display on the page.
    console.log({
        productName,
        productImage,
        productSize,
        customRemarks,
        productDescription
    });

    // Reset form after submission
    this.reset();
});
