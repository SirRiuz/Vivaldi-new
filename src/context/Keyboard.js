

import Eq from "../svg/Eq"
import Point from "../svg/Point"
import Zero from "../svg/Zero"
import Sum from '../svg/Sum'
import Sub from '../svg/Sub'
import Multiplication from '../svg/Multiplication'
import Divition from '../svg/Divition'


import Three from '../svg/Three'
import One from '../svg/One'
import Two from '../svg/Two'
import Four from '../svg/Four'
import Five from '../svg/Five'
import Six from '../svg/Six'
import Seven from '../svg/Seven'
import Eigth from '../svg/Eigth'
import Nine from '../svg/Nine'
import Pi from '../svg/Pi'
import E from '../svg/E'
import Factorial from '../svg/Factorial'


import Pow from '../svg/Pow'
import Raiz from '../svg/Raiz'
import RauzC from '../svg/RauzC'


import Porcentaje from '../svg/Porcentaje'
import Abs from '../svg/Abs'
import Log from '../svg/Log'
import Ln from '../svg/Ln'
import Fractions from '../svg/Fractions'
import Integral from "../svg/Integral"
import IntegralDoble from "../svg/IntegralDoble"
import IntegralTrible from "../svg/IntegralTriple"
import IntegralDefine from "../svg/IntegralDefine"
import Limit from "../svg/Limit"




const COLOR = 'rgb(220, 220, 220)'


function getKeys(mode) {
  if(mode === 'numeric'){
    return [
      [
        {
            renderValue:<Abs/>,
            value:'|\\placeholder{⬚}|',
          },{
            renderValue:<Fractions/>,
            value:'\\placeholder{⬚}\\frac{\\placeholder{⬚}}{\\placeholder{⬚}}',
          },{
            renderValue:<Log/>,
            value:'\\log\\placeholder{⬚}',
          },{
            renderValue:<Ln/>,
            value:'\\ln\\placeholder{⬚}',
          },{
            styles:{ background:COLOR,  visibility: 'hidden' },
            renderValue:'',
            value:'0',
          }
      ],[
        {
            renderValue:<Pow/>,
            value:'^{\\placeholder{⬚}}',
          },{
            renderValue:<Raiz/>,
            value:'\\sqrt[\\placeholder{⬚}]{\\placeholder{⬚}}',
          },{
            renderValue:<RauzC/>,
            value:'\\sqrt{\\placeholder{⬚}}',
          },{
            renderValue:<Porcentaje/>,
            value:'\\%',
          },{
            renderValue:<Divition/>,
            value:'\\frac{\\placeholder{⬚}}{\\placeholder{⬚}}',
            styles:{ background:COLOR },
          }
      ],[
        {
            renderValue:<Factorial/>,
            value:'!',
          },{
            renderValue:<Seven/>,
            value:'7',
          },{
            renderValue:<Eigth/>,
            value:'8',
          },{
            renderValue:<Nine/>,
            value:'9',
          },{
            renderValue:<Multiplication/>,
            value:'\\cdot',
            styles:{ background:COLOR },
          }
      ],[
        {
            renderValue:<E/>,
            value:'e',
          },{
            renderValue:<Four/>,
            value:'4',
          },{
            renderValue:<Five/>,
            value:'5',
          },{
            renderValue:<Six/>,
            value:'6',
          },{
            renderValue:<Sub/>,
            value:'-',
            styles:{ background:COLOR },
          }
      ],[
        {
            renderValue:<Pi/>,
            value:'pi',
          },{
            renderValue:<One/>,
            value:'1',
          },{
            renderValue:<Two/>,
            value:'2',
          },{
            renderValue:<Three/>,
            value:'3',
          },{
            renderValue:<Sum/>,
            value:'+',
            styles:{ background:COLOR },
          }
      ],[
        {
            renderValue:'',
            value:'=',
          },{
            renderValue:'',
            value:'.',
          },{
            renderValue:<Zero/>,
            value:'0',
          },{
            renderValue:<Point/>,
            value:'.',
          },{
            renderValue:<Eq/>,
            value:'=',
          }
      ]

    ]
  }

  return [
    [
      {
        renderValue:<Integral/>,
        value:'\\int\\placeholder{⬚}dx',
      },{
        renderValue:<IntegralDoble/>,
        value:'\\int\\int\\placeholder{⬚}',
      },{
        renderValue:<IntegralTrible/>,
        value:'\\int\\int\\int\\placeholder{⬚}',
      },{
        renderValue:<IntegralDefine/>,
        value:'\\int_\\placeholder{⬚}^\\placeholder{⬚}\\placeholder{⬚}dx',
      },{
        renderValue:'x',
        value:'0',
        styles:{ background:COLOR,  visibility: 'hidden' },
      }
    ],[
        {
            renderValue:'Lim in',
            value:'\\lim_{\\placeholder{⬚}\\to\\placeholder{⬚}}\\placeholder{⬚}',
          },{
            renderValue:'Lim la +',
            value:'\\lim_{\\placeholder{⬚}\\to\\placeholder{⬚}^+}\\placeholder{⬚}',
          },{
            renderValue:'Lim la -',
            value:'\\lim_{\\placeholder{⬚}\\to\\placeholder{⬚}^-}\\placeholder{⬚}',
          },{
            renderValue:'Lim infi',
            value:'\\lim_{\\placeholder{⬚}\\to \\infty}\\placeholder{⬚}',
          },{
            renderValue:'diff',
            value:'\\frac{dy}{\\differentialD x}\\placeholder{⬚}',
          }
      ],[
        {
            renderValue:'SUM_1',
            value:'\\sum_{n=\\placeholder{⬚}}^{\\placeholder{⬚}}(\\placeholder{⬚})',
          },{
            renderValue:'SUM_2',
            value:'\\prod_{n=\\placeholder{⬚}}^{\\placeholder{⬚}}(\\placeholder{⬚})',
          },{
            renderValue:'PER',
            value:'_\\placeholder{⬚}P_\\placeholder{⬚}',
          },{
            renderValue:'COM',
            value:'_\\placeholder{⬚}C_\\placeholder{⬚}',
          },{
            renderValue:'x',
            value:'0',
          }
      ],[
        {
            renderValue:<Eq/>,
            value:'=',
          },{
            renderValue:<Point/>,
            value:'.',
          },{
            renderValue:<Zero/>,
            value:'0',
          },{
            renderValue:'x',
            value:'0',
          },{
            renderValue:'x',
            value:'0',
          }
      ],[
        {
            renderValue:<Eq/>,
            value:'=',
          },{
            renderValue:<Point/>,
            value:'.',
          },{
            renderValue:<Zero/>,
            value:'0',
          },{
            renderValue:'x',
            value:'0',
          },{
            renderValue:'x',
            value:'0',
          }
      ],[
        {
            renderValue:<Eq/>,
            value:'=',
          },{
            renderValue:<Point/>,
            value:'.',
          },{
            renderValue:<Zero/>,
            value:'0',
          },{
            renderValue:'x',
            value:'0',
          },{
            renderValue:'x',
            value:'0',
          }
      ]
  ]
}



export default getKeys



