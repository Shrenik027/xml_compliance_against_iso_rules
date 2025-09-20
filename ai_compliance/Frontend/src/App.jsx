import { useState, useEffect } from "react";
// import axios from "axios";
import "./App.css";
import Home from "./pages/Home";

function App(props) {
  return (
    <div className="font-display text-color min-h-dvh w-auto  overflow-x-hidden bg z-0 ">
      <Home />
    </div>
  );
}

export default App;

// function App() {
//   const [file, setFile] = useState(null);
//   const [taskId, setTaskId] = useState(null);
//   const [status, setStatus] = useState("idle");
//   const [progress, setProgress] = useState(0);
//   const [currentRule, setCurrentRule] = useState("");
//   const [message, setMessage] = useState("");
//   const [results, setResults] = useState(null);
//   const [error, setError] = useState("");

//   const API_BASE = "http://localhost:5000/api";

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//     setError("");
//   };

//   const uploadFile = async () => {
//     if (!file) {
//       setError("Please select a file first");
//       return;
//     }

//     setStatus("uploading");
//     setError("");

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await axios.post(`${API_BASE}/upload`, formData);
//       setTaskId(response.data.task_id);
//       setStatus("processing");
//       setProgress(0);
//       setMessage("Starting analysis...");
//     } catch (err) {
//       setError("Upload failed: " + (err.response?.data?.error || err.message));
//       setStatus("idle");
//     }
//   };

//   useEffect(() => {
//     let intervalId = null;

//     if (status === "processing" && taskId) {
//       intervalId = setInterval(async () => {
//         try {
//           const response = await axios.get(`${API_BASE}/task/${taskId}`);
//           const data = response.data;

//           setProgress(data.progress);
//           setCurrentRule(data.current_rule);
//           setMessage(data.message);

//           if (data.status === "completed") {
//             setStatus("completed");
//             setResults(data.result);
//             clearInterval(intervalId);
//           } else if (data.status === "error") {
//             setError(data.error || "Processing error");
//             setStatus("error");
//             clearInterval(intervalId);
//           }
//         } catch (err) {
//           console.error("Status check failed:", err);
//         }
//       }, 1000); // Poll every second for smooth progress updates
//     }

//     return () => {
//       if (intervalId) clearInterval(intervalId);
//     };
//   }, [status, taskId]);

//   const reset = () => {
//     setFile(null);
//     setTaskId(null);
//     setStatus("idle");
//     setProgress(0);
//     setCurrentRule("");
//     setMessage("");
//     setResults(null);
//     setError("");
//   };

//   return (
//     <div className="app">
//       <h1>Firewall Compliance Checker</h1>
//       <p>Upload your Palo Alto XML configuration to check ISO compliance</p>

//       {status === "idle" && (
//         <div className="upload-section">
//           <div className="file-input">
//             <label>Select XML File:</label>
//             <input type="file" accept=".xml" onChange={handleFileChange} />
//           </div>
//           <button onClick={uploadFile} disabled={!file} className="upload-btn">
//             Upload and Analyze
//           </button>
//           {error && <div className="error-message">{error}</div>}
//         </div>
//       )}

//       {status === "uploading" && (
//         <div className="status">Uploading file...</div>
//       )}

//       {status === "processing" && (
//         <div className="processing">
//           <h2>Analyzing Configuration</h2>
//           <div className="progress-container">
//             <div className="progress-bar">
//               <div
//                 className="progress-fill"
//                 style={{ width: `${progress}%` }}
//               ></div>
//             </div>
//             <div className="progress-text">{progress}% complete</div>
//             {currentRule && (
//               <div className="current-rule">Checking: {currentRule}</div>
//             )}
//             <div className="processing-message">{message}</div>
//           </div>
//         </div>
//       )}

//       {status === "completed" && results && (
//         <div className="results">
//           <h2>Compliance Results</h2>

