var xValues = ["Nishchal", "Aneesh", "Devarya", "Bob", "Demo Dev"];
var yValues = [18, 10, 5, 14, 20];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart4", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Assigned Developer"
    }
  }
});

// ..........................................................................
var xValues = ["None", "Low", "Medium", "High", "Urgent"];
var yValues = [40, 48 , 30, 24, 52];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart2", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Tickets Priority"
    }
  }
});

// ..........................................................................
var xValues = ["Bugs/Errors", "Feature Requests", "Other Comments", "Training/Testing", "Document Requests"];
var yValues = [55, 49, 44, 24, 15];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart3", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Tickets Type"
    }
  }
});


// ..........................................................................

var xValues = ["New", "Open", "In Progress", "Resolved", "Info Required"];
var yValues = [52, 40, 44, 27, 18];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart1", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Tickets Status"
    }
  }
});

// ...................................................................................
