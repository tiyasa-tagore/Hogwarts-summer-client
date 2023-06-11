import { useEffect, useState } from "react";
import classData from "../../../../public/classes.json"
import SectionTitle from "../../../components/SecTitle";

const PopularClass = () => {
    const [popularClasses, setPopularClasses] = useState([]);

    useEffect(() => {
      const fetchData = () => {
        const sortedClasses = classData.sort((a, b) => b.students - a.students);
        const popularClasses = sortedClasses.slice(0, 6);
        setPopularClasses(popularClasses);
      };
  
      fetchData();
    }, []);
    return (
        <section className="mb-12">
      <SectionTitle heading="Popular Magical Classes Hogwarts offers" />

      <div className="grid gap-4 md:grid-cols-3">
        {popularClasses.map((classItem) => (
          <div className="p-5 border rounded-lg shadow" key={classItem._id}>
            <img className="w-full h-40 object-cover rounded-md mb-4" src={classItem.image} alt="" />
            <h3 className="text-2xl font-bold text-red-700">{classItem.name}</h3>
            <h3 className=" font-semibold text-white-400">Enrolled Student: {classItem.students}</h3>
            <p className="text-grey-500">Available Seats: {classItem.availableSeats}</p>
            <p className="text-grey-500">Course fee: ${classItem.price}</p>
            <p className="text-white-500">Professor: {classItem.instructor}</p>
          </div>
        ))}
      </div>
    </section>
    );
};

export default PopularClass;