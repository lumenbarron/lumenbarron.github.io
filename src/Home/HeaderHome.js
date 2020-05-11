import React from "react";
import "./styles/header.css";
import Typical from "react-typical";
export class HeaderHome extends React.Component {
  render() {
    return (
      <section id="home" className="lucy-header-container">
        <section className="lucy-header-text">
          <h3 className="text-bold">
            FRONT END DEVELOPER & INDUSTRIAL DESIGNER
          </h3>
          <p className="text-bold-p">
            {" "}
            "I design and develop
            <Typical
              steps={[" experiences", 2000, " products", 2000]}
              loop={Infinity}
              wrapper="b"
            />
          </p>
          <p className="text-bold-p">
            {" "}
            for
            <Typical
              steps={[
                " make people lifes better” ",
                2000,
                " grow your bussiness”",
                2000,
              ]}
              loop={Infinity}
              wrapper="b"
            />
          </p>
        </section>
      </section>
    );
  }
}

//       <section id="home" className="lucy-header-container">
//         <section className="lucy-header">
//           <section id="lucyBanner" />
//         </section>
//         <section className="lucy-header-text">
//           <p className="text-bold">FRONT END DEVELOPER & INDUSTRIAL DESIGNER</p>
//           <p> I like
//           <Typical
//         steps={[' design', 2000, ' develop!', 2000]}
//         loop={Infinity}
//         wrapper="b"
//       />
// {/*
//             "I design and develop experiences and products that make people's
//             lifes better” */}
//           </p>
//           <Component1 />
//         </section>
//       </section>
