// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// const Preloader = ({ onComplete }) => {
//   const [count, setCount] = useState(0);
//   const containerRef = useRef(null);
//   const textRef = useRef(null);

//   useEffect(() => {
//     const tl = gsap.timeline({
//       onComplete: () => {
//         if (onComplete) onComplete();
//       },
//     });

//     const counterObj = { value: 0 };

//     tl.to(counterObj, {
//       value: 100,
//       duration: 0.5, // Adjust duration for the "loading" feel
//       ease: "power2.inOut",
//       onUpdate: () => {
//         setCount(Math.round(counterObj.value));
//       },
//     });

//     // Optional: Fade out text slightly before sliding up
//     tl.to(textRef.current, {
//       opacity: 0,
//       duration: 0.5,
//       delay: 0.2,
//     });

//     tl.to(containerRef.current, {
//       y: "-100%",
//       duration: 0.5,
//       ease: "power4.inOut",
//     });
//   }, [onComplete]);

//   return (
//     <div
//       ref={containerRef}
//       className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal text-muted-foreground"
//     >
//       <div ref={textRef} className="relative">
//         <h1 className="text-9xl md:text-[12rem] font-bold font-mono tracking-tighter">
//           {count}
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default Preloader;
