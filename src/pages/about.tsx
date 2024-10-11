import React from 'react';
import './about.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

const AboutUs: React.FC = () => {
  const facultyMembers: TeamMember[] = [
    { name: "Chairman", role: "Chairman", description: "Role description for Chairman", imageUrl: "/chairman.jpg" },
    { name: "Principal", role: "Principal", description: "Role description for Principal", imageUrl: "/principal.png" },
    { name: "Dean", role: "Dean", description: "Role description for Dean", imageUrl: "images/dean.jpg" },
    { name: "HOD", role: "HOD", description: "Role description for HOD", imageUrl: "images/hod.jpg" }
  ];

  const facultyCoordinators: TeamMember[] = [
    { name: "Faculty 1", role: "Faculty", description: "Supporting details for Faculty 1", imageUrl: "https://i.pinimg.com/originals/f0/d3/31/f0d331a20a40f5d71543661adc849976.jpg" },
    { name: "Faculty 2", role: "Faculty", description: "Supporting details for Faculty 2", imageUrl: "https://img.freepik.com/premium-photo/cute-anime-boy-wallpaper_776894-111315.jpg" },
    { name: "Faculty 3", role: "Faculty", description: "Supporting details for Faculty 3", imageUrl: "https://img.freepik.com/premium-photo/3d-rendering-cute-cartoon-boy-blue-jacketjpg_994418-2674.jpg" },
    { name: "Faculty 4", role: "Faculty", description: "Supporting details for Faculty 4", imageUrl: "https://i.pinimg.com/736x/e9/77/d4/e977d476c5b106ee9d70b213be36c19d.jpg" },
  ];

  const studentTeam: TeamMember[] = [
    { name: "Student 1", role: "Student Team", description: "Supporting details for Student 1", imageUrl: "https://i.pinimg.com/236x/50/f2/bf/50f2bfb30271fd805ee0defc019fbb0e.jpg" },
    { name: "Student 2", role: "Student Team", description: "Supporting details for Student 2", imageUrl: "https://i.pinimg.com/736x/d7/d6/23/d7d6239a87be9b8205331526a8d04c49.jpg" },
    { name: "Student 3", role: "Student Team", description: "Supporting details for Student 3", imageUrl: "https://img.freepik.com/premium-photo/3d-illustration-young-man-with-brown-coat-brown-jacket_1022026-51465.jpg" },
    { name: "Student 4", role: "Student Team", description: "Supporting details for Student 4", imageUrl: "https://i.pinimg.com/736x/89/47/25/894725066789852bd95216d2f011034d.jpg" }
  ];

  const renderCard = (member: TeamMember) => {
    const isChairman = member.role === "Chairman";

    return (
      <div className={`card ${isChairman ? "chairman-card" : member.role.replace(' ', '-').toLowerCase() + '-card'}`} key={member.name}>
        <img src={member.imageUrl} alt={member.role} />
        <h2>{member.role}</h2>
        <h3>{member.name}</h3>
        <p>{member.description}</p>
        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="background">
        <div className="rhombus"></div>
        <div className="rhombus"></div>
        <div className="rhombus"></div>
        <div className="rhombus"></div>
        <div className="rhombus"></div>
        <div className="rhombus"></div>
      </div>

      <div className="container">
        <h1>About Us</h1>
        <p className="description">
          TLP - Teach Learning Progress is a feedback application designed to improve the teaching and learning experience.
          This project was successfully completed with the support of the team listed below.
        </p>

        <div className="team-grid">
          {/* Render Faculty Members */}
          {facultyMembers.map(member => renderCard(member))}
        </div>
        <h2>Faculty Coordinators</h2>
        <div className="team-grid faculty">
          {/* Render Faculty Coordinators */}
          {facultyCoordinators.map(member => renderCard(member))}
        </div>
        <h3>Students Coordinators & Developers</h3>
        <div className="team-grid faculty">
          {/* Render Student Team */}
          {studentTeam.map(member => renderCard(member))}
        </div>
      </div>
    </>
  );
}

export default AboutUs;
