const router= (state = {name: 'main', options: {}}, action) => {
    switch (action.type) {
      case 'ROUTE-UPDATE': return { name: action.route, options: action.options || {} }
      default: return state
    }
  }
  
  export default router