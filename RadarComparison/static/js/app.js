// Variables to track selections
let firstSelection;
let secondSelection;
// Function for event listener
function optionChangedNew(chosenSelector, sampleNumber) {
  // Check to see which selector was changed
  if (chosenSelector === 'subOneSel'){
    firstSelection = sampleNumber;
  }
  else {
    secondSelection = sampleNumber;
  }
  
  // Check current selector values and build charts/metadata
  if(secondSelection && firstSelection) {
    buildComparisonMetadata(firstSelection, secondSelection);
    buildComparisonCharts(firstSelection, secondSelection);
  }
  else if (firstSelection && !secondSelection){
    buildMetadata(firstSelection);
    buildCharts(firstSelection);
  }
  else {
    console.log('Select subject one.');
  }
}
// Build the metadata panel
function buildMetadata(selectedSample) {
  d3.csv("http://localhost:8000/Resources/cleaned_obesity_dataout.csv").then((data) => {
    
    let subject = data[selectedSample];
    // Create object that contains data to display
    let result = {
      'Age': subject.Age,
      'Gender': subject.Gender,
      'Height (in)': subject['Height(in)'],
      'Weight (lbs)': subject['Weight(lbs)'],
      'Obesity level': subject['Obesity level'],
      'BMI': subject.BMI
    };

    // Use d3 to select the panel with id of `#sample-metadata`
    let metaHtml = d3.select('#sample-metadata');
    // Use `.html("") to clear any existing metadata
    metaHtml.html("");
    
    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    Object.entries(result).forEach(([key, value]) => {
      metaHtml.append('p').html(`<strong>${key}</strong>: ${value}`); 
    });
    // Update the second metadata box
    let metaHtmlTwo = d3.select('#sample-metadata-two');
    metaHtmlTwo.html("No selection made");
  }); 
}

function buildComparisonMetadata(subjectOne, subjectTwo) {
  d3.csv("http://localhost:8000/Resources/cleaned_obesity_dataout.csv").then((data) => {
    // Do the same as the other metadata function, with two subjects
    let oneData = data[subjectOne];
    let twoData = data[subjectTwo];

    let resultOne = {
      'Age': oneData.Age,
      'Gender': oneData.Gender,
      'Height (in)': oneData['Height(in)'],
      'Weight (lbs)': oneData['Weight(lbs)'],
      'Obesity level': oneData['Obesity level'],
      'BMI': oneData.BMI
    };

    let metaHtmlOne = d3.select('#sample-metadata');
    metaHtmlOne.html("");
    Object.entries(resultOne).forEach(([key, value]) => {
      metaHtmlOne.append('p').html(`<strong>${key}</strong>: ${value}`); 
    });

    let resultTwo = {
      'Age': twoData.Age,
      'Gender': twoData.Gender,
      'Height (in)': twoData['Height(in)'],
      'Weight (lbs)': twoData['Weight(lbs)'],
      'Obesity level': twoData['Obesity level'],
      'BMI': twoData.BMI
    }

    let metaHtmlTwo = d3.select('#sample-metadata-two');
    metaHtmlTwo.html("");
    Object.entries(resultTwo).forEach(([key, value]) => {
      metaHtmlTwo.append('p').html(`<strong>${key}</strong>: ${value}`); 
    });
  });
}
// Create radar chart object to keep track of the radar chart's existence
let radarChart;

function buildCharts(selectedSample) {
  d3.csv("http://localhost:8000/Resources/cleaned_obesity_dataout.csv").then((data) => {
    // Check if radar chart exists and clears if so
    if (radarChart) {
      radarChart.destroy();
    }
    // Fetch dat for subject
    let subject = data[selectedSample];
    let subjectData = [subject['Frequency of vegetable consumption'],
                       subject['Number of main meals'],
                       subject['Physical activity frequency'],
                       subject['Consumption of food between meals']];
    // Create data object for radar chart
    const dataset = {
      labels: [
        "Frequency of Vegetable Consumption", 
        "Number of Main Meals", 
        "Physical Activity Frequency", 
        "Consumption of Food Between Meals"
      ],
      datasets: [{
        label: 'Subject 1',
        data: subjectData,
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }]
    }
    // Configure radar chart
    const config = {
      type: 'radar',
      data: dataset,
      options: {
        elements: {
          line: {
            borderWidth: 3
          }
        },
        scales: {
          r: {
              min: 0,
              max: 4,
              angleLines: {
                  display: true
              }
          }
        }
      },
    };

    // Render the chart
    const ctx = document.getElementById('radar').getContext('2d');
    radarChart = new Chart(ctx, config);
  }); 
}

function buildComparisonCharts(firstSelection, secondSelection) {
  d3.csv("http://localhost:8000/Resources/cleaned_obesity_dataout.csv").then((data) => {
    // Same as previous chart function with two subjects.
    if (radarChart) {
      radarChart.destroy();
    }
    
    let subjectOne = data[firstSelection];
    let subjectTwo = data[secondSelection];
    
    let subjectOneData = [subjectOne['Frequency of vegetable consumption'],
                          subjectOne['Number of main meals'],
                          subjectOne['Physical activity frequency'],
                          subjectOne['Consumption of food between meals']];

    let subjectTwoData = [subjectTwo['Frequency of vegetable consumption'],
                          subjectTwo['Number of main meals'],
                          subjectTwo['Physical activity frequency'],
                          subjectTwo['Consumption of food between meals']];
    
    const dataset = {
      labels: [
        "Frequency of Vegetable Consumption", 
        "Number of Main Meals", 
        "Physical Activity Frequency", 
        "Consumption of Food Between Meals"
      ],
      datasets: [{
        label: 'Subject One',
        data: subjectOneData,
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }, {
        label: 'Subject Two',
        data: subjectTwoData,
        fill: true,
        backgroundColor: 'rgba(38, 66, 247, 0.2)',
        borderColor: 'rgb(38, 66, 247)',
        pointBackgroundColor: 'rgb(38, 66, 247)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(38, 66, 247)'
      }]
    }

    const config = {
      type: 'radar',
      data: dataset,
      options: {
        elements: {
          line: {
            borderWidth: 3
          }
        },
        scales: {
          r: {
              min: 0, 
              max: 4, 
              angleLines: {
                  display: true
              }
          }
        }
      },
    };

    // Render the chart
    const ctx = document.getElementById('radar').getContext('2d');
    radarChart = new Chart(ctx, config);
  }); 
}

// Function to run on page load
function init() { 
  // Import csv
  d3.csv("http://localhost:8000/Resources/cleaned_obesity_dataout.csv").then(function(data) {
    // Populate selectors
    let dropDown = d3.selectAll('.subjectSelect');
    data.forEach((item, index) => {
      dropDown.append('option').text(index).property('value',index);
    });
  });
  // Event listener for both selectors.
  d3.selectAll(".subjectSelect").on("change", function() {
    const selector = d3.select(this).property('id');
    const sample = d3.select(this).property('value')
    optionChangedNew(selector, sample);
  });

}

// Initialize the dashboard
init();
