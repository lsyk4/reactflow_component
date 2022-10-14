import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import "./style.css";

const nodes = [
  {
    id: "1",
    className: "bsuccess",
    data: {
      label: (
        <div className="nodeBody">
          <div className="header">Node 1</div>
          <div className="content">Contenido 1</div>
        </div>
      ),
    },
    position: { x: 0, y: 0 },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "2",
    className: "berror",
    data: {
      label: (
        <div className="nodeBody">
          <div className="header">Node 2</div>
          <div className="content">Contenido 2</div>
        </div>
      ),
    },
    position: { x: 200, y: 0 },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "3",
    className: "bwarning",
    data: {
      label: (
        <div className="nodeBody">
          <div className="header">Node 3</div>
          <div className="content">Contenido 3</div>
        </div>
      ),
    },
    position: { x: 400, y: 0 },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "4",
    data: {
      label: (
        <div className="nodeBody">
          <div className="header">Node 4</div>
          <div className="content">Contenido 4</div>
        </div>
      ),
    },
    position: { x: 600, y: 0 },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "5",
    data: {
      label: (
        <div className="nodeBody">
          <div className="header">Node 5</div>
          <div className="content">Contenido 5</div>
        </div>
      ),
    },
    position: { x: 800, y: 0 },
    targetPosition: "left",
    sourcePosition: "right",
  },
];
const edges = [
  { id: "1-2", source: "1", target: "2", animated: true },
  { id: "2-3", source: "2", target: "3", animated: true },
  { id: "3-4", source: "3", target: "4", animated: true },
  { id: "4-5", source: "4", target: "5", animated: true },
];

export default function RFlow() {
  return (
    <div style={{ width: "100%", height: "95vh" }}>
      <ReactFlow nodes={nodes} edges={edges} fitView />
    </div>
  );
}
