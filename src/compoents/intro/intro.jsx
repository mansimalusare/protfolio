import "./intro.css"
import me from "../../image/me4.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, my name is</h2>
                    <h1 className="i-name">Mansi Malusare</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">front-end Developer</div>
                            <div className="i-title-item">Back-end Developer</div>
                            <div className="i-title-item">Software Tester</div>
                            <div className="i-title-item">Data Anlyst</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I design the webpages. I also have knowledge about testing and DA Creating  a sylish pages and decro them with animetion.
                    </p>
                </div>
                <svg class="i-scroll" >
							<path class="a1" d="M0 0 L30 32 L60 0"></path>
							<path class="a2" d="M0 20 L30 52 L60 20"></path>
							<path class="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={me} alt="" className="i-img" />
            </div>


        </div>
    );
}

export default Intro