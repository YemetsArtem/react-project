import {
  CHANGE_SELECTION,
  CHANGE_DATE_RANGE,
  DELETE_ARTICLE
} from "../constants";

const defaultFilters = {
  selected: [],
  dateRange: {
    from: null,
    to: null
  }
};

export default (filters = defaultFilters, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_SELECTION:
      return { ...filters, selected: payload.selected };

    case CHANGE_DATE_RANGE:
      return { ...filters, dateRange: payload.dateRange };

    case DELETE_ARTICLE:
      return {
        ...filters,
        selected: filters.selected.filter(
          selected => selected.value !== payload.id
        )
      };

    default:
      return filters;
  }
};
