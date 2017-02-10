Greetings component
- accepts name property
- if name property is not provided or empty renders "Please Enter your Name"
- else renders "Hello {name}"


GroceryList Component
- initial state
    this.state = {
      groceries: [
        {
          name: "Apples"
        }
      ],
      newGroceryName: ""
    };

1. renders list of GroceryItem component
2. Add new product in the list
3. Button to Clear list
4. checkbox to mark a grocery item completed