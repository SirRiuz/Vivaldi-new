

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
import LimLeft from "../svg/LimLeft"
import Diff from "../svg/Diff"
import SumA from "../svg/SumA"
import Prod from "../svg/Prod"
import Permutation from "../svg/Permutation"
import Combination from "../svg/Combination"
import LimRigth from "../svg/LimRigth"
import LimInf from "../svg/LimInf"
import ParA from "../svg/Pad_a"
import ParB from "../svg/PadB"




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
            renderValue:<ParA/>,
            value:'(',
          },{
            renderValue:<ParB/>,
            value:')',
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
        value:'0',
        styles:{ background:COLOR,  visibility: 'hidden' },
      }
    ],[
        {
            renderValue:<Limit/>,
            value:'\\lim_{\\placeholder{⬚}\\to\\placeholder{⬚}}\\placeholder{⬚}',
          },{
            renderValue:<LimLeft/>,
            value:'\\lim_{\\placeholder{⬚}\\to\\placeholder{⬚}^+}\\placeholder{⬚}',
          },{
            renderValue:<LimRigth/>,
            value:'\\lim_{\\placeholder{⬚}\\to\\placeholder{⬚}^-}\\placeholder{⬚}',
          },{
            renderValue:<LimInf/>,
            value:'\\lim_{\\placeholder{⬚}\\to \\infty}\\placeholder{⬚}',
          },{
            renderValue:<Diff/>,
            value:'\\frac{dy}{\\differentialD x}\\placeholder{⬚}',
          }
      ],[
        {
            renderValue:<SumA/>,
            value:'\\sum_{n=\\placeholder{⬚}}^{\\placeholder{⬚}}(\\placeholder{⬚})',
          },{
            renderValue:<Prod/>,
            value:'\\prod_{n=\\placeholder{⬚}}^{\\placeholder{⬚}}(\\placeholder{⬚})',
          },{
            renderValue:<Permutation/>,
            value:'_\\placeholder{⬚}P_\\placeholder{⬚}',
          },{
            renderValue:<Combination/>,
            value:'_\\placeholder{⬚}C_\\placeholder{⬚}',
          },{
            value:'0',
          }
      ],[
        {
            value:'=',
          },{
            value:'.',
          },{
            value:'0',
          },{
            value:'0',
          },{
            value:'0',
          }
      ],[
        {
            value:'=',
          },{
            value:'.',
          },{
            value:'0',
          },{
            value:'0',
          },{
            value:'0',
          }
      ],[
        {
            value:'=',
          },{
            value:'.',
          },{
            value:'0',
          },{
            value:'0',
          },{
            value:'0',
          }
      ]
  ]
}



export default getKeys



