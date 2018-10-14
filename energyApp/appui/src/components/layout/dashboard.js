import React, { Component } from "react";
import LineChart from 'react-linechart';
import '../../../node_modules/react-linechart/dist/styles.css';
import ReactTable from 'react-table';
import {Link} from 'react-router-dom'; 
import axios from "../../../node_modules/axios";
import Parser from 'html-react-parser';


class Dashboard extends Component {

    render() {
        const data = [{
            color: "steelblue",
            points: [{x: 1, y: 1072}, {x:2, y:1043}, {x:3, y:1056}, {x:4, y:972}, {x:5, y:934}, {x:6, y:936}]
        }];

        const tabledata = [{
            date: "March 2018",
            energy: "1072 kW/h",
            plusminus: "N/A"
        },
        {
            date: "April 2018",
            energy: "1043 kW/h",
            plusminus: "-29 kW/h"
        },
        {
            date: "May 2018",
            energy: "1056 kW/h",
            plusminus: "+13 kW/h"
        },
        {
            date: "June 2018",
            energy: "972 kW/h",
            plusminus: "-84 kW/h"
        },
        {
            date: "July 2018",
            energy: "934 kW/h",
            plusminus: "-38 kW/h"
        },
        {
            date: "August 2018",
            energy: "936 kW/h",
            plusminus: "+2 kW/h"
        }
        ]

        const columns = [
            {
                Header: "Date",
                accessor: "date"
            },
            {
                Header: "Energy",
                accessor: "energy"
            },
            {
                Header: "+/-",
                accessor: "plusminus"
            }
        ]

        return(

            <div>
                <Link 
                    to = "/"
                    className = "logout"
                    >
                    Logout
                    </Link>
                <h1 className = "title">
                    Your Electricity Consumption
                </h1>
                <LineChart 
                    name = {"Your Consumption Readings"}
                    width = {750}
                    height = {500}
                    xLabel = {"Month"}
                    yLabel = {"Electricity Consumption(kW/h)"}
                    data = {data}
                />
                
                <ReactTable
                    className = "table"
                    data = {tabledata}
                    columns = {columns}
                />
            </div>
        )
    }
}

export default Dashboard;