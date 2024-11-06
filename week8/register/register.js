
//when page loads, set the current number of participants to 1
let participationCount = 1;

function participantTemplate(count) {
    const newSection = document.createElement('section');
    newSection.className = `participant${count}`;

    newSection.innerHTML = `
        <p>Participant ${count}</p>
        <div class="item">
            <label for="fname${count}"> First Name<span>*</span></label>
            <input id="fname${count}" type="text" name="fname${count}" value="" required />
        </div>
        <div class="item activities">
            <label for="activity${count}">Activity #<span>*</span></label>
            <input id="activity${count}" type="text" name="activity${count}" />
        </div>
        <div class="item">
            <label for="fee${count}">Fee ($)<span>*</span></label>
            <input id="fee${count}" type="number" name="fee${count}" />
        </div>
        <div class="item">
            <label for="date${count}">Desired Date <span>*</span></label>
            <input id="date${count}" type="date" name="date${count}" />
        </div>
        <div class="item">
            <p>Grade</p>
            <select name="grade${count}">
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
            </select>
        </div>
    `;
    return newSection;
}

//display initial count
window.addEventListener('load', function() {
    document.getElementById('participationCountDisplay').textContent = `Current Participants: ${participationCount}`;
    const firstParticipant = participantTemplate(participationCount);
    this.document.querySelector('.participants').appendChild(firstParticipant);
});

//add event listener so when clicked the following happens:
document.getElementById('add').addEventListener('click', function() {
    // add one count to participationCount
    participationCount++;
    document.getElementById('participationCountDisplay').textContent = `Current Participants: ${participationCount}`;

    //create a copy of THML that makes up participant section 
    //<section class="participant1"></section>
    const newParticipant = participantTemplate(participationCount);
    document.querySelector('.participants').appendChild(newParticipant);
});

// add event listener to the form, listening for the submitButton
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    for (let [name, value] of formData.entries()) {
        console.log(`${name}: ${value}`);
    }
    document.getElementById('summary').innerHTML = `<p>Form submitted with ${participationCount} participants</p>`;
});
function calculateTotalFee() {
    //select all fee input elements
    const fees = document.querySelectorAll('input[id^="fee"]');
    //sum up the total fees
    let total = Array.from(fees).reduce((sum, input) => {
        return sum + (parseFloat(input.value) || 0);
    }, 0);
    //display total fee 
    document.getElementById('totalFeeDisplay').textContent = `Total Fee: ${total.toFixed(2)}`;
}
document.addEventListener('input', function(event) {
    if (event.target.matches('input[id^="fee"]')) {
        calculateTotalFee();
    }
});

// get adults name from form
const adultName = document.getElementById('adult_name');
console.log(`Adult Name: ${adultName.value}`);

// hide the form and display message
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    //get adult name and number of participants
    const formData = new FormData(event.target);
    const adultName = formData.get('adult_name');
    const totalParticipants = participationCount;

    //calculate total fee
    let totalFee = 0;
    const fees = document.querySelectorAll('input[id^="fee"]');
    fees.forEach(fee => {
        totalFee += parseFloat(fee.value) || 0;
    });

    //hide form
    document.getElementById('form').style.display = 'none';

    //show summary and message
    const summary = document.getElementById('summary');
    summary.style.display = 'block';
    summary.innerHTML = `
        <p>Thank you ${adultName} for registering ${totalParticipants} participants. You owe ${totalFee.toFixed(2)} in fees.</p>
        `;
});