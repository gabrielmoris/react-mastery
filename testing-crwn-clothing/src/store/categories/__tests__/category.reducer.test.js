import { fetchCategoriesFailed, fetchCategoriesStart, fetchCategoriesSuccess } from "../category.action";
import { CATEGORIES_INITIAL_STATE, categoriesReducer } from "../category.reducer";
describe("Category reducer Test", () => {
  it("fetchCategoriesStart", () => {
    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      // at the moment it is called this is set to True
      isLoading: true,
    };

    expect(categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesStart())).toEqual(expectedState);
  });

  test("fetchCategoriesSucces", () => {
    const mockData = [
      {
        title: "mens",
        imageUrl: "img",
        items: [
          { id: 1, name: "product 1" },
          { id: 2, name: "product 2" },
        ],
      },
      {
        title: "womens",
        imageUrl: "img2",
        items: [
          { id: 3, name: "product 3" },
          { id: 4, name: "product 4" },
        ],
      },
    ];

    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: false,
      categories: mockData,
    };

    expect(categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesSuccess(mockData))).toEqual(expectedState);
  });

  it("fetchCategoriesFailed", () => {
    const mockError = new Error("Error fetching categories");

    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: false,
      error: mockError,
    };

    expect(categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesFailed(mockError))).toEqual(expectedState);
  });
});
