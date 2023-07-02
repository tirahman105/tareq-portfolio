import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";


const Skills = [
    {
      imageSrc: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
      title: 'HTML',
    },
    {
      imageSrc: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
      title: 'CSS',
    },
    {
      imageSrc: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      title: 'Javascript',
    },
    {
      imageSrc: 'https://cdn-icons-png.flaticon.com/512/5968/5968672.png',
      title: 'Bootstrap',
    },
    {
      imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png',
      title: 'Tailwind CSS',
    },
    {
      imageSrc: 'https://cdn-icons-png.flaticon.com/512/919/919851.png',
      title: 'React',
    },
    {
      imageSrc: 'https://cdn-icons-png.flaticon.com/512/919/919825.png',
      title: 'Node JS',
    },

    {
      imageSrc: 'https://cdn.iconscout.com/icon/free/png-256/free-mongodb-3629020-3030245.png',
      title: 'MongoDB',
    },
    {
      imageSrc: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
      title: 'GitHub',
    },
    {
      imageSrc: 'https://cdn-icons-png.flaticon.com/512/5968/5968472.png',
      title: 'Adobe Illustrator',
    },
    {
      imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png',
      title: 'Adobe PhotoShop',
    },
  ];

const MySkills = () => {
  return (
    <div id="my-skills" className="px-8 md:px-0 lg:px-0 my-32">
      <SectionTitle heading={"My Skills"}></SectionTitle>

      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4">
        {
            Skills.map((skill, index)=> (
                <div key={index} className="border p-3     flex justify-center items-center rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all transform duration-300">
                <div>
                <img className="w-1/4 mx-auto"
                  src={skill.imageSrc}
                  alt=""
                />
                <h1 className="text-md md:text-xl lg:text-xl font-bold text-center my-2">{skill.title}</h1>
                </div>
              </div>
            ))
        }

      </div>
    </div>
  );
};

export default MySkills;
