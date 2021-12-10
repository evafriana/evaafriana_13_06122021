import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import Footer from "../components/Footer";

import iconChat from "../assets/img/icon-chat.png";
import iconMoney from "../assets/img/icon-money.png";
import iconSecurity from "../assets/img/icon-security.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <HomeSection
            icon={iconChat}
            itemTitle={"You are our #1 priority"}
            description={
              "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            }
          />
          <HomeSection
            icon={iconMoney}
            itemTitle={"More savings means higher rates"}
            description={
              "The more you save with us, the higher your interest rate will be!"
            }
          />
          <HomeSection
            icon={iconSecurity}
            itemTitle={"Security you can trust"}
            description={
              "We use top of the line encryption to make sure your data and money is always safe."
            }
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
