// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["head", "tail"]); // You can determine global (random) parameters here
// Declare your variables here



/* Helper functions
*
*
*/


/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};
// Declare your helper functions here



/* Hooks  
*
*
*/

// Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
};

// compares the chosen answer to the value of `option1`
check_response = function(data, next) {
    $('input[name=answer]').one('change', function(e) {

        const btn1 = document.querySelector('label[for="o1"]');
        const btn2 = document.querySelector('label[for="o2"]');
        const o1c = document.querySelector("#o1");
        const o2c = document.querySelector("#o2");

        console.log("btn1:", btn1)
        console.log("btn2:", btn2)
        console.log("o1c:", o1c)
        console.log("o2c:", o2c)
        console.log("o1c.value === data.correct?", o1c.value === data.correct)
        console.log("o2c.value === data.correct?", o2c.value === data.correct)

        // wenn richtig kategorisiert: färbe knopf gelb
        // wenn falsch: färbe blau und anderen knopf gelb
        // 20.08.: kinda broken rn
        if (o1c.value === data.correct) {
            btn1.style.backgroundColor = "#ffd633"; // gelb 
            // btn2.style.backgroundColor = "#3333ff"; // blau
        } else {
            btn1.style.backgroundColor = "#3333ff";
            btn2.style.backgroundColor = "#ffd633";
        }

        if (e.target.value === data.correct) {
            $(".magpie-view-answer-container").append(`<b style="font-size:x-large;">Korrekt!</b>`);
        } else {
            $(".magpie-view-answer-container").append(`<b style="font-size:x-large;">Falsch!</b>`);
        };  

        // $('input[name=answer]').attr('click', 'disabled');
        btn1.style.pointerEvents = "none";
        btn2.style.pointerEvents = "none";
    })
}


// Declare your hooks here


/* Generators for custom view templates, answer container elements and enable response functions
*
*
*/