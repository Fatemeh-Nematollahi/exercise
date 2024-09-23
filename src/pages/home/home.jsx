import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "../../Component/Nvbar/Navbar";
import HomeImage from "../../assets/images/pictur.svg";
import CourseItem from "../../Component/Course/Course";


import { useState } from "react";
import Footer from "../../Component/Footer/Footer";
import { courseData } from "../../data";
function Home() {
  const [courses, setCourses] = useState(courseData);
  return (
    <div>
      <MyNavbar />
      <Container>
        <Row className="align-item-center my-5">
          <Col lg={6}>
            <h1>برنامه نویسی با ما</h1>
            <p style={{ textAlign: "justify" }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </Col>
          <Col lg={6} className="py-4">
            <img src={HomeImage} className="img-fluid" />
          </Col>
        </Row>
        <Row className="my-5">
          <h2 className="py-4">دوره های آموزشی</h2>
          {courses.map((course) => (
            <Col key={course.id} className="py-3" md={6} lg={4} xl={3}>
              <CourseItem {...course} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default Home;
