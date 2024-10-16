import React, { useEffect, useState } from 'react';
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
    { name: "Arya", role: "Student Team", description: "Supporting details for Student 1", imageUrl: "https://i.pinimg.com/236x/50/f2/bf/50f2bfb30271fd805ee0defc019fbb0e.jpg" },
    { name: "Student 2", role: "Student Team", description: "Supporting details for Student 2", imageUrl: "https://i.pinimg.com/736x/d7/d6/23/d7d6239a87be9b8205331526a8d04c49.jpg" },
    { name: "Student 3", role: "Student Team", description: "Supporting details for Student 3", imageUrl: "https://img.freepik.com/premium-photo/3d-illustration-young-man-with-brown-coat-brown-jacket_1022026-51465.jpg" },
    { name: "Student 4", role: "Student Team", description: "Supporting details for Student 4", imageUrl: "https://i.pinimg.com/736x/89/47/25/894725066789852bd95216d2f011034d.jpg" }
  ];

  const coDevelopers: TeamMember[] = [
    { name: "Co-Developer 1", role: "Co-Developer", description: "Supporting details for Co-Developer 1", imageUrl: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/77106652-5e5b-4063-ab1c-312a04246222/82d8c885-ab64-4dcb-8019-94ba100ce366.png" },
    { name: "Co-Developer 2", role: "Co-Developer", description: "Supporting details for Co-Developer 2", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa9yDM5Oa-NU81jsa3ojJDpxTdc00L2XLh1_gZO_k93tMVDjyTnhj6_6xWU52J7eLz7Js&usqp=CAU" },
    { name: "Co-Developer 3", role: "Co-Developer", description: "Supporting details for Co-Developer 3", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1OQCLqjPLU8uiEdacHQwHY_aaQbvqfQKRQQ&s" },
    { name: "Co-Developer 4", role: "Co-Developer", description: "Supporting details for Co-Developer 4", imageUrl: "https://www.shutterstock.com/image-photo/make-me-cartoon-animated-picture-600nw-2484219811.jpg" },
  ];

  const renderCard = (member: TeamMember) => {
    const isChairman = member.role === "Chairman";

    return (
      <div className={`card ${isChairman ? "chairman-card" : member.role.replace(' ', '-').toLowerCase() + '-card'}`} key={member.name}>
        <img src={member.imageUrl} alt={member.role} />
        <div>{member.role}</div>
        <div style={{ fontSize: '30px', color: '#800080' }}>{member.name}</div>
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

  useEffect(() => {
    const headings = document.querySelectorAll<HTMLHeadingElement>('h1, h2, h3');

    const observerOptions = {
      root: null,
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-up');
        } else {
          entry.target.classList.remove('scroll-up');
        }
      });
    }, observerOptions);

    headings.forEach((heading) => observer.observe(heading));

    // Cleanup observer on component unmount
    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  const [visibleCards, setVisibleCards] = useState<number[]>([0, 1, 2]);
  const [animationClass, setAnimationClass] = useState<string[]>(["co-developer-enter", "co-developer-enter", "co-developer-enter"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass((prev: any[]) => prev.map((_, index) => (index === 0 ? "co-developer-exit" : (index === 1 ? "co-developer-visible" : "co-developer-enter"))));

      setTimeout(() => {
        setVisibleCards((prev: number[]) => {
          const nextIndex = (prev[0] + 1) % coDevelopers.length;
          return [(nextIndex) % coDevelopers.length, (nextIndex + 1) % coDevelopers.length, (nextIndex + 2) % coDevelopers.length];
        });
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [coDevelopers.length]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
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
          {facultyMembers.map(member => renderCard(member))}
        </div>
        <h2>Faculty Coordinators</h2>
        <div className="team-grid faculty">
          {facultyCoordinators.map(member => renderCard(member))}
        </div>
        <h3>Students Coordinators & Developers</h3>
        <div className="team-grid faculty">
          {studentTeam.map(member => renderCard(member))}
        </div>
        <label className="theme-toggle-container">
          <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
          <span className="theme-toggle-slider"></span>
        </label>
      </div>

      <h3>Co-Developers</h3>
      <div className='co-developer-container'>
        {visibleCards.map((index, cardIndex) => (
          <div
            className={`co-developer-card ${animationClass[cardIndex]}`}
            key={coDevelopers[index].name}
          >
            <img src={coDevelopers[index].imageUrl} alt={coDevelopers[index].role} />
            <div>{coDevelopers[index].role}</div>
            <div style={{ fontSize: '30px', color: '#800080' }}>{coDevelopers[index].name}</div>
            <p>{coDevelopers[index].description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default AboutUs;
