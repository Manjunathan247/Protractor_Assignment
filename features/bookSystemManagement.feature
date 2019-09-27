Feature: Book System Management
    As a user of the Pulp App
    I would like to create/upload series of books to a digital library
    So that I can validate all the books created/uploaded are present in the library

    Scenario: Click on Create on the navigation bar
        Given The Pulp app main menu is open
        When I mouse hover on Create link in navigation bar
        Then It should display Author,Series,Publisher and Book under Create link

    Scenario: Click on Author link under Create
        Given The Author link should display under Create
        When I click on Author link
        Then It should navigate to Create Author page
        And I enter name of the author
        And I click on Create link to create Author
        Then the author should be added to the list

    Scenario: Click on Series link under Create
        Given The Series link should display under Create
        When I click on Series link
        Then It should navigate to Create Series page
        And I enter name of the Series
        And I click on Create link to create Series
        Then the Series should be added to the list

    Scenario: Click on Publisher link under Create
        Given The Publisher link should display under Create
        When I click on Publisher link
        Then It should navigate to Create Publisher page
        And I enter name of the Publisher
        And I click on Create link to create Publisher
        Then the Publisher should be added to the list

    Scenario: Click on Book link under Create
        Given The Book link should display under Create
        When I click on Book link
        Then It should navigate to Create Book page
        And I enter the title of the book
        And I select the Author from drop down
        And I select the Publisher from drop down
        And I select the Series from drop down
        And I enter the Series Identifier
        And I enter the Year of publication
        And I click on Create link to create Book
        Then the Book should be added to the list

    Scenario: Click on Series on the navigation bar
        When I click on Series navigation link
        Then It should display with list of created series
        And I click on created series link
        Then It should display selected series details page
        And I click on List of Books in Series
        Then It should display the table of books in the series

    Scenario: Fetching details of Books 
        When I fetch the details of books
        Then I should validate UI data with testdata
