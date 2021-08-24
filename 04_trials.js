// In this file you can specify the trial data for your experiment


const trial_info = {
    forced_choice: [
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
    sliders: [
        {
            // QUD: "Wie sehr haben Sie Ihre Entscheidungen von bestimmten Eigenschaften abhängig gemacht?",
            QUD: "Wir würden nun noch gerne wissen, wie wichtig jede Objekteigenschaft für Sie war, um sich für eine Kategorie zu entscheiden. Bitte verschieben sie die Schieberegler, um anzugeben, wie viel Aufmerksamkeit Sie der jeweiligen Eigenschaft dafür geschenkt haben.",
            question: "Bevor sich die Kategorien geändert haben.",
            prop1: "Farbe (schwarz / weiß)",
            prop2: "Größe (groß / klein)",
            prop3: "Form (Quadrat / Kreis)",
            optionLeft: "100-Slider",
            optionRight: "Slider"
        }
    ]
};
