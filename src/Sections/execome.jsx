import React, { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase"; // adjust path accordingly

function ExecomeSection() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    async function fetchMembers() {
      try {
        const membersCol = collection(db, "Execome/E-2025/members"); // your collection name
        const q = query(membersCol);
        const snapshot = await getDocs(q);
        const fetchedMembers = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMembers(fetchedMembers);
      } catch (error) {
        console.error("Error fetching execome members:", error);
      }
    }

    fetchMembers();
  }, []);

  // Show loading or fallback UI while fetching
  if (!members.length) {
    return (
      <section className="py-24 max-w-7xl mx-auto px-6 text-center text-gray-400">
        Loading Execome members...
      </section>
    );
  }

  return (
    <section id="committee" className="py-24 max-w-7xl mx-auto px-6 relative overflow-hidden">
       

      {/* Glassmorphism Container */}
      <div className="relative backdrop-blur-xl bg-gradient-to-br from-gray-900/40 via-black/60 to-gray-900/40 border border-white/10 rounded-3xl p-12 shadow-2xl">
        {/* Subtle Grid Overlay */}

        {/* Header */}
        <div className="relative z-10 text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-white via-red-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
              Execome
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
          </div>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Meet the visionary leaders driving innovation and excellence
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative overflow-hidden mask-gradient">
          <div
            className="flex gap-8 animate-infinite-scroll"
            style={{ animationDuration: `${members.length * 8}s` }}
          >
            {members.map((member, idx) => (
              <div
                key={idx}
                className="group relative flex-shrink-0 w-80"
              >
                <div className="relative w-full max-w-xs h-[370px] overflow-hidden shadow-2xl rounded-s
                  bg-gradient-to-br from-gray-850 to-gray-950 text-white
                  transform transition-transform duration-300 ease-in-out hover:scale-[1.01] hover:shadow-3xl">

           
                  <div className="absolute inset-0 bg-gray-900 opacity-80"></div>

                  {/* Card content area */}
                  <div className="relative z-10 p-7 flex flex-col h-full">
                    {/* Top text section */}
                    <div className="mb-auto mt-2"> {/* Pushes content below it towards the bottom */}
                      <p className="text-gray-400 text-sm font-light mb-1 tracking-wide text-start">{member.position}</p>
                      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-start">{member.name}</h2>
                    </div>

                    {/* Image positioned absolutely at the bottom right to create the overlapping effect */}
                    <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-br from-red-500/50 to-pink-500/20 rounded-full blur-3xl animate-spin-slow"></div>
                    <div className="absolute bottom-[-20px] right-[-20px] z-20"> {/* Adjust these values for precise overlap */}
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/041/642/170/non_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png" // Placeholder image URL
                        alt="Portrait of a person"
                        className="w-60 h-60  "
                      />
                    </div>


                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .mask-gradient {
          mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
          -webkit-mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
        }
      `}</style>
    </section>
  );
}

export default ExecomeSection;