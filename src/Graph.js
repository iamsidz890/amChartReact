import React, { useRef, useLayoutEffect } from "react";

import "./App.css";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import "@elastic/eui/dist/eui_theme_dark.css";
am4core.useTheme(am4themes_animated);

function Graph(props) {
	const charts = useRef(null);

	useLayoutEffect(() => {
		var chart = am4core.create("chartdiv", am4charts.XYChart);

		chart.dataSource.url =
			"https://uat.4pointx.com:12361/pdm_vibrationanalysis_get_faultbarchart?shop=Pumps&plant=Plant-1&time=Last%201%20year";

		// Create axes
		// var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
		let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
		// categoryAxis.dataFields.dateX = "date";
		dateAxis.dataFields.category = "date";
		// categoryAxis.title.text = "Time";
		// categoryAxis.renderer.minGridDistance = 10;
		// dateAxis.gridIntervals.setAll([
		// 	{ timeUnit: "minute", count: 1 },
		// 	{ timeUnit: "minute", count: 5 },
		// ]);
		dateAxis.skipEmptyPeriods = true;
		dateAxis.dateFormatter.inputDateFormat = "yyyy-MM-ddThh:mm:ss.sssZ";
		dateAxis.baseInterval = {
			timeUnit: "minute",
			count: 1,
		};
		// First value axis
		var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
		valueAxis.title.text = "Assets";
		// valueAxis.min = 0;
		// valueAxis.max = 10;

		// First series
		var series = chart.series.push(new am4charts.ColumnSeries());
		series.dataFields.valueY = "imbalance";
		series.dataFields.dateX = "date";
		series.name = "Imbalance";
		// series.tooltipText = "{name}: [bold]{valueY}[/]";
		series.columns.template.fill = am4core.color("#e60000");

		var series2 = chart.series.push(new am4charts.ColumnSeries());
		series2.dataFields.valueY = "misalignment";
		series2.dataFields.dateX = "date";
		series2.name = "Misalignment";
		// series2.tooltipText = "{name}: [bold]{valueY}[/]";
		series2.columns.template.fill = am4core.color("#206040");
		series2.stacked = true;

		var series3 = chart.series.push(new am4charts.ColumnSeries());
		series3.dataFields.valueY = "loseness";
		series3.dataFields.dateX = "date";
		series3.name = "Loseness";
		// series.tooltipText = "{name}: [bold]{valueY}[/]";
		series3.columns.template.fill = am4core.color("#4d004d");
		series3.stacked = true;

		var series4 = chart.series.push(new am4charts.ColumnSeries());
		series4.dataFields.valueY = "bearing loss";
		series4.dataFields.dateX = "date";
		series4.name = "Bearing Loss";
		// series4.tooltipText = "{name}: [bold]{valueY}[/]";
		series4.columns.template.fill = am4core.color("#4d1a00");
		series4.stacked = true;

		chart.legend = new am4charts.Legend();

		charts.current = chart;

		return () => {
			chart.dispose();
		};
	}, []);

	return <div id='chartdiv' style={{ width: "100%", height: "500px" }}></div>;
}
export default Graph;
