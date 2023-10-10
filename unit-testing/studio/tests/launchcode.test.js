// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test('should assign value "nonprofit" to key "organization"', function(){
    expect(launchcode.organization).toBe('nonprofit');
  });
  test('should assign value "Jeff" to "executiveDirector"', function(){
    expect(launchcode.executiveDirector).toBe('Jeff');
  });
  test('should assign value "100" to "percentageCoolEmployees"', () => {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });
  test('should check that the array contains the appropriate values and check that the array is the appropriate size', () => {
      expect(launchcode.programsOffered[0]).toBe('Web Development');
      expect(launchcode.programsOffered[1]).toBe('Data Analysis');
      expect(launchcode.programsOffered[2]).toBe('Liftoff');
      expect(launchcode.programsOffered.length).toBe(3);
  });
  test('should return string value from launchOutput method', function() {
      expect(launchcode.launchOutput(2)).toBe('Launch!');
      expect(launchcode.launchOutput(3)).toBe('Code!');
      expect(launchcode.launchOutput(5)).toBe('Rocks!');
      expect(launchcode.launchOutput(6)).toBe('Launchcode!');

});
test('should return "Code Rocks!" passed a number that is divisible by 3 AND 5,', () => {
  expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
} );
test ('should return "Launch Rocks!" When passed a number that is divisible by 2 AND 5 ', () => {
  expect(launchcode.launchOutput(10)).toBe('Launch Rocks!');
});
test('should  return "LaunchCode Rocks!" When passed a number that is divisible by 2, 3, AND 5', () => {
  expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
});
test('should return "Rutabagas! That doesn\'t work" When passed a number that is NOT divisible by 2, 3, or 5,', () => {
  expect(launchcode.launchOutput(1)).toBe("Rutabagas! That doesn't work");
})
});
