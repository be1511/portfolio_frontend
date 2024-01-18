
import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkIcon = () => <></>;

const Timeline = () => {
    return (
        <div className="App">
            <h1 style={{ color: "#e2dbff" }}>Experience & Education </h1>
            <div style={{ color: "#e2dbff" }} className="empty">Present</div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgb(33, 150, 243)", color: "#e2dbff" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                    date="March/2023 - present"
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Digital Avenues. Kolkata, WB, 2023</h4>
                    <p>
                        Full stack developer with ReactJs, NodeJs, NestJs, PostgreSql. Developed admin protal of a task management application.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="March/2022 - Sep/2022"
                    contentStyle={{ background: "rgb(33, 150, 243)", color: "#e2dbff" }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Internship</h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Ericsson. Kolkata, WB, 2022
                    </h4>
                    <p>
                        Perl Developer, Developed automated analysis script for health checks of the telecom nodes.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Apr/2020 - Oct/2022"
                    contentStyle={{ background: "rgb(208, 235, 245)", color: "#014159" }}
                    iconStyle={{ background: "rgb(1, 65, 89)", color: "#014159" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">M.E Software Engineering</h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Jadavpur University
                    </h4>
                    <p>Kolkata, WB, 2022</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="May/2015 - Aug/2019"
                    contentStyle={{ background: "rgb(208, 235, 245)", color: "#014159" }}
                    iconStyle={{ background: "rgb(1, 65, 89)", color: "#014159" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">B.E Information Technology</h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Jadavpur University
                    </h4>
                    <p>Kolkata, WB, 2019</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Timeline;