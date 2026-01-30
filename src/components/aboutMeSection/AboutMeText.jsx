const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
        <h2 className="text-6xl text-cyan mb-10">About Me</h2>
        <p className="text-white">
            I'm a full stack web developer with experience in building responsive, 
            high-performance web apps using technologies like React, Node.js,
             Express, and MongoDB. I’m experienced in a wide range of technologies and frameworks, 
            and I’m always eager to learn new tools that improve performance and user 
            experience. I enjoy solving problems, writing clean code, and creating seamless 
            user experiences from front to back. Whether working independently or within a 
            team,I focus on building applications that are fast, secure, and easy to use.
        </p>
        <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">My Projects</button>
    </div>
  )
}

export default AboutMeText;