let total =0.00; 
let accessories = 0.00;
total = Math.abs(total + (urldata.get('carPrice')));

        showTotal(); 
        const VAT = 0.25;
     
        function calculateTotal(checkbox, itemprice) {
            if (checkbox.checked === true) { 
                total = Math.abs(total + parseFloat(itemprice * (1 + VAT)));
                accessories = Math.abs(accessories + parseFloat(itemprice * (1 + VAT)))
            } else { 
                total = Math.abs(total - parseFloat(itemprice));
                accessories = Math.abs(accessories - parseFloat(itemprice));
            }
            showTotal();
        }

    
        function showTotal() {
            const output = document.getElementById("totaloutput");
            output.innerHTML = `<h3> Total ${total.toLocaleString("da-DK", {style: "currency", currency: "DKK"})}</h3> <p>incl. VAT</p>`;
        }
        

        const form = document.getElementById("form");
        form.reset(); 
        
        const checkboxes = document.getElementsByClassName("acclist"); 
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            let shoppinglist = []; 
            for (const checkbox of checkboxes) {
                if (checkbox.checked === true) { 
                    shoppinglist.push(checkbox.dataset.item + "(dkr. " + checkbox.value + ")"); 
                }
            }
            
           
        
            
            sessionStorage.setItem("goods", JSON.stringify(shoppinglist));
            sessionStorage.setItem("total", total.toLocaleString("da-DK", {
                style: "currency",
                currency: "DKK"
            }));

            sessionStorage.setItem("accessories", accessories.toLocaleString("da-DK", {
                style: "currency",
                currency: "DKK"
            }));
        
            location.href = "page3.html?";
        })
        
     