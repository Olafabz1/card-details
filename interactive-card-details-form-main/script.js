function validateForm() {
            let isValid = true;

            // Clear previous error messages
            document.getElementById('nameError').textContent = '';
            document.getElementById('numberError').textContent = '';
            document.getElementById('dateError').textContent = '';
            document.getElementById('datesError').textContent = '';

            // Validate Name
            const name = document.getElementById('name').value;
            if (!name) {
                document.getElementById('nameError').textContent = 'Wrong format, full name only';
                isValid = false;
            }

            // Validate Card number
            const number = document.getElementById('number').value;
            if (!number) {
                document.getElementById('numberError').textContent = 'Wrong format, numbers only';
                isValid = false;
            }

              // Validate date
            const date = document.getElementById('date').value;
            if (!date) {
                document.getElementById('dateError').textContent = "Can't be blank";
                isValid = false;
            }

            // Validate dates
            const dates = document.getElementById('dates').value;
            if (!date) {
                document.getElementById('datesError').textContent = "Can't be blank";
                isValid = false;
            }

            const complete = document.getElementById('completed').value;
            if(!complete){
             document.getElementById('completedError').textContent = 'fill the neccessary document';
             isValid = false;
            }

            return isValid;
        }