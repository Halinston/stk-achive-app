import React, { useEffect } from 'react';

function RevealElements() {
  useEffect(() => {
    function reveal() {
      const reveals = document.querySelectorAll(".reveal");
      const windowHeight = window.innerHeight;
      const elementVisible = 150;

      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      });
    }

    window.addEventListener("scroll", reveal);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []); // Empty dependency array to run the effect once

  return (
    <div>
      {/* Your React component's content */}
      <nav className="navbar">
        {/* Navbar content */}
      </nav>
      <section className="section-a">
        {/* Section A content */}
      </section>
      <section className="section-b">
        {/* Section B content */}
      </section>
      <section className="section-c">
        {/* Section C content */}
      </section>
      <section className="section-d">
        {/* Section D content */}
      </section>
    </div>
  );
}

export default RevealElements;
