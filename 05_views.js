// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  title: 'Willkommen!',
  text: `<b>Dies ist nur ein Prototyp!</b>
  <br />
  <br />
  Auf der nächsten Seite folgen einige Instruktionen, danach folgen einiges Beispiel-Trials und am Ende wird Demographie abgefragt. 
  <br />
  <br />
  Ein einsatzbereites Experiment würde zB eine Einwilligungserklärung enthalten und/oder eine Auswahlmöglichkeit für deutsche/englische Sprache und/oder ähnliche weitere Dinge.`,
  buttonText: 'zu den Anweisungen'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'Einleitung',
  text: `In dieser Studie werden Ihnen verschiedene Objekte präsentiert. Jedes Objekt gehört zu einer von zwei möglichen Kategorien, <b>A</b> oder <b>B</b>. Ihre Aufgabe in dieser Studie ist es, zu lernen, zu welcher Kategorie die Objekte gehören. Dies wird in mehreren Durchgängen passieren. In jedem Durchgang wird eines der Objekte angezeigt, und Sie wählen eine der zwei Kategorien, <b>A</b> oder <b>B</b>, durch einen Klick auf das entsprechende Antwortfeld. Nach jeder Antwort bekommen Sie eine Rückmeldung darüber, ob Ihre Wahl richtig oder falsch war. Am Anfang müssen Sie raten, letztendlich aber werden Sie lernen, wie man die Objekte richtig kategorisiert.
  <br />
  <br />
  Es gibt insgesamt 8 Objekte, die jeweils drei Eigenschaften mit jeweils zwei Ausprägungen haben. Diese Eigenschaften sind:
  <br />- <b>Form</b> (<i>Quadrat</i> oder <i>Kreis</i>)
  <br />- <b>Farbe</b> (<i>weiß</i> oder <i>schwarz</i>) und
  <br />- <b>Größe</b> (<i>groß</i> oder <i>klein</i>)
  <br />  
  <br />
  In einem "fertigen" Experiment würde nun zunächst jedes Objekt einmal kurz angezeigt - in dieser Version fangen wir jedoch direkt mit der Kategorisierung an.`,
  buttonText: 'mit dem Experiment beginnen'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/


// Here, we initialize a normal forced_choice view
const forced_choice_2A = magpieViews.view_generator("forced_choice", 

// config info
{
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: trial_info.forced_choice.length,
  // name should be identical to the variable name
  name: 'forced_choice_2A',
  data: _.shuffle(trial_info.forced_choice),
  // you can add custom functions at different stages through a view's life cycle
  hook: {
    after_response_enabled: check_response
  }
},

// custom generator functions
{
  // stimulus_container_generator: stimulus_container_generators.basic_stimulus,
  // answer_container_generator: answer_container_generators.button_choice,
  answer_container_generator: function (config, CT) {
    return `<div class='magpie-view-answer-container'>
            <p class='magpie-view-question'>${config.data[CT].question}</p>
            <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
            <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
            <label for='o2' class='magpie-response-buttons'>${config.data[CT].option2}</label>
            <input type='radio' name='answer' id='o2' value=${config.data[CT].option2} />
            <button id='next' class='magpie-view-button magpie-nodisplay'>Next</button>
            </div>`;
  },

  handle_response_function: function(config, CT, magpie, answer_container_generator, startingTime) {

    // create the answer container
    $(".magpie-view").append(answer_container_generator(config, CT));

    // attaches an event listener to the radio button input
    // when an input is selected a response property with a value equal
    // to the answer is added to the trial object
    // as well as a readingTimes property with value
    $("input[name=answer]").on("click", function() {
      const RT = Date.now() - startingTime;
      let trial_data = {
          trial_name: config.name,
          trial_number: CT + 1,
          response: $("input[name=answer]:checked").val(),
          RT: RT
        };
      trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);
      magpie.trial_data.push(trial_data);

      // $("magpie-response-buttons").find('input[type="click"]').attr('disabled','disabled');
      // $("o1").find('input[type="click"]').attr('disabled','disabled');
      $("#next").removeClass("magpie-nodisplay");
    });
    
    $("#next").on("click", function() {
      magpie.findNextView();
    });

  }    
});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
