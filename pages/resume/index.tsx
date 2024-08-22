import Image from "next/image";
import { PrimaryButton } from "../../components/Buttons";
import { skills } from "../../data/skills";

const Resume = () => {
  return (
    <main className="flex flex-col gap-8 pb-4">
      {/* Work Experience Section */}
      <section className="flex-row border-b-2 border-white py-8 md:flex md:place-items-center md:py-16">
        <div className="w-96">
          <h2 className="font-display text-4xl md:text-5xl">
            Work <br />
            Experience
          </h2>
        </div>

        {/* Resume Item */}
        <div className="">
          <div className="flex flex-col pt-4 pb-8 md:flex-row md:items-center">
            <p className="md:px-8">January 2023 - March 2023</p>
            <span>
              <h3 className="text-xl font-bold">
                Wilayah Telkom Palangka Raya
              </h3>
              <p>
                Interned in Witel Palangka Raya as a Web Designer and Front-End
                Developer in a 3-month period using Figma, Next JS, and Tailwind
                CSS.
              </p>
            </span>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="flex-row gap-16 border-b-2 border-white py-8 md:flex md:py-16">
        <div className="md:w-96 md:self-center">
          <h2 className="font-display text-4xl md:text-5xl">Education</h2>
        </div>

        {/* Education Items */}
        <div className="w-full">
          <div className="">
            <div className="flex flex-col py-4 md:flex-row md:items-center md:gap-16">
              <p>2024 - Now</p>
              <span>
                <h3 className="text-xl font-bold">D4 Software Engineering</h3>
                <p className="font-semibold">
                  @ Ganesha University of Education
                </p>
              </span>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col py-4 md:flex-row md:items-center md:gap-16">
              <p>2021 - 2024</p>
              <span>
                <h3 className="text-xl font-bold">Software Engineering</h3>
                <p className="font-semibold">
                  @ Telkom Vocational High School Banjarbaru
                </p>
              </span>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col py-4 md:flex-row md:items-center md:gap-16">
              <p>2018 - 2021</p>
              <span>
                <h3 className="text-xl font-bold">
                  Saint Paul Catholic Middle School
                </h3>
                <p className="font-semibold">Palangka Raya</p>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="flex-row border-b-2 border-white py-8 md:flex md:py-16">
        <h2 className="w-96 font-display text-4xl md:self-center md:text-5xl">
          Skills & <br />
          Expertise
        </h2>

        {/* Skills Items */}
        <div className="">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className="flex flex-row items-center gap-2 py-4"
            >
              <Image
                className="aspect-square w-12"
                src={skill.image}
                alt={skill.name}
              />
              <h3 className="text-xl md:text-3xl">{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col gap-8 py-16">
        <h2 className="text-center font-display text-4xl md:self-center md:text-7xl">
          Ready to work?
        </h2>
        <PrimaryButton className="self-center text-xl" href="/contact" arrow>
          Contact Me
        </PrimaryButton>
      </section>
    </main>
  );
};

export default Resume;
