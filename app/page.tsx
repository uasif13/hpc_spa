import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div><h1>Terms</h1>
        <div><h2>MPI</h2>
          <p>MPI stands for Message Passing Interface. This is the standard to communicate between different machines.</p></div>
        <div><h2>OpenMPI</h2>
          <p>
            OpenMPI is this open source software that implements this standard on an open source platform.
            It is required when computing between two machines.</p>
        </div>
        <div>
          <h2>OpenMP</h2>
          <p>
            Not sure what this is but added it here to avoid mixup in the future. It's probably open source and another message passing library which allows communication between multiple machines but not sure how it is different than OPENMPI.
          </p>
        </div>

        <div><h2>Distributed</h2>
          <p>
            This word can mean different things with the context. For machines, it refers to building an application that runs on 2+ machines. In BFS Search, distributed means the graph is split up between the different machines.
          </p>
        </div>
        <div><h2>Shared</h2><p>
          Likewise can mean different things. For machines, it refers to building an application on a single machine. In BFS Search, shared means the entire graph data is on each machine.
        </p>
        </div>
        <div><h2>Sequential</h2>
          <p>Forgot the context that this was discussed in but in general refers
            to code that has to be run one after another and is dependent on each other.</p></div>
        <div><h2>Parallel</h2>
          <p>Refers to instructions that can be done independent of each other.
            GPUs are effective in taking advantage of this.</p></div>
        <div><h2>Distributed Library Building Blocks</h2>
          <p>For this upcoming project, will only focus on C++
            distributed library building blocks. Loading 130M nodes and 1.5B edges requires some graph software.
            I used Igraph when implementing BFS but other common libraries include networkx.</p></div>
        <div><h2>Clustering Algorithms</h2>
          <p>This part has already been completed but I'd like to mention it.
            This enormouse citation graph has been split into many clusters or well-connected subgraphs</p></div>
        <div><h2>Arkouda</h2>
          <p>Don't know what this is. Have to look it up.</p></div>
        <div><h2>Arkouda-NJIT</h2>
          <p>Arkouda-NJIT seems to be a library that builds off the features of arkouda for hpc applications</p></div>
        <div><h2>Chapel</h2>
          <p>Chapel is the programming language used in arkouda and a common language for hpc applications</p></div>
        <div><h2>Well-connected</h2>
          <p>Well-connected graphs are graphs where every node has a connection with another node. This may be a strict interpretation as there is no way 130M nodes are all connected to each other with only 1.5B edges. I assume in the context of graphs- well-connected graphs are graphs that are not weakly connected or have only 1 edge from one cluster to another.</p></div>
        <div><h2>Sparse</h2>
          <p>Sparse graphs are graphs with few indegrees and outdegrees.</p></div>
        <div><h2>Subgraphs</h2>
          <p>Smaller graphs used to represent a larger graph</p></div>
        <div><h2>Property graphs</h2>
          <p>Graphs with attributes at their nodes and edges.</p></div>
        <div><h2>Citation graphs</h2>
          <p>citation graphs are property graphs with citation attributes. Citation means that another node points to or refers to another node.</p></div>
      </div>
    </div>
  );
}
