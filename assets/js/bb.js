const data = `<table class="score">
<tr>
    <td colspan="3" class="description">
        {{ description }}
    </td>
</tr>
<tr>
    <td>{{ player1 }}</td>
<th>
    {{ score1 }} - {{ score2 }}
</th>
    <td>{{ player2 }}</td>
</tr>
<tr>
    <td>
        <img
        src="https://flagpedia.net/data/flags/mini/{{abbr1}}.png"
        width="31"
        height="20"
        alt="{{abbr1}}"
        />
    </td>
<th></th>
    <td>
        <img
        src="https://flagpedia.net/data/flags/mini/{{abbr2}}.png"
        width="31"
        height="20"
        alt="{{abbr2}}"
        />
    </td>
</tr>
</table>`;

// Private functions
var exampleTemplate = function () {
// create a handlebars template --- For more info: https://handlebarsjs.com/
var template = Handlebars.compile(data);

// DOM element where the Timeline will be attached
var container = document.getElementById("kt_docs_vistimeline_template");

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet([
    // round of 16
    {
        player1: "Brazil",
        abbr1: "br",
        score1: "1 (3)",
        player2: "Chile",
        abbr2: "cl",
        score2: "1 (2)",
        description: "round of 16",
        start: "2014-06-28T13:00:00",
    },
    {
        player1: "Colombia",
        abbr1: "co",
        score1: 2,
        player2: "Uruguay",
        abbr2: "uy",
        score2: 0,
        description: "round of 16",
        start: "2014-06-28T17:00:00",
    },
    {
        player1: "Netherlands",
        abbr1: "nl",
        score1: 2,
        player2: "Mexico",
        abbr2: "mx",
        score2: 1,
        description: "round of 16",
        start: "2014-06-29T13:00:00",
    }
]);

// Configuration for the Timeline
var options = {
    // specify a template for the items
    template: template,
};

// Create a Timeline
var timeline = new vis.Timeline(container, items, options);
}