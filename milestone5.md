# Milestone 5

### Team College Burnouts

Cecile Pham, Jonathan Wong, Youngmin Kim



## Achieving Relevant Goals

When going on long trips, preparation is very important. While hardcore hikers know what they must do to prepare, it is often a hassle to do so, as there are many different things to keep track of in order to prepare. Our app Naturous would make the process easier. By looking up their desired location, they can get info such as pricing, the weather conditions, and pictures to see whether they would like to visit or not. They would be able to save particular trails that they plan on travelling on, and would be able to see where it is using the map function. Once they are on the trail, they could use the nature finder function to learn more about the wildlife around them. Users will be able to access information easily to help them prepare, and also to learn while on the trip.

## Updated UI

The home screen now features the 'Set as Current Trip' button, which will allow users to keep whatever national park they are going to as the default homescreen, which allows them to access information regarding the specific national park much easier. Also, the search button is now at the top of the screen, which is much more visible to the users. The map page now allows you to search up specific locations, and the search bar is also at the top. 

## How the Data is Visualized

On the homescreen, information on specific national parks the user looks up are displayed in an orderly manner. Each section is titled and separated to make the display of information clear. By using the 'Set as Current Trip' button, users can leave the page or exit the app but will still be able to keep their desired national park as the default home screen. We used the National Park Services and the Firebase API to make this work. The maps page loads up geolocation first, and the currentTrip variable from firebase is preloaded into the search bar. When the user clicks the search bar they can change the map to the location of the desired national park. The user can also just search on the map directly as well. We used google maps, geolocation, and firebase apis. The nature finder will take in an image the user will upload, send it to the everypixel api, and return a list of keywords that are most relevant to the image. This involves everypixel and firebase apis.

## Thinking Beyond
An ambitious data display for our app would be to have the map autoload to the currentTrip location as well as having a more detailed map wiwth highlighted routes. The trail-list page would also show possible routes based off the information it would receive from the map. 


## Screenshots
