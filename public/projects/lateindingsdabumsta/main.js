
function get_selected_cells() {
    let selection = {
        numerus: [30, 31, 32, 33, 34, 35],
        tempus: [],
        modus: [],
        genus: []
    };
    const setting_cells = document.querySelectorAll("#settings tbody td:not(.empty)");
    console.log(setting_cells);
    setting_cells.forEach(cell => {
        if (!cell.classList.contains("selected")) {return;}
    });
    return selection;
}


function generate_verben() {
    console.log("Generate Verben");
    let selection = get_selected_cells();
    let form = choose_verb_form(selection);
    document.getElementById("Output").innerText = form;
}

document.addEventListener("DOMContentLoaded", () => {document.getElementById("verb_button").addEventListener("click", generate_verben)});


// import {choose_random_from_list} from "/projects/lateindingsdabumsta/util.js"

// document.addEventListener("DOMContentLoaded", generate_verben);



