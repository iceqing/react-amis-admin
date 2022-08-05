option = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
      {
        name: 'Pressure',
        type: 'gauge',
        detail: {
          formatter: '{value}'
        },
        data: [
          {
            value: 70,
            name: 'SCORE'
          }
        ]
      }
    ]
  };

  const Wrapper  = {
    "status": 0,
    "msg": "ok",
    "data":  option
  }

  export default Wrapper;