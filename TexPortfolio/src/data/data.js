import { FaCloud, FaRobot, FaDatabase, FaLaptopCode, FaProjectDiagram } from "react-icons/fa";
import { SiApachekafka } from "react-icons/si";

export const featuresData = [
  {
    id: 1,
    icon: <FaProjectDiagram />,
    title: "Distributed Systems",
    des: "Building scalable backend infrastructure, concurrency-driven services, and fault-tolerant architectures.",
  },
  {
    id: 2,
    icon: <FaCloud />,
    title: "Cloud Platforms",
    des: "Designing cloud-native applications using AWS, Docker, CI/CD pipelines, and managed services.",
  },
  {
    id: 3,
    icon: <FaRobot />,
    title: "AI Applications",
    des: "Developing intelligent systems with LLMs, tool calling, retrieval pipelines, and workflow automation.",
  },
  {
    id: 4,
    icon: <FaLaptopCode />,
    title: "Backend Engineering",
    des: "Creating secure APIs, authentication systems, data pipelines, and core business services.",
  },
  {
    id: 5,
    icon: <FaDatabase />,
    title: "Data & Analytics",
    des: "Transforming operational data into actionable dashboards, real-time insights, and automated alerts.",
  },
  {
    id: 6,
    icon: <SiApachekafka />,
    title: "Product Engineering",
    des: "Taking ideas from requirements and architecture all the way through deployment and iteration.",
  },
];
