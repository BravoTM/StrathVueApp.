<template>
    <div id="homepage">
      <v-container>
        <v-carousel>
          <v-carousel-item v-for="image in carouselImages" :key="image.src" :src="image.src" cover></v-carousel-item>
        </v-carousel>
  
        <v-container>
          <v-row align="center" justify="center">
            <div class="d-flex align-center flex-column">
              <v-card width="800" title="Student life" subtitle="Life in Strathmore" :text="studentLifeContent"></v-card>
  
              <v-card width="1000" title="Accommodation" subtitle="Welcome all" :text="accommodationContent"></v-card>
  
              <v-card width="1000" title="Sports" subtitle="Keep a fit healthy body" :text="sportsContent"></v-card>
            </div>
          </v-row>
        </v-container>
      </v-container>
    </div>
  </template>
  
  <script setup>
  const carouselImages = [
    { src: "./Home.jpeg" },
    { src: "./Strathmore.jpeg" },
    { src: "./sports.jpeg" }
  ];
  
  const studentLifeContent = `
    A Vibrant Journey of Learning and Growth Academic Excellence: Strathmore emphasizes rigorous academic programs, experienced faculty, and real-world insights.
Facilities: Modern campus facilities include libraries, labs, and event spaces.
Sports and Recreation: Students engage in sports, fitness, and team activities.
Clubs and Organizations: Vibrant club culture allows students to explore interests and network.
Social Events: Cultural festivals, talent shows, and networking events foster connections.
Community Engagement: Strathmore values service and community involvement.
Global Exposure: International students contribute to a diverse learning environment.
    // Rest of the content...
  `;
  
  const accommodationContent = `
    Student Accommodation at Strathmore University: A Home Away from Home .Privately Owned Facilities:
Strathmore collaborates with privately owned hostels and facilities near the campus.
Students receive information about different hostel options, making their search for accommodation more manageable1.
Choosing a Hostel:
The university recommends a list of hostels for students to consider.
These hostels are conveniently located, ensuring easy access to classes and campus life.
Community Living:
Living in hostels fosters a sense of community. Students from diverse backgrounds come together, sharing experiences and creating lasting friendships.
Late-night study sessions, impromptu discussions, and laughter become part of the hostel experience.

    // Rest of the content...
  `;
  
  const sportsContent = `
    Sports at Strathmore University: Where Passion Meets Excellence.  At Strathmore University, sports are a vibrant and integral part of campus life, fostering teamwork, discipline, and personal growth among students. The university's renowned Strathmore Leos Rugby Club, established in 2003, exemplifies the spirit of sportsmanship and dedication. Under the guidance of Coach John Mbai, both the seven-a-side and fifteen-a-side rugby teams consistently excel, earning recognition both locally and internationally. However, the sporting culture at Strathmore extends beyond rugby, offering a diverse range of activities such as football, basketball, hockey, and athletics. The university's state-of-the-art gymnasium provides a space for fitness enthusiasts to train and promote physical well-being.

Intramural tournaments and inter-university competitions further enrich the sporting landscape at Strathmore, fostering healthy competition, camaraderie, and sportsmanship among participants. Moreover, sports play a crucial role in students' personal development, teaching valuable lessons in discipline, time management, and perseverance. The university recognizes the importance of balancing academics with extracurricular activities, offering sports scholarships and support programs to talented athletes.

Overall, sports at Strathmore University transcend mere competition, embodying values of teamwork, resilience, and excellence. Whether on the field or court, the spirit of sportsmanship prevails, creating lasting memories and experiences for students, athletes, and sports enthusiasts alike. As Strathmore continues to uphold its commitment to sporting excellence, it remains a beacon of inspiration within the university community and beyond.





    // Rest of the content...
  `;
  </script>
  
  <style scoped>
  /* Your scoped styles here */
  </style>
  