//           <div className="summary">
//             <h3>Summary</h3>
//             <div className="summary-grid">
//               <div className="summary-item">
//                 <span className="label">Time taken:</span>
//                 <span className="value">
//                   {results.summary.time_taken_sec} seconds
//                 </span>
//               </div>
//               <div className="summary-item">
//                 <span className="label">Total rules checked:</span>
//                 <span className="value">{results.summary.total_rules}</span>
//               </div>
//               <div className="summary-item compliant">
//                 <span className="label">Compliant:</span>
//                 <span className="value">{results.summary.compliant_rules}</span>
//               </div>
//               <div className="summary-item non-compliant">
//                 <span className="label">Non-compliant:</span>
//                 <span className="value">
//                   {results.summary.non_compliant_rules}
//                 </span>
//               </div>
//               <div className="summary-item score">
//                 <span className="label">Compliance Score:</span>
//                 <span className="value">
//                   {results.summary.compliance_score}%
//                 </span>
//               </div>
//             </div>
//           </div>

//           <div className="results-tables">
//             <div className="compliant-table">
//               <h3>✅ Compliant Rules ({results.results.compliant.length})</h3>
//               {results.results.compliant.length > 0 ? (
//                 <div className="table-container">
//                   <table>
//                     <thead>
//                       <tr>
//                         <th>Control ID</th>
//                         <th>Control Name</th>
//                         <th>Reasoning</th>
//                         <th>Evidence</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {results.results.compliant.map((rule, index) => (
//                         <tr key={index}>
//                           <td>{rule.control_id}</td>
//                           <td>{rule.control_name}</td>
//                           <td className="reasoning-cell">{rule.reasoning}</td>
//                           <td>
//                             {rule.evidence && rule.evidence.length > 0 ? (
//                               <div className="evidence">
//                                 {rule.evidence.map((evidence, idx) => (
//                                   <div key={idx} className="evidence-item">
//                                     <div>
//                                       <strong>Path:</strong> {evidence.path}
//                                     </div>
//                                     <div>
//                                       <strong>Value:</strong> {evidence.value}
//                                     </div>
//                                   </div>
//                                 ))}
//                               </div>
//                             ) : (
//                               "No evidence"
//                             )}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               ) : (
//                 <p>No compliant rules found.</p>
//               )}
//             </div>

//             <div className="non-compliant-table">
//               <h3>
//                 ❌ Non-Compliant Rules ({results.results.non_compliant.length})
//               </h3>
//               {results.results.non_compliant.length > 0 ? (
//                 <div className="table-container">
//                   <table>
//                     <thead>
//                       <tr>
//                         <th>Control ID</th>
//                         <th>Control Name</th>
//                         <th>Reasoning</th>
//                         <th>Evidence</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {results.results.non_compliant.map((rule, index) => (
//                         <tr key={index}>
//                           <td>{rule.control_id}</td>
//                           <td>{rule.control_name}</td>
//                           <td className="reasoning-cell">{rule.reasoning}</td>
//                           <td>
//                             {rule.evidence && rule.evidence.length > 0 ? (
//                               <div className="evidence">
//                                 {rule.evidence.map((evidence, idx) => (
//                                   <div key={idx} className="evidence-item">
//                                     <div>
//                                       <strong>Path:</strong> {evidence.path}
//                                     </div>
//                                     <div>
//                                       <strong>Value:</strong> {evidence.value}
//                                     </div>
//                                   </div>
//                                 ))}
//                               </div>
//                             ) : (
//                               "No evidence"
//                             )}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               ) : (
//                 <p>No non-compliant rules found.</p>
//               )}
//             </div>
//           </div>

//           <button onClick={reset} className="reset-button">
//             Analyze Another File
//           </button>
//         </div>
//       )}

//       {status === "error" && (
//         <div className="error">
//           <h2>Error</h2>
//           <p>{error}</p>
//           <button onClick={reset}>Try Again</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
