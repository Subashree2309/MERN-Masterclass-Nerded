document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('customer-form');
    const customerList = document.getElementById('customer-list');
    const deleteButton = document.getElementById('delete-btn');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      addCustomer();
    });
  
    deleteButton.addEventListener('click', function() {
      deleteSelectedCustomers();
    });
  
    function addCustomer() {
      const name = document.getElementById('name').value;
      const contact = document.getElementById('contact').value;
      const membership = document.getElementById('membership').value;
  
      if (name && contact && membership) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${name}</strong> - ${contact} (${membership})`;
        customerList.appendChild(listItem);
        clearForm();
      } else {
        alert('Please fill out all fields');
      }
    }
  
    function deleteSelectedCustomers() {
      const selectedCustomers = customerList.querySelectorAll('li.selected');
      selectedCustomers.forEach(customer => {
        customer.remove();
      });
    }
  
    function clearForm() {
      document.getElementById('name').value = '';
      document.getElementById('contact').value = '';
      document.getElementById('membership').selectedIndex = 0;
    }
  
    customerList.addEventListener('click', function(e) {
      const selectedCustomer = e.target.closest('li');
      if (selectedCustomer) {
        selectedCustomer.classList.toggle('selected');
      }
    });
});

  