// import LineSimple from "./LineSimple"
// import PieSimple from "./PieSimple"
// import Menu from "./Menu"
// import GaugeSimple from "./GaugeSimple"
// import customer from "./Customer"
// import SchemaApiDemo from "./SchemaApiDemo"
import menu from './api/menus'

export default [
  {
    url: '/api/menus',
    method: 'get',
    response: () => {
      return menu
    }
  },
  {
    url: '/api/form/save',
    method: 'post',
    response: () => {
      return {
        status: 0,
        msg: ''
      }
    }
  },
//   {
//     url: '/api/menus',
//     method: 'get',
//     response: () => {
//       return Menu;
//     }
//   },
//   {
//     url: '/api/customer',
//     method: 'get',
//     response: () => {
//       return customer
//     }
//   },
//   {
//     url: '/api/schemaApi/demo1',
//     method: 'get',
//     response: () => {
//       return SchemaApiDemo
//     }
//   },
//   {
//     url: '/api/pie/simple',
//     method: 'get',
//     response: () => {
//       return PieSimple
//     }
//   },
//   {
//     url: '/api/line/simple',
//     method: 'get',
//     response: () => {
//       return LineSimple
//     }
//   },
//   {
//     url: '/api/gauge/simple',
//     method: 'get',
//     response: () => {
//       return GaugeSimple
//     }
//   }
]