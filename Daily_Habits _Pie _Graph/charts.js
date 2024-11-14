// Load JSON data
const loadData = async (url) => (await fetch(url)).json();

// Load the data for each chart
async function createCharts() {

    // Frequency of Vegetable Consumption Chart
    const vegData = await loadData('veg_count.json');
    new Chart(document.getElementById('vegConsumptionChart'), {
        type: 'doughnut',
        data: {
            labels: Object.keys(vegData),
            datasets: [{
                label: 'Frequency of vegtable Consumption',
                data: Object.values(vegData),
                hoverOffset: 4
            }]
        },
        options: {
            plugins: {
                legend: { position: 'bottom' },
                title: { display: true, text: 'Frequency of vegtable Consumption' }
            }
        }
    });
       

    // Number of Main Meals Chart
    const mealsData = await loadData('meal_count.json');
    new Chart(document.getElementById('mainMealsChart'), {
        type: 'doughnut',
        data: {
            labels: Object.keys(mealsData),
            datasets: [{
                label: 'Number of Main Meals',
                data: Object.values(mealsData),
                hoverOffset: 4
            }]
        },
        options: {
            plugins: {
                legend: { position: 'bottom' },
                title: { display: true, text: 'Number of Main Meals' }
            }
        }
    });

    // Physical Activity Frequency Chart
    const activityData = await loadData('physical_count.json');
    new Chart(document.getElementById('activityChart'), {
        type: 'doughnut',
        data: {
            labels: Object.keys(activityData),
            datasets: [{
                label: 'Physical Activity Frequency',
                data: Object.values(activityData),
                hoverOffset: 4
            }]
        },
        options: {
            plugins: {
                legend: { position: 'bottom' },
                title: { display: true, text: 'Physical Activity Frequency' }
            }
        }
    });

    // Consumption of Food Between Meals Chart
    const foodConsumptionData = await loadData('between_count.json');
    new Chart(document.getElementById('foodConsumptionChart'), {
        type: 'doughnut',
        data: {
            labels: Object.keys(foodConsumptionData),
            datasets: [{
                label: 'Consumption of Food Between Meals',
                data: Object.values(foodConsumptionData),
                hoverOffset: 4
            }]
        },
        options: {
            plugins: {
                legend: { position: 'bottom' },
                title: { display: true, text: 'Consumption of Food Between Meals' }
            }
        }
    });
}

// Create all charts
createCharts();