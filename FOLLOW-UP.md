# Implementation:

### Q) What libraries did you add to the frontend? What are they used for?
#### Frontend
- axios - Promise based http client, used for Getting/Posting requests.
- moment - Parse, manipulate and display dates and times.
- redux react-redux - General application state management, Central Hub to dispatch actions and store global accessed results.
- redux-thunk - Execute asynchronous actions.
- enzyme - Testing utility.
#### Backend
- uuid - Generate unique IDs for itineraries.
- lodash - A utility library for common collection manipulations.

### Q) What is the command to start the server?
- `APIKEY=<key> npm run server`

---

# General:

### Q) How long, in hours, did you spend on the test?
- 20 (non straight) hours
### Q) If you had more time, what further improvements or new features would you add?
- Paginated requests from client to server (request a small result set each time).
- Better testing (UI, Unit, Black box).
- Code documentation.
- Deployment on Docker.

### Q) Which parts are you most proud of? And why?
- Working with "Backpack". Because it's something new, and "new" is always hard to adapt with and get something done with it, not only I've adapted with it, but I made a sample product (this test) with it.
- Implementation of some non clear requirements like:
  - Additional stops for non direct flights.
  - Addtional price offers.

### Q) Which parts did you spend the most time with? What did you find most difficult?
- Working with "Backpack". To understand how to properly use it and follow the exact guidelines to produce a Skyscanner product.
- Data Manipulation in Backend.

### Q) How did you find the test overall? If you have any suggestions on how we can improve the test or our API, we'd love to hear them.
- The test was very good, not much tests can touch the developer's ability to work in Frontend and Backend as well.
  #### Improvement suggestions:
  Increase the test duration and with it:
  - Increase the Backend part.
  - Touch other topics like Testing, Documentation, Deployment. 
