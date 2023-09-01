import ArchiveCard from "./ArchiveCard";

const Archive = () => {
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Noteworthy Projects
        </h2>
      </div>
      <div className="grid gid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Homofy"
          des="The real estate app is a mobile application designed to provide users with tools and information related to buying, selling, renting, or investing in real estate properties. "
          listItem={["HTML", "CSS", "JavaScript"]}
          link="https://homofy.netlify.app"
        />

        <ArchiveCard
          title="Kuotee"
          des="This is a quote generator it's a software application that generates random  quotes and presents them to users. 
          The main function of a quote generator is to provide inspirational, motivational, thought-provoking, or simply interesting quotes to users."
          listItem={["React Js"]}
          link="https://kuotee.netlify.app/"
        />

        <ArchiveCard
          title="gpt clone"
          des="This is an AI Landing Page"
          listItem={["React Js"]}
          link="https://gpt-clone2.vercel.app/"
        />

        <ArchiveCard
          title="exrater"
          des="This is an exchange rate calculator which serves as a valuable tool for quickly and accurately converting between different currencies."
          listItem={["HTML", "CSS", "JavaScript"]}
          link="https://exrater.netlify.app"
        />

        <ArchiveCard
          title="Nuwito"
          des="The expense tracker is a tool or application designed to help
          individuals and businesses monitor and manage their financial
          expenditures."
          listItem={["HTML", "CSS", "JavaScript"]}
          link="https://nuwito.netlify.app/"
        />

        <ArchiveCard
          title="Climate web"
          des="The climate website serves as a platform that provides users with information and resources related to climate, weather, environmental conditions."
          listItem={["HTML", "CSS", "JavaScript"]}
          link="https://climate-web.netlify.app"
        />
      </div>
    </div>
  );
};

export default Archive;
