import React, { useState } from "react";
import ReactDOM from "react-dom";
import C3Chart from "react-c3js";


import "./styles.css";

function randomNR(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const donut = {
  legend: {
    show: false
  },
  size: {
    height: 200
  },
  data: {
    columns: [["data1", 30], ["data2", 120]],
    type: "donut",
    order: null
  },
  tooltip: {
    format: {
      value: function(value: any, ratio: any, id: any, index: any) {}
    }
  },
  donut: {
    title: `testing%`,
    label: {
      show: false
    }
  }
};

function App() {
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [data, setData] = useState([["data1", 30], ["data2", 120]]);

  const changeData = () => {
    const r1 = randomNR(10, 100);
    const r2 = randomNR(10, 100);
    // console.log(r1, r2);
    setData([["data1", r1], ["data2", r2]]);
  };

  const isLoaded = () => {
    if (loading) setLoading(false);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={changeData}>change data</button>
      <Graph
        data={data}
        tooltip={{
          data1: data[0][0] + ":" + data[0][1],
          data2: data[1][0] + ":" + data[1][1]
        }}
        title={{ title: `random: ${randomNR(200, 300)}` }}
      />
    </div>
  );
}

class Graph extends React.Component {
  generateTitle = () => this.props.title;

  generateGraph = () => ({
    data: {
      columns: this.props.data,
      type: "donut",
      order: null
    },
    tooltip: {
      format: {
        value: (value, ratio, id, index) => {
          return this.props.tooltip[id];
        }
      }
    },
    donut: this.props.title
  });

  render() {
    const data = this.generateGraph();
    return <C3Chart {...data} />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
