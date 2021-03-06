//constants

const data = {
    customerOpen : false,
    employeeOpen : false,
    projectOpen : false,
    userOPen : false,
    setProjectModal : false,
    newHotelOpen : false,
    setEmployeesToProject : false
}

//Types
const CHANGE_CUSTOMER = "changeCustomer";
const CHAGE_EMPLOYEE = "changeemploiyee"
const CHANGE_PROJECT ="CHANGEproject";
const CHANGE_USER = "CHANGEUSER";
const CHANGE_HOTEL = "newHotelOpen : false,";
const SETEMPLOYEESTOPROJECt ="setProjectTOProject";

//Reducer

export default function isOPen(state = data, action){
    switch(action.type){
        case CHANGE_CUSTOMER: 
            return {...state, customerOpen: action.payload }
        case CHAGE_EMPLOYEE:
            return {...state, employeeOpen: action.payload }
        case CHANGE_PROJECT:
            return {...state, projectOpen: action.payload }
        case CHANGE_USER:
            return {...state, userOPen: action.payload }
        case CHANGE_HOTEL:
            return {...state, newHotelOpen: action.payload }
        case SETEMPLOYEESTOPROJECt:
            return {...state, setEmployeesToProject: action.payload}
        default:
            return state;
    }
}

//Actions

export const  changeStatus = (window, status) => (dispatch, getState) => {
    switch(window){
        case 'customer':
            dispatch({
                type:  CHANGE_CUSTOMER,
                payload: status
            })
        break;
        case 'employee':
            dispatch({
                type: CHAGE_EMPLOYEE,
                payload: status
            })
        break;
        case 'project':
            dispatch({
                type: CHANGE_PROJECT,
                payload: status
            })
        break;
        case 'user':
            dispatch({
                type: CHANGE_USER,
                payload: status
            })
        break;
        case 'hotel': 
            dispatch({
                type: CHANGE_HOTEL,
                payload: status
            })
        break;
        case 'setEmployToPRojec':
            dispatch({
                type: SETEMPLOYEESTOPROJECt,
                payload: status
            })
        break;
        default:
        break;  
    }
}
