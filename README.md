# Development of Covid-19 Data Analysis and Tracker  (V1.0.0)


## Project summary

### MVP
- App is built with React with at least
  - 5 components
  - 4 props
  - 2 useStates
  - 2 react router routes
  - 1 lifting state, which is used to implement CRUD on the client side

- The app calls an API and display the data for the user.
- The app's files are organized following the conventions taught in lectures.
- The app has at least 1 CUD (Create, Update, Delete) functionality using Airtable (but NOT the airtable client)
- The app is deployed online so that the rest of the world can use it.

### Timeframe

- Approx. 1 week

### Languages and tools used

- React & other libraries (reCharts, framer-motion etc.)
- JavaScript
- HTML
- CSS
- Git & GitHub

### Description of App

  It is an application that GET covid-19 data from external API and display it in the application. Users are able to view and sort the data, they are able to click on each Covid Case to navigate to another page where more details can be viewed. Users can then save this particular Case to a CaseTracker. In the CaseTracker page, users can view all saved cases and delete cases. The application will also allow users to do simple data analaysis by viewing graphs and charts.

#### API Reference
  - https://data.gov.sg/api/action/datastore_searchresource_id=d_554627df56037a1296507f35c374f79d

### Summarised review after completion

After completing this application, i felt more accustomed to handle react, even more efficiently. Learning about different libraries have made it easier to implement and design certain aspects of the app. States, Hooks, effects, CRUD and fetching data from database are the main learning takeaways. I will continue developing my knowledge on react as i feel i have only touched the tip of the iceberg.

### Future state of Covid-19 Data Analysis and Tracker

- Implement current, live data API for covid-19 or other outbreaks
- Implement searching function on each header / create search bar
- Provide more Data Analysis with the ability to filter/customise analysis based on user's preferences
- fix bug in list page where tracked case will cause top of header border to disappear