


const INT_OPERATION = 'int'
const LIM_OPERATION = 'lim'
const DIFF_OPERATION = 'differentialD'
const PROD_OPERATION = 'prod_'
const SUM_OPERATION = 'sum_'
const PERMUTATION_OPERATION = 'P_'
const COMBINATION_OPERATION = 'C_'



function getOperationName(latex) {

  var operation = 'eval'

  if(latex.indexOf(INT_OPERATION) !== -1) {
    operation = 'integrate'
  }

  if(latex.indexOf(LIM_OPERATION) !== -1) {
    operation = 'limit'
  }

  if(latex.indexOf(DIFF_OPERATION) !== -1) {
    operation = 'derivate'
  }


  if(
    latex.indexOf(SUM_OPERATION) !== -1 || 
    latex.indexOf(PROD_OPERATION) !== -1
  ) {
    operation = 'sum'
  }


  if(latex.indexOf(PERMUTATION_OPERATION) !== -1) {
    operation = 'permutation'
  }

  if(latex.indexOf(COMBINATION_OPERATION) !== -1) {
    operation = 'convination'
  }
  console.log(operation)
  return operation
}


export { getOperationName }