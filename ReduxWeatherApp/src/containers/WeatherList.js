import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/Chart";

class WeatherList extends Component {
  renderWeather = cityData => {
    const name = cityData.city.name;
    const dataList = cityData.list;
    const temps = dataList.map(weather => {
      return weather.main.temp;
    });
    const pressures = dataList.map(weather => {
      return weather.main.pressure;
    });
    const humidities = dataList.map(weather => {
      return weather.main.humidity;
    });

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color={"red"} />
        </td>
        <td>
          <Chart data={pressures} color="green" />
        </td>
        <td>
          <Chart data={humidities} color="blue" />
        </td>
      </tr>
    );
  };

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(mapStateToProps)(WeatherList);
