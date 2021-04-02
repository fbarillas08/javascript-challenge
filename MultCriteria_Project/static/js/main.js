var tableData = data;

// Create funtiont to populate output table
var table=d3.select("tbody")

function makeTable(data) {
    table.html("");
    data.forEach((table_row) => {
        var row = table.append("tr")
        Object.values(table_row).forEach((value) => {
            var cell = row.append("td");
            cell.text(value);
        })
    })
}

// Filtering Country of Sightings

function on_click(){
    var selectedDate = d3.select("#datetime").property("value");
    filteredData = tableData.filter(d => d.datetime === selectedDate);

    makeTable(filteredData);
}

d3.select("#btn-search").on("click",on_click);


/*var filteredSightings = tableData.filter(d => d.country === 'us');
console.log(filteredSightings)

// Filtering State of Sighting
var filteredSightings = tableData.filter(d => d.state === 'ky');
console.log(filteredSightings)

// Filtering City of Sighting
var filteredSightings = tableData.filter(d => d.city === 'bonita');
console.log(filteredSightings)

// Filtering Date of Sighting
var filteredSightings = tableData.filter(d => d.datetime === '1/2/2010');
console.log(filteredSightings)

// Filtering Shape of Sighting
var filteredSightings = tableData.filter(d => d.shape === 'sphere');
console.log(filteredSightings)

// Filtering Duration of Sighting
var filteredSightings = tableData.filter(d => parseFloat(d.durationMinutes) > "15");
console.log(filteredSightings)

// Filtering Based on Key Words in Comments
var filteredSightings = tableData.filter(d => d.comments.includes('sky'));
console.log(filteredSightings)
*/

