export const initialUpcomingEvents = [
    {
        id: 2,
        title: "Convergent Demo Day",
        date: 'Dec 7th 6:00pm',
        description: 'See what our Build Teams have created over the course of the semester! Prizes will be awarded for Best Overall, Best Presentation, Best Tech, Best Design, and Best Business!',
        location: 'GDC 2.216',
        price: 0,
        host: 'Texas Convergent',
        profileImage: require('../assets/Convergent.png'),
        image: require('../assets/DemoDay.jpeg'),
    },
    {
        id: 3,
        title: "Jeffin's Rager",
        description: "A monster rager hosted by Jeffin",
        location: '123 Main St',
        date: 'Dec 10th 10:00pm',
        price: 0,
        host: 'Jeffin Varghese',
        profileImage: require('../assets/Jeffin.png'),
        image: require('../assets/Party3.jpeg'),
    },
    {
        id: 4,
        title: "Dababy Concert",
        description: 'Dababy is coming to UT!',
        location: 'UT Tower',
        date: 'Dec 10th 8pm',
        price: 15,
        host: 'Jay Hartzell',
        profileImage: require('../assets/JayHartzell.jpg'),
        image: require('../assets/Dababy.jpeg'),
    },
    {
        id: 5,
        title: 'World Cup Watch Party',
        date: 'Dec 9th 1pm',
        description: 'Argentina vs Netherlands',
        location: 'South Lawn',
        price: 0,
        host: 'UT Soccer Club',
        image: require('../assets/WorldCupWatchParty.webp'),
    },
    {
        id: 6,
        title: 'Theta Chi Holiday Party',
        description: 'Celebrate the holidays with Theta Chi',
        location: '706 Dean Keaton St',
        date: 'Dec 9th 10:00pm',
        price: 20,
        host: 'Theta Chi Fraternity',
        profileImage: require('../assets/ThetaChi.jpeg'),
        image: require('../assets/HolidayParty1.jpg'),
    },
    {
        id: 7,
        title: "Matt's Movie Night",
        date: 'Dec 6th 6:30pm',
        description: "Watch 'Home Alone' with Matt and Co.",
        location: 'Jester Movie Theater',
        price: 5,
        host: 'Matthew Tolea',
        profileImage: require('../assets/Matt.png'),
        image: require('../assets/HomeAloneMovieNight.jpeg'),
    },
]

export const finalUpcomingEvents = initialUpcomingEvents.concat({
    id: 1,
    title: 'Yung Jay Concert',
    description: 'Performance by upcoming artist Yung Jay!',
    location: 'UT Tower',
    date: 'Dec 9th 8:30pm',
    price: 100,
    host: 'Jay Hartzell',
    image: require('../assets/YungJayConcert.jpeg')
}).sort(function(first, second) {
    return first['id'] - second['id'];
  })