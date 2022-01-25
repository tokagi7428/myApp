import "./css/Pofolio.css";
import logo from "../logo.svg";
function Pofolio() {
  return (
    <div id="portfolio">
      <div className="box">
        <h1>My self</h1>
        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/135150268_856678565165692_2252528332421035118_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGtsnFIWFwZ_hKG9oo6JDVDrbQ_RDkxuB6ttD9EOTG4Hjrv54zVN34dDUYx9lddVVLxXGqeMw7TfD7gePf8GbsZ&_nc_ohc=O3Ggry96KakAX8-B8wi&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVITQlMb7R9uIZigIKXvTNblrvhrL3bpxE27rI6B3CjpzA&oe=62157CEF"></img>
        <div className="block">
          <div className="education">
            <h3>My Education</h3>
            <p>School : Suwannaramwittayakom School</p>
            <p>University : Ramkhamhaeng University</p>
            <p>Branch : Com-Sci degree 3</p>
          </div>
          <div>
            <h3>My skills</h3>
            <p>C++ Oop React Java</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pofolio;
