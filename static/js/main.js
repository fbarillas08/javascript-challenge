var tableData = data;

// On change to the DOM, call getData()
//d3.selectAll(".selDataset").on("change", getData);




// Filtering UFO Sightings by Country
    function getDatabycountry()
    {
        var dropdownMenu = d3.select(".selDataset");
        var country = dropdownMenu.property("value");

        var filteredSightings = tableData.filter(d => d.country === country);
        console.log(filteredSightings)
    }

// Filtering UFO Sightings by State
    function getDatabystate()
    {
        var dropdownMenu = d3.select(".selDataset");
        var state = dropdownMenu.property("value");

        var filteredSightings = tableData.filter(d => d.state === state);
        console.log(filteredSightings)
        
    }

// Filtering UFO Sightings by City
    function getDatabycity()
    {
        var dropdownMenu = d3.select(".selDataset");
        var city = dropdownMenu.property("value");

        var filteredSightings = tableData.filter(d => d.city === city);
        console.log(filteredSightings)
    }

// Filtering Date of Sighting
    function getDatabydate()
    {
        var dropdownMenu = d3.select(".datetime");
        var sightingdate = dropdownMenu.property("value");

        var filteredSightings = tableData.filter(d => d.datetime === sightingdate);
        console.log(filteredSightings)
        
    }

// Filtering Shape of Sighting
    function getDatabyshape()
    {
        var dropdownMenu = d3.select(".selDataset");
        var shape = dropdownMenu.property("value");

        var filteredSightings = tableData.filter(d => d.shape === shape);
        console.log(filteredSightings)
    }

// Filtering Duration of Sighting
    function getDatabyduration()
    {
        var dropdownMenu = d3.select(".selDataset");
        var duration = dropdownMenu.property("value");

        var filteredSightings = tableData.filter(d => parseFloat(d.durationMinutes) >= duration);
        console.log(filteredSightings)
    }    

// Filtering Based on Key Words in Comments
    function getDatabykeywords()
    {
        var dropdownMenu = d3.select(".selDataset");
        var keyword = dropdownMenu.property("value");

        var filteredSightings = tableData.filter(d => d.comments.includes(keyword));
        console.log(filteredSightings)
    }
}
