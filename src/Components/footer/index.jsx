
import img1 from "../../assets/footer.png";
import "./style.css";

function Footer() {
    return (
        <>
            <div className="sssss">
                <div className=" bigboss container">
                <div className="divone">
                    <h3>📍 UP BUSINESS</h3> <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate a, ultricies sit nunc purus vel cras pellentesque.</p> <br />
                    <img src={img1} alt="Footer Image" />
                </div>
                <div className="divtoo">
                    <h3>About us</h3>
                    <p>Home</p>
                    <p>How we work</p>
                    <p>Our team</p>
                    <p>Pricing</p>
                    <p>Legal</p>
                </div>
                <div className="divthree">
                    <h3>Location</h3>
                    <p>3891 Ranchview Dr. Richardson, California 62639</p>
                    <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                </div>
                <div className="divfour">
                    <h3>Contact us</h3>
                    <p>trungkienspktnd@gamail.com</p>
                    <p>207.555.0119</p>
                </div>
            </div>
            <p className="oxir"> © 2021 Up Business by AbellVo | All Rights Reserved </p>
            </div>
        </>
    );
}

export default Footer;