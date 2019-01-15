export default function red_2(state = {mounted: false}, action) {

    switch(action.type)
    {
      case 'disabled': state = {
        mounted: false
      }; break;
  
      case 'enabled': state = {
        mounted: true
      }; break;
  
      default: return state;
    }
  
    return state;
  }