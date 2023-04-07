import React from "react";
import "../css/Team.css";
import ProfileCard from "../components/team/ProfileCard";
import TeamCarousel from "../components/team/TeamCarousel";
import Tab from "../components/team/tabbar/Tab";
import TabContent from "../components/team/tabbar/TabContent";
import Trupti from "../assets/CoreMembers/Trupti.jpg";
import Aryan from "../assets/CoreMembers/Aryan.png";
import Gaurang from "../assets/CoreMembers/Gaurang.jpg";
import Raj from "../assets/CoreMembers/Raj.jpg";
import Girish from "../assets/CoreMembers/Girish.jpg";
import Manisha from "../assets/CoreMembers/Manisha.jpg";
import Amaan from "../assets/CoreMembers/Amaan.jpg";
import Aditi from "../assets/CoreMembers/Aditi.jpg";
import Kritika from "../assets/CoreMembers/Kritika.jpg";

import Kamran from "../assets/ExecutiveMembers/Kamran.jpg";
import Khushi from "../assets/ExecutiveMembers/Khushi.jpg";
import Nimesh from "../assets/ExecutiveMembers/Nimesh.jpg";
import Pavithra from "../assets/ExecutiveMembers/Pavithra.jpg";
import Pratik from "../assets/ExecutiveMembers/Pratik.jpg";
import Parikha from "../assets/ExecutiveMembers/Parikha.jpg";
import Aditya from "../assets/ExecutiveMembers/Aditya.jpg";
import Haseeb from "../assets/ExecutiveMembers/Haseeb.jpg";
import Gauri from "../assets/ExecutiveMembers/Gauri.jpg";
import Krishna from "../assets/ExecutiveMembers/Krishna.jpg";
import Varshita from "../assets/ExecutiveMembers/Varshita.jpg";
import Yash from "../assets/ExecutiveMembers/Yash.jpg";
import Aditya_Negi from "../assets/ExecutiveMembers/Aditya_Negi.jpg";


