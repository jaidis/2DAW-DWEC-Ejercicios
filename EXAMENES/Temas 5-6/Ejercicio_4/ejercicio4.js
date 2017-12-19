window.onload = function() {
  google.charts.load("current", {
    packages: ["corechart"]
  });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ["Año", "Población", {
        role: "style"
      }],
      ["2011", 1452, "fill-color: #ffe600; fill-opacity: 0.5;"],
      ["2012", 2360, "fill-color: #3bff00; fill-opacity: 0.7;"],
      ["2013", 4021, "fill-color: #00a3ff; fill-opacity: 0.3;"],
      ["2014", 1300, "fill-color: #7000ff; fill-opacity: 0.1;"]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
      {
        calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation"
      },
      2
    ]);

    var options = {
      title: "Evolución de la población zurda en Badajoz",
      backgroundColor: "#DDD",
      width: 600,
      height: 400,
      bar: {groupWidth: "95%"},
      legend: { position: "none" },
      animation: {
        duration: 6000,
        easing: 'inAndOut',
        startup: true
      }
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("graficos"));
    chart.draw(view, options);
  }







}
