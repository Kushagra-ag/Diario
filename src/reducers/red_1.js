export default function red_1(state = {count:0, arr:[], notes:[], noteId:1, delId: 0}, action) {

    switch(action.type)
    {
      case 'INC': return state = {
        ...state,
        count: state.count + 1
      }; 
  
      case 'DEC': return state = {
        ...state,
        count: state.count - 1
      };  
  
      case 'INSERT': return state = {
        ...state, 
        arr: state.arr.concat(action.payload)
      };  

      case 'NOTES_ADD': return state = {
        ...state, 
        notes: state.notes.concat({
          title: action.title,
          content: action.content,
          id: state.noteId
        }),
        noteId: state.noteId+1
      };

      case 'DEL_NOTE': return state = {
        ...state,
        delId: action.delId,  
        notes: state.notes.filter(val => val.id != action.delId)
      };
  
      default: return state;
    }

  }
  