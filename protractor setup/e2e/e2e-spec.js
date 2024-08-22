describe('Angular App', function() {
  // Disable waiting for Angular
  browser.waitForAngularEnabled(false);
    it('should have a title', function() {
      browser.get('http://localhost:4200/');
  
      expect(browser.getTitle()).toEqual('Angular18LoginWithLocalStorage');
    });
  });

  // describe('angularjs homepage todo list', function() {
  //   it('should add a todo', function() {
  //     // browser.get('https://angularjs.org');
  
  //     // element(by.model('todoList.todoText')).sendKeys('write first protractor test');
  //     // element(by.css('[value="add"]')).click();
  
  //     // var todoList = element.all(by.repeater('todo in todoList.todos'));
  //     // expect(todoList.count()).toEqual(3);
  //     // expect(todoList.get(2).getText()).toEqual('write first protractor test');
  
  //     // // You wrote your first test, cross it off the list
  //     // todoList.get(2).element(by.css('input')).click();
  //     // var completedAmount = element.all(by.css('.done-true'));
  //     // expect(completedAmount.count()).toEqual(2);
  //     browser.get('https://angularjs.org');

  //     var todoInput = element(by.model('todoList.todoText'));
  //     var addButton = element(by.css('[value="add"]'));

  //     var EC = protractor.ExpectedConditions;
  //     browser.wait(EC.presenceOf(todoInput), 5000); // Wait up to 5 seconds for the input to appear
  //     browser.wait(EC.presenceOf(addButton), 5000); // Wait up to 5 seconds for the button to appear

  //     todoInput.sendKeys('write first protractor test');
  //     addButton.click();

  //     var todoList = element.all(by.repeater('todo in todoList.todos'));
  //     expect(todoList.count()).toEqual(3);
  //     expect(todoList.get(2).getText()).toEqual('write first protractor test');

  //     // You wrote your first test, cross it off the list
  //     todoList.get(2).element(by.css('input')).click();
  //     var completedAmount = element.all(by.css('.done-true'));
  //     expect(completedAmount.count()).toEqual(2);

  //   });
  // });