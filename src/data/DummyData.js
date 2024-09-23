const DUMMY_EVENTS = [
  // 2024 Events
  {
    id: "e1",
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2024-01-15",
    image: "images/e2.jpg", // using e2 image
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Networking for introverts",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: "New Wall Street 5, 98765 New Work",
    date: "2024-01-26",
    image: "images/e2.jpg", // using e2 image
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Valentine's Day Workshop",
    description:
      "Join us for a creative workshop to celebrate love and friendship!",
    location: "Love Lane 15, 54321 Cupid Town",
    date: "2024-02-14",
    image: "images/e3.jpg", // using e3 image
    isFeatured: false,
  },
  {
    id: "e4",
    title: "Spring Coding Bootcamp",
    description:
      "A full-day bootcamp to kickstart your coding journey this spring.",
    location: "Code Lane 30, 12345 Tech City",
    date: "2024-03-10",
    image: "images/e4.jpg", // using e4 image
    isFeatured: true,
  },
  {
    id: "e5",
    title: "April Fools Programming Contest",
    description: "Participate in a fun programming contest with prizes!",
    location: "Joke Blvd 100, 67890 Fun Town",
    date: "2024-04-01",
    image: "images/e5.jpg", // using e5 image
    isFeatured: false,
  },
  {
    id: "e6",
    title: "AI for Beginners",
    description:
      "An introductory event about Artificial Intelligence and its applications.",
    location: "AI Avenue 20, 45678 Silicon Valley",
    date: "2024-05-15",
    image: "images/e6.jpg", // using e6 image
    isFeatured: true,
  },
  {
    id: "e7",
    title: "Summer Networking Event",
    description: "Meet new people and expand your network this summer!",
    location: "Network Road 55, 54321 Summer City",
    date: "2024-06-20",
    image: "images/e2.jpg", // using e2 image
    isFeatured: false,
  },
  {
    id: "e8",
    title: "Data Science Summer Camp",
    description: "Join our summer camp focused on data science skills.",
    location: "Data Blvd 40, 67890 Data City",
    date: "2024-07-10",
    image: "images/e4.jpg", // using e4 image
    isFeatured: true,
  },
  {
    id: "e9",
    title: "Cybersecurity Awareness Month",
    description:
      "Learn about cybersecurity and how to protect yourself online.",
    location: "Security St 25, 12345 Secure Town",
    date: "2024-08-05",
    image: "images/e5.jpg", // using e5 image
    isFeatured: false,
  },
  {
    id: "e10",
    title: "Tech Conference 2024",
    description: "Join industry leaders at this year’s tech conference.",
    location: "Conference Center 100, 98765 Tech City",
    date: "2024-09-15",
    image: "images/e6.jpg", // using e6 image
    isFeatured: true,
  },
  {
    id: "e11",
    title: "Fall Coding Workshop",
    description: "A workshop to enhance your coding skills this fall.",
    location: "Coding St 30, 54321 Fall City",
    date: "2024-10-12",
    image: "images/e2.jpg", // using e2 image
    isFeatured: false,
  },
  {
    id: "e12",
    title: "Thanksgiving Networking Dinner",
    description: "Join us for a networking dinner this Thanksgiving!",
    location: "Feast St 5, 67890 Turkey Town",
    date: "2024-11-24",
    image: "images/e4.jpg", // using e4 image
    isFeatured: true,
  },
  {
    id: "e13",
    title: "New Year Celebration 2025",
    description: "Celebrate the new year with us and set your goals for 2025!",
    location: "Party Ave 100, 54321 New Year Town",
    date: "2024-12-31",
    image: "images/e6.jpg", // using e6 image
    isFeatured: false,
  },

  // 2023 Events
  {
    id: "e14",
    title: "Tech Trends 2023",
    description: "Discover the latest trends in technology and innovation.",
    location: "Innovation Blvd 10, 12345 Tech Town",
    date: "2023-01-12",
    image: "images/e2.jpg", // using e2 image
    isFeatured: false,
  },
  {
    id: "e15",
    title: "Career Development Workshop",
    description: "Join us for a workshop on advancing your career.",
    location: "Career St 22, 98765 Opportunity City",
    date: "2023-01-25",
    image: "images/e2.jpg", // using e2 image
    isFeatured: true,
  },
  {
    id: "e16",
    title: "Valentine’s Day Coding Challenge",
    description:
      "Participate in our fun coding challenge this Valentine’s Day.",
    location: "Love Ave 50, 54321 Heart City",
    date: "2023-02-14",
    image: "images/e3.jpg", // using e3 image
    isFeatured: false,
  },
  {
    id: "e17",
    title: "Spring into Programming",
    description: "Kickstart your programming journey this spring!",
    location: "Spring St 5, 67890 Blossom Town",
    date: "2023-03-10",
    image: "images/e4.jpg", // using e4 image
    isFeatured: true,
  },
  {
    id: "e18",
    title: "April Tech Talk",
    description:
      "Join us for a tech talk on the latest advancements in the industry.",
    location: "Tech Lane 12, 12345 Tech City",
    date: "2023-04-18",
    image: "images/e5.jpg", // using e5 image
    isFeatured: false,
  },
  {
    id: "e19",
    title: "Data Science Bootcamp",
    description: "A comprehensive bootcamp to dive into data science.",
    location: "Data St 30, 45678 Data Valley",
    date: "2023-05-20",
    image: "images/e6.jpg", // using e6 image
    isFeatured: true,
  },
  {
    id: "e20",
    title: "Cybersecurity Basics",
    description:
      "Learn the basics of cybersecurity to protect yourself online.",
    location: "Secure St 25, 67890 Safety Town",
    date: "2023-06-15",
    image: "images/e2.jpg", // using e2 image
    isFeatured: false,
  },
  {
    id: "e21",
    title: "Summer Coding Camp",
    description: "Join our summer camp to enhance your coding skills.",
    location: "Camp Lane 45, 98765 Summer City",
    date: "2023-07-10",
    image: "images/e4.jpg", // using e4 image
    isFeatured: true,
  },
  {
    id: "e22",
    title: "AI and You",
    description: "Explore the relationship between AI and everyday life.",
    location: "AI Blvd 60, 54321 Future City",
    date: "2023-08-22",
    image: "images/e5.jpg", // using e5 image
    isFeatured: false,
  },
  {
    id: "e23",
    title: "Fall Tech Expo",
    description: "Showcase of the latest tech innovations.",
    location: "Expo St 99, 67890 Expo City",
    date: "2023-09-14",
    image: "images/e6.jpg", // using e6 image
    isFeatured: true,
  },
  {
    id: "e24",
    title: "Thanksgiving Coding Jam",
    description: "Join us for a coding jam session this Thanksgiving.",
    location: "Jam Ave 100, 54321 Coding City",
    date: "2023-11-25",
    image: "images/e2.jpg", // using e2 image
    isFeatured: false,
  },
  {
    id: "e25",
    title: "New Year Planning Session",
    description: "Plan your goals for the new year ahead.",
    location: "Planning St 15, 67890 New Year City",
    date: "2023-12-31",
    image: "images/e4.jpg", // using e4 image
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
