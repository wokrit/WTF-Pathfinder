

const renderTrackMessage = (track) => {
    switch (track) {
        case 'Software_Development':
          return '  Based on your responses, it seems you possess a blend of analytical thinking and a knack for innovative problem-solving. Software development thrives on these qualities, especially in roles like software engineering or development. Your openness to unconventional ideas suggests you might enjoy exploring cutting-edge technologies and frameworks to tackle complex challenges. Your aptitude for creative problem-solving aligns well with roles where you will be architecting elegant solutions, debugging intricate issues, and optimizing code efficiency.';
        case 'Mobile_Development':
          return 'Your skills are well-suited for mobile development. Explore opportunities in this area.';
        case 'Data_Analysis':
            return 'Based on your responses, you have a strong analytical mindset coupled with creative problem-solving skills. Your openness to unconventional ideas and knack for innovation align perfectly with the dynamic nature of data analysis. Your ability to communicate complex ideas clearly will be invaluable in conveying insights to stakeholders. In data analysis, hands-on experimentation is key, and your comfort with this approach will serve you well. Overall, your blend of analytical prowess and creativity makes you well-suited for a career in data analysis, where you can tackle complex problems and drive informed decision-making.';
        case 'Cyber_Security':
            return 'Based on your responses, you exhibit a keen eye for details, a high level of ethical responsibility, resilience, curiosity, research orientation and technical aptitude for solving complex problems. Cybersecurity professionals need tenacity, curious resilience, a constantly learning mindset, and the  technical foundation and research-inclined ability to proactively look for vulnerabilities in systems and assets in order to prevent incidences  and events. Your response indicate a willingness to collaborate, communicate effectively, think outside the box and view challenges from the threat actors perspective. Additionally, Cybersecurity often requires ethical thinking and integrity which is the basis for gaining access and performing any form of securing digital assets and systems.';
        case 'Product_Design':
            return 'Based on your responses, you exhibit strong creative problem-solving skills, openness to unconventional ideas, and an aptitude for exploring innovative solutions. Product designers need imagination to conceptualize engaging user experiences, design intuitive interfaces, and craft visually appealing products. Your responses indicate comfort with exploring new approaches, considering alternative perspectives, and challenging traditional methods. Additionally, product design often involves building prototypes, which aligns with your interests in hands-on creation.';
        case 'Product_Management':
            return 'Based on your responses, you exhibit strong leadership, problem solving, creativity and innovation skills.Product managers are responsible for the overall execution of a product, either digital or physical. They are user-focused, creative, innovative, open minded and strong communicators which you have exhibited in your response. Further learning can help you sharpen this skills in order to become an excellent product manager.';
        case 'ThreeD_Animation':
            return 'Based on your responses, it seems you possess a keen eye for detail, a knack for storytelling, and a passion for bringing characters to life through animation. Animators require a blend of technical proficiency and artistic flair to animate characters convincingly, create immersive environments, and craft compelling narratives. Your inclination towards creative problem-solving suggests you would excel in overcoming challenges in character design, motion dynamics, and scene composition. Furthermore, your openness to unconventional ideas aligns well with the ever-evolving landscape of 3D animation, where innovation and experimentation are highly valued. Embracing new tools and techniques, exploring diverse visual styles, and pushing the boundaries of traditional animation methods could be exciting avenues for your growth in this field.';
        case 'Blockchain_Development':
            return 'Based on your responses, your analytical thinking and openness to innovation suggest you would excel in blockchain development. This field demands problem-solving skills and a willingness to explore new ideas, which aligns with your strengths. Your creativity could be valuable in devising novel solutions to complex challenges, while your hands-on approach would suit tasks like building decentralized applications or smart contracts. Overall, your combination of skills makes you well-suited for success in this dynamic and evolving field.';
                
        default:
          return 'Based on your results, we recommend exploring the field of ' + formatTrackName(track) + '.';
      }
//   return (
//     <>
//     const renderTrackMessage = (track) => {
  
// };
      
//     </>
//   )
}

export default renderTrackMessage
