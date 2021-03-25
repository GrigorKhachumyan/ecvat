const initialState = {
  userId: "",
  userType: "guest",
  companyWiewP: {},
  vacancyIdMembersC: [],
  personsC: [],
  personWiewC: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        userId: action.payload.id,
        userType: action.payload.type,
      };
      break;
    case "userInfo":
      return {
        ...state,
        userInfo: action.payload,
      };
      break;
    case "vacanciesP":
      return {
        ...state,
        count1: state.count1 + action.payload,
      };
      break;
    case "companiesP":
      return {
        ...state,
        companiesP: action.payload.companies,
      };
      break;
    case "companyWiewP":
      return {
        ...state,
        count1: state.count1 + action.payload,
      };
      break;
    case "vacancies":
      return {
        ...state,
        count1: state.count1 + action.payload,
      };
      break;
    default:
      return state;
  }
};
