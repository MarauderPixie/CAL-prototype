// In this file you can specify the trial data for your experiment


const trial_info = {
    rule1: [
        // CATEGORY A
        {
            question: "",
            picture: "images/c-l-b.png",
            option1: 'A',
            option2: 'B',
            correct: 'A',
        },{
            question: "",
            picture: "images/c-s-b.png",
            option1: 'A',
            option2: 'B',
            correct: 'A',
        },{
            question: "",
            picture: "images/c-l-w.png",
            option1: 'A',
            option2: 'B',
            correct: 'A',
        },{
            question: "",
            picture: "images/c-s-w.png",
            option1: 'A',
            option2: 'B',
            correct: 'A',
        },
        // CATEGORY B
        {
            question: "",
            picture: "images/s-l-b.png",
            option1: "A",
            option2: "B",
            correct: "B"
        },{
            question: "",
            picture: "images/s-l-w.png",
            option1: "A",
            option2: "B",
            correct: "B"
        },{
            question: "",
            picture: "images/s-s-b.png",
            option1: "A",
            option2: "B",
            correct: "B"
        },{
            question: "",
            picture: "images/s-s-w.png",
            option1: "A",
            option2: "B",
            correct: "B"
        }
    ],
    rule2: [
        // CATEGORY A
        {
            question: "",
            picture: "images/c-l-b.png",
            option1: 'A',
            option2: 'B',
            correct: 'A',
        },{
            question: "",
            picture: "images/c-s-b.png",
            option1: 'A',
            option2: 'B',
            correct: 'A',
        },{
            question: "",
            picture: "images/c-l-w.png",
            option1: 'A',
            option2: 'B',
            correct: 'B',
        },{
            question: "",
            picture: "images/c-s-w.png",
            option1: 'A',
            option2: 'B',
            correct: 'B',
        },
        // CATEGORY B
        {
            question: "",
            picture: "images/s-l-b.png",
            option1: "A",
            option2: "B",
            correct: "A"
        },{
            question: "",
            picture: "images/s-l-w.png",
            option1: "A",
            option2: "B",
            correct: "B"
        },{
            question: "",
            picture: "images/s-s-b.png",
            option1: "A",
            option2: "B",
            correct: "A"
        },{
            question: "",
            picture: "images/s-s-w.png",
            option1: "A",
            option2: "B",
            correct: "B"
        }        
    ],
    sliders: [
        {
            // QUD: "Wie sehr haben Sie Ihre Entscheidungen von bestimmten Eigenschaften abhängig gemacht?",
            QUD: `<b>Custom Sliders Showcase</b><br><br>Wir würden nun noch gerne wissen, wie wichtig jede Objekteigenschaft für Sie war, um sich für eine Kategorie zu entscheiden. Bitte verschieben sie die Schieberegler, um anzugeben, wie viel Aufmerksamkeit Sie der jeweiligen Eigenschaft dafür geschenkt haben.`,
            vorher: "Bevor sich die Kategorien geändert haben:",
            nachher: "Nachdem sich die Kategorien geändert haben:",
            prop1: "Farbe (schwarz / weiß)",
            prop2: "Größe (groß / klein)",
            prop3: "Form (Quadrat / Kreis)",
            optionLeft: "unwichtig",
            optionRight: "wichtig"
        }
    ]
};

trials_r1 = generate_trials(16, trial_info.rule1)
trials_r2 = generate_trials(16, trial_info.rule2)