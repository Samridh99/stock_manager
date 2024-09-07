document.addEventListener('DOMContentLoaded', function() {
    const stockForm = document.getElementById('stockSubmitForm');
    const stockTableBody = document.getElementById('stockTableBody');

    // Load stocks
    function loadStocks() {
        fetch('/api/stocks/')
            .then(response => response.json())
            .then(stocks => {
                stockTableBody.innerHTML = '';
                stocks.forEach(stock => {
                    const row = `
                        <tr>
                            <td>${stock.name}</td>
                            <td>${stock.ticker}</td>
                            <td>${parseFloat(stock.price).toFixed(2)}</td>
                            <td>
                                <button onclick="editStock(${stock.id})" class="btn btn-sm btn-warning">Edit</button>
                                <button onclick="deleteStock(${stock.id})" class="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                    `;
                    stockTableBody.innerHTML += row;
                });
            });
    }

    // Submit form
    stockForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const stockId = document.getElementById('stockId').value;
        const stock = {
            name: document.getElementById('name').value,
            ticker: document.getElementById('ticker').value,
            price: parseFloat(document.getElementById('price').value)
        };

        if (stockId) {
            // Update existing stock
            fetch(`/api/stocks/${stockId}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCookie('csrftoken')
                },
                body: JSON.stringify(stock),
            })
            .then(() => {
                loadStocks();
                stockForm.reset();
                document.getElementById('stockId').value = '';
            });
        } else {
            // Add new stock
            fetch('/api/stocks/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCookie('csrftoken')
                },
                body: JSON.stringify(stock),
            })
            .then(() => {
                loadStocks();
                stockForm.reset();
            });
        }
    });

    // Load initial stocks
    loadStocks();
});

function editStock(id) {
    fetch(`/api/stocks/${id}/`)
        .then(response => response.json())
        .then(stock => {
            document.getElementById('stockId').value = stock.id;
            document.getElementById('name').value = stock.name;
            document.getElementById('ticker').value = stock.ticker;
            document.getElementById('price').value = stock.price;
        });
}

function deleteStock(id) {
    if (confirm('Are you sure you want to delete this stock?')) {
        fetch(`/api/stocks/${id}/`, {
            method: 'DELETE',
            headers: {
                'X-CSRFToken': getCookie('csrftoken')
            }
        })
        .then(() => {
            loadStocks();
        });
    }
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}