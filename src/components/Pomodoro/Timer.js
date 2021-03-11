import React, { Component } from 'react';

import './Timer.css';

class Timer extends Component {
  constructor() {
    super();

    this.state = {
      alert: {
        type: '',
        message: '',
      },
      time: 0,
    };

    this.times = {
      defaultTime: 1500, // 25 min
      shortBreak: 300, // 5 min
      longBreak: 900, // 15 minutos
    };

    // this.setTimeForWork = this.setTimeForWork.bind(this);
  }

  componentDidMount() {
    this.setDefaultTime();
  }

  setDefaultTime = () => {
    this.setState({
      time: this.times.defaultTime,
    });
  };

  setTimeForWork = () => {
    this.setState({
      alert: {
        type: 'work',
        message: 'Tiempo de Trabajo',
      },
    });

    return this.setTime(this.times.defaultTime);
  };

  setTimeForShortBreak = () => {
    this.setState({
      alert: {
        type: 'shortBreak',
        message: 'Iniciando un pequenio descanso',
      },
    });

    return this.setTime(this.times.shortBreak);
  };

  setTimeForLongBreak = () => {
    this.setState({
      alert: {
        type: 'longBreak',
        message: 'Tomando un descanso Largo',
      },
    });

    return this.setTime(this.times.longBreak);
  };

  restartInterval = () => {
    // clear interval
    clearInterval(this.interval);

    // set Interval
    this.interval = setInterval(this.countDown, 1000);
  };

  countDown = () => {
    // console.time();
    if (this.state.time === 0) {
      this.setState({
        alert: {
          type: 'buz',
          message: 'Buzzzzzzz!',
        },
      });
    } else {
      this.setState((prevState) => ({
        time: prevState.time - 1,
      }));
    }
    // console.timeEnd();
  };

  setTime = (newTime) => {
    this.restartInterval();

    this.setState({
      time: newTime,
    });
  };

  displayTimer = (seconds) => {
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor((seconds % 3600) % 60);

    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  render() {
    const {
      alert: { message },
      time,
    } = this.state;

    return (
      <div className="Pomodoro">
        <div className="alert">{message}</div>
        <div className="timer">{this.displayTimer(time)}</div>
        <div className="types">
          <button type="button" className="start" onClick={this.setTimeForWork}>
            Start Working
          </button>
          <button type="button" className="short" onClick={this.setTimeForShortBreak}>
            Short Break
          </button>
          <button type="button" className="long" onClick={this.setTimeForLongBreak}>
            Long Break
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
