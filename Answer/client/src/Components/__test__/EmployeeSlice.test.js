import reducer,{initVal} from "../../Features/EmployeeSlice";





const TestinitVal = {
    employee: [],
    status: "idle",
    error: null,
    isSucess:false
  };

  
  test("Checking the Initial State", () => {
    expect(reducer(undefined, { type: undefined })).toEqual(testInit);
  });
  