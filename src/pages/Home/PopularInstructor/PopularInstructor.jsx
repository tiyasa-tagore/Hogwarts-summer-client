// import SectionTitle from "../../../components/SecTitle";
// import useInstructors from "../../../hooks/useInstructor";
// import SingleInstructor from "../../Instructor/SingleInstructor";


// const PopularInstructor = () => {
//     const [menu] = useInstructors();
//     const popular = menu.filter(item => item.category === 'popular');
    
//     return (
//         <section className="mb-12"> 
//             <SectionTitle
//                 heading="Our Popular Instructors"
//             ></SectionTitle> 
//             {/* <div className="grid md:grid-cols-2 gap-10 border-s-orange-200-orange-400">
//                 {
//                     // eslint-disable-next-line react/jsx-key
//                     popular.map(item => <SingleInstructor>
//                         key={item._id}
//                        item={item} 
//                     </SingleInstructor>)
//                 }
//             </div>
//             */}
//         </section>
//     );
// };

// export default PopularInstructor;