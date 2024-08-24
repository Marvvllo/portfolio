import ClassItem from "../../components/ClassItem.jsx";

const SchedulePage = () => {
  return (
    <main className="flex flex-col gap-4 pb-8">
      <h1 className="font-display text-2xl">College Schedule</h1>
      <section>
        <h2 className="mb-2 font-display text-xl">Monday</h2>
        <span className="flex flex-col gap-4">
          <ClassItem
            name="Bahasa Inggris"
            location="Online"
            time="9:30 - 11:20"
          />

          <ClassItem name="Pancasila" location="Online" time="11:30 - 13:20" />
        </span>
      </section>
      <section>
        <h2 className="mb-2 font-display text-xl">Tuesday</h2>
        <span className="flex flex-col gap-4">
          <ClassItem
            name="Sistem Digital"
            location="Lab Komp. TI 2"
            time="7:30 - 10:20"
          />
        </span>
      </section>
      <section>
        <h2 className="mb-2 font-display text-xl">Wednesday</h2>
        <span className="flex flex-col gap-4">
          <ClassItem
            name="Organisasi Komputer & OS"
            location="FTK F Jineng Lantai 2 Ruang Kuliah TRPL"
            time="9:30 - 12:20"
          />
          <ClassItem
            name="Pengembangan Perangkat Lunak"
            location="FTK F Jineng Lantai 2 Ruang Kuliah TRPL"
            time="13:30 - 13:20"
          />
        </span>
      </section>
      <section>
        <h2 className="mb-2 font-display text-xl">Thursday</h2>
        <span className="flex flex-col gap-4">
          <ClassItem
            name="Matematika Teknik"
            location="FTK F Jineng Lantai 2 Ruang Kuliah TRPL"
            time="7:30 - 10:20"
          />
          <ClassItem
            name="Algoritma dan Pemrograman"
            location="FTK F Jineng Lantai 2 Ruang Kuliah TRPL"
            time="10:30 - 12:20"
          />
        </span>
      </section>
    </main>
  );
};

export default SchedulePage;
