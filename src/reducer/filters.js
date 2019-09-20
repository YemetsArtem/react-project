import { CHANGE_SELECTION } from "../constants";

const defaultFilters = {
    selected: [],
    dateRange: {
      from: null,
      to: null
    }
}

  export default (filters = defaultFilters, action) => {
    const { type, payload } = action;

    switch (type) {
        case CHANGE_SELECTION:
            console.log(payload.selected);
            
            return { ...filters, selected: payload.selected }

        default:
            return filters;
    } 
}
