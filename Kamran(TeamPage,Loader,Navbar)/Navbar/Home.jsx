import React from "react";
import LandingSection from "../components/homepage/LandingSection";
import BlogsSection from "../components/homepage/BlogsSection";
import UpcommingEvents from "../components/homepage/UpcommingEvents";

function Home() {
  return (
    <>
    <div data-bs-spy="scroll" data-bs-target="#navbar"  data-bs-smooth-scroll="true" tabindex="0">
      <LandingSection
        chaptername="BVPDETNM"
        description="A community of students where we provide the coding culture for
                the students who are interested in Computer Science and other
                core technical competencies. We will provide you the
                opportunities to enhance your coding skills and take them to the
                next level."
        link="#"
      />
      <UpcommingEvents />
      <BlogsSection />
      </div>
      </>
  );
}

export default Home;
