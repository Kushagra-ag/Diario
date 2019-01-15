
export default function red_1(state = {count:0, arr:[], notes:[], noteId:1}, action) {

    switch(action.type)
    {
      case 'INC': state = {
        ...state,
        count: state.count + 1
      }; break;
  
      case 'DEC': state = {
        ...state,
        count: state.count - 1
      }; break;
  
      case 'INSERT': state = {
        ...state, 
        arr: state.arr.concat(action.payload)
      }; break;

      case 'NOTES_ADD': state = {
        ...state, 
        notes: state.notes.concat({
          title: action.title,
          content: action.content,
          id: state.noteId
        }),
        noteId: state.noteId+1
      }; break;
  
      default: return state;
    }
  
    return state;
  }
  