function Team() {
  return (
    <>
      <TeamCarousel />
      <div className="gbc1"></div>
      <ul className="nav nav-tabs justify-content-center" role="tablist">
        <Tab
          className="nav-link tab-btn active"
          id="year2023-tab"
          targetID="#year2023-tab-pane"
          title="2022 - 2023"
          selected="true"
        />
        <Tab
          className="nav-link tab-btn"
          id="year2024-tab"
          targetID="#year2024-tab-pane"
          title="2023 - 2024"
          selected="false"
        />
      </ul>
      <div className="tab-content">
        <TabContent
          id="year2023-tab-pane"
          tab="year2023-tab"
          className="tab-pane fade show active"
          content={
            <section className="section" style={{ paddingTop: "40px" }}>
              <div className="container">
                <div className="bbc1"></div>
                <div className="row">
                  <div className="text-center">
                    <div className="section-title">
                      <h1>
                        Meet Our{" "}
                        <span style={{ color: "var(--secondary-color)" }}>
                          TEAM of designers, developers and creators
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
                <ul
                  className="nav nav-tabs justify-content-center"
                  role="tablist"
                >
                  <Tab
                    className="nav-link tab-btn active"
                    id="chapterlead-tab"
                    targetID="#chapterlead-tab-pane"
                    title="Co-ordinators"
                    selected="false"
                  />
                  <Tab
                    className="nav-link tab-btn"
                    id="technical-tab"
                    targetID="#technical-tab-pane"
                    title="Technical Team"
                    selected="false"
                  />
                  <Tab
                    className="nav-link tab-btn"
                    id="design-tab"
                    targetID="#design-tab-pane"
                    title="Design Team"
                    selected="false"
                  />
                  <Tab
                    className="nav-link tab-btn"
                    id="event-tab"
                    targetID="#event-tab-pane"
                    title="Organizing Team"
                    selected="false"
                  />
                  <Tab
                    className="nav-link tab-btn"
                    id="marketing-tab"
                    targetID="#marketing-tab-pane"
                    title="Marketing Team"
                    selected="false"
                  />
                  <Tab
                    className="nav-link tab-btn"
                    id="publicrelations-tab"
                    targetID="#publicrelations-tab-pane"
                    title="PR & Outreach Team"
                    selected="false"
                  />
                </ul>
                <div className="tab-content tab-btn">
                  <TabContent
                    id="chapterlead-tab-pane"
                    tab="chapterlead-tab"
                    className="tab-pane fade active show"
                    content={
                      <>
                      <ProfileCard
                          img={Trupti}
                          name="Triputi Patil"
                          role="Faculty Co-ordinator"
                        />
                        <ProfileCard
                          img={Aryan}
                          name="Aryan Mahabhoi"
                          role="Chairperson (Lead)"
                          url="https://www.linkedin.com/in/aryan-mahabhoi/"
                        />
                        <ProfileCard
                          img={Gaurang}
                          name="Gaurang Manchekar"
                          role="Vice-Chairperson"
                          url="https://in.linkedin.com/in/gaurang-manchekar-8926a6201"
                        />
                      </>
                    }
                  />
                  <TabContent
                    id="technical-tab-pane"
                    tab="technical-tab"
                    className="tab-pane fade show"
                    content={
                      <>
                        <ProfileCard
                          img={Raj}
                          name="Raj Mishra"
                          role="Technical Lead"
                          url="https://www.linkedin.com/in/raj-mishra-1a4b3b1b1/"
                        />
                        <ProfileCard
                          img={Kamran}
                          name="Kamran Khan"
                          role="Web Developer"
                          url="https://www.linkedin.com/in/kamran1819g/"
                        />
                        <ProfileCard
                          img={Khushi}
                          name="Khushi Raj"
                          role="Web Developer"
                          url="https://www.linkedin.com/in/khushi-raj-1b1b1b1b1/"
                        />
                        <ProfileCard
                          img={Nimesh}
                          name="Nimesh Chaudhari"
                          role="Web Developer"
                          url="https://www.linkedin.com/in/nimesh-chaudhari-1b1b1b1b1/"
                        />
                        <ProfileCard
                          img={Pavithra}
                          name="Pavithra K.S"
                          role="DSA Mentor"
                          url="https://www.linkedin.com/in/pavithra-k-s-1b1b1b1b1/"
                        />
                        <ProfileCard
                          img={Pratik}
                          name="Pratik Bade"
                          role="DSA Mentor"
                          url="https://www.linkedin.com/in/pratik-bade-1b1b1b1b1/"
                        />
                        <ProfileCard
                          img={Varshita}
                          name="Varshita Nalluri"
                          role="Other Technical "
                          url="https://www.linkedin.com/in/varshita-nalluri-1b1b1b1b1/"
                        />
                        <ProfileCard
                          img={Yash}
                          name="Yash Chavan"
                          role="Other Technical "
                          url="https://www.linkedin.com/in/yash-chavan-1b1b1b1b1/"
                        />
                        <ProfileCard
                          img={Aditya_Negi}
                          name="Aditya Negi"
                          role="Other Technical "
                          url="https://www.linkedin.com/in/aditya-negi-1b1b1b1b1/"
                        />

                      </>
                    }
                  />
                  <TabContent
                    id="design-tab-pane"
                    tab="design-tab"
                    className="tab-pane fade show"
                    content={
                      <>
                        <ProfileCard
                          img={Girish}
                          name="Girish Shedge"
                          role="Design Lead"
                          url="https://www.linkedin.com/in/girish-shedge-9337571b8/"
                        />
                        <ProfileCard
                          img={Parikha}
                          name="Parikha Kathane"
                          role="Graphic Designer"
                          url="https://www.linkedin.com/in/parikha-kathane-1b1b1b1b1/"
                        />
                        <ProfileCard
                          img={Aditya}
                          name="Aditya Guha"
                          role="Video Editor"
                          url="https://www.linkedin.com/in/aditya-guha-1b1b1b1b1/"
                        />
                      </>
                    }
                  />
                  <TabContent
                    id="event-tab-pane"
                    tab="event-tab"
                    className="tab-pane fade show"
                    content={
                      <>
                        <ProfileCard
                          img={Manisha}
                          name="Manisha Singh"
                          role="Event Head"
                          url="https://www.linkedin.com/in/manisha-singh-1b1b1b1b1/"
                        />
                        <ProfileCard
                          img={Haseeb}
                          name="Haseeb Biya"
                          role="Event Manager"
                          url="https://www.linkedin.com/in/haseeb-biya-1b1b1b1b1/"
                        />
                        <ProfileCard
                          img={Gauri}
                          name="Gauri Ghadge"
                          role="Content Writer"
                          url="https://www.linkedin.com/in/gauri-ghadge-1b1b1b1b1/"
                        />
                      </>
                    }
                  />
                  <TabContent
                    id="marketing-tab-pane"
                    tab="marketing-tab"
                    className="tab-pane fade show"
                    content={
                      <>
                        <ProfileCard
                          img={Aditi}
                          name="Aditi Thaku"
                          role="Marketing Head"
                          url="https://www.linkedin.com/in/aditi-thaku-1b1b1b1b1/"
                        />
                        <ProfileCard
                          img={Krishna}
                          name="Krishna Patel"
                          role="Marketing & PR Manager"
                          url="https://www.linkedin.com/in/krishna-patel-1b1b1b1b1/"
                        />
                      </>
                    }
                  />
                  <TabContent
                    id="publicrelations-tab-pane"
                    tab="publicrelations-tab"
                    className="tab-pane fade show"
                    content={
                      <>
                        <ProfileCard
                          img={Amaan}
                          name="Amaan Shaikh"
                          role="PR & Outreach Head"
                          url="https://www.linkedin.com/in/amaan-shaikh-1b1b1b1b1/"
                        />
                        <ProfileCard
                          img={Kritika}
                          name="Kritika Tidke"
                          role="Social Media Head"
                          url="https://www.linkedin.com/in/kritika-tidke-1b1b1b1b1/"
                        />
                      </>
                    }
                  />
                </div>
              </div>
            </section>
          }
        />
        <TabContent
          id="year2024-tab-pane"
          tab="year2024-tab"
          className="tab-pane fade show"
          content={
            <section className="section" style={{ paddingTop: "40px" }}>
              <div className="container">
                <div className="row">
                  <div className="text-center">
                    <div className="section-title">
                      <h1>
                        Next Team{" "}
                        <span style={{ color: "var(--secondary-color)" }}>
                          Comming soon...
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          }
        />
      </div>
    </>
  );
}

export default Team;