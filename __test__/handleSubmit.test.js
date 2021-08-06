import { handleSubmit } from "../src/client/js/formHandler";

describe("Testing the submit functionality and make API request to get results", () => {
  test("Testing the handleSubmit() function", async () => {
    expect(handleSubmit).toBeDefined();
  });
});
