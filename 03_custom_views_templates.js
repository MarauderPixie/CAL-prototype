// In this file you can create your own custom view templates


// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the magpie-object as input
// and has to call magpie.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call magpie.trial_data.push(trial_data) to save the trial information


// the experiment is basically 2A-FC, but not like the default _magpie one:
// 1. the choice needs to be "locked in" after it is made
// 2. a correct/incorrect feedback and a 'next' button needs to be shown
// 3. the view should not proceed when a choice was made, but when the 'next' button is clicked
//
// turns out: I don't quite need custom views for that, but or the slider ratings I just might

const custom_generator = {
    slider_rating: function(config, CT) {
        const option1 = config.data[CT].optionLeft;
        const option2 = config.data[CT].optionRight;

        const option3 = config.data[CT].optionLeft;
        const option4 = config.data[CT].optionRight;

        const option5 = config.data[CT].optionLeft;
        const option6 = config.data[CT].optionRight;

        const prop1 = config.data[CT].prop1;
        const prop2 = config.data[CT].prop2;
        const prop3 = config.data[CT].prop3;

        return `<p class='magpie-view-question'>${config.data[CT].question}</p>
                <div class='magpie-view-answer-container'>
                <div class="row">
                    <div class="column">
                        <span style="font-size:19px"><b>${prop1}</b></span>
                        <br />
                        <br />

                        <span style="font-size:19px"><b>${prop2}</b></span>
                        <br />
                        <br />

                        <span style="font-size:19px"><b>${prop2}</b></span>
                    </div>

                    <div class="column">                    
                        <span class='magpie-response-slider-option'>${option1}</span>
                        <input type='range' id='response' class='magpie-response-slider' min='0' max='100' value='50'/>
                        <span class='magpie-response-slider-option'>${option2}</span>
                        <br />
                        <br />

                        <span class='magpie-response-slider-option'>${option3}</span>
                        <input type='range' id='response' class='magpie-response-slider' min='0' max='100' value='50'/>
                        <span class='magpie-response-slider-option'>${option4}</span>
                        <br />
                        <br />

                        <span class='magpie-response-slider-option'>${option5}</span>
                        <input type='range' id='response' class='magpie-response-slider' min='0' max='100' value='50'/>
                        <span class='magpie-response-slider-option'>${option6}</span>
                    </div>
                </div>
                </div>
                <br />
                <button id="next" class='magpie-view-button magpie-nodisplay'>Next</button>`;
    }
};